import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { approveMeme, deleteMeme, getUnapprovedMemes } from 'utils/db';

export const approveMemeHandler = withApiAuthRequired(async function handler(
  req,
  res
) {
  const { user } = getSession(req, res);
  if (!user.isAdmin) {
    return res.status(401);
  }

  const { id, approved } = req.body;
  try {
    if (approved) {
      await approveMeme(id);
      return res.status(200).json({ msg: 'Meme approved' });
    }
    // TODO: should we delete if not approved?
    await deleteMeme(id);
    return res.status(200).json({ msg: 'Meme Deleted' });
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});

export const getUnapprovedMemesHandler = withApiAuthRequired(
  async function handler(req, res) {
    const { user } = getSession(req, res);
    if (!user.isAdmin) {
      return res.status(401);
    }
    const imgPrefix = process.env.SUPABASE_MEME_BUCKET;

    try {
      const unapprovedMemes = await getUnapprovedMemes();
      const formattedMemes = unapprovedMemes.map((meme) => {
        meme.imageURL = imgPrefix + meme.imageURL;
        return meme;
      });
      return res.status(200).json(formattedMemes);
      // TODO: do we delete if not approved?
    } catch (err) {
      console.error(err);
      return res.status(500);
    }
  }
);
