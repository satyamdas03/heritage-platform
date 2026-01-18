"use client";

import React, { useState } from "react";

const TIERS = [
    {
        id: "tier1",
        amount: 500,
        label: "Seed Support",
        desc: "Provides raw silk for 1 week",
        icon: "grass",
    },
    {
        id: "tier2",
        amount: 2000,
        label: "Heritage Guardian",
        desc: "Repairs for the Jacquard loom",
        icon: "handyman",
    },
    {
        id: "tier3",
        amount: 5000,
        label: "Legacy Builder",
        desc: "Funds apprenticeship training",
        icon: "school",
    },
];

export function DonationForm() {
    const [selectedTier, setSelectedTier] = useState("tier2");
    const [customAmount, setCustomAmount] = useState("");

    const handleTierChange = (id: string) => {
        setSelectedTier(id);
        setCustomAmount(""); // Clear custom if tier selected
    };

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setSelectedTier(""); // Clear tier if custom entered
    };

    const currentAmount = customAmount
        ? parseInt(customAmount) || 0
        : TIERS.find((t) => t.id === selectedTier)?.amount || 0;

    const [loading, setLoading] = useState(false);

    const handleSponsor = async () => {
        if (currentAmount <= 0) return;
        setLoading(true);

        try {
            // Mock item for donation
            const donationItem = {
                title: selectedTier ? TIERS.find(t => t.id === selectedTier)?.label : 'Custom Donation',
                price: currentAmount,
                quantity: 1
            };

            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: [donationItem],
                    type: 'donation'
                }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                alert('Donation failed to initialize');
                setLoading(false);
            }
        } catch (error) {
            console.error('Donation error:', error);
            alert('Something went wrong');
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border border-primary/20 bg-[#1e252b] p-6 shadow-xl relative overflow-hidden lg:p-8">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 font-display">Sponsorship Goal</h3>
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-3xl font-bold text-primary font-display">₹45,000</span>
                        <span className="text-sm text-white/60 mb-1 font-sans">raised of ₹60,000</span>
                    </div>
                    <div className="w-full bg-[#4a3e30] rounded-full h-2.5 overflow-hidden">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-white/50 font-sans">
                        <span>75% Funded</span>
                        <span>12 Days Left</span>
                    </div>
                </div>

                <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4 font-sans">
                    Choose Impact Level
                </h4>

                <div className="flex flex-col gap-3 mb-6">
                    {TIERS.map((tier) => (
                        <label
                            key={tier.id}
                            className={`group relative flex cursor-pointer rounded-xl border p-4 shadow-sm transition-all ${selectedTier === tier.id
                                ? "border-primary bg-[#2d2418]"
                                : "border-[#4a3e30] bg-[#221a10] hover:border-primary/50 hover:bg-[#2d2418]"
                                }`}
                            onClick={() => handleTierChange(tier.id)}
                        >
                            <div className="flex flex-1 items-center justify-between">
                                <div className="flex gap-4 items-center">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4a3e30] text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">{tier.icon}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white font-display">{tier.label}</p>
                                        <p className="text-xs text-white/60 font-sans">{tier.desc}</p>
                                    </div>
                                </div>
                                <p className="text-lg font-bold text-white group-hover:text-primary transition-colors font-display">
                                    ₹{tier.amount.toLocaleString()}
                                </p>
                            </div>
                        </label>
                    ))}
                </div>

                {/* Custom Amount & Message */}
                <div className="space-y-4">
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-sans text-sm">
                            ₹
                        </span>
                        <input
                            className="w-full bg-[#221a10] border border-[#4a3e30] rounded-lg py-3 pl-8 pr-4 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary font-sans transition-all text-sm"
                            placeholder="Enter custom amount"
                            type="number"
                            value={customAmount}
                            onChange={handleCustomChange}
                        />
                    </div>
                    <textarea
                        className="w-full bg-[#221a10] border border-[#4a3e30] rounded-lg p-4 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary font-display resize-none text-sm transition-all"
                        placeholder="Write a message of support to Bishnu..."
                        rows={3}
                    ></textarea>
                </div>

                {/* CTA */}
                <button
                    onClick={handleSponsor}
                    disabled={loading || currentAmount <= 0}
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-[#221a10] font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <span>Processing...</span>
                    ) : (
                        <>
                            <span>Sponsor Now {currentAmount > 0 && `(₹${currentAmount.toLocaleString()})`}</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </>
                    )}
                </button>

                <p className="text-center text-xs text-white/40 mt-4 font-sans">
                    Secure payment powered by Stripe. <br /> Donations are eligible for 80G tax benefits.
                </p>
            </div>
        </div>
    );
}
