import { createClient } from '@supabase/supabase-js';
import nextConnect from 'next-connect';
import fs from 'fs';
import { createMemeHandler } from '../../handlers/memes';
import { uid } from 'uid';
import formMiddleware from 'middleware/formMiddleware';

const handler = nextConnect();
handler.use(formMiddleware);

const supabase = createClient(
    process.env.SUPABASE_BUCKET,
    process.env.SUPABASE_ANON_KEY
);

handler.post(async (req, res) => {
    if (!req.files?.meme[0]) {
        return res.statusCode(400).send({ msg: `This ain't right` });
    }
    const memeImg = req.files.meme[0];

    const { path, originalFilename, headers } = memeImg;
    const contentType = headers['content-type'];
    try {
        const savedFileStream = fs.createReadStream(path);
        const fileNameParts = originalFilename.split('.');
        const fileExtension = fileNameParts[fileNameParts.length - 1];
        const fileName = `${uid(16)}.${fileExtension}`;
        const { data: uploadedImage, error } = await supabase.storage
            .from('memes')
            .upload(`public/${fileName}`, savedFileStream, {
                cacheControl: '3600',
                upsert: true,
                contentType,
            });
        if (error) throw error;
        console.log('Image uploaded:', uploadedImage);

        //remove the file from the local filesystem
        fs.unlinkSync(path);

        req.body.imageURL = uploadedImage.Key;
        return await createMemeHandler(req, res);
    } catch (err) {
        console.error(err);
        return res.status(500).send({ msg: 'Failed to do things' });
    }
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
