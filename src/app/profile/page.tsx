import React from "react";

const TIMELINE = [
    {
        date: "October 12, 2023",
        title: "New Beginning for Rina Devi",
        desc: "Rina has purchased a new sewing machine thanks to your generous contribution. She sends her blessings.",
        tag: "Kantha Stitch",
        tagColor: "primary",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBQykk0VFUyoiLK1KP7YgikDWEfH0F73-J-v7jCDTSiab5ajR92wdOnRVxLBJY5SSfEOD0clTMBQXEvxCbp73j_OECDk45mThlw1dfGNkQQgWus4a0bT9Wx_te_dRYENzjqz4o44FQh1ST0hnOdAUDVKTvpd0taJ4WLPp-4wFJL8HDhqXJCZrTRPhoVWvJwQ2hp93-PMCBjMYaC-iRfd6Oo5fgf4GzQocDFJDP1gkfJe6gIy6THQHUufeWkyv9n_6qnIx5UP6uvboU",
    },
    {
        date: "September 05, 2023",
        title: "Update on Your Commission",
        desc: "Your commissioned Silk Baluchari saree is currently on the loom. The artisan, Bikash, has started the pallu design.",
        tag: "Weaving",
        tagColor: "orange",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDlkHJVXjPWTWB5XvhueaTFffMepjvduuPyrsR1efN8THktkgWUScMvVZqBozsS6dVV1UG64CJt2b0-mYRaGQqNWqVYkPgNZGTcqPS33GOa-784HnIgu4Z415MaYjNTZIVRLMN39E8PN6rXcKujC-WnMULfmDAuo6qby0nyHty1oiWAiz1UgqQeJdSlRWDsB5LabdN72iS0eVdMgC2AgyEki27IDPHtmCuw_lYounOO3HHCmhpcKiT05kw_DN_iOOyMM92DtFbptRc",
    },
    {
        date: "August 15, 2023",
        title: "Community Fund Donation",
        desc: "You contributed ₹5,000 to the Annual Craftsman Health Fund. This will support medical checkups for 50 artisan families in Bishnupur.",
        isDonation: true,
    },
];

const BADGES = [
    {
        title: "Sholapith Guardian",
        sub: "Supported 2 Shola artists",
        icon: "local_florist",
        color: "primary",
    },
    {
        title: "Kantha Patron",
        sub: "Commissioned 1 masterpiece",
        icon: "gesture",
        color: "primary",
    },
    {
        title: "Terracotta Conservator",
        sub: "Donor since 2021",
        icon: "landscape",
        color: "primary",
    },
];

export default function ProfilePage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f8f6f6] dark:bg-[#211511]">
            <main className="flex-1 flex flex-col">
                {/* Hero Profile Section */}
                <section
                    className="relative pt-12 pb-24 px-6 shadow-sm bg-primary"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH412ASe6l66OPJvIHY2QAurweI3apn4XlgzMO2raRA-3o1m3-dAwnD9ck5O9LqWLrpa1tPrP_sSMeGenOD4YD6W8CHYzG-Eepc2ZDzSd4elfxoX26GZUeC2d4iKfB13N6CjjkFVqOYSNTLJfb2_5NyJ6of5Y-sKYuQqlGx9J8zT3d_er2MQH30Ah3lKfwB-n08tMx1pJq3EVcOIBUZDZcxVRBWNJcCOyl1a5F4F4fbt3qvb6HZBFgQi64_Z3TcPK-oTb9pD8eop8')",
                    }}
                >
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f8f6f6] dark:from-[#211511] to-transparent"></div>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                        <div className="relative shrink-0">
                            <div
                                className="size-32 md:size-40 rounded-full border-4 border-white dark:border-[#211511] shadow-lg bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0pOgxnyBdLOS-BAfq_hTaG0SGO_zZl_fzgYW7pQZ-r27mg3iSCMqjT9xef9VSWwpy79df2bURgOwkQVjZHH0wmtCZ0046N78Jlg40tfE-WFJoQ0EooYlvMGGs7EPVyBEVW97vpkoqEw3Y4-5JBLq0RBMsEj75FN1jeo_NIrm7mKhY7S53BHCi0rh0VRFiV2EadUTzi6WT05slhDTdr4HQcc4VKjx4Lbd13MDGbI3qNqmT8mhZz2jejCsRMuXSCjGJ6tGvgUVamDk')",
                                }}
                            ></div>
                            <div className="absolute bottom-1 right-1 bg-white dark:bg-[#211511] text-primary rounded-full p-2 shadow-md border border-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[20px]">verified</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-white text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-display">Ananya Roy</h1>
                            <p className="text-white/90 text-lg mb-6 font-sans flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                Member Since 2021
                            </p>
                            <div className="flex gap-6 items-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-white/80 font-sans">
                                        Impact Score
                                    </span>
                                    <span className="text-3xl font-bold font-display">1,250</span>
                                </div>
                                <div className="h-10 w-px bg-white/20"></div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-white/80 font-sans">
                                        Level
                                    </span>
                                    <span className="text-lg font-bold flex items-center gap-1 font-display">
                                        Patron <span className="material-symbols-outlined text-[18px]">stars</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <div className="layout-container px-6 md:px-10 lg:px-20 -mt-12 mb-20 relative z-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Journey Timeline (8 cols) */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="bg-white dark:bg-[#2d2418] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-white/10">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-[#181311] dark:text-white flex items-center gap-2 font-display">
                                        <span className="material-symbols-outlined text-primary">history_edu</span>
                                        Your Journey
                                    </h2>
                                    <button className="text-sm text-primary font-medium hover:underline font-sans">
                                        View Full History
                                    </button>
                                </div>
                                {/* Timeline */}
                                <div className="relative pl-4 border-l-2 border-primary/20 space-y-10 ml-2 font-sans">
                                    {TIMELINE.map((item, i) => (
                                        <div key={i} className="relative pl-8 group">
                                            <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-gray-100 dark:bg-white/20 border-4 border-white dark:border-[#211511] group-hover:bg-primary transition-colors"></div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-sm font-medium text-[#886c63]">{item.date}</span>
                                                <div className="flex flex-col sm:flex-row gap-4 bg-[#f8f6f6] dark:bg-white/5 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-primary/20">
                                                    {item.image ? (
                                                        <div
                                                            className="shrink-0 size-24 sm:size-32 rounded-lg bg-cover bg-center"
                                                            style={{ backgroundImage: `url('${item.image}')` }}
                                                        ></div>
                                                    ) : (
                                                        <div className="flex flex-col justify-center w-full">
                                                            <div className="flex items-start gap-3 mb-2">
                                                                <span className="material-symbols-outlined text-primary mt-1">
                                                                    volunteer_activism
                                                                </span>
                                                                <h3 className="font-display text-lg font-bold text-[#181311] dark:text-white">
                                                                    {item.title}
                                                                </h3>
                                                            </div>
                                                            <p className="text-sm text-[#886c63] leading-relaxed">{item.desc}</p>
                                                        </div>
                                                    )}
                                                    {item.image && (
                                                        <div className="flex flex-col justify-center">
                                                            <h3 className="font-display text-lg font-bold text-[#181311] dark:text-white mb-2">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-sm text-[#886c63] leading-relaxed mb-3">
                                                                {item.desc}
                                                            </p>
                                                            {item.tag && (
                                                                <div className="flex gap-2">
                                                                    <span
                                                                        className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${item.tagColor === "primary"
                                                                                ? "bg-primary/10 text-primary"
                                                                                : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                                                                            }`}
                                                                    >
                                                                        {item.tag}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sidebar (4 cols) */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Badges Section */}
                            <div className="bg-white dark:bg-[#2d2418] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-white/10">
                                <h2 className="text-lg font-bold text-[#181311] dark:text-white mb-4 border-b border-gray-100 dark:border-white/10 pb-2 flex items-center gap-2 font-display">
                                    <span className="material-symbols-outlined text-yellow-600">military_tech</span>
                                    Badges of Honor
                                </h2>
                                <div className="grid grid-cols-1 gap-3">
                                    {BADGES.map((badge, i) => (
                                        <div
                                            key={i}
                                            className="flex gap-4 p-3 rounded-lg border border-gray-100 dark:border-white/10 bg-[#f8f6f6] dark:bg-white/5 items-center hover:shadow-md transition-shadow group"
                                        >
                                            <div className="size-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined">{badge.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-[#181311] dark:text-white leading-tight font-display">
                                                    {badge.title}
                                                </h3>
                                                <p className="text-xs text-[#886c63] mt-1 font-sans">{badge.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-4 text-center text-xs font-bold text-[#886c63] hover:text-primary uppercase tracking-wide py-2 border border-dashed border-gray-300 dark:border-white/20 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-sans">
                                    View All Available Badges
                                </button>
                            </div>

                            {/* Contribution Summary */}
                            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 shadow-sm border border-primary/10">
                                <h2 className="text-lg font-bold text-[#181311] dark:text-white mb-4 flex items-center gap-2 font-display">
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                    Contribution Summary
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-green-600">payments</span>
                                            <span className="text-sm font-medium font-body text-[#886c63]">
                                                Funds Donated
                                            </span>
                                        </div>
                                        <span className="text-base font-bold text-[#181311] dark:text-white font-display">
                                            ₹45,000
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-blue-600">shopping_bag</span>
                                            <span className="text-sm font-medium font-body text-[#886c63]">
                                                Items Collected
                                            </span>
                                        </div>
                                        <span className="text-base font-bold text-[#181311] dark:text-white font-display">
                                            5
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-red-500">favorite</span>
                                            <span className="text-sm font-medium font-body text-[#886c63]">
                                                Lives Touched
                                            </span>
                                        </div>
                                        <span className="text-base font-bold text-[#181311] dark:text-white font-display">
                                            3 Families
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-primary/10">
                                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2 font-sans">
                                        <span className="material-symbols-outlined text-[20px]">
                                            volunteer_activism
                                        </span>
                                        Donate Again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
