import React from "react";

const CURRICULUM = [
    {
        module: 1,
        title: "Introduction to Tussar Silk",
        desc: "History, extraction, and types of wild silk.",
        status: "Completed",
        icon: "check",
        color: "green",
    },
    {
        module: 2,
        title: "Natural Dye Preparation",
        desc: "Extracting colors from marigold, indigo, and turmeric.",
        status: "In Progress",
        icon: "play_arrow",
        color: "primary",
        live: true,
    },
    {
        module: 3,
        title: "Traditional Weaving Patterns",
        desc: "Fish, paisley, and geometric Alpona motifs.",
        status: "Locked",
        icon: "lock",
        color: "gray",
    },
    {
        module: 4,
        title: "Finishing & Marketing",
        desc: "Polishing the product and finding the right market.",
        status: "Locked",
        icon: "lock",
        color: "gray",
    },
];

const STUDENTS = [
    {
        name: "Riya Mondal",
        age: 19,
        specialty: "Top Student",
        icon: "star",
        quote: "I dream of opening a cooperative in my village to employ other women.",
        raised: "₹3,500",
        goal: "₹5,000",
        progress: 70,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAin9CdxXL8JT0AIgvUbY-jr45OUOVxvvwx588SCRDz5YJvYGP8to_LPBV76H9cKTSwFW2SJedSukkgXsBGtNS8rwXOS70dP_TPAOWiV2FAF3RM4AusSOGRfZ7T6blVL42JWrLqH4MSp-fs1OboSdV8kOwEzADGfcTHXJSpciJoIMZ47ODIq6aerOEY28XDunX-IuOASsGTNwO-NVtfmvr86JIDiOJk2B1Tf5fB8odoUh-QZrq-f0IjmxF9rb0il2gdL4d60SB0H5s",
    },
    {
        name: "Amit Pal",
        age: 21,
        specialty: "Terracotta",
        icon: "palette",
        quote: "Preserving my grandfather's terracotta technique is my life's mission.",
        raised: "₹2,250",
        goal: "₹5,000",
        progress: 45,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMFcmfjy5Rq19w_BseR7vjsFLSRMqIK6aq5vy_BIz-J1Hgdgoaf4EkeCu-qGslcVnPe7dDqUdbIfmT7PmpNxgoTj2LKVlJIG3kwyzlbwvt1s0f144RtH_yPvYllRamWsgS40-Jc4lJzVURpWJZGZQb8xOvkYuCjU2i_kA5GgRavpHYnznl0npAlky4qN3uu3hKWSCyvXDUriufU7hWLtUBlvy3sV6jY7iDMzO7fCUFfo0fBLGo9VDjNEaYq2Ubc_Az0MzBWHeEtPY",
    },
    {
        name: "Sana Khan",
        age: 18,
        specialty: "Embroidery",
        icon: "cut",
        quote: "I want to bring Kantha stitch to the global fashion stage.",
        raised: "₹1,000",
        goal: "₹5,000",
        progress: 20,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDt19RtTeAAtFwnHuHI26ix2FEJcqmkCqUUkHbgHvlUr3vUPwJNobNIjQubrZDmGCQ3DKjOCkPIbQXzigNY6SZcvmoTsTXfvOn_cjMxVyW0khQPaXL2N7nJtPUwsO6ZieaNIiBKFisvguzE4vgUFGFHb_-LG-wRkx_NR3f_uv4Eh7PhYNXmcU_H24j88rBmBy1nAQks9RwT8PPkGKfNGihK5Cn8fBAc_V5BzcZ4wvk5YzC2oP6HxBccqYuxc4VopX_gT-D-gJx_Gbc",
    },
];

export default function ApprenticePage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f5f8f8] dark:bg-[#102221]">
            <main className="flex-1 px-4 py-8 lg:px-20 lg:py-12">
                <div className="mx-auto max-w-7xl flex flex-col gap-10">
                    {/* Page Heading */}
                    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#e6ebea] dark:border-white/10 pb-6">
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">school</span> Education
                                </span>
                            </div>
                            <h1 className="text-[#111817] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                                Artisan Apprentice Program
                            </h1>
                            <p className="text-[#608a87] dark:text-gray-400 text-lg lg:text-xl font-normal mt-2">
                                Preserving Bengal&apos;s Soul, One Stitch at a Time. Join master artisan S. Das live
                                from Bankura.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#dbe6e5] dark:border-white/10 text-sm font-bold text-[#111817] dark:text-white hover:bg-[#f0f5f4] dark:hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-lg">share</span> Share
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#dbe6e5] dark:border-white/10 text-sm font-bold text-[#111817] dark:text-white hover:bg-[#f0f5f4] dark:hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-lg">bookmark</span> Save
                            </button>
                        </div>
                    </div>

                    {/* Dual Column Layout: Video & Curriculum */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Video Player (Span 8) */}
                        <div className="lg:col-span-8 flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-[#111817] dark:text-white">
                                    <span className="material-symbols-outlined text-red-500 animate-pulse">
                                        radio_button_checked
                                    </span>
                                    Class in Progress
                                </h3>
                                <span className="text-sm text-[#608a87] dark:text-gray-400 font-medium">
                                    124 viewing now
                                </span>
                            </div>
                            <div className="relative group w-full aspect-video rounded-2xl overflow-hidden bg-[#111817] shadow-xl ring-1 ring-black/5">
                                {/* Video Placeholder */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6GkuM6Csyn5SS-rjqwyK7DmVmV_zGpP7Ehd45gZvITr9RC-JCpK1EgfAevrPwUK8LNdYLbUBYPGdpGVfx2L4bPTTTsWZWER4rsp6JHoKetgiOabf62PYGXteyHLPMJsCmHwEK52SijXnN7RDd63MfiyxsQK60bzNXla2J05nriHuaXFtDnTuFFXbEdMi6-w3wPtXD-RzcBkhyb2W-xfsu7iZuMZkfDNZxLwlzkl4B9QbDo4APF-0mDC3773lYmI_yt-QaO5I7U6s')",
                                    }}
                                ></div>
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="flex items-center justify-center rounded-full size-20 bg-primary/90 text-[#111817] hover:scale-110 hover:bg-primary transition-all shadow-[0_0_30px_rgba(236,146,19,0.4)]">
                                        <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
                                    </button>
                                </div>
                                {/* Video Controls Mockup */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold">Setting the Warp for Jamdani</span>
                                        <span className="text-xs text-white/70">
                                            Master Artisan: S. Das • Bankura, West Bengal
                                        </span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                                            volume_up
                                        </span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                                            fullscreen
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Video Description */}
                            <div className="p-6 bg-[#fdfbf7] dark:bg-[#1a1612] rounded-2xl border border-[#e6ebea] dark:border-white/10 shadow-sm mt-2">
                                <h4 className="font-bold text-lg mb-2 text-[#111817] dark:text-white">
                                    About this Session
                                </h4>
                                <p className="text-[#608a87] dark:text-gray-400 leading-relaxed">
                                    Today, Master Das demonstrates the intricate process of setting up the warp for a
                                    Jamdani saree. This technique requires mathematical precision and has been passed
                                    down through seven generations. Watch closely as he explains the importance of
                                    tension in the cotton threads.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Curriculum (Span 4) */}
                        <div className="lg:col-span-4 flex flex-col h-full">
                            <div className="bg-white dark:bg-card-dark rounded-2xl border border-[#e6ebea] dark:border-white/10 shadow-sm flex flex-col h-full overflow-hidden">
                                <div className="p-6 border-b border-[#e6ebea] dark:border-white/10 bg-[#fcfbf7] dark:bg-black/20">
                                    <h3 className="text-xl font-bold text-[#111817] dark:text-white">Curriculum</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="flex-1 h-2 bg-[#e6ebea] dark:bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[35%] rounded-full"></div>
                                        </div>
                                        <span className="text-xs font-bold text-[#111817] dark:text-white">35%</span>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    <div className="flex flex-col divide-y divide-[#e6ebea] dark:divide-white/10">
                                        {CURRICULUM.map((mod) => (
                                            <div
                                                key={mod.module}
                                                className={`p-5 flex gap-4 transition-colors cursor-pointer group ${mod.status === "Locked"
                                                        ? "opacity-60 hover:opacity-80 cursor-not-allowed"
                                                        : "hover:bg-[#fafcfc] dark:hover:bg-white/5"
                                                    } ${mod.live ? "bg-primary/5 border-l-4 border-primary" : ""}`}
                                            >
                                                <div className="flex-shrink-0 mt-1">
                                                    <div
                                                        className={`size-6 rounded-full flex items-center justify-center ${mod.status === "Completed"
                                                                ? "bg-green-100 text-green-600"
                                                                : mod.status === "In Progress"
                                                                    ? "bg-primary text-[#111817] shadow-sm"
                                                                    : "bg-gray-100 dark:bg-gray-800 text-gray-400 border border-gray-200 dark:border-gray-700"
                                                            }`}
                                                    >
                                                        <span className="material-symbols-outlined text-sm font-bold">
                                                            {mod.icon}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p
                                                        className={`text-xs font-bold uppercase tracking-wide mb-1 ${mod.status === "Completed"
                                                                ? "text-green-600"
                                                                : mod.status === "In Progress"
                                                                    ? "text-primary"
                                                                    : "text-gray-400"
                                                            }`}
                                                    >
                                                        Module {mod.module} • {mod.status}
                                                    </p>
                                                    <h4 className="text-sm font-bold text-[#111817] dark:text-white group-hover:text-primary transition-colors">
                                                        {mod.title}
                                                    </h4>
                                                    <p className="text-xs text-[#608a87] dark:text-gray-400 mt-1">
                                                        {mod.desc}
                                                    </p>
                                                    {mod.live && (
                                                        <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white dark:bg-black/40 border border-primary/20 text-[10px] font-bold text-[#111817] dark:text-white">
                                                            <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>{" "}
                                                            LIVE NOW
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 border-t border-[#e6ebea] dark:border-white/10 bg-[#fcfbf7] dark:bg-black/20">
                                    <button className="w-full py-3 rounded-xl border border-[#dbe6e5] dark:border-white/10 text-sm font-bold text-[#111817] dark:text-white hover:bg-white dark:hover:bg-white/5 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">download</span> Download Syllabus
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex items-center justify-center gap-4 opacity-30 py-4 text-[#111817] dark:text-white">
                        <div className="h-px bg-current flex-1"></div>
                        <span className="material-symbols-outlined">spa</span>
                        <span className="material-symbols-outlined">filter_vintage</span>
                        <span className="material-symbols-outlined">spa</span>
                        <div className="h-px bg-current flex-1"></div>
                    </div>

                    {/* Support Section */}
                    <div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                            <div>
                                <h2 className="text-[#111817] dark:text-white text-3xl font-bold leading-tight">
                                    Support a Student
                                </h2>
                                <p className="text-[#608a87] dark:text-gray-400 mt-2">
                                    Sponsor an apprentice&apos;s toolkit or monthly stipend to keep the heritage alive.
                                </p>
                            </div>
                            <button className="text-primary font-bold hover:underline flex items-center gap-1">
                                View all students <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {STUDENTS.map((student, i) => (
                                <div
                                    key={i}
                                    className="group bg-white dark:bg-card-dark rounded-2xl border border-[#e6ebea] dark:border-white/10 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
                                >
                                    <div className="aspect-[4/3] w-full relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${student.image}')` }}
                                        ></div>
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[#5d4037] shadow-sm">
                                            Age {student.age}
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-[#111817] dark:text-white">
                                            {student.name}
                                        </h3>
                                        <div className="flex items-center gap-1 mb-3">
                                            <span className="material-symbols-outlined text-primary text-sm">
                                                {student.icon}
                                            </span>
                                            <span className="text-xs text-[#608a87] dark:text-gray-400 font-medium">
                                                {student.specialty}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#111817]/80 dark:text-white/80 italic mb-4 flex-1">
                                            &quot;{student.quote}&quot;
                                        </p>
                                        <div className="space-y-3">
                                            <div className="w-full bg-[#f0f5f4] dark:bg-white/10 rounded-full h-1.5">
                                                <div
                                                    className="bg-primary h-1.5 rounded-full"
                                                    style={{ width: `${student.progress}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex justify-between text-xs font-medium text-[#608a87] dark:text-gray-400">
                                                <span>{student.raised} raised</span>
                                                <span>Goal: {student.goal}</span>
                                            </div>
                                            <button className="w-full py-2.5 rounded-xl bg-primary text-[#111817] text-sm font-bold hover:bg-primary/80 transition-colors shadow-sm">
                                                Sponsor {student.name.split(" ")[0]}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="group bg-[#fcfbf7] dark:bg-white/5 rounded-2xl border-2 border-dashed border-primary/40 overflow-hidden hover:bg-white dark:hover:bg-white/10 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 text-center h-full min-h-[400px]">
                                <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl text-primary">
                                        volunteer_activism
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[#111817] dark:text-white mb-2">
                                    Make an Impact
                                </h3>
                                <p className="text-sm text-[#608a87] dark:text-gray-400 mb-6">
                                    Your contribution provides tools, raw materials, and education to these aspiring
                                    artisans.
                                </p>
                                <button className="px-6 py-3 rounded-xl border-2 border-primary text-[#111817] dark:text-white text-sm font-bold hover:bg-primary transition-colors">
                                    General Donation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
