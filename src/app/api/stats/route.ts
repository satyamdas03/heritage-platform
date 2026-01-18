import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const stats = await prisma.villageStat.findMany();

        // Aggregating for dashboard
        const totalLives = stats.reduce((acc, curr) => acc + curr.livesImpacted, 0);
        const totalProjects = stats.reduce((acc, curr) => acc + curr.projectsFunded, 0);
        const totalFunds = stats.reduce((acc, curr) => acc + curr.fundsDistributed, 0);

        return NextResponse.json({
            totalLives,
            totalProjects,
            totalFunds,
            villageStats: stats
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}
