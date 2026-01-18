import React from "react";

const ANATOMY_STEPS = [
    {
        step: 1,
        title: "Clay Core Preparation",
        desc: "River clay is molded to form the base shape. This core determines the final volume and stance of the artifact.",
        icon: "layers",
    },
    {
        step: 2,
        title: "Wax Winding",
        desc: "Resin & beeswax threads are wound around the dry core with extreme precision to create patterns.",
        icon: "gesture",
    },
    {
        step: 3,
        title: "Molten Casting",
        desc: "The mold is fired. Wax melts out ('lost-wax'), and molten brass is poured into the void.",
        icon: "local_fire_department",
    },
];

const HOTSPOTS = [
    {
        id: 1,
        top: "25%",
        left: "65%",
        label: "Intricate Motifs",
        desc: "Fine clay threads create the signature lattice work.",
    },
    {
        id: 2,
        top: "50%",
        left: "45%",
        label: "Clay Core",
        desc: "The base form sculpted from riverbed soil.",
    },
    {
        id: 3,
        top: "75%",
        left: "30%",
        label: "Brass Finish",
        desc: "Polished to a golden shine after casting.",
    },
];

const MATERIALS = [
    {
        title: "Riverbed Clay",
        subtitle: "Ganges Tributary • 100% Organic",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDzaCun6NI29-C87F_zXSc9URMHfuUbP_hECPl2AE7h9wkNT6IvtBxFmUO39s7jeQumgGMKQew2jVcah0oQ-P1965B1Yom-YhXbMkHB069vH4OxUY8ZEGp9cskFb9DJ3FpZu-95gr0bGVVRp2bXy-pf1SJZN60c8IeoK09FgYFXA0btzAvf9so50EcqmHe4A_w37gazObQU2VLQHBjfHkSWuOtwYS34xNGa2Cfu_8BwpJbiRFO3x8mLax-0rxvqFhCXyNTg6VOUsoQ",
    },
    {
        title: "Wild Beeswax",
        subtitle: "Sundarbans Forest • Cruelty Free",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAcESJaLv1-j2tkruwqyrBkt_wCNswgGGZaqlrLnDJyAvEBWC9cqyIFN_uzRZ83dzhWgtImW0rjDeOPrc4btU4NgFva8pe493H5F-EZOWgxvP_30klxz04ORnJptcy7-TVpUQ03SSlpUDuH-TgOg9v46CogP6TjsClHYtwHjgFzzm0HQaMuyJP4hd6fWd61-r7Wl7xJug9y-Ho6pfUPCA7DYND_cGHuMMO9UQcSc7l_tiipGV4X8AjCyaUCUKPhHAgpXF-8SHAEB1U",
    },
    {
        title: "Recycled Brass",
        subtitle: "Local Scrap • Zero Waste",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAubttNAWJR24ZwQV_dyuFGhdn1NnzPDLZbzrWnmnblD3aj4T2osS9BkxJ9hpJlBAg4103BvJs7ELRTIA2CehJ6yY7QTJGdIvcKU5NdEa12zP_8JTCleSZ5eSkpqILX1Hg_LQ1oS_rSGjn3ZsfSgqnLC8b5uvFAs6XxK185p5PlpzuiHzL2RRxQeHr3mgc7dmQMHu-LKlK03BH2HvrQhc1IQxQgKW1y4oqhMHmkbO1edxbcofIA8j8ITnh_ihL4Nv08e1QGW-e-dMo",
    },
];

export default function ProcessPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f8f7f6] dark:bg-[#221810]">
            <main className="flex-1 overflow-x-hidden">
                {/* Hero Section */}
                <div className="relative flex w-full flex-col items-center justify-center px-4 py-12 md:px-10 lg:px-40">
                    <div className="flex w-full flex-1 max-w-[960px] flex-col">
                        <div
                            className="group relative flex min-h-[480px] flex-col items-center justify-center gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(34, 24, 16, 0.5) 0%, rgba(34, 24, 16, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUL5CvVJH-kFXL_hqrkkZ1KvBRY04z-7KFt18QpVXsZ7tG3ZhHdwiXl4EbJiBt5_CvMzozYqX8br4kynXzAzx9B7I_--P1RUyl7Ls-jsWv0WoCLOqpadsoI3qDxpjbsnKyy3VFyTSirsOqJkLEtQjr67jTUyaB5WgnxsvSIiYx7dCuAgORs7gSfHm9-BccOhLqUuq8ALZrfEC4AX8YMhWJf0sStAYf3QM-bhl4RcCCuE_jcO_xKqnbpPFwF7J-MQj1xYAG_34FlCo')",
                            }}
                        >
                            {/* Decorative Border inside */}
                            <div className="pointer-events-none absolute inset-4 rounded-lg border border-white/20"></div>
                            <div className="z-10 flex max-w-[720px] flex-col gap-4">
                                <span className="font-bold tracking-widest text-xs uppercase text-[#ee7c2b]">
                                    The Archives
                                </span>
                                <h1 className="font-black leading-tight tracking-[-0.033em] text-white text-4xl md:text-6xl font-display">
                                    Srishti: Process & Provenance
                                </h1>
                                <h2 className="text-base font-normal leading-relaxed text-gray-200 md:text-lg font-display italic">
                                    Tracing the alchemy of West Bengal&apos;s dying arts, from the riverbanks to the loom.
                                </h2>
                            </div>
                            <button className="z-10 mt-4 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#ee7c2b] px-8 text-base font-bold leading-normal tracking-[0.015em] text-white shadow-lg shadow-orange-900/20 transition-colors hover:bg-orange-600">
                                <span className="truncate">Explore the Anatomy</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Anatomy Section Header */}
                <div className="flex justify-center px-4 py-5 md:px-40">
                    <div className="flex w-full max-w-[960px] justify-between items-end border-b border-[#e6e0db] pb-4">
                        <div>
                            <span className="mb-1 block text-sm font-bold uppercase tracking-wider text-[#897261]">
                                Fig 1.1
                            </span>
                            <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#181411] dark:text-white font-display">
                                The Lost-Wax Anatomy
                            </h2>
                        </div>
                        <div className="hidden text-right md:block">
                            <p className="text-sm italic text-[#897261]">Artifact: Dokra Horse</p>
                            <p className="text-sm text-[#897261]">Region: Bankura, West Bengal</p>
                        </div>
                    </div>
                </div>

                {/* Anatomy Interactive Diagram */}
                <div className="flex justify-center px-4 pb-10 md:px-40">
                    <div className="flex w-full max-w-[960px] flex-col gap-8 lg:flex-row">
                        {/* Left: The Visual Diagram */}
                        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#e6e0db] bg-[#f0edea] dark:bg-[#2a201a] shadow-inner lg:w-2/3">
                            {/* Background Technical Drawing / Image */}
                            <div
                                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90 transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf7T2K8D3tTHkwoQejYn65w5NMGNi8muqFxVjharaZ00lBd0eYsLxphnBv4m99dgWLAA_SxShF9TQXz6r1FOWfXA_JdX3CdTkzuAfgTk1yHfmFe44h11bYThV8UU5lyY5296UkamYbjSaujKeOj0Ck0wlxG51PgiDneUJPPFkcVknL0UTghXukfNBnf_4Ko2I2vBYMbq0vl83uxzGm6Hgc4fIZJsHmTBFgCSLFjfhSLwnyCWUY-buxeqe-jwkLtZqYuPUbACuR9eE')",
                                    mixBlendMode: "multiply",
                                }}
                            ></div>
                            {/* Dark mode overlay adjustment */}
                            <div className="pointer-events-none absolute inset-0 bg-black/10 dark:bg-black/40"></div>

                            {/* Interactive Hotspots */}
                            {HOTSPOTS.map((spot) => (
                                <div
                                    key={spot.id}
                                    className="group/spot absolute cursor-pointer"
                                    style={{ top: spot.top, left: spot.left }}
                                >
                                    <div className="relative flex items-center justify-center">
                                        <div className="z-20 flex h-6 w-6 items-center justify-center rounded-full bg-[#ee7c2b] text-xs font-bold text-white shadow-lg ring-2 ring-white transition-transform hover:scale-110 dark:ring-[#221810]">
                                            {spot.id}
                                        </div>
                                        <div className="absolute h-full w-full animate-ping rounded-full bg-[#ee7c2b] opacity-40 z-10"></div>
                                        {/* Tooltip */}
                                        <div className="pointer-events-none absolute left-8 top-0 z-30 w-48 translate-x-2 transform rounded-lg bg-white p-3 shadow-xl opacity-0 transition-opacity group-hover/spot:opacity-100 dark:bg-[#332a24]">
                                            <h4 className="text-sm font-bold text-[#181411] dark:text-white">
                                                {spot.label}
                                            </h4>
                                            <p className="mt-1 text-xs text-[#897261]">{spot.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Diagram Legend Overlay */}
                            <div className="absolute bottom-4 right-4 rounded border border-[#e6e0db] bg-white/90 px-3 py-2 text-xs font-mono text-[#181411] backdrop-blur-sm dark:bg-black/60 dark:text-gray-300">
                                SCALE 1:5 • BRASS/CLAY
                            </div>
                        </div>

                        {/* Right: The Narrative/Steps */}
                        <div className="flex w-full flex-col gap-4 lg:w-1/3">
                            {ANATOMY_STEPS.map((step) => (
                                <div
                                    key={step.step}
                                    className="rounded-xl border border-[#e6e0db] bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-[#2a201a]"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 rounded-lg bg-[#ee7c2b]/10 p-2 text-[#ee7c2b]">
                                            <span className="material-symbols-outlined">{step.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-lg font-bold text-[#181411] dark:text-white">
                                                {step.step}. {step.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-[#897261]">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Source Map Section */}
                <div className="relative w-full border-t border-[#e6e0db] bg-[#f4f2f0] py-16 dark:bg-[#1a120b]">
                    {/* Subtle Map Pattern Background */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-repeat opacity-10"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDL1XBnOfo2U7Bd0Z5lqmHs3Bmhuyr4KPjdcboPYCcZtPdPeZw8tBNjk6hgkLxfgYQ4OCvtKQgGN2_2V7GBzbQe6Xe6h0orFBfpUbY6_VK_aAzpS8Y1Wp6EEQDC4tFLilvOfcMJlJzRoe0fWu0swzFbUaUgy-M9ftLvWK_EI-o55NMaf6MAHG96oQNgFvVAk-Ut50FTGHcnXWl_KT7C-O24IaMtZSoKGsA73ITSyLydLZV_oyBPRqgpRV_p362zNYRqInpR8KgQRmU')",
                        }}
                    ></div>
                    <div className="layout-container relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-40">
                        <div className="flex w-full max-w-[960px] flex-col gap-8">
                            <div className="flex flex-col items-end justify-between gap-4 md:flex-row">
                                <div className="max-w-[600px]">
                                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#ee7c2b]">
                                        Provenance
                                    </span>
                                    <h2 className="text-3xl font-bold leading-tight text-[#181411] dark:text-white font-display">
                                        Roots &amp; Rivers: The Source Map
                                    </h2>
                                    <p className="mt-3 text-lg text-[#897261]">
                                        Every Srishti artifact carries the geological fingerprint of Bengal. We trace
                                        materials back to the very soil they sprang from.
                                    </p>
                                </div>
                                <button className="flex items-center gap-2 border-b-2 border-[#ee7c2b] pb-1 font-bold text-[#181411] transition-colors hover:text-[#ee7c2b] dark:text-white">
                                    View Interactive Map{" "}
                                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                </button>
                            </div>

                            {/* Map Visualization Area */}
                            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-[#e6e0db] bg-white shadow-lg dark:bg-[#221810]">
                                {/* The Map Image */}
                                <div
                                    className="h-full w-full bg-cover bg-center opacity-80"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvj5cryzdlWhU6ZBbJ8g17_eWruZJNtOVoDDiGQ-0HTjp2r_6B4Ww2YnjgwFyyW12WlPbz7LTTYKFKyxiQ7aRLrQe-Gnu9P52Fy-6QP-ORmVue0RCrcbjd7oLWorWvvnNuPHIp-ZZIvZcItOisMsVZ2yqABHjpZWDVutR8-Q9VtjtRzNNof7LfFI45pB8CboxQ2f01G0rL8FAB0GjPNghkhJ9rMoK-4_DM4HJO_IZMD5kFvKJlxTWzSS2UC9uTZN1i8y75b-Iwb2E')",
                                        filter: "sepia(0.2) contrast(0.9)",
                                    }}
                                ></div>
                                {/* Map Pins */}
                                <div className="absolute left-[30%] top-[60%] flex flex-col items-center">
                                    <span className="material-symbols-outlined animate-bounce text-4xl text-[#ee7c2b] drop-shadow-md">
                                        location_on
                                    </span>
                                    <div className="-mt-2 whitespace-nowrap rounded bg-white px-3 py-1 text-xs font-bold shadow-md dark:bg-black">
                                        Bankura
                                    </div>
                                </div>
                                <div className="absolute left-[20%] top-[50%] flex flex-col items-center">
                                    <span className="material-symbols-outlined cursor-pointer text-3xl text-[#897261] drop-shadow-md transition-colors hover:text-[#ee7c2b]">
                                        location_on
                                    </span>
                                </div>

                                {/* Material Cards Floating Over Map */}
                                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 overflow-x-auto pb-2 md:flex-row md:pb-0">
                                    {MATERIALS.map((mat, i) => (
                                        <div
                                            key={i}
                                            className="flex w-72 flex-none cursor-pointer items-center gap-3 rounded-xl border border-[#e6e0db] bg-white p-3 shadow-lg transition-transform hover:-translate-y-1 dark:bg-[#2a201a]"
                                        >
                                            <div
                                                className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center"
                                                style={{ backgroundImage: `url('${mat.image}')` }}
                                            ></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#181411] dark:text-white">
                                                    {mat.title}
                                                </h4>
                                                <p className="mt-1 text-xs text-[#897261]">{mat.subtitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
