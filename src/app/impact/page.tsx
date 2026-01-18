import React from "react";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function getStats() {
    const stats = await prisma.villageStat.findMany();
    // Aggregation
    const totalLives = stats.reduce((acc, curr) => acc + curr.livesImpacted, 0);
    const totalProjects = stats.reduce((acc, curr) => acc + curr.projectsFunded, 0);
    const totalFunds = stats.reduce((acc, curr) => acc + curr.fundsDistributed, 0);
    const uniqueVillages = stats.length;

    return { totalLives, totalProjects, totalFunds, uniqueVillages };
}

const PROJECTS = [
    { title: "Bankura Weaving Workshop", status: "Construction Phase 2", progress: 85, raised: "₹8.5L", goal: "₹10L" },
    { title: "Solar Looms for Pingla", status: "Equipment Procurement", progress: 42, raised: "₹2.1L", goal: "₹5L" },
    { title: "Terracotta Kiln Restoration", status: "Bishnupur Cluster", progress: 60, raised: "₹3.0L", goal: "₹5L" },
];

const MILESTONES = [
    { date: "Oct 12, 2023", text: "50 new families in Bankura joined the weaving cooperative." },
    { date: "Oct 08, 2023", text: "Export order of 500 Kantha stoles shipped to France." },
    { date: "Sep 28, 2023", text: "Community workshop inaugurated in Bishnupur." },
];

export default async function ImpactDashboardPage() {
    const { totalLives, totalProjects, totalFunds, uniqueVillages } = await getStats();

    const KPIS = [
        { label: "Lives Impacted", value: totalLives.toLocaleString(), sub: "+12% from last month", icon: "diversity_1" },
        { label: "Villages Supported", value: `${uniqueVillages} Villages`, sub: "Across West Bengal", icon: "palette" },
        { label: "Projects Funded", value: totalProjects.toString(), sub: "Active renovations & builds", icon: "handyman" },
        { label: "Funds Distributed", value: `₹${(totalFunds / 100000).toFixed(1)} L`, sub: "Directly to village accounts", icon: "payments" },
    ];
    return (
        <div className="layout-container flex h-full grow flex-col px-4 md:px-10 py-6 lg:px-20 xl:px-40">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 mb-2">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-text-main dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                        Village Impact Dashboard
                    </p>
                    <p className="text-text-muted dark:text-[#b9ad9d] text-base font-normal leading-normal">
                        Preserving Bengal&apos;s Soul through sustainable commerce and donation.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-text-muted dark:text-[#b9ad9d]">Last updated: Oct 24, 2023</span>
                    <button className="p-2 rounded-full bg-surface-light dark:bg-card-dark border border-[#e6e2db] dark:border-[#393228] text-primary hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined">refresh</span>
                    </button>
                </div>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-6">
                {KPIS.map((kpi, i) => (
                    <div key={i} className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-card-dark border border-[#e6e2db] dark:border-[#393228] shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                <span className="material-symbols-outlined">{kpi.icon}</span>
                            </div>
                            <p className="text-text-main dark:text-white text-base font-medium leading-normal">{kpi.label}</p>
                        </div>
                        <p className="text-primary tracking-light text-3xl font-bold leading-tight">{kpi.value}</p>
                        <p className="text-xs text-text-muted dark:text-[#b9ad9d]">{kpi.sub}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-4 pb-4">
                {/* Map Section */}
                <div className="xl:col-span-2 flex flex-col h-full min-h-[500px] rounded-xl overflow-hidden border border-[#e6e2db] dark:border-[#393228] relative group bg-[#1e252b]">
                    <div className="absolute top-0 left-0 w-full h-full z-0">
                        <div
                            className="w-full h-full bg-cover opacity-30 mix-blend-overlay grayscale contrast-125"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBF5ent1jT_ElYMTpXfcLHI5WtJn1LHFYbnh-QrPZMAZWm04HrQmrQy5dlDseYjqusJhgAFVXUz1qSOq8MQbpmqLri5ikJCiX9elyY4R9tIkFwTtMD9_DEOfsRs-aF2WDcC_bcpSpS8xRShRA6V7I4X3KdcRQrkn_zDK7_tUfQOkZVSe5lT_5dn_ud1MqMUBWYp3cVeHEVX__GJxyuL4wU-9mwI0ksI-IW_nFvt5WILyhZ2_FEAS523qCEkoON21QVPhaWVDLH0RSo')" }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                    </div>

                    {/* Pins */}
                    {/* Shantiniketan */}
                    <div className="absolute top-[35%] left-[45%] z-20 group/pin cursor-pointer">
                        <div className="relative flex items-center justify-center">
                            <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-75"></div>
                            <div className="w-4 h-4 bg-primary rounded-full border-2 border-white dark:border-[#181511] shadow-lg z-10"></div>
                        </div>
                    </div>
                    {/* Bishnupur */}
                    <div className="absolute top-[50%] left-[30%] z-20 group/pin cursor-pointer">
                        <div className="relative flex items-center justify-center">
                            <div className="w-4 h-4 bg-primary rounded-full border-2 border-white dark:border-[#181511] shadow-lg z-10"></div>
                        </div>
                    </div>

                    {/* Map Legend */}
                    <div className="absolute bottom-4 right-4 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm p-4 rounded-lg border border-[#e6e2db] dark:border-[#393228] shadow-lg max-w-[200px]">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-[#b9ad9d] mb-3">Activity Heatmap</h5>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                            <span className="text-xs font-medium dark:text-white">High Impact Zone</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                            <span className="text-xs font-medium dark:text-white">Active Projects</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Projects & Milestones */}
                <div className="flex flex-col gap-6">
                    {/* Projects */}
                    <div className="flex flex-col rounded-xl bg-white dark:bg-card-dark border border-[#e6e2db] dark:border-[#393228] shadow-sm p-6 h-auto">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Project Funding</h3>
                            <button className="text-xs font-bold text-primary hover:underline">View All</button>
                        </div>
                        <div className="flex flex-col gap-5">
                            {PROJECTS.map((proj, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-sm font-semibold text-text-main dark:text-white">{proj.title}</h4>
                                            <p className="text-xs text-text-muted dark:text-[#b9ad9d]">{proj.status}</p>
                                        </div>
                                        <span className="text-xs font-bold text-primary">{proj.progress}%</span>
                                    </div>
                                    <div className="w-full bg-[#e6e0db] dark:bg-[#393228] rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-text-muted dark:text-[#b9ad9d]">
                                        <span>{proj.raised} raised</span>
                                        <span>Goal: {proj.goal}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-5 w-full py-2.5 rounded-lg border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-text-main transition-all">
                            Support a Project
                        </button>
                    </div>

                    {/* Milestones */}
                    <div className="flex flex-col rounded-xl bg-white dark:bg-card-dark border border-[#e6e2db] dark:border-[#393228] shadow-sm p-6 flex-1">
                        <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">Recent Milestones</h3>
                        <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2">
                            {MILESTONES.map((mile, i) => (
                                <div key={i} className="flex gap-3 items-start pb-4 border-b border-[#e6e2db] dark:border-[#393228] last:border-0 last:pb-0">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-primary uppercase">{mile.date}</span>
                                        <p className="text-sm font-medium text-text-main dark:text-white leading-tight">{mile.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Banner: Success Story */}
            <div className="px-4 pb-6 pt-2">
                <div className="rounded-xl overflow-hidden relative bg-[#2f2519] min-h-[240px] flex flex-col md:flex-row items-center border border-[#393228]">
                    <div
                        className="w-full md:w-1/3 h-48 md:h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCplzBgpuElR2n_DeVrOkHmZB8NgN_5LnW2x9jMsN7eZ0Vn0vKdciVQ0R2i1HDfyHSkorXc276TiRQE5ssHvtKfAqM3mXUfq5v1GrOoq9tz_0ii3ug3B_GahJB2AZQcuZfTKsC5_hwqjmMnOhkLbEKkqI9QVPKvroccn-5Ii9IXqRz3FAEbOJNAZ5NE7vEdEOyKTsQ6ctt59nuPYtqiEVA_kIQMhz0l_8EIMR7NMZoMRn5gumQHRejdl7WpkwkIx_mPq6cBEWdlaJI')" }}
                    >
                    </div>
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-primary text-[#181511] text-xs font-bold px-2 py-1 rounded">Featured Story</span>
                            <span className="text-xs text-[#b9ad9d]">Village: Chandipur</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Preserving the Art of Docra</h3>
                        <p className="text-[#b9ad9d] mb-4 text-sm md:text-base max-w-2xl">
                            Through our funded training programs, the ancient metal casting technique of Docra has found a new generation of apprentices. Sales from this village have increased by 200% this quarter, ensuring sustainable livelihoods.
                        </p>
                        <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                            Read full story <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
