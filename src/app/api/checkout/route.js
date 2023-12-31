import { NextResponse } from "next/server"
import Stripe from "stripe";



export const POST = async(req) => {
    try {

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const reqBody = await req.json();

        const { items , email} = await reqBody;

        const extractItems = await items.map((item) => ({
            quantity : item.quantity,
            price_data : {
                currency : "usd",
                unit_amount : item.price * 100,
                product_data : {
                    name : item.title,
                    description : item.description,
                    images : [item.image]
                }
            }
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types : ['card'],
            line_items:extractItems,
            mode: 'payment',
            success_url: `${process.env.NEXTAUTH_URL}/success`,
            cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
            metadata : {
                email
            }
        });



        let result = NextResponse.json({
            message : "Connection is active", 
            success : true,
            id: session.id
        })
        return result;
        
    } catch (error) {
        return NextResponse.json({error: error.message}, { status : 500});
    }
}