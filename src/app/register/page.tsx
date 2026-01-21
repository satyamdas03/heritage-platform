'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState(1);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            if (res.ok) {
                router.push('/login?registered=true');
            } else {
                const data = await res.json();
                setError(data.error || 'Registration failed');
            }
        } catch {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#fffaf5] flex flex-col text-stone-800">


            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1000px] mx-auto p-4 md:p-8 flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-200 pb-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">Artisan Onboarding</h2>
                        <p className="text-stone-500 text-base">Empowering rural makers through digital identity.</p>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="w-full overflow-x-auto pb-2">
                    <div className="flex items-center min-w-[600px] justify-between relative px-2">
                        <div className="absolute left-0 top-[18px] w-full h-0.5 bg-stone-200 -z-10"></div>
                        <div className="absolute left-0 top-[18px] h-0.5 bg-[#b45309] -z-10 transition-all duration-500" style={{ width: `${(step - 1) * 33.33}%` }}></div>
                        {[
                            { label: 'Personal Info', icon: 'badge' },
                            { label: 'Craft Details', icon: 'palette' },
                            { label: 'Village Identity', icon: 'holiday_village' },
                        ].map((s, idx) => (
                            <div key={s.label} className="flex flex-col items-center gap-3 group cursor-pointer relative z-10">
                                <div className={`size-9 rounded-full ${idx + 1 <= step ? 'bg-[#b45309] text-white' : 'bg-white border-2 border-stone-300 text-stone-400'} flex items-center justify-center shadow-sm ring-4 ring-[#fffaf5] transition-colors`}>
                                    <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                                </div>
                                <span className={`text-xs font-medium ${idx + 1 <= step ? 'text-[#b45309] font-bold' : 'text-stone-500'}`}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="px-6 py-5 border-b border-stone-100 bg-orange-50/50 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                            Basic Information
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white border border-stone-200 text-stone-600 rounded-full">Step {step} of 3</span>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 md:p-10 flex flex-col gap-8">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <label className="flex flex-col gap-2">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-stone-700 font-semibold text-sm">Full Name</span>
                                    <span className="text-xs text-stone-400 italic">As per Aadhaar/ID</span>
                                </div>
                                <div className="relative">
                                    <input
                                        name="name"
                                        required
                                        className="w-full h-12 pl-4 pr-12 rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#b45309]/20 focus:border-[#b45309] transition-all text-base placeholder:text-stone-400"
                                        placeholder="e.g. Rahul Das"
                                        type="text"
                                    />
                                    <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-[#b45309] hover:bg-orange-50 rounded-full transition-colors" title="Use Voice Input">
                                        <span className="material-symbols-outlined text-[20px]">mic</span>
                                    </button>
                                </div>
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-stone-700 font-semibold text-sm">Email Address</span>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                    </div>
                                    <input
                                        name="email"
                                        required
                                        className="w-full h-12 pl-12 pr-4 rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#b45309]/20 focus:border-[#b45309] transition-all text-base"
                                        placeholder="your@email.com"
                                        type="email"
                                    />
                                </div>
                            </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <label className="flex flex-col gap-2">
                                <span className="text-stone-700 font-semibold text-sm">Password</span>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">lock</span>
                                    </div>
                                    <input
                                        name="password"
                                        required
                                        minLength={6}
                                        className="w-full h-12 pl-12 pr-4 rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#b45309]/20 focus:border-[#b45309] transition-all text-base"
                                        placeholder="At least 6 characters"
                                        type="password"
                                    />
                                </div>
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-stone-700 font-semibold text-sm">Primary Contact</span>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">call</span>
                                    </div>
                                    <input
                                        className="w-full h-12 pl-12 pr-4 rounded-lg border border-stone-300 bg-white text-stone-900 focus:ring-2 focus:ring-[#b45309]/20 focus:border-[#b45309] transition-all text-base"
                                        placeholder="+91 98765 43210"
                                        type="tel"
                                    />
                                </div>
                            </label>
                        </div>

                        <div className="h-px bg-stone-100 w-full"></div>

                        {/* Capture Section */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <h4 className="text-stone-900 font-bold text-lg">Capture the Artist</h4>
                                <p className="text-stone-500 text-sm">Photos help create a distinct digital identity for Suwarna Bharat registry.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                                <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-orange-50 hover:border-[#b45309] transition-all cursor-pointer group bg-stone-50/30">
                                    <div className="size-16 rounded-full bg-orange-100 text-[#b45309] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                        <span className="material-symbols-outlined text-3xl">face_6</span>
                                    </div>
                                    <div>
                                        <p className="text-stone-900 font-bold">Artisan Portrait</p>
                                        <p className="text-stone-500 text-xs mt-1">Tap to capture or upload photo</p>
                                    </div>
                                </div>
                                <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:bg-orange-50 hover:border-[#b45309] transition-all cursor-pointer group bg-stone-50/30">
                                    <div className="size-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                        <span className="material-symbols-outlined text-3xl">verified</span>
                                    </div>
                                    <div>
                                        <p className="text-stone-900 font-bold">Signature Work</p>
                                        <p className="text-stone-500 text-xs mt-1">Upload their masterpiece</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 flex gap-3 items-start">
                            <span className="material-symbols-outlined text-stone-500 mt-0.5">info</span>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-bold text-stone-800">Why this information matters</p>
                                <p className="text-xs text-stone-600 leading-relaxed">
                                    Data collected here is securely stored in the Suwarna Bharat national registry. This information will generate the Artisan&apos;s &quot;Golden ID Card&quot; used for fair trade certification.
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="bg-stone-50 border-t border-stone-200 p-6 flex items-center justify-between gap-4 -mx-10 -mb-10 mt-4">
                            <Link href="/login" className="flex items-center justify-center gap-2 px-6 h-12 rounded-lg border border-stone-300 text-stone-600 font-bold hover:bg-white transition-colors">
                                Already Registered?
                            </Link>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 px-8 h-12 rounded-lg bg-[#b45309] text-white font-bold hover:bg-[#92400e] transition-colors shadow-sm group disabled:opacity-50"
                            >
                                <span>{loading ? 'Registering...' : 'Register & Continue'}</span>
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
