import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const artisan = await prisma.artisan.findUnique({
            where: { id },
            include: {
                products: true,
                donations: true,
            },
        });

        if (!artisan) {
            return NextResponse.json({ error: 'Artisan not found' }, { status: 404 });
        }

        return NextResponse.json(artisan);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch artisan' }, { status: 500 });
    }
}
