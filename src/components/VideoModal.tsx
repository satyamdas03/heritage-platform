'use client';

import React, { useState, useRef, useEffect } from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VIDEOS = [
    '/videos/video-1.mp4',
    '/videos/video-2.mp4'
];

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(err => console.log('Autoplay blocked:', err));
        }
    }, [currentIndex, isOpen]);

    const handleVideoEnd = () => {
        if (currentIndex < VIDEOS.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            onClose();
        }
    };

    const handleSkip = () => {
        if (currentIndex < VIDEOS.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            onClose(); // Or just stay on last video? User requested skip to 2nd. If on 2nd, maybe close or nothing.
            // Requirement: "arrow button, which if the user clicks the 1st video will be skipped and the 2nd video will appear"
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-all"
                >
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>

                {/* Video Player */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    controls
                    onEnded={handleVideoEnd}
                >
                    <source src={VIDEOS[currentIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Skip/Next Button - Only show if not on last video */}
                {currentIndex < VIDEOS.length - 1 && (
                    <button
                        onClick={handleSkip}
                        className="absolute top-1/2 right-4 z-20 p-4 bg-white/10 hover:bg-[#ec9213] text-white rounded-full transition-all backdrop-blur-md transform -translate-y-1/2 group"
                        title="Next Video"
                    >
                        <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">arrow_forward</span>
                    </button>
                )}

                {/* Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {VIDEOS.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#ec9213]' : 'w-2 bg-white/30'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
