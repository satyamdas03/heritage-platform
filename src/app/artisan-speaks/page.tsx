import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getVideoStories() {
    return prisma.videoStory.findMany({
        include: { artisan: true },
        orderBy: { createdAt: 'desc' },
    });
}

export default async function ArtisanSpeaksPage() {
    const stories = await getVideoStories();

    return (
        <div className="min-h-screen bg-[#221910] text-white">
            {/* Hero Section */}
            <section className="relative w-full">
                <div className="px-4 py-8 md:px-10 lg:px-40 flex flex-1 justify-center">
                    <div className="flex flex-col w-full max-w-[1200px]">
                        <div
                            className="relative overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[500px] flex items-center justify-center p-6 text-center shadow-2xl"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZEbfpxvrHc-CsW4zluionnmbJ5erFFGusv-XcF2RTFLW12o172j1YDQ6khSQTYOBpxPPd4LX40oJYBNXZEQfFfEJtawInOcZ2dDNdg3G7DXl1HXCzMD6DHbdRq47J5Tk36ke85ycSfXIEfJpagVvXIMl7-Z5ujo7v6jAs6RUrgoHhaCG2ygo2RXFj7FPrfoqSHCmw-4EXYdh07vhbv5KnZE1V2A0gaM6CEQU8EZ1LUqpxPrKp7IvdVjWs5uS5JBix5KnMAlM8AK0")`,
                            }}
                        >
                            <div className="flex flex-col gap-6 max-w-3xl z-10">
                                <h1 className="text-white text-5xl md:text-6xl font-light leading-tight tracking-[-0.033em]">
                                    Voices of the <span className="text-[#ec7f13] font-medium">Loom &amp; Soil</span>
                                </h1>
                                <p className="text-[#e2ded9] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                                    Discover the untold stories of Bengal&apos;s master artisans, preserving centuries of heritage with every weave and mold.
                                </p>
                                <div className="pt-4 flex justify-center">
                                    <button className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-[#ec7f13] hover:bg-[#d67210] text-[#181411] text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#ec7f13]/20">
                                        <span className="material-symbols-outlined">play_circle</span>
                                        <span>Watch Featured Story</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Chips */}
            <section className="px-4 py-8 md:px-10 lg:px-40 flex justify-center">
                <div className="w-full max-w-[1200px] flex flex-col gap-6">
                    <div className="flex gap-3 flex-wrap pb-2 border-b border-[#393028]/50">
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#ec7f13] text-[#181411] px-5 transition-transform active:scale-95">
                            <p className="text-sm font-bold leading-normal">All Stories</p>
                        </button>
                        {['Terracotta', 'Kantha Stitch', 'Jamdani Weave', 'Sholapith', 'Dokra Metal'].map((tag) => (
                            <button key={tag} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#393028] hover:bg-[#4d4238] px-5 transition-colors active:scale-95 group">
                                <p className="text-[#d1c7be] group-hover:text-white text-sm font-medium leading-normal">{tag}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Grid */}
            <section className="px-4 pb-20 md:px-10 lg:px-40 flex flex-1 justify-center">
                <div className="w-full max-w-[1200px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stories.map((story) => (
                            <div key={story.id} className="group flex flex-col gap-3 cursor-pointer">
                                <div
                                    className="relative w-full aspect-video rounded-lg overflow-hidden bg-cover bg-center"
                                    style={{ backgroundImage: `url("${story.thumbnailUrl}")` }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                        <div className="size-12 rounded-full bg-white/90 text-[#ec7f13] flex items-center justify-center shadow-lg">
                                            <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                                        {story.duration}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-medium leading-tight group-hover:text-[#ec7f13] transition-colors">
                                        {story.title}
                                    </h3>
                                    <div className="flex justify-between items-start mt-1">
                                        <p className="text-[#b9ab9d] text-sm">{story.artisan.name} • {story.artisan.specialty}</p>
                                        <button className="text-[#b9ab9d] hover:text-[#ec7f13]">
                                            <span className="material-symbols-outlined text-xl">favorite</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <button className="px-6 py-3 border border-[#393028] text-white hover:bg-[#393028] hover:border-[#4d4238] rounded-lg text-sm font-medium transition-colors">
                            Load More Stories
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
