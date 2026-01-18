import React from "react";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function getArtifacts() {
    const artifacts = await prisma.artifact.findMany();
    return artifacts;
}

const TIMELINE_EVENTS = [
    { year: "1757", title: "Pre-Colonial Era", subtitle: "Roots of Folk & Agriculture" },
    { year: "1850", title: "Silk Renaissance", subtitle: "Rise of Baluchari Weaving" },
    { year: "1905", title: "Swadeshi Movement", subtitle: "Weaving as Rebellion", active: true },
    { year: "1920", title: "Golden Age of Baul", subtitle: "Philosophical Peak" },
    { year: "1971", title: "Independence", subtitle: "Modern Cultural Shifts" },
    { year: "2024", title: "Digital Revival", subtitle: "Archiving the Future" },
];

export default async function ArchivePage() {
    const artifacts = await getArtifacts();

    // Helper to map DB status to UI color
    const getStatusColor = (level: string) => {
        switch (level) {
            case 'Critical': return 'red';
            case 'High': return 'amber';
            case 'Vulnerable': return 'amber';
            case 'Stable': return 'green';
            case 'Reviving': return 'green';
            default: return 'gray';
        }
    };
    return (
        <div className="flex min-h-screen flex-col bg-[#1a1612] text-white font-display">
            {/* Hero Section */}
            <div
                className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(26, 22, 18, 0.85), rgba(26, 22, 18, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFfrqv3Jz0Sg9Fvh8vjrz-mNecABVH162AE1ue-bij6j7ZThiz0b3IoNrc81l74zI7OBTkFe7jOdEG5hu6F8TL8zdM3qSoAuQ1i68vhHcNrxtcynydHo51Hf9vD22mbZLCAo-Si_FUAmAXgAOTg2XCb-ryRVnqRCKjrr7R52qox4ePQ4ddz-gBVJhFd_-cyyCYDxp0J8K_OH-QVrDHpsyvjrfNEN6sjyq24nJJkXeFMSSz8xb-O7sQEYK7jPzRBXukh7p7c-LKXJM')",
                }}
            >
                <div className="max-w-[800px] flex flex-col items-center text-center p-6 relative z-10">
                    <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4 drop-shadow-2xl">
                        Preserving the <span className="text-primary text-shadow-gold">Fading Echoes</span>
                    </h1>
                    <h2 className="text-[#e0dcd5] text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8 font-sans">
                        A digital sanctuary for West Bengal&apos;s dying arts, from the haunting melodies of Baul
                        to the intricate threads of Baluchari.
                    </h2>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 h-12 px-8 bg-primary hover:bg-primary/90 text-[#181511] text-base font-bold rounded-lg transition-all shadow-glow">
                            <span>Explore Archive</span>
                            <span className="material-symbols-outlined text-xl">arrow_downward</span>
                        </button>
                        <button className="flex items-center gap-2 h-12 px-8 border border-[#54493b] hover:border-primary hover:text-primary text-white bg-surface-dark/50 backdrop-blur-sm text-base font-medium rounded-lg transition-all">
                            <span className="material-symbols-outlined text-xl">play_circle</span>
                            <span>Watch Film</span>
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a1612] to-transparent"></div>
            </div>

            {/* Timeline Section */}
            <section className="py-12 border-b border-[#393228] bg-[#1d1814]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-white text-2xl font-bold">Chronicles of Heritage</h3>
                        <div className="flex gap-2 text-[#b9ad9d]">
                            <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </div>
                    <div className="relative w-full overflow-x-auto pb-8 scrollbar-hide">
                        <div className="flex min-w-max gap-0 relative">
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#393228] -translate-y-1/2 z-0"></div>
                            {TIMELINE_EVENTS.map((event, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center w-64 group cursor-pointer">
                                    <div className={`mb-6 transition-opacity ${event.active ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                                        <span className="text-primary text-sm font-bold tracking-widest">{event.year}</span>
                                    </div>
                                    {event.active ? (
                                        <div className="w-6 h-6 rounded-full bg-primary border-4 border-[#1a1612] shadow-glow z-20"></div>
                                    ) : (
                                        <div className="w-4 h-4 rounded-full bg-[#393228] border-2 border-[#54493b] group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all shadow-[0_0_0_4px_rgba(26,22,18,1)]"></div>
                                    )}
                                    <div className="mt-6 text-center px-2">
                                        <h4 className={`text-white text-lg font-bold mb-1 ${event.active ? "text-primary" : ""}`}>{event.title}</h4>
                                        <p className={`text-sm font-sans ${event.active ? "text-[#b9ad9d]" : "text-[#8c8276]"}`}>{event.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Gallery Section */}
            <main className="max-w-[1280px] mx-auto px-6 py-12 pb-32">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-2">
                            The Dying Arts Gallery
                        </h2>
                        <p className="text-[#b9ad9d] font-sans max-w-xl">
                            Explore our categorized collection of endangered heritage. Each artifact is digitally
                            preserved with high-fidelity audio and visual documentation.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 bg-[#27221c] p-1 rounded-lg border border-[#393228]">
                        {["All", "Baul Music", "Weaving", "Lost Dialects"].map((filter, i) => (
                            <button key={filter} className={`px-4 py-2 rounded text-sm font-medium transition-all ${i === 0 ? "bg-primary text-[#181511] font-bold shadow-md" : "hover:bg-[#393228] text-[#b9ad9d] hover:text-white"}`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artifacts.map((item) => {
                        const statusColor = getStatusColor(item.endangeredLevel);
                        return (
                            <div key={item.id} className="group bg-[#27221c] border border-[#393228] rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-glow-subtle transition-all duration-300">
                                <div className={`relative h-64 overflow-hidden`}>
                                    {/* Status Badge */}
                                    <div className={`absolute top-3 left-3 z-10 px-3 py-1 backdrop-blur-md border rounded-full flex items-center gap-1.5 ${statusColor === 'red' ? 'bg-red-900/80 border-red-500/30' :
                                        statusColor === 'amber' ? 'bg-amber-900/80 border-amber-500/30' :
                                            statusColor === 'green' ? 'bg-green-900/80 border-green-500/30' :
                                                'bg-gray-700/80 border-gray-500/30'
                                        }`}>
                                        <div className={`w-2 h-2 rounded-full ${statusColor === 'red' ? 'bg-red-500 animate-pulse' :
                                            statusColor === 'amber' ? 'bg-amber-500' :
                                                statusColor === 'green' ? 'bg-green-500' :
                                                    'bg-gray-400'
                                            }`}></div>
                                        <span className="text-[10px] font-bold text-white uppercase tracking-wider font-sans">{item.endangeredLevel}</span>
                                    </div>

                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
                                        style={{ backgroundImage: `url('${item.imageUrl}')` }}
                                    ></div>
                                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full text-white">
                                        <span className="material-symbols-outlined text-xl">visibility</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2 text-primary text-xs font-bold uppercase tracking-widest font-sans">
                                        <span className="material-symbols-outlined text-base">category</span>
                                        <span>{item.material} • {item.era || 'Unknown Era'}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-[#b9ad9d] text-sm mb-4 font-sans line-clamp-2">{item.description}</p>
                                    <button className="w-full py-3 rounded-lg bg-[#393228] hover:bg-[#4a4238] text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                        <span>View Details</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-12 flex justify-center">
                    <button className="border border-[#54493b] hover:bg-[#27221c] text-[#b9ad9d] hover:text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
                        <span>Load More Artifacts</span>
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                    </button>
                </div>
            </main>

            {/* Persistent Audio Player */}
            <div className="fixed bottom-0 left-0 w-full bg-[#14110d]/95 backdrop-blur-lg border-t border-primary/20 p-4 z-50 transform translate-y-0 transition-transform shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-[200px]">
                        <div
                            className="w-12 h-12 rounded bg-[#393228] bg-cover bg-center"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0HNS-wNLSG8SZcI3QaCSXK9lyJF4YpYKmnwsFe4hLYDrSZLAWAyglMO1Vufayaa81zg_XDX7QWtCp4g7P9wLOos8Js0KCM3BIHHN1Z1lvSQp3PmR7zQ-6FsO6D8wBTQSmiu3jZpy6vsbhT6kGVVqaubLAf9bJXqBIaoEOqU-SORneg3jI7VWxr1s70tVhKqA9M5Ir8hWBNXE1wr9K-TMuC6PiQww0kiZIV_eL4mLa-ipAQDFncNLHzrueKkq2Uq_wB8cT47nazvo')" }}
                        ></div>
                        <div className="flex flex-col">
                            <h4 className="text-white text-sm font-bold font-display">Moner Manush</h4>
                            <p className="text-primary text-xs font-sans">Lalon Fakir • 1890</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center flex-1 max-w-lg gap-2">
                        <div className="flex items-center gap-6">
                            <button className="text-[#b9ad9d] hover:text-white"><span className="material-symbols-outlined">skip_previous</span></button>
                            <button className="w-10 h-10 rounded-full bg-primary text-[#181511] flex items-center justify-center hover:scale-105 transition-transform"><span className="material-symbols-outlined">pause</span></button>
                            <button className="text-[#b9ad9d] hover:text-white"><span className="material-symbols-outlined">skip_next</span></button>
                        </div>
                        <div className="w-full flex items-center gap-3 text-[10px] text-[#b9ad9d] font-mono">
                            <span>1:24</span>
                            <div className="h-1 bg-[#393228] rounded-full flex-1 relative cursor-pointer group">
                                <div className="absolute top-0 left-0 h-full w-[35%] bg-primary rounded-full group-hover:bg-primary/80"></div>
                                <div className="absolute top-1/2 left-[35%] w-2 h-2 bg-white rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <span>4:12</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4 min-w-[150px] justify-end">
                        <button className="text-[#b9ad9d] hover:text-primary"><span className="material-symbols-outlined">playlist_add</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
