import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
    const session = await auth();
    if (!session) {
        redirect('/login');
    }

    const badges = [
        { name: 'Sholapith Guardian', icon: 'local_florist', description: 'Supported 2 Shola artists' },
        { name: 'Kantha Patron', icon: 'gesture', description: 'Commissioned 1 masterpiece' },
        { name: 'Terracotta Conservator', icon: 'landscape', description: 'Donor since 2021' },
    ];

    const timeline = [
        {
            date: 'October 12, 2023',
            title: 'New Beginning for Rina Devi',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQykk0VFUyoiLK1KP7YgikDWEfH0F73-J-v7jCDTSiab5ajR92wdOnRVxLBJY5SSfEOD0clTMBQXEvxCbp73j_OECDk45mThlw1dfGNkQQgWus4a0bT9Wx_te_dRYENzjqz4o44FQh1ST0hnOdAUDVKTvpd0taJ4WLPp-4wFJL8HDhqXJCZrTRPhoVWvJwQ2hp93-PMCBjMYaC-iRfd6Oo5fgf4GzQocDFJDP1gkfJe6gIy6THQHUufeWkyv9n_6qnIx5UP6uvboU',
            description: 'Rina has purchased a new sewing machine thanks to your generous contribution. She sends her blessings.',
            tag: 'Kantha Stitch',
        },
        {
            date: 'September 05, 2023',
            title: 'Update on Your Commission',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlkHJVXjPWTWB5XvhueaTFffMepjvduuPyrsR1efN8THktkgWUScMvVZqBozsS6dVV1UG64CJt2b0-mYRaGQqNWqVYkPgNZGTcqPS33GOa-784HnIgu4Z415MaYjNTZIVRLMN39E8PN6rXcKujC-WnMULfmDAuo6qby0nyHty1oiWAiz1UgqQeJdSlRWDsB5LabdN72iS0eVdMgC2AgyEki27IDPHtmCuw_lYounOO3HHCmhpcKiT05kw_DN_iOOyMM92DtFbptRc',
            description: 'Your commissioned Silk Baluchari saree is currently on the loom. The artisan, Bikash, has started the pallu design.',
            tag: 'Weaving',
        },
        {
            date: 'August 15, 2023',
            title: 'Community Fund Donation',
            image: null,
            description: 'You contributed ₹5,000 to the Annual Craftsman Health Fund. This will support medical checkups for 50 artisan families.',
            tag: null,
        },
    ];

    return (
        <div className="min-h-screen bg-[#f8f6f6] dark:bg-[#211511] text-[#181311]">
            {/* Hero Profile Section */}
            <section className="relative bg-[#e85e30] pt-12 pb-24 px-6 shadow-sm">
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f8f6f6] dark:from-[#211511] to-transparent"></div>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                    <div className="relative shrink-0">
                        <div className="size-32 md:size-40 rounded-full border-4 border-white dark:border-[#211511] shadow-lg bg-[#e85e30] flex items-center justify-center text-white text-5xl font-bold">
                            {session.user?.name?.charAt(0) || 'U'}
                        </div>
                        <div className="absolute bottom-1 right-1 bg-white dark:bg-[#211511] text-[#e85e30] rounded-full p-2 shadow-md border border-[#e85e30]/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">verified</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{session.user?.name || 'Heritage Patron'}</h1>
                        <p className="text-white/90 text-lg mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                            Member Since 2021
                        </p>
                        <div className="flex gap-6 items-center bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wider text-white/80">Impact Score</span>
                                <span className="text-3xl font-bold">1,250</span>
                            </div>
                            <div className="h-10 w-px bg-white/20"></div>
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wider text-white/80">Level</span>
                                <span className="text-lg font-bold flex items-center gap-1">
                                    Patron <span className="material-symbols-outlined text-[18px]">stars</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="px-6 md:px-10 lg:px-20 -mt-12 mb-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Timeline */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white dark:bg-white/5 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-white/10">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-[#181311] dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#e85e30]">history_edu</span>
                                    Your Journey
                                </h2>
                                <button className="text-sm text-[#e85e30] font-medium hover:underline">View Full History</button>
                            </div>
                            <div className="relative pl-4 border-l-2 border-[#e85e30]/20 space-y-10 ml-2">
                                {timeline.map((item, idx) => (
                                    <div key={idx} className="relative pl-8 group">
                                        <div className={`absolute -left-[9px] top-1 size-4 rounded-full ${idx === 0 ? 'bg-[#e85e30]' : 'bg-[#f8f6f6] dark:bg-white/20 group-hover:bg-[#e85e30]'} border-4 border-white dark:border-[#211511] transition-colors`}></div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm font-medium text-[#886c63]">{item.date}</span>
                                            <div className="flex flex-col sm:flex-row gap-4 bg-[#f8f6f6] dark:bg-white/5 p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-[#e85e30]/20">
                                                {item.image && (
                                                    <div className="shrink-0 size-24 sm:size-32 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
                                                )}
                                                <div className="flex flex-col justify-center">
                                                    <h3 className="text-lg font-bold text-[#181311] dark:text-white mb-2">{item.title}</h3>
                                                    <p className="text-sm text-[#886c63] leading-relaxed mb-3">{item.description}</p>
                                                    {item.tag && (
                                                        <div className="flex gap-2">
                                                            <span className="inline-flex items-center px-2 py-1 rounded bg-[#e85e30]/10 text-[#e85e30] text-xs font-bold uppercase tracking-wide">{item.tag}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Badges */}
                        <div className="bg-white dark:bg-white/5 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-white/10">
                            <h2 className="text-lg font-bold text-[#181311] dark:text-white mb-4 border-b border-neutral-100 dark:border-white/10 pb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-yellow-600">military_tech</span>
                                Badges of Honor
                            </h2>
                            <div className="grid grid-cols-1 gap-3">
                                {badges.map((badge) => (
                                    <div key={badge.name} className="flex gap-4 p-3 rounded-lg border border-neutral-100 dark:border-white/10 bg-[#f8f6f6] dark:bg-white/5 items-center hover:shadow-md transition-shadow group">
                                        <div className="size-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-[#e85e30] group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined">{badge.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-[#181311] dark:text-white leading-tight">{badge.name}</h3>
                                            <p className="text-xs text-[#886c63] mt-1">{badge.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contribution Summary */}
                        <div className="bg-[#e85e30]/5 dark:bg-[#e85e30]/10 rounded-xl p-6 shadow-sm border border-[#e85e30]/10">
                            <h2 className="text-lg font-bold text-[#181311] dark:text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#e85e30]">analytics</span>
                                Contribution Summary
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-neutral-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-600">payments</span>
                                        <span className="text-sm font-medium text-[#886c63]">Funds Donated</span>
                                    </div>
                                    <span className="text-base font-bold text-[#181311] dark:text-white">₹45,000</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-neutral-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-blue-600">shopping_bag</span>
                                        <span className="text-sm font-medium text-[#886c63]">Items Collected</span>
                                    </div>
                                    <span className="text-base font-bold text-[#181311] dark:text-white">5</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-neutral-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-red-500">favorite</span>
                                        <span className="text-sm font-medium text-[#886c63]">Lives Touched</span>
                                    </div>
                                    <span className="text-base font-bold text-[#181311] dark:text-white">3 Families</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#e85e30]/10">
                                <a href="/sponsor" className="w-full bg-[#e85e30] hover:bg-[#e85e30]/90 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-[#e85e30]/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                                    Donate Again
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
