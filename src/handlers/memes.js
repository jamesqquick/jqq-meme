import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { createMeme, getMemes } from '../utils/db';

export const getMemesHandler = async (req, res) => {
  const imgPrefix = process.env.SUPABASE_MEME_BUCKET;
  try {
    const memes = await getMemes();

    const formattedMemes = memes.map((meme) => {
      meme.imageURL = imgPrefix + meme.imageURL;
      return meme;
    });
    res.status(200).json(formattedMemes);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
};

export const createMemeHandler = withApiAuthRequired(async (req, res) => {
  const { user } = getSession(req, res);
  const { sub: userId } = user;
  const newMeme = {
    ...req.body,
    userId,
  };
  try {
    const createdMeme = await createMeme(newMeme);
    return res.status(200).json(createdMeme);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});
