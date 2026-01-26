'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import ProductDetailModal from './ProductDetailModal';

const CATEGORIES = ['All Artifacts', 'Textile', 'Saree', 'Stole', 'Fabric', 'Jewellery', 'Home Decor', 'Ayurveda Corner'];

const ITEMS_PER_PAGE = 7;

export default function MarketplaceContent() {
    const [selectedCategory, setSelectedCategory] = useState('All Artifacts');
    const [currentPage, setCurrentPage] = useState(1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Filter and Sort/Interleave Logic
    const displayedProducts = useMemo(() => {
        if (selectedCategory === 'All Artifacts') {
            // Group by category
            const grouped: { [key: string]: Product[] } = {};
            PRODUCTS.forEach(p => {
                const cat = p.category || 'Other';
                if (!grouped[cat]) grouped[cat] = [];
                grouped[cat].push(p);
            });

            const categories = Object.keys(grouped);
            const interleaved: Product[] = [];
            const maxLen = Math.max(...categories.map(c => grouped[c].length));

            for (let i = 0; i < maxLen; i++) {
                categories.forEach(cat => {
                    if (grouped[cat][i]) {
                        interleaved.push(grouped[cat][i]);
                    }
                });
            }
            return interleaved;
        } else {
            return PRODUCTS.filter(p => p.category === selectedCategory);
        }
    }, [selectedCategory]);

    // Pagination Logic
    const totalItems = displayedProducts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const splitProducts = displayedProducts.slice(0, currentPage * ITEMS_PER_PAGE);
    // Wait, requirement: "user can browse 7 other products in the next page". 
    // Standard pagination usually shows ONE page at a time. "browse more products in the next page" -> Load NEXT set.
    // The previous prompt said: "at once only 7 pics ... will be shown in the page". 
    // So usually pagination replaces the items.

    const paginatedProducts = displayedProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#faf9f6] dark:bg-[#1c1917] text-[#292524]">
            {/* Hero Banner */}
            <div className="py-8 px-6 lg:px-10 max-w-[1440px] mx-auto">
                <div className="relative overflow-hidden rounded-xl bg-stone-900 text-white shadow-2xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-70"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvBIzdliePF_to7fG0oBtPs_n8JcXCq1eWW1y2S64YFBM8SDD2aIk_UoJv-86_dAoDayE3IfNw6RhfO3rsZXxPPm8bSGhySORona1KFJWFEApU6lvGGlFIbnjc0SO-CqIOtsMQ6qnUacAWhcsYweRbZWDlhS-qSOYKTNT7p9GMvKDSgaLc5AwOLWLCVGCaeQmJjFrwv_jSyREdNL8qXdCMgPcWQ7gUFtJqC-2FV2gzWcJK7BY27AdpmTu6fhjH8c-SzdWAiFG-fCY')`,
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-start justify-center gap-6 p-8 md:p-14 lg:p-20 max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#9f1239] animate-pulse shadow-[0_0_8px_rgba(255,100,100,0.8)]"></span>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Curated by Suwarna Bharat</span>
                        </div>
                        <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-7xl text-white drop-shadow-sm">
                            Where Tradition <br />
                            <span className="font-normal italic text-[#fcd34d]">Meets Soul.</span>
                        </h1>
                        <p className="text-lg text-stone-200 max-w-lg leading-relaxed font-light">
                            Discover the unparalleled craftsmanship of Bengal. From the red earth of Bankura to the looms of Phulia.
                        </p>
                    </div>
                </div>
            </div>

            <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 lg:px-10 pb-16">
                <div className="flex flex-col lg:flex-row gap-10 mt-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10 hidden lg:block pt-2">
                        <div>
                            <h3 className="text-lg font-bold mb-5 dark:text-white border-b border-stone-200 pb-2 dark:border-stone-800">Collections</h3>
                            <div className="space-y-3">
                                {CATEGORIES.map((category) => (
                                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            checked={selectedCategory === category}
                                            onChange={() => handleCategoryChange(category)}
                                            className="h-4 w-4 rounded border-stone-300 text-[#9f1239] focus:ring-[#9f1239] bg-transparent"
                                            type="checkbox" // UI looks like checkbox but acts like radio for now as per "selects... each item represented"
                                        />
                                        <span className={`text-sm ${selectedCategory === category ? 'font-medium text-[#9f1239] dark:text-[#ec9213]' : 'text-[#78716c] group-hover:text-[#292524] dark:text-stone-400'}`}>
                                            {category}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="bg-stone-100 rounded-lg p-5 border border-stone-200 dark:bg-white/5 dark:border-white/10">
                            <h4 className="font-bold text-[#9f1239] mb-3 text-sm flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">verified_user</span>
                                Suwarna Guarantee
                            </h4>
                            <p className="text-xs text-[#78716c] dark:text-stone-400 leading-relaxed font-medium">
                                100% of the base price goes to the artisan cooperative.
                            </p>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold text-[#292524] dark:text-white">
                                {selectedCategory} <span className="text-base font-normal text-[#78716c] ml-2">({totalItems} items)</span>
                            </h2>
                        </div>

                        {totalItems === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-stone-400">
                                <span className="material-symbols-outlined text-6xl mb-4">inventory_2</span>
                                <p>No products found in this category yet.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                                {paginatedProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="group flex flex-col bg-transparent cursor-pointer"
                                        onClick={() => handleProductClick(product)}
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800 mb-4">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                style={{ backgroundImage: `url('${product.images[0]}')` }}
                                            ></div>
                                            <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-400 hover:text-[#9f1239] shadow-sm transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-lg font-medium text-[#292524] dark:text-white group-hover:text-[#9f1239] transition-colors line-clamp-1" title={product.title}>
                                                    {product.title}
                                                </h3>
                                                <span className="font-bold text-[#292524] dark:text-white whitespace-nowrap">₹{product.price.toLocaleString()}</span>
                                            </div>
                                            <p className="text-xs text-[#78716c] dark:text-stone-400">By {product.artist}</p>
                                            <div className="mt-3 flex items-center gap-2 border-t border-stone-100 pt-3 dark:border-stone-800">
                                                <div className="flex flex-col w-full">
                                                    <div className="flex items-center gap-1.5 justify-between">
                                                        <span className="text-[10px] font-bold text-[#9f1239]">85% Return to Artisan</span>
                                                        <div className="h-1 w-24 bg-stone-200 rounded-full overflow-hidden">
                                                            <div className="h-full bg-[#9f1239] w-[85%]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination Controls */}
                        <div className="flex justify-center items-center gap-6 mt-16">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all ${currentPage === 1 ? 'border-stone-200 text-stone-300 cursor-not-allowed' : 'border-[#9f1239] text-[#9f1239] hover:bg-[#9f1239] hover:text-white'}`}
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <span className="text-sm font-medium text-stone-500">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all ${currentPage === totalPages ? 'border-stone-200 text-stone-300 cursor-not-allowed' : 'border-[#9f1239] text-[#9f1239] hover:bg-[#9f1239] hover:text-white'}`}
                            >
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <ProductDetailModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />
        </div>
    );
}
