import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { eventGallery } from "../db/events";

export default function EventsPreview()
{
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setActiveIndex(prev => (prev + 1) % eventGallery.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const activeEvent = eventGallery[activeIndex];

    return (
        <section className="relative h-[85vh] min-h-[700px] overflow-hidden">

            {/* Background Slider */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={activeIndex}
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    initial={{ opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 2.8,
                        ease: "easeOut"
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-[#05171b]/70 via-[#05171b]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">

                <div className="max-w-7xl mx-auto px-6 w-full">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                delay: 0.6 // ⬅ IMPORTANT: gives image time to settle
                            }}
                            className="max-w-3xl"
                        >

                            {/* Label */}
                            <div className="mb-6 flex items-center gap-4">

                                <div className="w-12 h-[2px] bg-red-500" />

                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-red-400">
                                    Events & Culture
                                </span>

                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl md:text-7xl font-semibold tracking-tighter text-white leading-none">
                                {activeEvent.headline}
                            </h2>

                            {/* Dynamic Event */}
                            <div className="mt-10 border-l border-white/20 pl-6">

                                <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3">
                                    Featured Event
                                </p>

                                <h3 className="text-2xl md:text-3xl text-white font-light mb-4">
                                    {activeEvent.title}
                                </h3>

                                <p className="text-white/70 max-w-xl leading-relaxed text-xs md:text-base">
                                    {activeEvent.description}
                                </p>

                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link to="/events">
                                    <button className="px-10 py-4 bg-[#133a41] hover:bg-[#0b2023] text-white rounded-[4px] uppercase tracking-[0.25em] text-[11px] font-bold transition-all cursor-pointer">
                                        Explore Events
                                    </button>
                                </Link>

                            </div>

                        </motion.div>

                    </AnimatePresence>

                </div>

            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">

                {eventGallery.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-[3px] transition-all duration-500 ${activeIndex === index
                            ? "w-16 bg-white"
                            : "w-8 bg-white/30"
                            }`}
                    />
                ))}

            </div>

            {/* Side Meta */}
            <div className="absolute bottom-10 right-10 hidden lg:block z-30">

                <div className="text-right">

                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                        Event Archive
                    </p>

                    <p className="text-white/80 text-sm mt-2">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(eventGallery.length).padStart(2, "0")}
                    </p>

                </div>

            </div>

        </section>
    );
}