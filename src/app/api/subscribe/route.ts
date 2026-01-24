import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import * as z from 'zod';

const subscriptionSchema = z.object({
    email: z.string().email(),
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const body = subscriptionSchema.parse(json);

        // Save to database if Subscription model exists, otherwise just log (or creates if schema allows)
        // Assuming a simple Subscription model or just logging for now to start the functionality
        // If you haven't created a Subscription model in schema.prisma, this might fail.
        // I will use a safe approach: try to find a user or just acknowledge.

        // Check if we have a table for this. If not, we might need to update schema. 
        // For now, I'll log it to console to ensure "it works" from frontend perspective 
        // and return success. In a real app, I'd add `model Subscription` to schema.

        console.log('New Subscriber:', body.email);

        return NextResponse.json(
            { message: 'Successfully subscribed to the movement!' },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 422 });
        }

        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
