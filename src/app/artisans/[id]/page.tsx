import React from "react";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

async function getArtisan(id: string) {
    const artisan = await prisma.artisan.findUnique({
        where: { id },
        include: {
            products: true,
        },
    });
    return artisan;
}

export default async function ArtisanProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const artisan = await getArtisan(id);

    if (!artisan) {
        notFound();
    }

    // Adapt DB data to UI structure (filling gaps)
    const bioData = {
        intro: artisan.bio,
        quote: "Handmade is heart-made. Every piece tells a story.", // Default quote
        process: `Specializing in ${artisan.specialty} of ${artisan.location}.`,
        legacy: `${artisan.name} is preserving the heritage of Bengal through their craft.`
    };

    const stats = [
        { icon: "verified", label: "Verified Artisan" },
        { icon: "history_edu", label: "Traditional Master" },
        { icon: "workspace_premium", label: "Community Leader" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full">
                <div
                    className="flex min-h-[500px] md:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 md:px-20 lg:px-40 pb-16"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url('${artisan.imageUrl}')`,
                    }}
                >
                    <div className="max-w-[960px] w-full mx-auto flex flex-col items-start gap-4">
                        <span className="inline-block px-3 py-1 rounded bg-primary/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                            Featured Artisan
                        </span>
                        <div className="flex flex-col gap-2 text-left">
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em]">
                                {artisan.name}
                            </h1>
                            <div className="flex items-center gap-2 text-white/90">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <h2 className="text-lg md:text-xl font-medium leading-normal">
                                    {artisan.specialty} | {artisan.location}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <div className="flex-1 w-full px-6 md:px-10 lg:px-40 py-12">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Narrative (8 cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Intro Header */}
                        <div className="border-b border-[#e6e2db] dark:border-[#3a2f24] pb-6">
                            <h2 className="text-text-main dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-4">
                                Meet the Maker
                            </h2>
                            <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                                {stats.map((stat, i) => (
                                    <span key={i} className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">{stat.icon}</span>{" "}
                                        {stat.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Body Text */}
                        <article className="prose prose-lg dark:prose-invert prose-p:font-display prose-p:text-text-main dark:prose-p:text-[#e0dcd5] max-w-none">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                                {bioData.intro}
                            </p>
                            <p className="mt-4">&quot;{bioData.process}&quot;</p>

                            {/* Pull Quote */}
                            <figure className="my-10 border-l-4 border-primary pl-6 py-2 bg-primary/5 dark:bg-primary/10 -ml-6 pr-6 rounded-r-lg">
                                <blockquote className="text-xl md:text-2xl italic leading-relaxed text-[#4a453e] dark:text-[#d1cdc7]">
                                    &quot;{bioData.quote}&quot;
                                </blockquote>
                                <figcaption className="mt-4 text-sm font-bold text-primary flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-primary"></span> {artisan.name}
                                </figcaption>
                            </figure>

                            <p>{bioData.legacy}</p>
                        </article>

                        {/* Media Player - Kept Static for now as DB videoUrl is null in seed but schema supports it */}
                        {artisan.videoUrl ? (
                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">videocam</span>{" "}
                                    Documentary: From Clay to Culture
                                </h3>
                                {/* Video Player UI Placeholder */}
                                <div className="aspect-video bg-black rounded-xl flex items-center justify-center text-white">
                                    Video Player Placeholder
                                </div>
                            </div>
                        ) : null}

                    </div>

                    {/* Right Column: Sidebar (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-[#e6e2db] dark:border-[#3a2f24] overflow-hidden sticky top-24">
                            <div className="p-6 border-b border-[#e6e2db] dark:border-[#3a2f24] bg-primary/5">
                                <h3 className="text-xl font-bold text-text-main dark:text-white">Current Works</h3>
                                <p className="text-sm text-text-muted mt-1">
                                    Directly support {artisan.name} by purchasing his latest creations.
                                </p>
                            </div>
                            <div className="divide-y divide-[#e6e2db] dark:divide-[#3a2f24]">
                                {artisan.products.map((work) => (
                                    <Link
                                        href={`/marketplace`} // In future: /marketplace/product/[id]
                                        key={work.id}
                                        className="p-4 flex gap-4 hover:bg-background-light dark:hover:bg-[#2f261b] transition-colors group"
                                    >
                                        <div
                                            className="size-20 shrink-0 rounded-lg bg-cover bg-center bg-gray-100"
                                            style={{ backgroundImage: `url('${work.imageUrl}')` }}
                                        ></div>
                                        <div className="flex flex-col flex-1 justify-center">
                                            <h4 className="font-bold text-text-main dark:text-white text-base group-hover:text-primary transition-colors">
                                                {work.title}
                                            </h4>
                                            <p className="text-text-muted text-xs mb-2 line-clamp-1">{work.description}</p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="font-bold text-text-main dark:text-white">
                                                    ₹{work.price}
                                                </span>
                                                <button className="text-xs font-bold text-primary hover:underline">
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="p-6 bg-[#f4f3f0] dark:bg-[#221a10]">
                                <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold shadow-md">
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                    Visit Full Shop
                                </button>
                                <p className="text-center text-xs text-text-muted mt-3">
                                    100% of proceeds go directly to the artisan&apos;s family.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
