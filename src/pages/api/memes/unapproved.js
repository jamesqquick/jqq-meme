import {
  approveMemeHandler,
  getUnapprovedMemesHandler,
} from 'handlers/unapprovedMemes';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getUnapprovedMemesHandler(req, res);
    case 'POST':
      return approveMemeHandler(req, res);
    default:
      console.log("We don't recognize that request...");
  }
}
