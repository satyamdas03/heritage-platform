'use client';

import React from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-md bg-white dark:bg-[#2d2418] rounded-2xl p-8 shadow-2xl text-center transform transition-all scale-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-[#ec9213] transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="w-16 h-16 bg-[#ec9213]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl text-[#ec9213]">support_agent</span>
                </div>

                <h2 className="text-2xl font-display font-bold mb-2 dark:text-[#f4f3f0]">Contact Us</h2>
                <p className="text-gray-500 dark:text-[#897961] mb-8">We'd love to hear from you. Reach out to us anytime.</p>

                <div className="space-y-4">
                    <a href="tel:+919903047208" className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f7f6] dark:bg-[#221a10] hover:bg-[#ec9213]/10 transition-colors group">
                        <span className="material-symbols-outlined text-[#ec9213] group-hover:scale-110 transition-transform">call</span>
                        <div className="text-left">
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Call Us</p>
                            <p className="text-lg font-bold dark:text-[#f4f3f0]">+91 9903047208</p>
                        </div>
                    </a>

                    <a href="mailto:suwarnabharat2022@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f7f6] dark:bg-[#221a10] hover:bg-[#ec9213]/10 transition-colors group">
                        <span className="material-symbols-outlined text-[#ec9213] group-hover:scale-110 transition-transform">mail</span>
                        <div className="text-left">
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Email Us</p>
                            <p className="text-lg font-bold dark:text-[#f4f3f0]">suwarnabharat2022@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
