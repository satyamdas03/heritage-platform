import React from "react";

interface ProductCardProps {
    id: string;
    title: string;
    price: string;
    artisanName: string;
    artisanImage: string;
    productImage: string;
    location: string;
    impactScore: number;
    impactLabel: string;
    isBestseller?: boolean;
    isGI?: boolean;
    isLimited?: boolean;
}

export function ProductCard({
    title,
    price,
    artisanName,
    artisanImage,
    productImage,
    impactScore,
    impactLabel,
    isBestseller,
    isGI,
    isLimited,
}: ProductCardProps) {
    return (
        <div className="group flex flex-col rounded-xl bg-card-light dark:bg-card-dark shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 dark:border-white/5 overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${productImage}')` }}
                ></div>
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {isGI && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-text-main shadow-sm backdrop-blur-sm dark:bg-black/80 dark:text-white">
                            <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                            GI Tagged
                        </span>
                    )}
                    {isBestseller && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
                            Bestseller
                        </span>
                    )}
                    {isLimited && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-text-main shadow-sm backdrop-blur-sm dark:bg-black/80 dark:text-white">
                            Only 1 Left
                        </span>
                    )}
                </div>
                <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-text-muted hover:text-red-500 hover:bg-white shadow-sm transition-colors dark:bg-black/60 dark:text-gray-300">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
            </div>
            <div className="flex flex-col gap-3 p-5 flex-1">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-bold text-text-main dark:text-white leading-tight group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                    </div>
                    <p className="mt-1 font-body text-sm text-text-muted dark:text-gray-400">
                        By {artisanName}
                    </p>
                </div>
                <div className="mt-auto pt-2 space-y-4">
                    <div className="flex items-center gap-2 rounded-lg bg-background-light p-2 dark:bg-white/5">
                        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-200">
                            <div
                                className="h-full w-full bg-gray-300 bg-cover bg-center"
                                style={{ backgroundImage: `url('${artisanImage}')` }}
                            ></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-1">
                                <div className="h-1.5 w-full max-w-[80px] rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-primary"
                                        style={{ width: `${impactScore}%` }}
                                    ></div>
                                </div>
                                <span className="text-[10px] font-bold text-primary">{impactScore}%</span>
                            </div>
                            <p className="text-[10px] font-medium text-text-muted dark:text-gray-400">
                                {impactLabel}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-dashed border-gray-200 dark:border-white/10 pt-3">
                        <span className="font-display text-lg font-bold text-text-main dark:text-white">
                            {price}
                        </span>
                        <button className="flex items-center gap-1 rounded-md bg-text-main px-3 py-1.5 text-xs font-bold text-white hover:bg-primary transition-colors dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white">
                            Add to Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
