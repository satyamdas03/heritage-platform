import React from "react";

export function FilterSidebar() {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 hidden lg:block">
            <div>
                <h3 className="font-display text-lg font-bold mb-4 dark:text-white">Categories</h3>
                <div className="space-y-2">
                    {["All Artifacts", "Dokra Metal", "Kantha Textile", "Terracotta", "Wood Carving"].map(
                        (category, idx) => (
                            <label
                                key={category}
                                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-white/5 cursor-pointer group ${idx === 1 ? "bg-white dark:bg-white/5 shadow-sm" : ""
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-transparent"
                                    defaultChecked={idx === 1}
                                />
                                <span className={`font-body text-sm ${idx === 1 ? "font-medium text-text-main dark:text-white" : "text-text-muted group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-gray-200"}`}>
                                    {category}
                                </span>
                            </label>
                        )
                    )}
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                <h3 className="font-display text-lg font-bold mb-4 dark:text-white">Region</h3>
                <div className="space-y-2">
                    {["Bankura", "Birbhum", "Midnapore"].map((region) => (
                        <label
                            key={region}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-white/5 cursor-pointer group"
                        >
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-transparent"
                            />
                            <span className="font-body text-sm text-text-muted group-hover:text-text-main dark:text-gray-400 dark:group-hover:text-gray-200">
                                {region}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <h4 className="font-bold text-primary mb-2 text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">verified</span>
                    Authenticity Guarantee
                </h4>
                <p className="text-xs text-text-muted dark:text-gray-400 leading-relaxed">
                    Every item is certified handmade and shipped directly from the artisan&apos;s village cooperative.
                </p>
            </div>
        </aside>
    );
}
