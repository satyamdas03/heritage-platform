import React from "react";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function getEvents() {
    const events = await prisma.event.findMany({
        orderBy: {
            date: 'asc',
        },
    });
    return events;
}

const SEASONS = [
    { name: "Grishma", subtitle: "Summer", icon: "sunny", color: "amber" },
    { name: "Barsha", subtitle: "Monsoon", icon: "rainy", color: "blue" },
    { name: "Sharot", subtitle: "Autumn", icon: "cloud", color: "sky" },
    {
        name: "Hemanto",
        subtitle: "Late Autumn",
        icon: "agriculture",
        color: "primary",
        active: true,
        desc: "The Season of Golden Harvest",
    },
    { name: "Sheet", subtitle: "Winter", icon: "ac_unit", color: "cyan" },
    { name: "Basanta", subtitle: "Spring", icon: "local_florist", color: "pink" },
];

export default async function CalendarPage() {
    const events = await getEvents();
    return (
        <div className="flex min-h-screen flex-col bg-[#f8f7f6] dark:bg-[#221810]">
            <main className="relative w-full">
                {/* Background Alpona Pattern */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                {/* Hero: The Seasonal Wheel */}
                <section className="relative z-10 pt-12 pb-20 px-6 lg:px-10 max-w-[1440px] mx-auto text-center">
                    <div className="flex flex-col items-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-3 border border-primary/20">
                            Current Season
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#181411] dark:text-white mb-4 font-display">
                            Hemanto
                            <span className="block text-2xl md:text-3xl font-medium text-[#897261] dark:text-[#a8907d] mt-2 font-display italic">
                                The Season of Golden Harvest
                            </span>
                        </h2>
                        <p className="max-w-xl text-lg text-[#554439] dark:text-[#cfc0b5] leading-relaxed mx-auto">
                            Explore the gentle chill, the scent of ripe paddy, and the preparation for the grand
                            winter feasts.
                        </p>
                    </div>

                    {/* Wave Timeline Visualization */}
                    <div className="relative w-full overflow-x-auto pb-12 scrollbar-hide">
                        <div className="min-w-[1000px] flex items-center justify-between relative px-10">
                            {/* Connecting Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ee7c2b] to-transparent opacity-30 -translate-y-1/2 rounded-full"></div>

                            {SEASONS.map((season, i) => (
                                <div
                                    key={i}
                                    className={`relative group flex flex-col items-center gap-4 cursor-pointer transition-all ${season.active ? "opacity-100 scale-110 z-20" : "opacity-50 hover:opacity-80"
                                        }`}
                                >
                                    {season.active && (
                                        <div className="absolute -top-16 bg-white dark:bg-[#2c1f15] shadow-xl border border-primary/20 rounded-xl p-3 w-48 text-center animate-bounce">
                                            <span className="text-xs font-bold text-primary uppercase block mb-1">
                                                Happening Now
                                            </span>
                                            <span className="text-sm font-semibold block text-[#181411] dark:text-white">
                                                Nabanna Harvest Festival
                                            </span>
                                        </div>
                                    )}
                                    <div
                                        className={`rounded-full flex items-center justify-center shadow-sm z-10 border-2 ${season.active
                                            ? "size-24 bg-primary text-white border-white dark:border-[#221810] shadow-2xl shadow-primary/30 ring-4 ring-primary/10"
                                            : "size-16 bg-white dark:bg-[#2c1f15] border-[#e6e0db] dark:border-[#5c4433]"
                                            }`}
                                    >
                                        <span
                                            className={`material-symbols-outlined ${season.active
                                                ? "text-4xl"
                                                : `text-${season.color}-500 dark:text-${season.color}-400`
                                                }`}
                                        >
                                            {season.icon}
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <h4
                                            className={`font-bold uppercase tracking-wider ${season.active
                                                ? "text-xl text-primary"
                                                : "text-sm text-[#181411] dark:text-white"
                                                }`}
                                        >
                                            {season.name}
                                        </h4>
                                        <span
                                            className={`text-xs ${season.active ? "text-[#897261] font-medium" : "text-gray-500"
                                                }`}
                                        >
                                            {season.subtitle}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="relative z-10 px-6 lg:px-10 pb-20 max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Col: Seasonal Craft (4 cols) */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="bg-white dark:bg-[#1a120b] rounded-2xl overflow-hidden shadow-sm border border-[#f4f2f0] dark:border-[#3d2c1d] group hover:shadow-md transition-all">
                                <div className="p-6 border-b border-[#f4f2f0] dark:border-[#3d2c1d] flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-[#181411] dark:text-white">
                                        Seasonal Craft Cycle
                                    </h3>
                                    <span className="material-symbols-outlined text-primary">psychiatry</span>
                                </div>
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <div className="absolute bottom-4 left-4 z-20 text-white">
                                        <span className="bg-primary/90 px-2 py-1 rounded text-xs font-bold mb-2 inline-block">
                                            Trending
                                        </span>
                                        <h4 className="text-2xl font-bold leading-tight">Nolen Gur Processing</h4>
                                    </div>
                                    <img
                                        alt="Nolen Gur Processing"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwchzJGgPb7VQ1XaJWWMAZGmrUSE-WmW09eNHdRGdT_i57jiMAaky_c-wNP_4dUhXJXE-zZJBES9K2gMiVsTtUHtZcT4UfvEc6HazgyXojob_WD92cOkjeE318WkpX5TTa3R_Oc30Div9hxR1cwRjdbqaIAtgqLTRY9P16rDZk533HIFbyFDIg4092Zj9T_k6IAOTRprb4p2zSCSqJXtJ7G2R2tu3s2odl6NRd8BlJuDDEqkbS5znBDn33CChfU4D_UcOdlwkkLbk"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-[#554439] dark:text-[#cfc0b5] mb-6 leading-relaxed">
                                        As the temperature drops, the date palm trees are tapped for their sweet sap.
                                        Learn how artisans turn this liquid gold into the famous Nolen Gur used in
                                        winter sweets.
                                    </p>
                                    <button className="w-full py-3 rounded-xl border border-[#e6e0db] dark:border-[#5c4433] font-bold text-sm hover:bg-[#f4f2f0] dark:hover:bg-[#2c1f15] text-[#181411] dark:text-white transition-colors flex items-center justify-center gap-2">
                                        Read the Craft Story
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            {/* Upcoming Festival Mini-Card */}
                            <div className="bg-[#221810] rounded-2xl p-6 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <span className="material-symbols-outlined text-9xl">temple_hindu</span>
                                </div>
                                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
                                    Coming Soon
                                </span>
                                <h3 className="text-2xl font-bold mb-1">Poush Mela</h3>
                                <p className="text-white/60 text-sm mb-4">Shantiniketan Fair Grounds</p>
                                <div className="flex items-center gap-4 text-sm font-medium border-t border-white/10 pt-4 mt-2">
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-xs">Starts</span>
                                        <span>Dec 23</span>
                                    </div>
                                    <div className="w-px h-8 bg-white/10"></div>
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-xs">Duration</span>
                                        <span>3 Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Col: Live from Courtyard (8 cols) */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <div className="bg-white dark:bg-[#1a120b] rounded-2xl overflow-hidden shadow-sm border border-[#f4f2f0] dark:border-[#3d2c1d] flex flex-col h-full">
                                <div className="p-6 border-b border-[#f4f2f0] dark:border-[#3d2c1d] flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#181411] dark:text-white">
                                            Live from the Courtyard
                                        </h3>
                                    </div>
                                    <button className="text-primary text-sm font-bold hover:underline">
                                        View All Streams
                                    </button>
                                </div>
                                <div className="grid md:grid-cols-2 grow">
                                    {/* Video Area */}
                                    <div className="relative bg-black group cursor-pointer md:border-r border-[#f4f2f0] dark:border-[#3d2c1d] min-h-[300px]">
                                        <img
                                            alt="Artisan hands molding clay pot"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgs7uqyFZY2FINQobrAqemE3PObjf4DnEGh3cuCeeLDfr3cDzXVknOQNWfreSq8Svps9bl5h_ifRvzIvmKV1pFIYfP2CdEK2eY7UdoYPZmy_cKU9mb34mUY_OSPOsjFyuChSENxMXUw5myZndy_yQyhwKvMSUpyWjzkWHCdVCln5NKTHhdzDf-dXdQldHp8dzvP5yBbx0dKL7uGVtIptXweqA88jQC6ixSBaBA0jkizMF6wyoYkadgJwaLpZTlJFPWrRw4EGHWIg0"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="size-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-white text-4xl ml-1">
                                                    play_arrow
                                                </span>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                            LIVE <span className="material-symbols-outlined text-[10px]">visibility</span>{" "}
                                            1.2k
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                            <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                                                Kumartuli Studio
                                            </p>
                                            <h3 className="text-white text-xl font-bold">
                                                Clay Modeling Masterclass with Biswajit Pal
                                            </h3>
                                        </div>
                                    </div>
                                    {/* Schedule & Chat */}
                                    <div className="flex flex-col p-6 dark:bg-[#1a120b]">
                                        <div className="mb-6">
                                            <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                                                Join Live Session
                                                <span className="material-symbols-outlined">login</span>
                                            </button>
                                            <p className="text-xs text-center text-gray-500 mt-2">
                                                Starts in 5 minutes • Free for members
                                            </p>
                                        </div>
                                        <h4 className="font-bold text-sm uppercase text-gray-400 mb-4 tracking-wider">
                                            Upcoming Schedule
                                        </h4>
                                        <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
                                            <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
                                                {events.map((event) => (
                                                    <div
                                                        key={event.id}
                                                        className="flex gap-4 p-3 rounded-xl hover:bg-[#f8f7f6] dark:hover:bg-[#2c1f15] transition-colors cursor-pointer group"
                                                    >
                                                        <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                                                            <img
                                                                alt={event.title}
                                                                className="w-full h-full object-cover"
                                                                src={event.imageUrl || "https://dummyimage.com/600x400/000/fff&text=Event"}
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-bold text-primary mb-0.5">
                                                                {new Date(event.date).toLocaleDateString()}
                                                            </div>
                                                            <h5 className="font-bold text-[#181411] dark:text-[#e6e0db] leading-tight group-hover:text-primary transition-colors">
                                                                {event.title}
                                                            </h5>
                                                            <p className="text-xs text-gray-500 mt-1">{event.season}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
