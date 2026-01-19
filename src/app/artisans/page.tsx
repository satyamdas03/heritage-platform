import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getArtisans() {
    return prisma.artisan.findMany({
        orderBy: { name: 'asc' },
    });
}

export default async function ArtisansPage() {
    const artisans = await getArtisans();

    return (
        <div className="min-h-screen bg-[#fcfbf7] dark:bg-[#221a10] text-[#181511]">
            {/* Top Bar */}
            <div className="bg-black text-white text-xs py-2 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px]">call</span>
                            <span>+91 9903047208</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px]">mail</span>
                            <span>suwarnabharat2022@gmail.com</span>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 uppercase tracking-wider font-medium">
                        <Link className="hover:text-[#ec9213] transition-colors" href="#">About Us</Link>
                        <Link className="hover:text-[#ec9213] transition-colors" href="/sponsor">Support</Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <div className="mb-8 border-b border-[#e6e1db] dark:border-white/10 pb-6">
                    <div className="space-y-2 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black text-[#181511] dark:text-white tracking-tight leading-tight">
                            Suwarna Bharat: <span className="text-[#ec9213]">Artisan Directory</span>
                        </h2>
                        <p className="text-lg text-[#897961] dark:text-gray-400">
                            Explore the living heritage of Bengal. Discover master artisans from the terracotta temples of Bishnupur to the weaving looms of Phulia.
                        </p>
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="text-sm text-[#897961] mr-2">Filter by:</span>
                    {['All', 'Weaving', 'Metalwork', 'Clay', 'Embroidery'].map((filter, idx) => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0
                                    ? 'bg-[#ec9213] text-white'
                                    : 'bg-white dark:bg-white/5 border border-[#e6e1db] dark:border-white/10 text-[#181511] dark:text-gray-300 hover:border-[#ec9213] hover:text-[#ec9213]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Artisan Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {artisans.map((artisan) => (
                        <Link
                            key={artisan.id}
                            href={`/artisans/${artisan.id}`}
                            className="group relative flex flex-col bg-white dark:bg-[#2d2418] rounded-xl overflow-hidden border border-[#e6e1db] dark:border-white/5 shadow-sm hover:shadow-xl hover:border-[#ec9213]/30 transition-all duration-300"
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <div className="absolute top-3 left-3 z-10 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-md flex items-center gap-1 border border-white/10">
                                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                                    {artisan.location}
                                </div>
                                <img
                                    alt={artisan.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={artisan.imageUrl}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="mb-3">
                                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#ec9213]/10 text-[#ec9213] text-xs font-bold uppercase tracking-wider mb-2">
                                        {artisan.specialty.split(' ')[0]}
                                    </span>
                                    <h3 className="text-xl font-bold text-[#181511] dark:text-white group-hover:text-[#ec9213] transition-colors">
                                        {artisan.name}
                                    </h3>
                                    <p className="text-sm font-medium text-[#897961]">{artisan.specialty}</p>
                                </div>
                                <p className="text-sm text-[#181511]/80 dark:text-gray-400 line-clamp-2 mb-4">
                                    {artisan.bio}
                                </p>
                                <div className="mt-auto pt-4 border-t border-[#e6e1db] dark:border-white/10 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <div className="size-6 rounded-full bg-orange-100 border border-white dark:border-[#2d2418]"></div>
                                        <div className="size-6 rounded-full bg-amber-200 border border-white dark:border-[#2d2418]"></div>
                                    </div>
                                    <span className="text-sm font-bold text-[#181511] dark:text-white group-hover:text-[#ec9213] flex items-center gap-1 transition-colors">
                                        View Profile <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-12 flex justify-center">
                    <button className="px-8 py-3 bg-white dark:bg-[#2d2418] border border-[#e6e1db] dark:border-white/10 text-[#181511] dark:text-white font-bold rounded-lg shadow-sm hover:bg-[#ec9213] hover:text-white hover:border-[#ec9213] transition-all duration-300 flex items-center gap-2">
                        Load More Artisans
                        <span className="material-symbols-outlined animate-bounce">expand_more</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
