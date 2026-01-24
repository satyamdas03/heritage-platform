'use client';

import React from 'react';
import Image from 'next/image';

export interface CraftItem {
    id: string;
    title: string;
    image: string;
    description: string[];
}

interface CraftModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: CraftItem | null;
}

export default function CraftModal({ isOpen, onClose, item }: CraftModalProps) {
    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 text-[#181411]">
            <div className="relative w-full max-w-4xl bg-[#f4f3f0] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-[#2d2418]">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-10"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <h2 className="text-3xl font-display font-bold text-[#2d2418] mb-2">{item.title}</h2>
                    <div className="w-16 h-1 bg-[#ec9213] mb-6 rounded-full" />

                    <div className="space-y-4 text-[#54493b] leading-relaxed">
                        {item.description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
