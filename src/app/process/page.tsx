export default function ProcessPage() {
    const processSteps = [
        {
            title: 'Clay Core Preparation',
            icon: 'layers',
            description: 'River clay is molded to form the base shape. This core determines the final volume and stance of the artifact.',
            active: true,
        },
        {
            title: 'Wax Winding',
            icon: 'gesture',
            description: 'Resin & beeswax threads are wound around the dry core with extreme precision to create intricate lattice patterns.',
            active: false,
        },
        {
            title: 'Molten Casting',
            icon: 'local_fire_department',
            description: "The mold is fired. Wax melts out ('lost-wax'), and molten brass is poured into the void to take its permanent shape.",
            active: false,
        },
    ];

    const materials = [
        { name: 'Riverbed Clay', source: 'Ganges Tributary', label: '100% Organic', color: 'border-[#d97706]' },
        { name: 'Wild Beeswax', source: 'Sundarbans Forest', label: 'Cruelty Free', color: 'border-[#897261]' },
        { name: 'Recycled Brass', source: 'Local Metallurgy', label: 'Zero Waste', color: 'border-[#181411]' },
    ];

    return (
        <div className="min-h-screen bg-[#fefaf6] dark:bg-[#221810] text-[#181411]">
            {/* Hero */}
            <section className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden py-20 px-4">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUL5CvVJH-kFXL_hqrkkZ1KvBRY04z-7KFt18QpVXsZ7tG3ZhHdwiXl4EbJiBt5_CvMzozYqX8br4kynXzAzx9B7I_--P1RUyl7Ls-jsWv0WoCLOqpadsoI3qDxpjbsnKyy3VFyTSirsOqJkLEtQjr67jTUyaB5WgnxsvSIiYx7dCuAgORs7gSfHm9-BccOhLqUuq8ALZrfEC4AX8YMhWJf0sStAYf3QM-bhl4RcCCuE_jcO_xKqnbpPFwF7J-MQj1xYAG_34FlCo')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#140f0a]/40 to-[#140f0a]/80"></div>
                <div className="relative z-10 max-w-[800px] text-center text-white">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[1px] w-12 bg-[#d97706]"></div>
                        <span className="text-[#d97706] font-bold tracking-[0.2em] text-xs uppercase">Suwarna Bharat Srishti</span>
                        <div className="h-[1px] w-12 bg-[#d97706]"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-[-0.02em] mb-4">
                        Process &amp; Provenance
                    </h1>
                    <h2 className="text-gray-100 text-lg md:text-xl italic max-w-2xl mx-auto opacity-90">
                        &quot;From the sacred river clay to the artisan&apos;s kiln—witness the alchemy of Bengal&apos;s living heritage.&quot;
                    </h2>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <button className="rounded-full h-12 px-8 bg-[#d97706] hover:bg-[#b45309] transition-colors text-white text-sm font-bold tracking-wide uppercase shadow-lg">
                            Explore Anatomy
                        </button>
                        <button className="rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold tracking-wide uppercase shadow-lg">
                            Watch Film
                        </button>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-4 md:px-10 lg:px-40 bg-[#fdfcfb] dark:bg-[#221810]">
                <div className="max-w-[1080px] mx-auto">
                    <div className="border-b border-[#e6e0db] pb-6 mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-[#d97706] text-sm">science</span>
                                <span className="text-[#897261] text-xs font-bold uppercase tracking-widest">Technical Analysis • Fig 1.1</span>
                            </div>
                            <h2 className="text-[#181411] dark:text-white text-4xl font-bold leading-tight">The Lost-Wax Anatomy</h2>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-1">
                            <div className="flex items-center gap-2">
                                <span className="text-[#181411] dark:text-white font-bold text-lg">Dokra Horse</span>
                                <span className="bg-[#d97706]/10 text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Rare</span>
                            </div>
                            <p className="text-[#897261] text-sm">Region: Bankura, West Bengal</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Diagram */}
                        <div className="relative w-full lg:w-2/3 aspect-[4/3] bg-[#f8f5f2] dark:bg-[#2a201a] rounded-xl overflow-hidden border border-[#e6e0db] shadow-lg">
                            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf7T2K8D3tTHkwoQejYn65w5NMGNi8muqFxVjharaZ00lBd0eYsLxphnBv4m99dgWLAA_SxShF9TQXz6r1FOWfXA_JdX3CdTkzuAfgTk1yHfmFe44h11bYThV8UU5lyY5296UkamYbjSaujKeOj0Ck0wlxG51PgiDneUJPPFkcVknL0UTghXukfNBnf_4Ko2I2vBYMbq0vl83uxzGm6Hgc4fIZJsHmTBFgCSLFjfhSLwnyCWUY-buxeqe-jwkLtZqYuPUbACuR9eE')` }}></div>
                            <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-black/80 backdrop-blur-md px-4 py-3 border border-[#d97706]/20 shadow-lg text-xs font-mono text-[#181411] dark:text-gray-300 flex flex-col gap-1">
                                <div className="font-bold border-b border-dashed border-gray-300 pb-1 mb-1">SPECIMEN #SB-DKR-04</div>
                                <div>SCALE: 1:5</div>
                                <div>MATERIAL: BRASS/CLAY</div>
                                <div>SOURCE: BANKURA</div>
                            </div>
                        </div>

                        {/* Process Flow */}
                        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-5">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-[#181411] dark:text-white">Process Flow</h3>
                                <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            {processSteps.map((step, idx) => (
                                <div key={idx} className={`p-5 rounded-lg border-l-4 ${step.active ? 'border-[#d97706]' : 'border-[#d1d5db] hover:border-[#d97706]'} bg-white dark:bg-[#2a201a] shadow-sm hover:shadow-md transition-shadow group`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`mt-1 ${step.active ? 'text-[#d97706]' : 'text-gray-400 group-hover:text-[#d97706]'} transition-colors`}>
                                            <span className="material-symbols-outlined">{step.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-[#181411] dark:text-white mb-1">{idx + 1}. {step.title}</h3>
                                            <p className="text-[#897261] text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Source Map Section */}
            <section className="relative w-full bg-[#f4f2f0] dark:bg-[#1a120b] py-20 border-t border-[#e6e0db]">
                <div className="max-w-[1080px] mx-auto px-4 md:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-4 border-b border-black/5 dark:border-white/5 mb-10">
                        <div className="max-w-[600px]">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#d97706]"></span>
                                <span className="text-[#d97706] font-bold tracking-[0.2em] text-xs uppercase">Geological Provenance</span>
                            </div>
                            <h2 className="text-[#181411] dark:text-white text-4xl font-bold leading-tight">Roots &amp; Rivers: The Source Map</h2>
                            <p className="text-[#897261] mt-4 text-lg italic">&quot;Every Suwarna Bharat artifact carries the geological fingerprint of Bengal.&quot;</p>
                        </div>
                        <button className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#332a24] text-[#181411] dark:text-white font-bold shadow-md hover:shadow-xl hover:text-[#d97706] transition-all rounded-full border border-[#e6e0db]">
                            <span className="text-sm uppercase tracking-wide">Launch Interactive Map</span>
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
                        </button>
                    </div>

                    {/* Material Cards */}
                    <div className="flex flex-col md:flex-row gap-5">
                        {materials.map((mat) => (
                            <div key={mat.name} className={`flex-none bg-white/95 backdrop-blur-sm dark:bg-[#2a201a]/95 p-4 rounded-lg shadow-xl border-l-4 ${mat.color} flex items-center gap-4 hover:-translate-y-2 transition-transform cursor-pointer group`}>
                                <div className="w-16 h-16 rounded bg-gray-200 shrink-0"></div>
                                <div>
                                    <h4 className="text-base font-bold text-[#181411] dark:text-white group-hover:text-[#d97706] transition-colors">{mat.name}</h4>
                                    <p className="text-xs text-[#897261] mt-1 uppercase tracking-wider">{mat.source}</p>
                                    <div className="flex items-center gap-1 mt-2">
                                        <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                                        <span className="text-[10px] font-bold text-green-700">{mat.label}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
