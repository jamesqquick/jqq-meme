import initStripe from 'stripe';

const { withApiAuthRequired, getSession } = require('@auth0/nextjs-auth0');

const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

module.exports = withApiAuthRequired(async (req, res) => {
  try {
    const { user } = getSession(req, res);
    const priceInCents = 100;

    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Premium James Memes`,
          },
          unit_amount: priceInCents,
        },
        quantity: 1,
      },
    ];

    const stripeSession = await stripe.checkout.sessions.create({
      customer: user.stripeId,
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.AUTH0_BASE_URL}/api/stripe/success`,
      cancel_url: `${process.env.AUTH0_BASE_URL}/api/stripe/cancelled`,
      payment_intent_data: {
        metadata: {
          userId: user.sub,
        },
      },
    });

    res.json({ id: stripeSession.id });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
