import { createMemeHandler, getMemesHandler } from '../../handlers/memes';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getMemesHandler(req, res);
        // case 'POST':
        //     return await createMemeHandler(req, res);
    }
}
