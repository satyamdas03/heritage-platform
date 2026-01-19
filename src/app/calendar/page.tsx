export default function CalendarPage() {
    const seasons = [
        { name: 'Grishma', subtitle: 'Summer', icon: 'wb_sunny', color: 'text-amber-500' },
        { name: 'Barsha', subtitle: 'Monsoon', icon: 'water_drop', color: 'text-blue-600' },
        { name: 'Sharot', subtitle: 'Autumn', icon: 'filter_drama', color: 'text-sky-500' },
        { name: 'Hemanto', subtitle: 'Late Autumn', icon: 'agriculture', color: 'text-[#d97706]', active: true },
        { name: 'Sheet', subtitle: 'Winter', icon: 'ac_unit', color: 'text-cyan-600' },
        { name: 'Basanta', subtitle: 'Spring', icon: 'local_florist', color: 'text-pink-500' },
    ];

    const events = [
        { id: '1', title: 'Weaving Jamdani Motifs', date: 'Tomorrow, 4:00 PM', location: 'with Weaver Amina Bibi', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPRxuO6y95jzmzdqlWHv9yz5EwG7mNqtiFbYoq2HLiaSmvFhnNtXGNOxPFiaUBynQnQUeSeIFjgRYfO6JBqqkuXrjeCorYYbi4CIyqUBmZCI9h25uwXDDYEtffW9THsD1IqHGJhnVi50qHQnx7LZQhGUs31ayZgQUHi6iIe5DEzUn8dJIydTQaClYeyOBmgonDCQb_IF5lNtHpGlA0i7tf46elzztoEztVTG5KOKueh8ghygKGas4h5gIKm68o0qRY0VAcHddZYAM' },
        { id: '2', title: 'The Lost Wax Process', date: 'Saturday, 11:00 AM', location: 'Dokra Community Workshop', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvnYDrGnB5Jq5a6QrhRqYng0xA1pqafQY5UwOpCOY0IlzePBYI-hS2eh6FSgpXFSBrnQvy18sa8FyiU2RIt1fh7LssjPiSTmjop0TGC7UqSaZmr5qaSDSe2c1IPLmPrGkZ0LzGSvYnL2yvmE4YdPK0FcdnjJRLdCi-R5sUmS3x6Zio2hjxncFXwqd1aLsOYIuqfbkTi45ZbRipxCznum6HVjLJXEaipDUvvgV97TVJuw8Xi2Fsh8qf-tbmDZmZRlQzWWGZWM9pjvI' },
        { id: '3', title: 'Chhau Mask Painting', date: 'Sunday, 2:00 PM', location: 'Purulia Workshops', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYuesNMxvBwgcO34N5DmLd_uIG4Egxr8u9H0MnWOM1mzQF6kLSIpV_KBKdM8QALwKh4gHCWfjj2_QvSwoiPzfP4rXzdR6czahqv8sOrdE4aYVgZZ2WDgJYN35bno4Sx7Fj3yvd05iPY4dwEVUWJQcWkb-0emuuJmLyyqc0do_9DyytjIB0v2Af4oLvDgtwEGBfDbxqkpqCMGFswFeZVw2_FWQyjlW-c3NuZqcXKVhbXgSe-Pmi4OWqFwGFk4D3Vwzrfe07VFahnkI' },
    ];

    return (
        <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#1c1917] text-[#292524]">
            {/* Hero Section - Rituchakra */}
            <section className="relative z-10 pt-16 pb-24 px-6 lg:px-10 max-w-[1440px] mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#d97706]/10 text-[#d97706] text-xs font-bold tracking-widest uppercase mb-6 border border-[#d97706]/20">
                        <span className="material-symbols-outlined text-sm">autorenew</span>
                        Rituchakra Calendar
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#292524] dark:text-white mb-2">
                        Hemanto
                    </h2>
                    <div className="flex items-center gap-4 justify-center mb-6">
                        <div className="h-px w-12 bg-[#d97706]/40"></div>
                        <span className="text-2xl md:text-3xl font-medium text-[#b45309] dark:text-[#d97706] italic">The Season of Golden Harvest</span>
                        <div className="h-px w-12 bg-[#d97706]/40"></div>
                    </div>
                    <p className="max-w-2xl text-lg text-[#57534e] dark:text-[#a8a29e] leading-relaxed">
                        As the monsoon clouds retreat, nature adorns herself in gold. Experience the gentle chill, the scent of ripe paddy, and the preparation for the grand Nabanna feasts.
                    </p>
                </div>

                {/* Season Wheel */}
                <div className="relative w-full overflow-x-auto pb-16">
                    <div className="min-w-[900px] flex items-center justify-between relative px-20 py-10">
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent opacity-40 -translate-y-1/2"></div>
                        {seasons.map((season) => (
                            <div key={season.name} className={`relative group flex flex-col items-center gap-5 cursor-pointer ${season.active ? 'z-20 scale-110' : 'opacity-50 hover:opacity-100'} transition-all duration-300`}>
                                {season.active ? (
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#d97706]/20 rounded-full animate-ping opacity-20"></div>
                                        <div className="size-28 rounded-full bg-gradient-to-br from-[#d97706] to-[#b45309] text-white border-[6px] border-white dark:border-[#1c1917] shadow-xl shadow-[#d97706]/40 flex items-center justify-center z-10 relative">
                                            <span className="material-symbols-outlined text-5xl">{season.icon}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="size-14 rounded-full bg-white dark:bg-[#292524] border border-[#e7e5e4] dark:border-[#44403c] flex items-center justify-center shadow-sm z-10 group-hover:border-[#d97706] transition-colors">
                                        <span className={`material-symbols-outlined ${season.color} text-2xl`}>{season.icon}</span>
                                    </div>
                                )}
                                <div className="text-center">
                                    <h4 className={`font-bold text-sm uppercase tracking-widest ${season.active ? 'text-2xl text-[#d97706]' : ''}`}>{season.name}</h4>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{season.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="relative z-10 px-6 lg:px-10 pb-24 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Seasonal Craft */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-white dark:bg-[#292524] rounded-2xl overflow-hidden shadow-sm border border-[#e7e5e4] dark:border-[#44403c] hover:shadow-lg transition-shadow">
                            <div className="p-6 border-b border-[#e7e5e4] dark:border-[#44403c] flex justify-between items-center bg-[#fcfaf8] dark:bg-[#2c2826]">
                                <h3 className="text-lg font-bold dark:text-white">Seasonal Craft Cycle</h3>
                                <span className="material-symbols-outlined text-[#d97706]">psychiatry</span>
                            </div>
                            <div className="relative h-72 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                <div className="absolute bottom-6 left-6 z-20 text-white">
                                    <span className="bg-[#d97706]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 inline-block shadow-lg">Trending Craft</span>
                                    <h4 className="text-3xl font-bold leading-tight mb-1">Nolen Gur</h4>
                                    <p className="text-white/80 text-sm font-medium">Date Palm Jaggery Processing</p>
                                </div>
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwchzJGgPb7VQ1XaJWWMAZGmrUSE-WmW09eNHdRGdT_i57jiMAaky_c-wNP_4dUhXJXE-zZJBES9K2gMiVsTtUHtZcT4UfvEc6HazgyXojob_WD92cOkjeE318WkpX5TTa3R_Oc30Div9hxR1cwRjdbqaIAtgqLTRY9P16rDZk533HIFbyFDIg4092Zj9T_k6IAOTRprb4p2zSCSqJXtJ7G2R2tu3s2odl6NRd8BlJuDDEqkbS5znBDn33CChfU4D_UcOdlwkkLbk" alt="Date palm sap" />
                            </div>
                            <div className="p-8">
                                <p className="text-[#57534e] dark:text-[#a8a29e] mb-8 leading-relaxed text-sm">
                                    As the temperature drops in rural Bengal, the majestic date palm trees are tapped for their sweet sap. Discover the artisan technique of turning this liquid gold into the famous Nolen Gur.
                                </p>
                                <button className="w-full py-4 rounded-xl border border-[#e7e5e4] dark:border-[#44403c] font-bold text-sm hover:bg-[#d97706] hover:text-white hover:border-[#d97706] transition-all flex items-center justify-center gap-2 dark:text-white">
                                    Read the Craft Story
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Event Card */}
                        <div className="bg-[#1c1917] rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#d97706] uppercase mb-4 block">Mark Your Calendar</span>
                            <h3 className="text-3xl font-bold mb-2 text-[#f5f5f4]">Poush Mela</h3>
                            <p className="text-white/60 text-sm mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                                Shantiniketan Fair Grounds
                            </p>
                            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mt-2">
                                <div className="flex flex-col">
                                    <span className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Starts</span>
                                    <span className="text-xl">Dec 23</span>
                                </div>
                                <div className="flex flex-col pl-4 border-l border-white/10">
                                    <span className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Duration</span>
                                    <span className="text-xl">3 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Schedule */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="bg-white dark:bg-[#292524] rounded-2xl overflow-hidden shadow-sm border border-[#e7e5e4] dark:border-[#44403c]">
                            <div className="p-6 border-b border-[#e7e5e4] dark:border-[#44403c] flex justify-between items-center bg-[#fcfaf8] dark:bg-[#2c2826]">
                                <h3 className="text-lg font-bold flex items-center gap-3 dark:text-white">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </div>
                                    Upcoming Workshops
                                </h3>
                            </div>
                            <div className="p-6 space-y-4">
                                {events.map((event) => (
                                    <div key={event.id} className="flex gap-4 p-4 rounded-xl hover:bg-[#f5f5f4] dark:hover:bg-[#2c2826] transition-colors cursor-pointer group border border-transparent hover:border-[#e7e5e4] dark:hover:border-[#44403c]">
                                        <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 shadow-sm">
                                            <img className="w-full h-full object-cover" src={event.image} alt={event.title} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-[#d97706] uppercase tracking-wide mb-1">
                                                {event.date}
                                            </div>
                                            <h5 className="font-bold text-[#292524] dark:text-[#e7e5e4] leading-tight group-hover:text-[#d97706] transition-colors">{event.title}</h5>
                                            <p className="text-xs text-[#78716c] mt-1 line-clamp-2">{event.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Live Stream */}
                        <div className="bg-white dark:bg-[#292524] rounded-2xl overflow-hidden shadow-sm border border-[#e7e5e4] dark:border-[#44403c]">
                            <div className="p-6 border-b border-[#e7e5e4] dark:border-[#44403c] flex justify-between items-center bg-[#fcfaf8] dark:bg-[#2c2826]">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </div>
                                    <h3 className="text-lg font-bold dark:text-white">Live from the Courtyard</h3>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="relative bg-black min-h-[350px] overflow-hidden">
                                    <img className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgs7uqyFZY2FINQobrAqemE3PObjf4DnEGh3cuCeeLDfr3cDzXVknOQNWfreSq8Svps9bl5h_ifRvzIvmKV1pFIYfP2CdEK2eY7UdoYPZmy_cKU9mb34mUY_OSPOsjFyuChSENxMXUw5myZndy_yQyhwKvMSUpyWjzkWHCdVCln5NKTHhdzDf-dXdQldHp8dzvP5yBbx0dKL7uGVtIptXweqA88jQC6ixSBaBA0jkizMF6wyoYkadgJwaLpZTlJFPWrRw4EGHWIg0" alt="Clay modeling" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="size-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/30 cursor-pointer">
                                            <span className="material-symbols-outlined text-white text-5xl ml-1 drop-shadow-lg">play_arrow</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                        LIVE <span className="w-1 h-1 bg-white rounded-full"></span> 1.2k watching
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                        <p className="text-[#d97706] text-[10px] font-bold uppercase tracking-widest mb-2">Kumartuli Studio</p>
                                        <h3 className="text-white text-2xl font-bold leading-tight">Clay Modeling Masterclass with Biswajit Pal</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col p-8 bg-white dark:bg-[#292524]">
                                    <button className="w-full bg-[#d97706] hover:bg-[#b45309] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-[#d97706]/20 transition-colors">
                                        Join Live Session
                                        <span className="material-symbols-outlined">login</span>
                                    </button>
                                    <p className="text-xs text-center text-gray-500 mt-3 font-medium">Free for members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
