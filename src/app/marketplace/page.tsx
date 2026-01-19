import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getProducts() {
    return prisma.product.findMany({
        include: { artisan: true },
        orderBy: { id: 'desc' },
    });
}

export default async function MarketplacePage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-[#faf9f6] dark:bg-[#1c1917] text-[#292524]">
            {/* Top Banner */}
            <div className="w-full bg-[#d97706] text-white text-[11px] font-medium tracking-wide">
                <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-6 lg:px-10">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 opacity-90">
                            <span className="material-symbols-outlined text-[16px]">call</span> +91 33 2461 8888
                        </span>
                        <span className="hidden sm:flex items-center gap-1.5 opacity-90">
                            <span className="material-symbols-outlined text-[16px]">mail</span> namaste@suwarnabharat.in
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-white/80">Worldwide Shipping Available</span>
                    </div>
                </div>
            </div>

            {/* Hero Banner */}
            <div className="py-8 px-6 lg:px-10 max-w-[1440px] mx-auto">
                <div className="relative overflow-hidden rounded-xl bg-stone-900 text-white shadow-2xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-70"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvBIzdliePF_to7fG0oBtPs_n8JcXCq1eWW1y2S64YFBM8SDD2aIk_UoJv-86_dAoDayE3IfNw6RhfO3rsZXxPPm8bSGhySORona1KFJWFEApU6lvFGlFIbnjc0SO-CqIOtsMQ6qnUacAWhcsYweRbZWDlhS-qSOYKTNT7p9GMvKDSgaLc5AwOLWLCVGCaeQmJjFrwv_jSyREdNL8qXdCMgPcWQ7gUFtJqC-2FV2gzWcJK7BY27AdpmTu6fhjH8c-SzdWAiFG-fCY')`,
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

            {/* Main Content */}
            <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 lg:px-10 pb-16">
                <div className="flex flex-col lg:flex-row gap-10 mt-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10 hidden lg:block pt-2">
                        <div>
                            <h3 className="text-lg font-bold mb-5 dark:text-white border-b border-stone-200 pb-2 dark:border-stone-800">Collections</h3>
                            <div className="space-y-3">
                                {['All Artifacts', 'Dokra Metal', 'Kantha Stitch', 'Terracotta', 'Baluchari Silk'].map((category, idx) => (
                                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            defaultChecked={idx === 0}
                                            className="h-4 w-4 rounded border-stone-300 text-[#9f1239] focus:ring-[#9f1239] bg-transparent"
                                            type="checkbox"
                                        />
                                        <span className={`text-sm ${idx === 0 ? 'font-medium text-[#292524] dark:text-white' : 'text-[#78716c] group-hover:text-[#292524] dark:text-stone-400'}`}>
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
                                Heritage Treasures <span className="text-base font-normal text-[#78716c] ml-2">({products.length} items)</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                            {products.map((product) => (
                                <Link key={product.id} href={`/marketplace/${product.id}`} className="group flex flex-col bg-transparent">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800 mb-4">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${product.imageUrl}')` }}
                                        ></div>
                                        <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-400 hover:text-[#9f1239] shadow-sm transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                                            <span className="material-symbols-outlined text-[18px]">favorite</span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-medium text-[#292524] dark:text-white group-hover:text-[#9f1239] transition-colors">
                                                {product.title}
                                            </h3>
                                            <span className="font-bold text-[#292524] dark:text-white">₹{product.price.toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-[#78716c] dark:text-stone-400">By {product.artisan.name}</p>
                                        <div className="mt-3 flex items-center gap-2 border-t border-stone-100 pt-3 dark:border-stone-800">
                                            <div
                                                className="h-6 w-6 rounded-full bg-cover bg-center border border-stone-200"
                                                style={{ backgroundImage: `url('${product.artisan.imageUrl}')` }}
                                            ></div>
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="h-1 w-16 bg-stone-200 rounded-full overflow-hidden">
                                                        <div className="h-full bg-[#9f1239] w-[85%]"></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-[#9f1239]">85% Return</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="my-20 border-y border-stone-200 py-16 text-center dark:border-stone-800">
                    <span className="mb-6 block text-4xl text-[#9f1239] opacity-30">&quot;</span>
                    <p className="mx-auto max-w-2xl text-2xl md:text-3xl italic leading-relaxed text-[#292524] dark:text-white">
                        We are the storytellers of the soil. <br />Each artifact carries the song of the river and the heat of the kiln.
                    </p>
                    <div className="mt-8 flex justify-center items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9f1239]">Suwarna Bharat Philosophy</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
