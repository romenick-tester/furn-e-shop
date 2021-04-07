require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

//http://localhost:8888/.netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
    if (event.body) {

        const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

        const calculateOrderAmount = () => {
            return shipping_fee + total_amount;
        }

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: "gbp"
            });

            return {
                statusCode: 200,
                body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
            }

        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: { message: err.message } })
            }
        }
    }

    return {
        statusCode: 200,
        body: "create payment intent"
    }
}