'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

export default function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
    const { addToCart } = useCart();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !product) return null;

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            artisan: product.artist,
            price: product.price,
            image: product.images[0],
            quantity: 1
        });
        alert('Added to cart!');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-[#1e1e1e] flex flex-col md:flex-row max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-stone-500 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-[#9f1239] dark:text-gray-300"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Image Section (Carousel) */}
                <div className="relative w-full md:w-1/2 bg-stone-100 dark:bg-[#121212] flex items-center justify-center min-h-[300px] md:min-h-full">
                    <img
                        src={product.images[currentImageIndex]}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                    />

                    {product.images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 text-stone-800 shadow-md hover:bg-white transition-colors"
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 text-stone-800 shadow-md hover:bg-white transition-colors"
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {product.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`h-2 w-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#9f1239] w-4' : 'bg-stone-400'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="mb-2">
                                <span className="inline-block px-3 py-1 bg-[#9f1239]/10 text-[#9f1239] text-xs font-bold rounded-full uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-text-main dark:text-white mb-2">{product.title}</h2>
                            <p className="text-stone-500 dark:text-stone-400 mb-6">By {product.artist}</p>

                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-4xl font-light text-text-main dark:text-white">₹{product.price.toLocaleString()}</span>
                                <span className="text-sm text-stone-500">Including taxes</span>
                            </div>

                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
                                Handcrafted with passion and tradition. This unique piece tells a story of heritage and skill passed down through generations.
                                <br /><br />
                                <span className="font-bold text-[#9f1239]">Suwarna Guarantee:</span> 85% of this purchase goes directly to the artisan cooperative.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={handleAddToCart}
                                className="w-full py-4 bg-[#9f1239] hover:bg-[#881030] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#9f1239]/20"
                            >
                                <span className="material-symbols-outlined">shopping_bag</span>
                                Add to Cart
                            </button>
                            <p className="text-center text-xs text-stone-400">
                                Free shipping on orders above ₹2000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
