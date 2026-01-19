import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getData() {
    const [stats, artisans] = await Promise.all([
        prisma.villageStat.findMany(),
        prisma.artisan.count(),
    ]);
    const totalLives = stats.reduce((acc, s) => acc + s.livesImpacted, 0);
    const totalFunds = stats.reduce((acc, s) => acc + s.fundsDistributed, 0);
    const totalProjects = stats.reduce((acc, s) => acc + s.projectsFunded, 0);
    return { stats, totalLives, totalFunds, totalProjects, artisans };
}

export default async function ImpactPage() {
    const { stats, totalLives, totalFunds, totalProjects, artisans } = await getData();

    return (
        <div className="min-h-screen bg-[#fcfbf7] dark:bg-[#221a10] text-[#181511]">
            {/* Hero */}
            <section className="relative w-full bg-[#1a150e] overflow-hidden py-16 md:py-24 px-4 md:px-10">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeLU9QQkEOQnimPwrcPqFoFF5LEc8lVTmjV3SySNON3KHxoYAHaExF4wxBWII5BUwatb4C27UOeMo60MoGMAYfef9eVQFTqESYqqZnS22ozQGnOWoD9iOPeI5sV2go1UoNs7pMqyhJ-bwB5vsOIj0j992p9B8m-R1T7gxMAB0bXZJxYzVXE1iBWqSKEQvQKh6YmvxxyjCMibxafPKvMtug2fvaHkyBmtfJTwNvbJrqFYmXUV47V7sEZ7lrcgEBDvuw0C5m7QEWXQM')` }}></div>
                <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                    <span className="text-[#ec9213] uppercase tracking-widest text-xs font-bold mb-3 block">Our Collective Footprint</span>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
                        Village <span className="text-[#ec9213]">Impact Dashboard</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                        Every purchase, every visit, every story shared creates ripples of change in the villages of Bengal.
                    </p>
                </div>
            </section>

            {/* Stats Overview */}
            <section className="py-12 px-4 md:px-10 bg-white dark:bg-[#2d2418] border-b border-[#e6e1db] dark:border-white/10">
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-4xl md:text-5xl font-black text-[#ec9213]">{totalLives.toLocaleString()}</p>
                        <p className="text-sm text-[#897961] font-medium mt-1">Lives Impacted</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-black text-[#ec9213]">₹{(totalFunds / 100000).toFixed(1)}L</p>
                        <p className="text-sm text-[#897961] font-medium mt-1">Funds Distributed</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-black text-[#ec9213]">{totalProjects}</p>
                        <p className="text-sm text-[#897961] font-medium mt-1">Projects Funded</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-black text-[#ec9213]">{artisans}</p>
                        <p className="text-sm text-[#897961] font-medium mt-1">Artisans Supported</p>
                    </div>
                </div>
            </section>

            {/* Village Breakdown */}
            <section className="py-16 px-4 md:px-10">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 dark:text-white">Impact by <span className="text-[#ec9213]">Village</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.id} className="bg-white dark:bg-[#2d2418] p-6 rounded-xl border border-[#e6e1db] dark:border-white/10 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="size-10 rounded-full bg-[#ec9213]/10 flex items-center justify-center text-[#ec9213]">
                                        <span className="material-symbols-outlined">home_work</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-[#181511] dark:text-white">{stat.villageName}</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#897961]">Lives Impacted</span>
                                        <span className="font-bold dark:text-white">{stat.livesImpacted.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#897961]">Projects Funded</span>
                                        <span className="font-bold dark:text-white">{stat.projectsFunded}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#897961]">Funds Distributed</span>
                                        <span className="font-bold text-[#ec9213]">₹{stat.fundsDistributed.toLocaleString()}</span>
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
