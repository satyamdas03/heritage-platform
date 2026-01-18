import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const artisans = await prisma.artisan.findMany({
            include: {
                products: true,
            },
        });
        return NextResponse.json(artisans);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch artisans' }, { status: 500 });
    }
}
