import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getArtifacts() {
    return prisma.artifact.findMany();
}

export default async function ArchivePage() {
    const artifacts = await getArtifacts();

    return (
        <div className="min-h-screen bg-[#fcfbf7] dark:bg-[#221a10] text-[#181511]">
            {/* Hero */}
            <section className="relative w-full bg-[#1a150e] overflow-hidden py-16 md:py-24 px-4 md:px-10">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkDnhQwexA6NKA3HFiYaE338IkITmzuPMVt9svUjxf2b9r7FfI5TRjybEtFkG6f-4rNsvSQ4hjJgDx0UaRcjtJfUnKPLV09tlyDl9tfIBDXszFiBA9-A1JXF5h3HYq9ZmNLJIhy1Cm_LWBNAsoGIIClMAtk0fCCmvj4_kiobtlRB-Ye25lM5d3v3GuU2Fc7KyvkqaGrgnYn4-JRijwGRDRdjconk8Ymt3LbFGMdKaVLACJCRcRYhKF12HpFiEHSuiMMzd-sGkxNVs')` }}></div>
                <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                    <span className="text-[#ec9213] uppercase tracking-widest text-xs font-bold mb-3 block">Preserving the Past</span>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Digital Cultural <span className="text-[#ec9213]">Archive</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                        A repository of endangered art forms, historical artifacts, and the stories they carry. Browse our collection of documented heritage.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 px-4 md:px-10 bg-white dark:bg-[#2d2418] border-b border-[#e6e1db] dark:border-white/10">
                <div className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-3">
                    <span className="text-sm text-[#897961] mr-2">Browse by:</span>
                    {['All', 'Terracotta', 'Brass', 'Cloth', 'Wood'].map((filter, idx) => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0
                                    ? 'bg-[#ec9213] text-white'
                                    : 'bg-[#f4f3f0] dark:bg-white/5 border border-[#e6e1db] dark:border-white/10 text-[#181511] dark:text-gray-300 hover:border-[#ec9213] hover:text-[#ec9213]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            {/* Artifacts Grid */}
            <section className="py-16 px-4 md:px-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artifacts.map((artifact) => (
                            <div
                                key={artifact.id}
                                className="group flex flex-col bg-white dark:bg-[#2d2418] rounded-xl overflow-hidden border border-[#e6e1db] dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        alt={artifact.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src={artifact.imageUrl}
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${artifact.endangeredLevel === 'Critical'
                                                ? 'bg-red-500 text-white'
                                                : artifact.endangeredLevel === 'High'
                                                    ? 'bg-orange-500 text-white'
                                                    : 'bg-yellow-500 text-black'
                                            }`}>
                                            {artifact.endangeredLevel} Risk
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-xs text-[#897961] mb-2">
                                        <span className="material-symbols-outlined text-[14px]">palette</span>
                                        {artifact.material}
                                        {artifact.era && (
                                            <>
                                                <span className="mx-1">•</span>
                                                <span className="material-symbols-outlined text-[14px]">history</span>
                                                {artifact.era}
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#181511] dark:text-white group-hover:text-[#ec9213] transition-colors">
                                        {artifact.title}
                                    </h3>
                                    <p className="text-sm text-[#181511]/80 dark:text-gray-400 flex-grow line-clamp-3 mt-2">
                                        {artifact.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-[#e6e1db] dark:border-white/10">
                                        <button className="text-sm font-bold text-[#ec9213] flex items-center gap-1 group-hover:underline underline-offset-2">
                                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
