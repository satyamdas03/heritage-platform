export default function ApprenticePage() {
    const apprentices = [
        { name: 'Riya Mondal', age: 19, craft: 'Weaving', badge: 'Top Student', goal: 5000, raised: 3500, quote: 'I dream of opening a cooperative in my village to employ other women.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsGdNQsXOzJxL6dHkRSDMXavitfMgYfAriG0pR77cZLz-eoLFaeC8YzOrDSE2nm7cMdaDRnoM1hN8nF8YBvkR5HwN_m7m-3EEYAtzZyNw2TRUKaXGgH-SOkuL8qDh4aPVXb9xhNJOQzWPqTATUVYgFfTDF8Hb-n5qW5A9UNmt6t8JHaYPz3XQJJcoKAmPq00tUPVhplUQx8c5qACGpW1r_UwWhVM7M7Vkc9eekCzEN17CGbBt7jZNbkRcIyN7NezNrcQlk9bgge-M' },
        { name: 'Amit Pal', age: 21, craft: 'Terracotta', badge: null, goal: 5000, raised: 2250, quote: "Preserving my grandfather's terracotta technique is my life's mission.", image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQvw_9b25L8FqA812zyO1bvHzH-UZUyV7eFQI8GWpOoPNLiAoyB41aMwaVrot1EIFc5hy61waSaAz75pvtDVT1EG2BrThn1T_eD79Gwpw2eKYHR63FKp2Qf8UUWxU8YIoQmMdrPEMklvgyQHJwkk1IytDDBef15X5s5CijvFg8P5NfkdROye9rfQhfq3vmeHcaUDmqpTikaOKOoyBUEWsLPYtK9PcXlYgUx2MZjt6e-wm2X3lYvWGyAg9kZvH63trvl82SApCa87E' },
    ];

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-[#0f2826]">
            {/* Main Content */}
            <main className="flex-1 px-4 py-8 lg:px-20 lg:py-10">
                <div className="mx-auto max-w-7xl flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex flex-col gap-3 max-w-3xl">
                        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5d4037]/60">
                            <span>Home</span>
                            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                            <span>Education</span>
                            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                            <span className="text-[#ffb703]">Apprentice Program</span>
                        </nav>
                        <h1 className="text-[#0f2826] text-4xl lg:text-5xl font-black leading-tight">
                            Suwarna Bharat <span className="text-[#5d4037] font-serif italic font-light">Apprentice Program</span>
                        </h1>
                        <p className="text-[#5d4037]/80 text-lg max-w-2xl">
                            Empowering the next generation of Bengali artisans. Join Master S. Das in preserving the intricate art of Jamdani weaving.
                        </p>
                    </div>

                    {/* Live Session */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black ring-4 ring-white ring-offset-2 ring-offset-[#fdfbf7]">
                                <div className="aspect-video relative">
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
                                        <span className="material-symbols-outlined text-sm">sensors</span> LIVE
                                    </div>
                                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm">visibility</span> 1,204 watching
                                    </div>
                                    <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6GkuM6Csyn5SS-rjqwyK7DmVmV_zGpP7Ehd45gZvITr9RC-JCpK1EgfAevrPwUK8LNdYLbUBYPGdpGVfx2L4bPTTTsWZWER4rsp6JHoKetgiOabf62PYGXteyHLPMJsCmHwEK52SijXnN7RDd63MfiyxsQK60bzNXla2J05nriHuaXFtDnTuFFXbEdMi6-w3wPtXD-RzcBkhyb2W-xfsu7iZuMZkfDNZxLwlzkl4B9QbDo4APF-0mDC3773lYmI_yt-QaO5I7U6s')` }}></div>
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <button className="flex items-center justify-center size-20 rounded-full bg-white/90 text-[#0f2826] shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-[#ffb703] hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
                                        </button>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between text-white z-20">
                                        <div>
                                            <h3 className="font-bold text-xl mb-1">Setting the Warp for Jamdani</h3>
                                            <p className="text-white/80 text-sm flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm text-[#ffb703]">verified</span>
                                                Master Artisan S. Das • Bankura
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#5d4037]/10 shadow-sm">
                                <h2 className="text-2xl font-bold text-[#0f2826] mb-4">About this Session</h2>
                                <p className="text-[#5d4037] leading-relaxed mb-6 text-lg">
                                    Today, Master Das demonstrates the intricate process of setting up the warp for a <span className="text-[#0f2826] font-semibold">Jamdani saree</span>. This technique requires mathematical precision and has been passed down through seven generations.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 rounded-full bg-[#5d4037]/5 text-[#5d4037] text-xs font-bold border border-[#5d4037]/10">#Handloom</span>
                                    <span className="px-3 py-1 rounded-full bg-[#5d4037]/5 text-[#5d4037] text-xs font-bold border border-[#5d4037]/10">#Weaving</span>
                                    <span className="px-3 py-1 rounded-full bg-[#5d4037]/5 text-[#5d4037] text-xs font-bold border border-[#5d4037]/10">#BengalArts</span>
                                </div>
                            </div>
                        </div>

                        {/* Curriculum */}
                        <div className="lg:col-span-4 flex flex-col h-full">
                            <div className="bg-white rounded-2xl border border-[#5d4037]/10 shadow-sm flex flex-col h-full overflow-hidden relative">
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#ffb703] via-[#0df2df] to-[#ffb703]"></div>
                                <div className="p-6 border-b border-[#5d4037]/5 bg-[#5d4037]/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-[#0f2826]">Curriculum</h3>
                                        <span className="text-xs font-bold text-[#0f2826] bg-white px-2 py-1 rounded-md shadow-sm border border-[#5d4037]/10">Module 2/4</span>
                                    </div>
                                    <div className="relative pt-2">
                                        <div className="overflow-hidden h-2 mb-1 text-xs flex rounded-full bg-[#5d4037]/10">
                                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#ffb703]" style={{ width: '35%' }}></div>
                                        </div>
                                        <div className="flex justify-between text-xs font-medium text-[#5d4037]/70">
                                            <span>35% Complete</span>
                                            <span>Level 1 Artisan</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                    <div className="p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-500">
                                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Completed</p>
                                        <h4 className="text-sm font-bold text-[#0f2826]">Intro to Tussar Silk</h4>
                                        <p className="text-xs text-[#5d4037] mt-1">History, extraction, and types.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-[#ffb703]/10 border-l-4 border-[#ffb703]">
                                        <p className="text-[10px] font-bold text-[#ffb703] uppercase tracking-widest mb-1">In Progress</p>
                                        <h4 className="text-sm font-bold text-[#0f2826]">Natural Dye Preparation</h4>
                                        <p className="text-xs text-[#5d4037] mt-1">Marigold, indigo, and turmeric.</p>
                                        <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white border border-[#ffb703]/30 text-[10px] font-bold text-[#0f2826] shadow-sm">
                                            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>
                                            LIVE NOW
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gray-50 opacity-60">
                                        <p className="text-[10px] font-bold text-[#5d4037]/70 uppercase tracking-widest mb-1">Locked</p>
                                        <h4 className="text-sm font-bold text-[#0f2826]">Traditional Weaving Patterns</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sponsor Students */}
                    <section className="bg-white rounded-[2rem] p-6 lg:p-10 border border-[#5d4037]/10 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                            <div>
                                <h2 className="text-[#0f2826] text-3xl font-bold leading-tight">Support an Apprentice</h2>
                                <p className="text-[#5d4037] mt-2 text-lg">Directly sponsor a student&apos;s toolkit or monthly stipend to keep the heritage alive.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {apprentices.map((student) => (
                                <div key={student.name} className="group bg-[#fdfbf7] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-[#5d4037]/5">
                                    <div className="aspect-[4/3] w-full relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${student.image}')` }}>
                                        {student.badge && (
                                            <div className="absolute bottom-3 left-3 text-white">
                                                <div className="flex items-center gap-1 text-xs font-medium bg-[#ffb703]/90 px-2 py-0.5 rounded w-fit mb-1">
                                                    <span className="material-symbols-outlined text-[10px]">star</span> {student.badge}
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold text-[#0f2826] shadow-sm">Age {student.age}</div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-[#0f2826]">{student.name}</h3>
                                        <p className="text-sm text-[#5d4037] italic mb-4 mt-1 leading-snug">&quot;{student.quote}&quot;</p>
                                        <div className="mt-auto space-y-3">
                                            <div className="w-full bg-[#5d4037]/10 rounded-full h-1.5">
                                                <div className="bg-[#ffb703] h-1.5 rounded-full" style={{ width: `${(student.raised / student.goal) * 100}%` }}></div>
                                            </div>
                                            <div className="flex justify-between text-xs font-bold text-[#5d4037]/70">
                                                <span className="text-[#0f2826]">₹{student.raised.toLocaleString()}</span>
                                                <span>Goal: ₹{student.goal.toLocaleString()}</span>
                                            </div>
                                            <button className="w-full py-2.5 rounded-xl bg-[#0f2826] text-white text-sm font-bold hover:bg-[#ffb703] transition-colors shadow-lg">
                                                Sponsor {student.name.split(' ')[0]}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Become Patron Card */}
                            <div className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-[#ffb703]/30 bg-[#ffb703]/5 hover:bg-[#ffb703]/10 transition-colors p-6 flex flex-col items-center justify-center text-center">
                                <div className="size-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-3xl text-[#ffb703]">handshake</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#0f2826] mb-2">Become a Patron</h3>
                                <p className="text-sm text-[#5d4037] mb-6">Join the Suwarna Bharat circle. Your monthly contribution preserves our arts.</p>
                                <button className="px-6 py-3 rounded-xl border border-[#ffb703] text-[#0f2826] font-bold text-sm hover:bg-[#ffb703] hover:text-white transition-all shadow-sm">
                                    Make an Impact
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
