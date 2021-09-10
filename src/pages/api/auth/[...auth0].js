import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { createUser, getUser } from '../../../utils/db';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const afterCallback = async (req, res, session) => {
  const {
    user: { sub, email },
  } = session;
  const existingUser = await getUser(sub);
  if (!existingUser) {
    // TODO: create stripe user record
    const customerData = {
      metadata: {
        sub,
      },
    };
    // TODO: what if any of this fails?
    if (email) customerData.email = email;
    const newCustomer = await stripe.customers.create(customerData);
    console.log(newCustomer);
    // TODO: create callback API methods to handle stuff from stripe
    await createUser({ id: sub, stripeId: newCustomer.id });
    session.user.isPremium = false;
    session.user.stripeId = newCustomer.id;
  } else {
    session.user.isPremium = existingUser.isPremium;
    session.user.stripeId = existingUser.stripeId;
  }
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
