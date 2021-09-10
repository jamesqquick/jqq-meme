import initStripe from 'stripe';
import { buffer } from 'micro';
import { updateUserToPremium } from '../../../utils/db';

const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

const handler = async (req, res) => {
    const reqBuffer = await buffer(req);
    const signature = req.headers['stripe-signature'];
    const signingSecret = process.env.STRIPE_SIGNING_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            reqBuffer,
            signature,
            signingSecret
        );
    } catch (err) {
        console.log(err);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log('Stripe event', event);
    const { metadata = {} } = event?.data?.object;
    const { userId } = metadata;

    if (!userId) return res.status(400).send(`This ain't right`);

    switch (event.type) {
        case 'charge.succeeded':
            console.log('charge succeeded');
            try {
                const updatedUser = await updateUserToPremium({ id: userId });
                console.log(updatedUser);
            } catch (error) {
                console.error(error);
            }
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.send({ received: true });
};

export default handler;
