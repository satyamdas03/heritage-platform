import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const artifacts = await prisma.artifact.findMany();
        return NextResponse.json(artifacts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch artifacts' }, { status: 500 });
    }
}
