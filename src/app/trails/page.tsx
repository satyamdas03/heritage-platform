import React from "react";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function getTrails() {
    const trails = await prisma.trail.findMany();
    return trails;
}

const GUIDES = [
    {
        name: "Gobinda Das",
        role: "Chhau Dance Expert",
        quote:
            "The mask is not just paper and clay. It is the face of the gods when they descend to dance.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBTdcreIqLG08ZqUirXJIGQbkFMcs3quZ3H7OVLGuWgV9nxDdUHAjFGP5NAVTv3HjboCtmwFt093A-kYq40p80-FeKx-sFuSiHGNrspnxMX5U6S97SlxaRzpNFLZBybt1_cbr5kKSgYJgQ_FXrBUXyMzOpLk35NFhM2yeqtJZOPH99KUhLA-hyWwNGm6zJcm-HJHfDxKUdU9Dl1qg9mISKKGUOXw7nHGzQSTKhEZBZhQZH3itt4wBEMt_uHdygSE5SbaZGdBvXXInY",
    },
    {
        name: "Lakshmi Devi",
        role: "Kantha Embroidery Artist",
        quote: "Every stitch tells a story of our village, our dreams, and our daily life.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDosZYm6OMchFOj-NRI9APtbXWWGAh2YGB-wmSpa0DQktqjWNKzIG_ETvVfkwj9hCdLtWUWP8mBL-c0Z6sP03ZTsCT5nhqGp-nYKdzjVVustij8pgc-KK_Mlkoc_R_TUebkLF3tknE1I4Zs3qGVpKK7lcFc3GXPVSoNIIy-_8GN7PhChljfjZf8cmdJFvWX2JN68rPUJnwvwx-GD1wShScYOAJlLjkyQVfVwZbZ03nofcgq9IqFWhUHZ3GDDt-JrNSd2k2BnNnS5XI",
    },
    {
        name: "Rahim Sheikh",
        role: "Terracotta Master",
        quote: "I have been molding clay since I was five. The earth speaks to us here.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB2prvmUYAuAQwELdTLcyAdeuZ62jh0dHG7IttFLGUzZWh5X9GPok5KymOCZsFQvbTBSCmEkaNizv6uk3oJTnIw8D2mLcKqhM-ULxZGnL6NHBaC-Gbitqy2tzuGcyulm-Mg29ow3_7SDC_VA-lLMIG-sYauKD3iPIuycusdf8dEVa9LtzIFwL6kv7T1DR4weI7XWImjRO3SjGtE0HVVuZ8mWfesXtg9JYjhxaqs89TkmFLXYZDbknnJVLjzOWiGjb4HrQwiSKxwCr8",
    },
];

const WORKSHOPS = [
    {
        title: "Chhau Mask Making",
        desc: "Learn the intricate process of molding paper pulp and clay into vibrant mythological masks.",
        time: "Every Weekend",
        price: "₹1,200",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA3w-N0veqBOzzS7Y0vLl92QW4OoN8XS-gFsoX2Sb1_AxXjnVM01zdR2lJlElJPPIR8_i_vFv1pkGz0J0TOmU_FEFS80BidC9qdeYTvdp1UM5AuGFrgW3hquMZkw_uiT2CvyPyB8qGe7TfOKiYI6BiUywINxMiDBwNyhf7-l2g1ntbIk7dif7ozpWxUlDPu2my5NXVoQ32Red8caBh5NUWxpgbptpilJL8Vqla49LHllL5G2gi2tRp8iLx0gGk3E5PCcqefwdgMsdI",
    },
    {
        title: "Alpona Drawing",
        desc: "Master the sacred art of floor painting using rice paste. A meditative experience.",
        time: "Sat, 14 Oct",
        price: "₹800",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCeh5ysOr7iwZOgcy1pltoBvGMRkdXp61sHSs8n1aXocaVkGWvH3Sp4n_cG0fP4e9quNKk6khmvIIVf9vgo3UEBnyfyvhjkgO6RVMF1hVz8vNapWlJkqlbCXdeLOZ8oWm7iXfb3ex9luJfwcop_WOZUeG0E_qWzjIj7w3yifiFIG09ntUpUpX6TLwxP-g7OokwEZ06N_4fTOACYQCusmSWntJLF_xezuM7YJvdPZTxL2eMiw8DXy5rQmZsSAQu1lGml5p1v2aOJk20",
    },
    {
        title: "Pottery on the Wheel",
        desc: "Get your hands dirty and learn to throw clay on a traditional wheel in Panchmura.",
        time: "Daily",
        price: "₹1,500",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDq4teoD0tLHtV40Qj-i6cv2ki_LCLHH9EWVWjJ7YpsK6fbJH8mpbUqPoOsXArMPNCWF56HcnHDTiFkRY0igq1FDCDddFCy-JscMsHDh_d2YAmgYtiIFvhzygJ3XMFqyybGtzgXveFGK2MzYwX9SRDvgI1NsD6vV_aFD-PYsiYGd3_fCoxATym72NIt43RdIKflGgnufqRWSQR4cniWaW5qeVgMcZ0rPxrH4Ro6HIpoCpw_EQiWuNezn1wk7PtYp-6ZBkTqLAxt-Jc",
    },
];

export default async function TrailsPage() {
    const trails = await getTrails();
    return (
        <div className="flex min-h-screen flex-col bg-[#fcfdfd] dark:bg-[#101a22]">
            {/* Hero Section */}
            <header className="relative w-full h-[85vh] overflow-hidden group">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkDnhQwexA6NKA3HFiYaE338IkITmzuPMVt9svUjxf2b9r7FfI5TRjybEtFkG6f-4rNsvSQ4hjJgDx0UaRcjtJfUnKPLV09tlyDl9tfIBDXszFiBA9-A1JXF5h3HYq9ZmNLJIhy1Cm_LWBNAsoGIIClMAtk0fCCmvj4_kiobtlRB-Ye25lM5d3v3GuU2Fc7KyvkqaGrgnYn4-JRijwGRDRdjconk8Ymt3LbFGMdKaVLACJCRcRYhKF12HpFiEHSuiMMzd-sGkxNVs')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold tracking-wider uppercase">
                        <span className="w-2 h-2 rounded-full bg-[#d68c45]"></span>
                        West Bengal, India
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg font-display">
                        Rediscover the<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                            Soul of Bengal
                        </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-light mb-10 leading-relaxed drop-shadow-md font-display">
                        Immersive journeys into the heart of India&apos;s dying arts. From the terracotta temples
                        of Bishnupur to the weavers of Phulia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#2b9dee] hover:bg-blue-600 text-white h-12 px-8 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-[#2b9dee]/30 flex items-center justify-center gap-2">
                            Explore Trails
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white h-12 px-8 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">play_circle</span>
                            Watch Film
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
                    <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-24">
                {/* Intro */}
                <section className="text-center max-w-3xl mx-auto">
                    <span className="text-[#d68c45] font-bold tracking-widest text-xs uppercase mb-2 block">
                        Our Philosophy
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111518] dark:text-white mb-6 font-display">
                        Preserving Heritage through Experience
                    </h2>
                    <p className="text-[#617989] dark:text-gray-400 text-lg leading-relaxed font-light">
                        We believe that the best way to preserve heritage is to live it. Our curated trails
                        connect you directly with the custodians of culture—the artisans, the musicians, and
                        the storytellers of rural Bengal.
                    </p>
                </section>

                {/* Curated Trails */}
                <section>
                    <div className="flex justify-between items-end mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#111518] dark:text-white font-display">
                                Curated Heritage Trails
                            </h3>
                            <p className="text-[#617989] dark:text-gray-400 mt-1">
                                Select a path to begin your journey
                            </p>
                        </div>
                        <button className="hidden sm:flex items-center gap-1 text-[#2b9dee] font-bold hover:underline">
                            View all trails <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {trails.map((trail) => {
                                let tags = [];
                                try {
                                    tags = JSON.parse(trail.tags);
                                } catch (e) {
                                    tags = ["Heritage"];
                                }
                                return (
                                    <div
                                        key={trail.id}
                                        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-[#d68c45] px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                                                {trail.duration}
                                            </div>
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${trail.imageUrl}')` }}
                                            ></div>
                                        </div>
                                        <div className="p-8 flex flex-col grow">
                                            <div className="mb-4">
                                                <h4 className="text-2xl font-bold text-[#111518] dark:text-white mb-2 group-hover:text-[#2b9dee] transition-colors font-display">
                                                    {trail.title}
                                                </h4>
                                                <p className="text-[#617989] dark:text-gray-400 font-light leading-relaxed">
                                                    {trail.description}
                                                </p>
                                            </div>
                                            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                                <div className="flex items-center gap-4 text-sm text-[#617989] dark:text-gray-500">
                                                    {tags.map((tag: string, i: number) => (
                                                        <span key={i} className="flex items-center gap-1">
                                                            <span className="material-symbols-outlined text-[18px]">
                                                                {tag === "Moderate"
                                                                    ? "hiking"
                                                                    : tag === "Small Group"
                                                                        ? "group"
                                                                        : tag === "Relaxed"
                                                                            ? "spa"
                                                                            : "home"}
                                                            </span>{" "}
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <button className="text-[#2b9dee] font-bold text-sm hover:underline">
                                                    View Itinerary
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Map Preview */}
                <section className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <span className="text-[#6a994e] font-bold tracking-widest text-xs uppercase mb-2 block">
                                    Interactive Map
                                </span>
                                <h3 className="text-3xl font-bold text-[#111518] dark:text-white mb-4 font-display">
                                    Trace Your Journey
                                </h3>
                                <p className="text-[#617989] dark:text-gray-400">
                                    Every trail is mapped with key stops, artisan homes, and hidden gems. We integrate
                                    with Google Maps to ensure you never lose your way in the winding village roads.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        step: 1,
                                        title: "Start at Kolkata",
                                        desc: "Meet your group and depart by private AC bus.",
                                        color: "text-[#2b9dee]",
                                        bg: "bg-[#2b9dee]/20",
                                    },
                                    {
                                        step: 2,
                                        title: "Arrival at Heritage Homestay",
                                        desc: "Welcome drink and settle into the mud-brick cottages.",
                                        color: "text-[#d68c45]",
                                        bg: "bg-[#d68c45]/20",
                                    },
                                    {
                                        step: 3,
                                        title: "Artisan Village Walk",
                                        desc: "Guided tour through the pottery studios.",
                                        color: "text-[#6a994e]",
                                        bg: "bg-[#6a994e]/20",
                                    },
                                ].map((s, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div
                                                className={`w-8 h-8 rounded-full ${s.bg} ${s.color} flex items-center justify-center font-bold text-sm`}
                                            >
                                                {s.step}
                                            </div>
                                            {i < 2 && (
                                                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#111518] dark:text-white">{s.title}</h5>
                                            <p className="text-sm text-[#617989] dark:text-gray-500">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-md relative group">
                            <div
                                className="absolute inset-0 bg-gray-200 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB424owvuInXrFNHppMVfSFQv4b8eM6hosSkdVK2r5ZOqObyKP8Ersk8c3Cyn39qo8-jP6r-rJu5pl0k8qVI6BiSzpJ0YrwIyMUy3ACud4NEUxZAmjih7YP403HVkklOcrDP_xpRce1Ln7PIdvTlnhT15rOd4s1eim8-vNZp9hfahRstKR8rmWv1r2AQf56ewKb90kUJUoB1sETgBwnwxQID_ElpMzIyR1p5K1I9sVruom2R8xMBKBMAkg1XWdwNtpRCfu0ME_kaCM')",
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none"></div>
                            {/* Markers */}
                            <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-4 transition-transform duration-300">
                                <div className="bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
                                    <div className="bg-[#d68c45] w-8 h-8 rounded flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined text-sm">temple_buddhist</span>
                                    </div>
                                    <div className="text-xs font-bold text-gray-800 pr-2">Bishnupur</div>
                                </div>
                                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white mx-auto mt-[-1px]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Guides */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-[#2b9dee] font-bold tracking-widest text-xs uppercase mb-2 block">
                            The Storytellers
                        </span>
                        <h3 className="text-3xl font-bold text-[#111518] dark:text-white font-display">
                            Meet Your Local Guide
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {GUIDES.map((guide, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-50 dark:border-gray-700 hover:border-gray-200 transition-colors"
                            >
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                                    <img
                                        alt={guide.name}
                                        className="w-full h-full object-cover"
                                        src={guide.image}
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-[#111518] dark:text-white">{guide.name}</h4>
                                <span
                                    className={`text-xs font-bold uppercase tracking-wide mb-3 ${i === 0 ? "text-[#2b9dee]" : i === 1 ? "text-[#d68c45]" : "text-[#6a994e]"
                                        }`}
                                >
                                    {guide.role}
                                </span>
                                <p className="text-sm text-[#617989] italic">&quot;{guide.quote}&quot;</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workshops */}
                <section className="relative">
                    <div className="absolute -z-10 top-0 left-0 w-full h-full bg-[#d68c45]/5 dark:bg-[#d68c45]/10 rounded-[3rem] transform -rotate-1 scale-105"></div>
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-[#111518] dark:text-white font-display">
                                    Hands-On Heritage
                                </h3>
                                <p className="text-[#617989] dark:text-gray-400 mt-2 max-w-xl">
                                    Don&apos;t just watch, create. Book a masterclass with national award-winning
                                    artisans.
                                </p>
                            </div>
                            <button className="text-[#2b9dee] font-bold hover:underline">View Calendar</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {WORKSHOPS.map((workshop, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div
                                        className="h-48 bg-cover bg-center relative"
                                        style={{ backgroundImage: `url('${workshop.image}')` }}
                                    >
                                        <div className="absolute top-3 right-3 bg-white text-[#111518] text-xs font-bold px-2 py-1 rounded shadow">
                                            {workshop.time}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h4 className="font-bold text-lg mb-1 group-hover:text-[#d68c45] transition-colors font-display">
                                            {workshop.title}
                                        </h4>
                                        <p className="text-xs text-[#617989] mb-4 line-clamp-2">{workshop.desc}</p>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-[#111518] dark:text-white font-bold">
                                                {workshop.price}{" "}
                                                <span className="text-xs font-normal text-gray-500">/ person</span>
                                            </div>
                                            <button className="bg-[#111518] hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
