import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import jwt from 'jsonwebtoken';
import { createSupabaseToken } from 'utils/auth';
import { createUser, getUser } from '../../../utils/db';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const CLAIM_PREFIX = 'http://jqqmemes.com';

const afterCallback = async (req, res, session) => {
  const {
    user: { sub, email, name },
  } = session;
  console.log(session.user);
  // TODO: create callback API methods to handle stuff from stripe
  const twitterHandle = session.user[`${CLAIM_PREFIX}/handle`];
  const existingUser = await getUser(sub);
  if (!existingUser) {
    const stripeCustomerData = {
      name,
      description: name,
      metadata: {
        sub,
      },
    };
    // TODO: what if any of this fails?
    if (email) stripeCustomerData.email = email;
    const newCustomer = await stripe.customers.create(stripeCustomerData);
    console.log(newCustomer);
    await createUser({ id: sub, stripeId: newCustomer.id, twitterHandle });
    session.user.isPremium = false;
    session.user.stripeId = newCustomer.id;
  } else {
    session.user.isPremium = existingUser.isPremium;
    session.user.stripeId = existingUser.stripeId;
  }

  const supabaseToken = createSupabaseToken(sub);
  session.user.supabaseToken = supabaseToken;
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
