import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import Vudevi from "../assets/logo/logo.png"
import Evolve from "../assets/logo/evolve.png"
import JHP from "../assets/logo/jhp.png"
import JHCB from "../assets/logo/JHCB.webp"
import inaya from "../assets/logo/inaya.png"

const companies = [
    {
        id: "01",
        name: "Vu Devi Services",
        shortName: "VU DEVI",
        description: "Healthcare & Medical Support",
        logo: Vudevi,
        url: "https://vudeviservices.com.np",
        current: true,
        accent: "#b91c1c", // red

    },
    {
        id: "02",
        name: "Evolve Vue",
        shortName: "EVOLVE VUE",
        description: "Technology Medical Support & Digital Solutions",
        logo: Evolve,
        url: "https://evolvevue.com.np",
        accent: "#d4a72c", // golden

    },
    {
        id: "03",
        name: "Jewel Himalayan Products",
        shortName: "JHP",
        description: "Nepali Coffee & High Land Coffee Products",
        logo: JHP,
        url: "https://jewelhimalayanproducts.com",
        accent: "#06b6d4", // cyan

    },
    {
        id: "04",
        name: "JHCB",
        shortName: "JHCB",
        description: "Nepali Coffee Farm",
        logo: JHCB,
        url: "https://jewelhimalayanproducts.com/nepal-coffee-beans",
        accent: "#10b981", // emerald

    },
    {
        id: "05",
        name: "Inaya Cafe",
        shortName: "INAYA CAFE",
        description: "Coffee & Hospitality",
        logo: inaya,
        url: "https://jewelhimalayanproducts.com/inaya-cafe",
        accent: "#eab308", // yellow

    },
];

const CompanyNetwork = ({ currentCompany = "Vu Devi Services" }) =>
{
    return (
        <section className="w-full pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-5 md:px-8">

                {/* Section Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Small Label */}
                    <p className="text-[9px] md:text-[10px] font-black text-red-700 uppercase tracking-[0.3em] mb-5">
                        Our Network
                    </p>

                    {/* Heading */}
                    <h2 className="header text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.05]">
                        Our Group of{" "}
                        <span className="text-red-700 font-light">

                            Companies
                        </span>
                    </h2>

                    {/* Minimal Divider */}
                    <div className="w-10 h-[2px] bg-red-700 mx-auto mt-6 mb-5" />

                    {/* Description */}
                    <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-500 leading-relaxed">
                        A growing network of companies building expertise across
                        diverse industries.
                    </p>
                </motion.div>

                {/* Company List */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {companies.map((company) =>
                    {
                        const isCurrent = company.name === currentCompany;

                        return (
                            <motion.a
                                key={company.id}
                                href={company.url}
                                target={
                                    company.url.startsWith("http")
                                        ? "_blank"
                                        : "_self"
                                }
                                rel={
                                    company.url.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className={`
                    group relative flex flex-col justify-between
                    min-h-[190px] sm:min-h-[210px] md:min-h-[230px]
                    px-5 md:px-6
                    py-3 md:py-4
                    border
                    rounded-sm
                    overflow-hidden
                    transition-all duration-300

                    ${isCurrent
                                        ? "bg-[#133a41] border-[#133a41] text-white shadow-lg"
                                        : "bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:shadow-lg"
                                    }
                `}
                            >
                                {/* LOGO BACKGROUND */}
                                <div className="absolute inset-0 pointer-events-none">

                                    {/* Logo */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-[65%] flex items-start justify-center pt-8 md:pt-10 transition-all duration-500 ${isCurrent
                                            ? "opacity-90"
                                            : "opacity-80 group-hover:opacity-100"
                                            }
        `}
                                    >
                                        <img
                                            src={company.logo}
                                            alt=""
                                            className="
                w-[68%]
                max-w-[170px]
                max-h-[120px]
                object-contain
                transition-transform
                duration-500
                group-hover:scale-110
            "
                                        />
                                    </div>

                                    {/* READABILITY GRADIENT */}
                                    <div
                                        className={`
            absolute
            inset-0
            bg-gradient-to-t
            from-white/90
            via-white/50
            to-transparent

            ${isCurrent
                                                ? "opacity-0"
                                                : "opacity-100"
                                            }
        `}
                                    />
                                </div>


                                {/* CONTENT LAYER */}
                                <div className="relative z-10 flex flex-col h-full">

                                    {/* TOP */}
                                    <div className="flex items-start justify-between">

                                        {/* Number */}
                                        <span
                                            className={`
                text-[9px] md:text-[10px]
                font-black
                tracking-[0.2em]

                ${isCurrent
                                                    ? "text-white/40"
                                                    : "text-slate-300"
                                                }
            `}
                                        >
                                            {company.id}
                                        </span>

                                        {/* Arrow */}
                                        <div
                                            className={`
                flex items-center justify-center
                w-8 h-8
                border
                rounded-full
                transition-all duration-300

                ${isCurrent
                                                    ? "border-white/20 text-white"
                                                    : "border-slate-200 text-slate-400 group-hover:bg-[#133a41] group-hover:border-[#133a41] group-hover:text-white"
                                                }
            `}
                                        >
                                            <div
                                                className="
        flex items-center justify-center
        w-8 h-8
        border
        border-slate-200
        rounded-full
        text-slate-400
        transition-all duration-300
        group-hover:text-white
    "
                                                style={{
                                                    transitionProperty: "background-color, border-color, color",
                                                }}
                                                onMouseEnter={(e) =>
                                                {
                                                    e.currentTarget.style.backgroundColor = company.accent;
                                                    e.currentTarget.style.borderColor = company.accent;
                                                }}
                                                onMouseLeave={(e) =>
                                                {
                                                    e.currentTarget.style.backgroundColor = "";
                                                    e.currentTarget.style.borderColor = "";
                                                }}
                                            >
                                                <ArrowUpRight
                                                    size={14}
                                                    className="
            transition-transform
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
        "
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    {/* BOTTOM CONTENT */}
                                    <div className="mt-auto">

                                        {/* Current Badge */}
                                        {isCurrent && (
                                            <div className="flex items-center gap-1.5 mb-3">
                                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />

                                                <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.18em] text-emerald-300">
                                                    Current
                                                </span>
                                            </div>
                                        )}

                                        {/* Company Name */}
                                        <h3
                                            className={`
                text-xs md:text-base lg:text-lg
                font-semibold
                tracking-tight
                leading-tight
                mb-2

                ${isCurrent
                                                    ? "text-white"
                                                    : "text-slate-900 group-hover:text-[#133a41]"
                                                }
            `}
                                        >
                                            {company.shortName}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className={`
                text-[6px] md:text-[7px] lg:text-[8px]
                uppercase
                tracking-[0.12em]
                leading-relaxed

                ${isCurrent
                                                    ? "text-white/50"
                                                    : "text-slate-400"
                                                }
            `}
                                        >
                                            {company.description}
                                        </p>
                                    </div>
                                </div>


                                {/* DYNAMIC BOTTOM ACCENT */}
                                {!isCurrent && (
                                    <span
                                        className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            group-hover:w-full
            transition-all
            duration-500
        "
                                        style={{
                                            backgroundColor: company.accent,
                                        }}
                                    />
                                )}

                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5">
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        Business Network
                    </span>

                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        5 Companies
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CompanyNetwork;