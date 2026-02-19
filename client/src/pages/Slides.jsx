import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Example slides
const SLIDES = [
    {
        id: 1,
        title: <>Why Global Providers Trust <br /><span className="text-red-700 underline decoration-1 underline-offset-8">Vu Devi Services</span></>,
        desc: "We don't just process data; we safeguard medical records and ensure business continuity for clinics worldwide.",
        stats: [
            { val: "10+ Years", label: "Industry Expertise" },
            { val: "24/7", label: "Global Support" },
            { val: "99.9%", label: "Accuracy Rate" },
            { val: "ISO/HIPAA", label: "Certified Protocols" },
        ],
    },
    {
        id: 2,
        title: <>Advanced <span className="text-red-700">Security Infrastructure</span> & <br /> Data Sovereignty</>,
        desc: "Our systems utilize military-grade encryption and multi-layered redundancy to guarantee the absolute privacy of patient health information.",
        stats: [
            { val: "AES-256", label: "Encryption Level" },
            { val: "Tier IV", label: "Data Centers" },
            { val: "Zero", label: "Security Breaches" },
            { val: "99.99%", label: "System Uptime" },
        ],
    },
    {
        id: 3,
        title: <>Standardized <span className="text-red-700">Clinical Workflow</span> & <br /> Integration</>,
        desc: "Seamlessly integrating with major EHR systems to optimize documentation speed while maintaining rigorous clinical standards.",
        stats: [
            { val: "HL7/FHIR", label: "Interoperability" },
            { val: "Epic/Cerner", label: "EHR Ready" },
            { val: "30-50%", label: "Efficiency Gain" },
            { val: "Global", label: "Delivery Model" },
        ],
    },
];

export default function ValidationSlider()
{
    const [[page, direction], setPage] = useState([0, 0]);
    const index = Math.abs(page % SLIDES.length);

    const paginate = useCallback(
        (newDirection) =>
        {
            setPage([page + newDirection, newDirection]);
        },
        [page]
    );

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            paginate(1);
        }, 5000); // 5-second slide interval
        return () => clearInterval(timer);
    }, [paginate]);

    // Animation variants
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <div className="bg-slate-900 p-8 md:p-12 lg:p-20 text-white rounded-md relative overflow-hidden h-[650px] md:h-[500px] lg:h-[450px] flex items-center group">

            {/* Background overlay for design */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#133a41]/20 skew-x-12 translate-x-20 pointer-events-none"></div>

            {/* Desktop navigation */}
            <button
                className="absolute left-4 z-30 p-3 bg-white/5 border border-white/10 hover:bg-red-700 hover:border-red-700 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft size={20} />
            </button>

            <button
                className="absolute right-4 z-30 p-3 bg-white/5 border border-white/10 hover:bg-red-700 hover:border-red-700 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
                onClick={() => paginate(1)}
            >
                <ChevronRight size={20} />
            </button>

            {/* Sliding content */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                    }}
                    className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center w-full h-full"
                >
                    {/* Content column */}
                    <div className="flex flex-col justify-center h-full">
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-sm w-fit">
                            <span className="text-[7px] md:text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">
                                Validation Node 0{index + 1}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-3xl font-bold mb-4 lg:mb-6">{SLIDES[index].title}</h3>
                        <p className="text-slate-400 text-xs md:text-lg leading-relaxed mb-8">{SLIDES[index].desc}</p>

                        {/* Progress indicators */}
                        <div className="flex gap-3">
                            {SLIDES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage([i, i > index ? 1 : -1])}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? "w-10 bg-red-700" : "w-3 bg-slate-700 hover:bg-slate-500"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 lg:gap-8 items-center">
                        {SLIDES[index].stats.map((stat, i) => (
                            <div key={i} className="py-2">
                                <h4 className="text-lg md:text-3xl font-bold text-white mb-1 tracking-tighter">{stat.val}</h4>
                                <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Mobile navigation */}
            <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 md:hidden">
                <button onClick={() => paginate(-1)} className="p-3 bg-white/5 border border-white/10"><ChevronLeft size={16} /></button>
                <button onClick={() => paginate(1)} className="p-3 bg-white/5 border border-white/10"><ChevronRight size={16} /></button>
            </div>

            {/* ✅ SEO fallback - all slides indexable */}
            <div className="sr-only">
                {SLIDES.map((slide) => (
                    <div key={slide.id}>
                        <h2>{slide.title}</h2>
                        <p>{slide.desc}</p>
                        {slide.stats.map((stat) => (
                            <span key={stat.label}>{stat.val} - {stat.label}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
