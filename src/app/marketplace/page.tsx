import React from "react";
import prisma from "@/lib/prisma";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { FilterSidebar } from "@/components/marketplace/FilterSidebar";

export const dynamic = 'force-dynamic';

async function getProducts() {
    const products = await prisma.product.findMany({
        include: {
            artisan: true,
        },
    });
    return products;
}

export default async function MarketplacePage() {
    const products = await getProducts();
    return (
        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 lg:px-10 pb-12">
            {/* Hero Section */}
            <div className="py-8">
                <div className="relative overflow-hidden rounded-2xl bg-[#221a10] text-white shadow-xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvBIzdliePF_to7fG0oBtPs_n8JcXCq1eWW1y2S64YFBM8SDD2aIk_UoJv-86_dAoDayE3IfNw6RhfO3rsZXxPPm8bSGhySORona1KFJWFEApU6lvFGlFIbnjc0SO-CqIOtsMQ6qnUacAWhcsYweRbZWDlhS-qSOYKTNT7p9GMvKDSgaLc5AwOLWLCVGCaeQmJjFrwv_jSyREdNL8qXdCMgPcWQ7gUFtJqC-2FV2gzWcJK7BY27AdpmTu6fhjH8c-SzdWAiFG-fCY')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-start justify-center gap-6 p-8 md:p-12 lg:p-16 max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            Direct to Artisan
                        </span>
                        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-white">
                            Preserving Bengal&apos;s Soul, One Artifact at a Time
                        </h1>
                        <p className="font-body text-lg text-gray-200 max-w-lg">
                            A direct-to-artisan marketplace for authentic Dokra metalwork, Kantha textiles, and Terracotta pottery.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="h-12 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-transform active:scale-95">
                                Explore Collection
                            </button>
                            <button className="h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-6 text-base font-bold text-white hover:bg-white/20 transition-colors">
                                Meet the Makers
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-6">
                <FilterSidebar />

                {/* Product Grid Area */}
                <div className="flex-1">
                    {/* Mobile Category Chips */}
                    <div className="lg:hidden flex gap-3 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                        {["All Artifacts", "Dokra Metal", "Kantha Textile", "Terracotta"].map((cat, idx) => (
                            <button
                                key={cat}
                                className={`flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-medium shadow-sm border ${idx === 0
                                    ? "bg-text-main text-white"
                                    : "bg-white text-text-main border-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-display text-2xl font-bold text-text-main dark:text-white">
                            Authentic Treasures
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-text-muted hidden sm:inline dark:text-gray-400">
                                Sort by:
                            </span>
                            <select className="form-select border-none bg-transparent py-0 pl-2 pr-8 text-sm font-bold text-text-main focus:ring-0 cursor-pointer dark:text-white">
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest Arrivals</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={`₹${product.price}`}
                                artisanName={product.artisan.name}
                                artisanImage={product.artisan.imageUrl}
                                productImage={product.imageUrl}
                                location={product.artisan.location}
                                impactScore={90} // Placeholder or DB field
                                impactLabel={"Direct Support"} // Placeholder
                            />
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button className="group flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-bold text-text-main shadow-sm hover:border-primary hover:text-primary transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:border-primary">
                            <span>View All Artifacts</span>
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Cultural Quote / Break Section */}
            <div className="my-16 flex flex-col items-center justify-center text-center">
                <span className="mb-4 text-5xl text-primary opacity-20 font-serif">“</span>
                <p className="font-display text-2xl md:text-3xl font-medium leading-relaxed max-w-3xl text-text-main dark:text-white italic">
                    Art is not a mirror held up to reality, but a hammer with which to shape it. We shape the
                    future by honoring our past.
                </p>
                <div className="mt-6 flex items-center gap-2">
                    <div className="h-[1px] w-12 bg-primary"></div>
                    <p className="text-sm font-bold uppercase tracking-widest text-text-muted">
                        Rabindranath Tagore
                    </p>
                    <div className="h-[1px] w-12 bg-primary"></div>
                </div>
            </div>
        </div>
    );
}
