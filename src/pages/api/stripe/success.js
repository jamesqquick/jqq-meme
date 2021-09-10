import { getSession } from '@auth0/nextjs-auth0';

// this could be a dynamic endpoint where the product id is passed as the dynamic parameter
const handler = async (req, res) => {
  const session = getSession(req, res);
  session.user.isPremium = true;
  res.redirect('/generator');
};

export default handler;
