import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getTrails() {
    return prisma.trail.findMany();
}

export default async function TrailsPage() {
    const trails = await getTrails();

    return (
        <div className="min-h-screen bg-[#fcfbf7] dark:bg-[#221a10] text-[#181511]">
            {/* Hero Section */}
            <section className="relative w-full bg-[#1a150e] overflow-hidden py-16 md:py-24 px-4 md:px-10">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAXhhrYAVYt5CoLnx0lX2IbWPg6aPQR65cLCq1vzTj47-t-ylUncG3anRQTZJvXstjTSMNUCIMqJygMvprOc_jIsDelXJqwjtucfeNqoMQTyHquA8ZIPzyW6tCbYOxXcgNR2PtMyDK30W3TC1hBf3uXylG0Sog5UdHtlZ6Z1Oq9Yy2BZ-gM2ba0knehjrmrpto-J320c9Gg_7gg_iCZ2AmTVCcWbBXqDxmQEuOEwPLHa-IQ9bGazC-i4Us2PDL-ZwesWD0qG0gRw0')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a150e] via-transparent to-transparent"></div>
                <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                    <span className="text-[#ec9213] uppercase tracking-widest text-xs font-bold mb-3 block">Experiential Journeys</span>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Heritage <span className="text-[#ec9213]">Trails</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                        Immerse yourself in the living traditions of Bengal. Walk with artisans, learn ancient crafts, and carry home stories woven in time.
                    </p>
                </div>
            </section>

            {/* Trails Grid */}
            <section className="py-16 px-4 md:px-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trails.map((trail) => {
                            const tags = JSON.parse(trail.tags || '[]');
                            return (
                                <div
                                    key={trail.id}
                                    className="group flex flex-col bg-white dark:bg-[#2d2418] rounded-xl overflow-hidden border border-[#e6e1db] dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            alt={trail.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            src={trail.imageUrl}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex gap-2 mb-2">
                                                {tags.map((tag: string) => (
                                                    <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-white text-xl font-bold leading-tight">{trail.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-[#897961] text-sm mb-3">
                                            <span className="material-symbols-outlined text-[18px]">schedule</span>
                                            {trail.duration}
                                        </div>
                                        <p className="text-sm text-[#181511]/80 dark:text-gray-400 flex-grow line-clamp-3">
                                            {trail.description}
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-[#e6e1db] dark:border-white/10 flex items-center justify-between">
                                            <span className="text-sm font-medium text-[#897961]">From ₹8,500</span>
                                            <Link
                                                href={`/trails/${trail.id}`}
                                                className="text-sm font-bold text-[#ec9213] flex items-center gap-1 group-hover:underline underline-offset-2"
                                            >
                                                Explore <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-10 bg-[#ec9213]">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Want a Custom Trail?</h2>
                    <p className="text-white/90 text-lg mb-6">
                        We design bespoke heritage experiences for groups, corporates, and solo travelers. Tell us your story, and we&apos;ll craft the journey.
                    </p>
                    <Link
                        href="/sponsor"
                        className="inline-flex items-center justify-center bg-[#181511] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#181511] transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
