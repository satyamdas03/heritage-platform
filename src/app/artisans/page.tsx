import Link from "next/link";
import React from "react";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function getArtisans() {
    const artisans = await prisma.artisan.findMany({
        orderBy: {
            name: 'asc',
        },
    });
    return artisans;
}

export default async function ArtisanListPage() {
    const artisans = await getArtisans();

    return (
        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 lg:px-10 py-12">
            <h1 className="font-display text-4xl font-bold mb-8 text-text-main dark:text-white">
                Meet the Makers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artisans.map((artisan) => (
                    <Link
                        key={artisan.id}
                        href={`/artisans/${artisan.id}`}
                        className="group block overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-md border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all"
                    >
                        <div
                            className="aspect-square bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: `url('${artisan.imageUrl}')` }}
                        ></div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                                {artisan.name}
                            </h2>
                            <p className="text-text-muted dark:text-gray-400 mt-1">
                                {artisan.specialty} | {artisan.location}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
