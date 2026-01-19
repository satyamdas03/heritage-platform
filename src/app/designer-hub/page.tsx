import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getData() {
    const [briefs, materials, artisans] = await Promise.all([
        prisma.designBrief.findMany({ orderBy: { createdAt: 'desc' } }),
        prisma.material.findMany({ orderBy: { createdAt: 'desc' } }),
        prisma.artisan.findMany({ take: 3 }),
    ]);
    return { briefs, materials, artisans };
}

export default async function DesignerHubPage() {
    const { briefs, materials, artisans } = await getData();

    return (
        <div className="min-h-screen bg-[#181611] text-white">
            {/* Hero Section */}
            <section className="w-full rounded-none md:rounded-2xl overflow-hidden relative min-h-[320px] flex flex-col justify-end p-8 md:p-12 shadow-2xl mx-auto max-w-[1440px] md:mt-6 md:mx-10 lg:mx-auto">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq6OMUlzH5aojjNrhb7BARIwuDplSUDXjfBPpug2wMZb-dEicNIpzWabd2Ek14iDXwZC5VmRGOEETp6SqRPkYrWuHElH-MWnzVEOOyLJIr9rT-tO93abs-ElBvjQoSI1jdo1Vbe0jvZrUob-aqD-D2EO0psB4PXmGij04kvi64i5tHChK_3trwhNR-4VHT_6YedZYGTjMOPff8UIuyotJ7CIeFGQmvBXujiswntQjHWf-3VVoWX1567WbWLTeXkQET1XAC5KHG4ak")`,
                        }}
                    ></div>
                </div>
                <div className="relative z-20 flex flex-col md:flex-row items-end md:items-center justify-between gap-6 w-full">
                    <div className="max-w-2xl space-y-3">
                        <div className="flex items-center gap-2 text-[#eebd2b] uppercase tracking-wider text-xs font-bold mb-1">
                            <span className="material-symbols-outlined text-sm">workspace_premium</span>
                            Designer Workspace
                        </div>
                        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.02em]">
                            Welcome to the Hub
                        </h1>
                        <p className="text-[#b9b29d] text-lg font-normal max-w-lg">
                            Collaborate with master artisans to create fusion masterpieces. You have{' '}
                            <span className="text-white font-bold">{briefs.length} active briefs</span>.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 bg-[#eebd2b] text-[#181611] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#d6a820] transition-colors shadow-lg shadow-[#eebd2b]/20 whitespace-nowrap">
                        <span className="material-symbols-outlined text-[20px]">add_circle</span>
                        Post New Brief
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <main className="w-full flex justify-center py-6 md:py-10">
                <div className="w-full max-w-[1440px] px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        {/* Active Briefs */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-white text-2xl font-bold tracking-tight">Active Briefs</h2>
                                <a className="text-[#eebd2b] text-sm font-medium hover:underline flex items-center gap-1" href="#">
                                    View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            {briefs.map((brief) => (
                                <div key={brief.id} className="group flex flex-col md:flex-row items-stretch gap-6 rounded-2xl bg-[#27241c] p-5 hover:bg-[#2f2b22] transition-colors border border-[#393528]">
                                    <div className="flex flex-col justify-between flex-1 py-1">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <span className="bg-[#393528] text-[#b9b29d] text-[10px] uppercase font-bold px-2 py-1 rounded">{brief.category}</span>
                                                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded flex items-center gap-1 ${brief.status === 'Open' ? 'text-[#4ade80] bg-[#4ade80]/10' : 'text-orange-400 bg-orange-400/10'}`}>
                                                    <span className={`size-1.5 rounded-full ${brief.status === 'Open' ? 'bg-[#4ade80]' : 'bg-orange-400'}`}></span> {brief.status}
                                                </span>
                                            </div>
                                            <h3 className="text-white text-xl font-bold leading-tight">{brief.title}</h3>
                                            <p className="text-[#b9b29d] text-sm leading-relaxed line-clamp-2">{brief.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 md:mt-0 pt-4 border-t border-[#393528]/50">
                                            <span className="text-xs text-[#b9b29d]">{brief.proposals} Proposals received</span>
                                            <button className="bg-[#393528] hover:bg-[#4a4536] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Manage</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Material Library */}
                        <div className="flex flex-col gap-5">
                            <h2 className="text-white text-2xl font-bold tracking-tight">Material Library</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {materials.map((material) => (
                                    <div key={material.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url("${material.imageUrl}")` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                        <div className="absolute bottom-0 left-0 p-3 w-full">
                                            <p className="text-white text-sm font-bold truncate">{material.name}</p>
                                            <p className="text-white/60 text-xs">{material.type}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-[#27241c] flex items-center justify-center border border-dashed border-[#393528] hover:border-[#eebd2b] transition-colors">
                                    <div className="flex flex-col items-center gap-2 text-[#b9b29d] group-hover:text-[#eebd2b] transition-colors">
                                        <span className="material-symbols-outlined text-3xl">add</span>
                                        <span className="text-xs font-medium">Add Sample</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Recommended Artisans */}
                        <div className="bg-[#27241c] rounded-2xl p-6 border border-[#393528]">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white text-lg font-bold">Recommended Artisans</h3>
                                <button className="text-[#eebd2b] hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">refresh</span>
                                </button>
                            </div>
                            <div className="space-y-4">
                                {artisans.map((artisan) => (
                                    <div key={artisan.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#393528]/50 transition-colors group cursor-pointer">
                                        <div
                                            className="size-12 rounded-full bg-cover bg-center"
                                            style={{ backgroundImage: `url("${artisan.imageUrl}")` }}
                                        ></div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white text-sm font-bold truncate">{artisan.name}</h4>
                                            <p className="text-[#b9b29d] text-xs truncate">{artisan.specialty}</p>
                                        </div>
                                        <button className="size-8 rounded-full bg-[#eebd2b]/10 text-[#eebd2b] flex items-center justify-center hover:bg-[#eebd2b] hover:text-black transition-all">
                                            <span className="material-symbols-outlined text-[18px]">person_add</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
