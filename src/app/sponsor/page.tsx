import React from "react";
import { DonationForm } from "@/components/sponsor/DonationForm";

export default function SponsorPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f8f7f6] dark:bg-[#221a10]">
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 lg:py-12 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Narrative & Story */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {/* Breadcrumbs / Top Label */}
                        <div className="flex items-center gap-2 text-primary text-sm font-sans tracking-wide uppercase font-semibold">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                            <span>Verified Artisan • Bishnupur, West Bengal</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] text-[#181511] dark:text-white font-display">
                            Help Bishnu Restore His{" "}
                            <span className="text-primary decoration-2 underline-offset-4 underline">
                                Ancestral Loom
                            </span>
                        </h1>

                        {/* Chips */}
                        <div className="flex gap-2 flex-wrap text-[#181511] dark:text-white">
                            <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-gray-200 dark:border-[#4a3e30] bg-white dark:bg-[#2d2418] px-4 hover:border-primary/50 transition-colors cursor-default">
                                <span className="material-symbols-outlined text-[16px] text-primary">texture</span>
                                <p className="text-xs font-sans font-medium uppercase tracking-wide">
                                    Baluchari Weaving
                                </p>
                            </div>
                            <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-gray-200 dark:border-[#4a3e30] bg-white dark:bg-[#2d2418] px-4 hover:border-primary/50 transition-colors cursor-default">
                                <span className="material-symbols-outlined text-[16px] text-primary">
                                    location_on
                                </span>
                                <p className="text-xs font-sans font-medium uppercase tracking-wide">
                                    Bankura District
                                </p>
                            </div>
                            <div className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-gray-200 dark:border-[#4a3e30] bg-white dark:bg-[#2d2418] px-4 hover:border-primary/50 transition-colors cursor-default">
                                <span className="material-symbols-outlined text-[16px] text-primary">
                                    history_edu
                                </span>
                                <p className="text-xs font-sans font-medium uppercase tracking-wide">
                                    50+ Years Experience
                                </p>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#4a3e30] group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60"></div>
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC80QI15uHppt5Kk-Vh0kBKoFR6LwiK_kGX_BXrzwtD7xh8KBRaaWppR7ypfSM1JFDgNHtIV-Zfj6gCnWbswzR3SF_sLmvDLtji7FoiSGoX2WemVvUrtVJe5apmxZv-qK5dKnWWqMo7oMgzw-RkoCC8sRh5BohdWGiyFPsmDXRcGxDKzvyTlSljjHVRhLY4bD9krnhc7MpRQldqsqUmwjrh7p7QH704use4Wf3Lcw9HOOzcKzN6Snv1QFiIn9VTZVV2l7Q8x79HAD8')",
                                }}
                            ></div>
                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                                <button className="bg-black/50 hover:bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">play_circle</span>
                                    Watch his story
                                </button>
                            </div>
                        </div>

                        {/* Story Text */}
                        <div className="prose prose-lg dark:prose-invert max-w-none font-display text-[#181511] dark:text-white/80">
                            <h3 className="text-2xl font-bold text-[#181511] dark:text-white mb-4 mt-2">
                                The Story of Need
                            </h3>
                            <p className="leading-relaxed text-lg mb-6">
                                Bishnu has been weaving Baluchari saris for over 50 years, a craft that narrates
                                mythology through silk threads. However, with the rising cost of pure silk and his
                                aging Jacquard loom breaking down frequently, he struggles to keep his small
                                workshop open. The rhythm of the shuttle, once the heartbeat of his home, is now
                                often silenced by repairs he cannot afford.
                            </p>
                            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-gray-100 dark:bg-[#2d2418]/30 rounded-r-lg italic text-[#181511] dark:text-white/90">
                                &quot;This loom was my father&apos;s, and his father&apos;s before him. If it stops,
                                our history stops. I only wish to teach my grandson, Rahul, so the stories don&apos;t
                                die with me.&quot;
                            </blockquote>
                            <p className="leading-relaxed text-lg">
                                Your support will not only help him buy a month&apos;s supply of raw mulberry silk
                                and repair the Jacquard mechanism but also fund the formal apprenticeship of his
                                grandson. This ensures this dying art form survives another generation, keeping the
                                legacy of Bishnupur alive.
                            </p>
                        </div>

                        {/* Gallery Preview */}
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {[
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuARZS2n2OIYTzY3YtRfptW_oCqJoJ2j3LbidTTINOJE4TbWTvOFWB8rwvgKDNIbEBi5Ut8YnqZO6HPbyz2QPh5vdZyS81OGJEaIwrPNj7CA40OsYoblfxixnW-H_0WTo16z1y4_4C9Fm9hH27e9Q0oly6u7K8QZ_LXSB5YVIKeT4K85ciS6F_2eTlMYVygtwS4zu858K4DEPSxVnQlsTxUP1Mu9ib7LcBEG4NKnf5P5HknI5L5P3_PEGKrw_JGvIpasMaXI5nCmOlw",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuAsiu6r4s1B6FuC7mSSIZtv9-Hy-mQ81Ejxoclo79qU85VjWz0B9v3PAb-JDsGmyAECfjOq_qsQU4OSxCSnQvzyjJxYGnn4cbGSDrz4cIYv0qvD7nXCM6rMcvZMOJu6NH2U8pvTSOoYt4bwL0Db_P-WhCsVVg9s9ZXoLoddFIWBQ4Ly6Ly-m7oI2fodbMOy5XLD_D425ui54ttG5pG5DqF1FDfQXSa6vQOYFr2VwGKajTC5Zpx2OXLS9DDHZSSXCMrKtWWXb7NydOY",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuDT-61CfVX-kDRfJyCM0RF5iaHzDXtaGqv2hx7dE9huH6bRDQujyPDYbwQIy4pJQFoLJuFEuZzf13svkIkZ5Q-4Lwvjtdcu2r96SZYMY88dSlQoLCQBhjweME8N7smDWt9tgBjX5H7uRLlP0c8GI78IG5D4xJUMLisBR60EqRrjWAJtm_ZOCsPCyEVQLwn1fVesEyYYwhJ27bNpHHTj67mn9xBITFOLipdMvbhrcMYAKsURIIiVNLVlhmJskRWNOCbSfPfYHMIlZwQ",
                            ].map((src, i) => (
                                <div
                                    key={i}
                                    className="aspect-square rounded-lg bg-gray-200 dark:bg-[#2d2418] overflow-hidden border border-gray-300 dark:border-[#4a3e30]"
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: `url('${src}')` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Donation Terminal */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 flex flex-col gap-6">
                            <DonationForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
