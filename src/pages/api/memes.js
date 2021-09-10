import { getMemesHandler } from '../../handlers/memes';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getMemesHandler(req, res);
    // case 'POST':
    //     return await createMemeHandler(req, res);
    default:
      console.log("We don't recognize that request...");
  }
}
