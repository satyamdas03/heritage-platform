'use client';

import { useState } from 'react';

export default function SponsorPage() {
    const [selectedTier, setSelectedTier] = useState('guardian');

    const tiers = [
        { id: 'seed', name: 'Seed Support', icon: 'grass', description: 'Provides raw silk for 1 week', amount: 500 },
        { id: 'guardian', name: 'Heritage Guardian', icon: 'handyman', description: 'Repairs for the Jacquard loom', amount: 2000 },
        { id: 'legacy', name: 'Legacy Builder', icon: 'school', description: 'Funds apprenticeship training', amount: 5000 },
    ];

    const handleSponsor = async () => {
        const tier = tiers.find(t => t.id === selectedTier);
        if (!tier) return;

        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'donation', amount: tier.amount }),
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('Checkout error:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#221a10] text-white">
            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 lg:py-12 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Story Section */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <div className="flex items-center gap-2 text-[#ec9213]/90 text-xs tracking-[0.1em] uppercase font-bold">
                            <span className="material-symbols-outlined text-[16px]">verified</span>
                            <span>Verified Artisan • Bishnupur, West Bengal</span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
                                Help Bishnu Restore His <span className="text-[#ec9213] italic">Ancestral Loom</span>
                            </h1>
                            <div className="flex gap-3 flex-wrap pt-2">
                                <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-[#4a3e30] bg-[#2d2418]/50 px-4">
                                    <span className="material-symbols-outlined text-[16px] text-[#ec9213]">texture</span>
                                    <p className="text-white/90 text-xs font-medium uppercase tracking-wide">Baluchari Weaving</p>
                                </div>
                                <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-[#4a3e30] bg-[#2d2418]/50 px-4">
                                    <span className="material-symbols-outlined text-[16px] text-[#ec9213]">history_edu</span>
                                    <p className="text-white/90 text-xs font-medium uppercase tracking-wide">50+ Years Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Artisan Image */}
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-[#4a3e30] shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#221a10]/90 via-transparent to-transparent z-10 opacity-60"></div>
                            <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC80QI15uHppt5Kk-Vh0kBKoFR6LwiK_kGX_BXrzwtD7xh8KBRaaWppR7ypfSM1JFDgNHtIV-Zfj6gCnWbswzR3SF_sLmvDLtji7FoiSGoX2WemVvUrtVJe5apmxZv-qK5dKnWWqMo7oMgzw-RkoCC8sRh5BohdWGiyFPsmDXRcGxDKzvyTlSljjHVRhLY4bD9krnhc7MpRQldqsUmwjrh7p7QH704use4Wf3Lcw9HOOzcKzN6Snv1QFiIn9VTZVV2l7Q8x79HAD8')` }}></div>
                            <div className="absolute bottom-6 left-6 z-20">
                                <button className="bg-[#221a10]/80 hover:bg-black/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm tracking-wide flex items-center gap-2 transition-colors border border-white/10 hover:border-[#ec9213]/50">
                                    <span className="material-symbols-outlined text-[20px] text-[#ec9213]">play_circle</span>
                                    Watch his story
                                </button>
                            </div>
                        </div>

                        {/* Story */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h3 className="text-2xl font-bold text-white mb-6 mt-2 border-b border-[#4a3e30] pb-4 inline-block">The Story of Need</h3>
                            <p className="text-white/80 leading-loose text-lg mb-8 font-light">
                                Bishnu has been weaving Baluchari saris for over 50 years, a craft that narrates mythology through silk threads. However, with the rising cost of pure silk and his aging Jacquard loom breaking down frequently, he struggles to keep his small workshop open.
                            </p>
                            <div className="relative pl-8 py-4 my-10 bg-[#2d2418]/20 rounded-r-xl border-l-2 border-[#ec9213]">
                                <span className="material-symbols-outlined absolute -top-4 left-4 text-4xl text-[#ec9213]/20 rotate-180">format_quote</span>
                                <blockquote className="italic text-xl text-white font-medium leading-relaxed">
                                    &quot;This loom was my father&apos;s, and his father&apos;s before him. If it stops, our history stops. I only wish to teach my grandson, Rahul, so the stories don&apos;t die with me.&quot;
                                </blockquote>
                            </div>
                            <p className="text-white/80 leading-loose text-lg font-light">
                                Your support will not only help him buy a month&apos;s supply of raw mulberry silk and repair the Jacquard mechanism but also fund the formal apprenticeship of his grandson.
                            </p>
                        </div>
                    </div>

                    {/* Donation Panel */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 flex flex-col gap-6">
                            <div className="bg-[#2d2418] rounded-xl border border-[#ec9213]/20 p-6 lg:p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ec9213]/10 blur-[80px] rounded-full pointer-events-none"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Progress */}
                                    <div className="mb-8 text-center border-b border-white/10 pb-6">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#ec9213] mb-2">Funding Goal</h3>
                                        <div className="flex justify-center items-baseline gap-2 mb-4">
                                            <span className="text-4xl font-bold text-white">₹45,000</span>
                                            <span className="text-sm text-white/50">of ₹60,000</span>
                                        </div>
                                        <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden mb-3 border border-white/5">
                                            <div className="bg-[#ec9213] h-2 rounded-full relative overflow-hidden" style={{ width: '75%' }}>
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[11px] font-medium uppercase tracking-wider text-white/40">
                                            <span>75% Funded</span>
                                            <span>12 Days Left</span>
                                        </div>
                                    </div>

                                    {/* Tiers */}
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 pl-1">Select Contribution</h4>
                                    <div className="flex flex-col gap-3 mb-6">
                                        {tiers.map((tier) => (
                                            <label key={tier.id} className="group relative flex cursor-pointer rounded-lg border border-[#4a3e30] bg-[#221a10]/80 p-4 shadow-sm hover:border-[#ec9213]/50 transition-all duration-300">
                                                <input
                                                    className="peer sr-only"
                                                    name="donation-tier"
                                                    type="radio"
                                                    checked={selectedTier === tier.id}
                                                    onChange={() => setSelectedTier(tier.id)}
                                                />
                                                <div className="flex flex-1 items-center justify-between">
                                                    <div className="flex gap-4 items-center">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2d2418] border border-[#4a3e30] text-white group-hover:text-[#ec9213] transition-colors">
                                                            <span className="material-symbols-outlined text-[20px]">{tier.icon}</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-white">{tier.name}</p>
                                                            <p className="text-xs text-white/50 mt-0.5">{tier.description}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-lg font-bold text-white group-hover:text-[#ec9213] transition-colors">₹{tier.amount.toLocaleString()}</p>
                                                </div>
                                                <div className="absolute inset-0 rounded-lg ring-1 ring-transparent peer-checked:ring-[#ec9213] peer-checked:bg-[#ec9213]/5 pointer-events-none transition-all"></div>
                                            </label>
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleSponsor}
                                        className="w-full mt-6 bg-[#ec9213] hover:bg-white hover:text-[#221a10] text-[#221a10] font-bold py-4 px-6 rounded-lg shadow-lg shadow-[#ec9213]/20 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 group"
                                    >
                                        <span className="tracking-wide uppercase text-sm">Sponsor Now</span>
                                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <div className="flex items-center justify-center gap-2 mt-5 opacity-50">
                                        <span className="material-symbols-outlined text-[14px]">lock</span>
                                        <p className="text-center text-[10px] uppercase tracking-wide">
                                            Secure payment • 80G Tax Benefits
                                        </p>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="flex justify-around gap-2 px-4 py-2 border-t border-white/5 pt-6 mt-4">
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className="p-2 rounded-full bg-[#2d2418] border border-[#4a3e30]">
                                            <span className="material-symbols-outlined text-[#ec9213] text-[20px]">verified_user</span>
                                        </div>
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-white/60">Verified NGO</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className="p-2 rounded-full bg-[#2d2418] border border-[#4a3e30]">
                                            <span className="material-symbols-outlined text-[#ec9213] text-[20px]">currency_rupee</span>
                                        </div>
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-white/60">100% Transfer</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className="p-2 rounded-full bg-[#2d2418] border border-[#4a3e30]">
                                            <span className="material-symbols-outlined text-[#ec9213] text-[20px]">description</span>
                                        </div>
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-white/60">Monthly Reports</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
