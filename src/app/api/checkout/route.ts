import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with a placeholder or env variable
// In a real app, this MUST be a valid key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
    apiVersion: '2024-12-18.acacia' as any, // Using 'as any' to avoid TS errors with specific version matching
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { items, type } = body;
        // items: Array of { id, title, price, quantity, imageUrl }
        // type: 'cart' | 'donation'

        // Mock mode if no valid key provided or if using placeholder
        const stripeKey = process.env.STRIPE_SECRET_KEY;
        const isMockMode = !stripeKey || stripeKey.includes('placeholder') || stripeKey === 'sk_test_mock';

        if (isMockMode) {
            console.warn('Stripe Mock Mode: Simulating success.');
            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return NextResponse.json({ url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/checkout/success?session_id=mock_session_${Date.now()}` });
        }

        let lineItems;

        if (type === 'donation') {
            lineItems = items.map((item: any) => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.title,
                        description: 'Donation to Bengal Heritage Foundation',
                    },
                    unit_amount: item.price * 100, // Amount in paise
                },
                quantity: 1,
            }));
        } else {
            lineItems = items.map((item: any) => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.title,
                        images: item.imageUrl ? [item.imageUrl] : [],
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity || 1,
            }));
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/checkout/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error('Stripe Error:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Internal Server Error',
            details: error
        }, { status: 500 });
    }
}
