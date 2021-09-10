import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { createMeme, getMemes } from '../utils/db';

export const getMemesHandler = async (req, res) => {
  try {
    const memes = await getMemes();
    res.status(200).json(memes);
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
