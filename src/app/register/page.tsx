import React from "react";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f6f6f8] dark:bg-[#101022] font-sans text-slate-900 dark:text-white">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-8 text-[#1313ec]">
                            <span className="material-symbols-outlined text-3xl">temple_hindu</span>
                        </div>
                        <h1 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
                            Bengal Heritage Foundation
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex flex-col items-end mr-2">
                            <span className="text-xs text-slate-500 font-medium">Connectivity</span>
                            <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold">
                                <span className="material-symbols-outlined text-[14px]">wifi</span> Online
                            </span>
                        </div>
                        <div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </div>
                        <div className="size-9 rounded-full bg-[#eef0ff] dark:bg-indigo-900/30 flex items-center justify-center text-[#1313ec] cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Layout */}
            <main className="flex-1 w-full max-w-[1000px] mx-auto p-4 md:p-8 flex flex-col gap-6">
                {/* Header & Toggle Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                            Artisan Registration Portal
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
                            Preserving the Soul of Bengal — Digital Home Initiative
                        </p>
                    </div>
                    {/* Agent Toggle */}
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-xl flex items-center gap-4 shadow-sm">
                        <div className="flex flex-col text-right">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                Mode
                            </span>
                            <span className="text-sm font-bold text-[#1313ec]">Field Agent</span>
                        </div>
                        <label className="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-slate-600 p-0.5 transition-colors">
                            <div className="h-[24px] w-[24px] rounded-full bg-white shadow-sm transition-all translate-x-[20px] bg-[#1313ec]"></div>
                            <input className="invisible absolute" type="checkbox" defaultChecked />
                        </label>
                    </div>
                </div>

                {/* Progress Stepper */}
                <div className="w-full py-4 overflow-x-auto">
                    <div className="flex items-center min-w-[600px] justify-between relative">
                        {/* Line background */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10 rounded"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20%] h-1 bg-[#1313ec] -z-10 rounded"></div>
                        {/* Steps */}
                        {[
                            { label: "Personal Info", icon: "person", active: true },
                            { label: "Craft Details", icon: "palette", active: false },
                            { label: "Village Identity", icon: "holiday_village", active: false },
                            { label: "Heritage Story", icon: "history_edu", active: false },
                        ].map((step, i) => (
                            <div
                                key={i}
                                className={`flex flex-col items-center gap-2 group cursor-pointer ${step.active ? "" : "opacity-50"
                                    }`}
                            >
                                <div
                                    className={`size-10 rounded-full flex items-center justify-center font-bold ring-4 ring-white dark:ring-[#101022] ${step.active
                                            ? "bg-[#1313ec] text-white shadow-lg shadow-[#1313ec]/30"
                                            : "bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-400"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                                </div>
                                <span
                                    className={`text-sm font-medium ${step.active ? "text-[#1313ec] font-bold" : "text-slate-500"
                                        }`}
                                >
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Form Card */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    {/* Card Header */}
                    <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 bg-[#eef0ff]/50 dark:bg-slate-800/50 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#1313ec]">badge</span>
                            Basic Information
                        </h3>
                        <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded dark:bg-blue-900 dark:text-blue-100">
                            Step 1 of 4
                        </span>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col gap-8">
                        {/* Row 1: Names */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2 group">
                                <div className="flex justify-between">
                                    <span className="text-slate-900 dark:text-slate-200 font-semibold text-sm">
                                        Full Name (English)
                                    </span>
                                    <span className="text-xs text-slate-400">As per ID proof</span>
                                </div>
                                <div className="relative">
                                    <input
                                        className="w-full h-12 pl-4 pr-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1313ec] focus:border-[#1313ec] transition-all text-base placeholder:text-slate-400"
                                        placeholder="e.g. Rahul Das"
                                        type="text"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-[#1313ec] hover:bg-[#eef0ff] dark:hover:bg-slate-600 rounded-full transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">mic</span>
                                    </button>
                                </div>
                            </label>
                            <label className="flex flex-col gap-2 group">
                                <div className="flex justify-between">
                                    <span className="text-slate-900 dark:text-slate-200 font-semibold text-sm">
                                        Full Name (Bengali)
                                    </span>
                                    <span className="text-xs text-slate-400">নাম লিখুন</span>
                                </div>
                                <div className="relative">
                                    <input
                                        className="w-full h-12 pl-4 pr-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1313ec] focus:border-[#1313ec] transition-all text-base placeholder:text-slate-400"
                                        placeholder="উদাহরণ: রাহুল দাস"
                                        type="text"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-[#1313ec] hover:bg-[#eef0ff] dark:hover:bg-slate-600 rounded-full transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">mic</span>
                                    </button>
                                </div>
                            </label>
                        </div>

                        {/* Row 2: Experience & Contact */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-slate-900 dark:text-slate-200 font-semibold text-sm">
                                    Years of Experience
                                </span>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                                    </div>
                                    <input
                                        className="w-full h-12 pl-12 pr-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1313ec] focus:border-[#1313ec] transition-all text-base"
                                        placeholder="25"
                                        type="number"
                                    />
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-slate-900 dark:text-slate-200 font-semibold text-sm">
                                    Primary Contact Number
                                </span>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">call</span>
                                    </div>
                                    <input
                                        className="w-full h-12 pl-12 pr-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1313ec] focus:border-[#1313ec] transition-all text-base"
                                        placeholder="+91 98765 43210"
                                        type="tel"
                                    />
                                </div>
                            </label>
                        </div>

                        <div className="h-px bg-slate-200 dark:bg-slate-700 w-full my-2"></div>

                        {/* Media Upload Zone */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-slate-900 dark:text-white font-bold text-lg">
                                Capture the Artist
                            </h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm -mt-3">
                                High quality photos help in creating a distinct digital identity.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-[#1313ec] transition-all cursor-pointer group bg-slate-50/50 dark:bg-slate-800">
                                    <div className="size-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-[#1313ec] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">face</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-900 dark:text-white font-semibold">Artisan Portrait</p>
                                        <p className="text-slate-500 text-xs mt-1">Click to take photo or upload</p>
                                    </div>
                                </div>
                                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-[#1313ec] transition-all cursor-pointer group bg-slate-50/50 dark:bg-slate-800">
                                    <div className="size-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">verified</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-900 dark:text-white font-semibold">Signature Work</p>
                                        <p className="text-slate-500 text-xs mt-1">Upload best masterpiece</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Helper Text */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 flex gap-3 items-start">
                            <span className="material-symbols-outlined text-[#1313ec] mt-0.5">info</span>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                    Why this information matters
                                </p>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Registering this artisan creates a permanent digital archive of their legacy. This
                                    data will be used to generate their unique &quot;Artisan ID Card&quot; and connect
                                    them directly to global buyers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Mobile Action Bar / Desktop Footer */}
                    <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between gap-4">
                        <button className="flex items-center justify-center gap-2 px-6 h-12 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full md:w-auto">
                            Previous
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-lg bg-[#1313ec] text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 w-full md:w-auto">
                            <span>Save &amp; Continue</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
