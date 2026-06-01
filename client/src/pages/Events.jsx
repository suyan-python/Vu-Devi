import React from 'react'
import { motion } from "framer-motion";
import event1 from "../assets/outings/1.jpeg";
import event2 from "../assets/outings/46.jpeg";
import event3 from "../assets/outings/47.jpeg";
import event4 from "../assets/outings/4.jpeg";
import { ArrowRight, CalendarDays, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { eventGallery } from "../db/events";


const Events = () =>
{

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 15 }
        },
    };


    return (

        <div className="container mx-auto px-4 py-32 md:py-44 max-w-7xl">


            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 border-b border-slate-200 pb-12">

                {/* LEFT: Institutional Anchor */}
                <div className="flex-1">
                    <div className="inline-flex items-center gap-3 text-red-700 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                        <div className="w-8 h-[2px] bg-red-700"></div>
                        Company Moments
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
                        Events & <br />
                        <span className="text-[#133a41] font-light italic">Team Culture</span>
                    </h2>
                </div>

                {/* RIGHT: Contextual Description */}
                <div className="flex-1 lg:text-right">
                    <p className="text-slate-500 max-w-lg lg:ml-auto text-sm md:text-base leading-relaxed tracking-wide font-light">
                        Beyond the rigor of clinical documentation, we prioritize the human element.
                        These moments reflect our commitment to a culture of collaboration,
                        continuous growth, and shared institutional success.
                    </p>

                    {/* Minimalist Decorative Element */}
                    <div className="mt-8 flex gap-1 lg:justify-end">
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <div className="w-4 h-1 rounded-full bg-red-700"></div>
                    </div>
                </div>
            </div>



            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6"
            >
                {eventGallery.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`
                group relative overflow-hidden rounded-[4px]
                border border-white/10 bg-[#0c2e34]
                shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]
                transition-all duration-700 ease-in-out
                ${item.size === "large" ? "md:col-span-7 md:row-span-2" :
                                item.size === "wide" ? "md:col-span-7" :
                                    item.size === "tall" ? "md:col-span-5 md:row-span-2" : "md:col-span-5"}
            `}
                    >
                        {/* 1. IMAGE: Professional Normalization */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover brightness-[0.8] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                        />

                        {/* 2. GRADIENT ARCHITECTURE (The "Institutional" Feel) */}
                        {/* Soft ambient gradient from the bottom, stronger on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#092226] via-[#092226]/20 to-transparent opacity-90 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-[#133a41]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* 3. TOP TAG: Minimalist Labeling */}
                        <div className="absolute top-8 left-8 z-20">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 border-b border-white/20 pb-1">
                                {item.tag}
                            </span>
                        </div>

                        {/* 4. CONTENT LAYER: Precision Typography */}
                        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10 pointer-events-none">
                            <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tighter leading-snug transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {item.description}
                            </p>

                            {/* 5. FOOTER AREA: Institutional Meta-Data */}
                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between pointer-events-auto">
                                <div className="flex items-center gap-3 text-white/40">
                                    <CalendarDays size={14} />
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                                        {item.date}
                                    </span>
                                </div>

                                <Link
                                    to={`/events/${item.id}`}
                                    className="group/btn flex items-center gap-3 px-6 py-3 bg-white text-[#133a41] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-700 hover:text-white transition-all duration-500"
                                >
                                    View Gallery
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>



        </div>
    )
}

export default Events
