import React from 'react'
import { motion } from "framer-motion";
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
                className="grid grid-cols-1 md:grid-cols-12 auto-rows-[320px] gap-6"
            >
                {eventGallery.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`
                group relative overflow-hidden rounded-[6px]
                bg-[#0b2a30]
                border border-white/10
                shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)]
                transition-all duration-700 ease-out
                hover:shadow-[0_35px_80px_-25px_rgba(0,0,0,0.6)]
                ${item.size === "large" ? "md:col-span-7 md:row-span-2" :
                                item.size === "wide" ? "md:col-span-7" :
                                    item.size === "tall" ? "md:col-span-5 md:row-span-2" : "md:col-span-5"}
            `}
                    >

                        {/* IMAGE */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-[1.08] transition-transform duration-[2500ms] ease-out brightness-[0.82] group-hover:brightness-[0.95]"
                        />

                        {/* LAYERED DEPTH SYSTEM */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071a1e]/90 via-[#071a1e]/25 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-[#133a41]/20 opacity-70 group-hover:opacity-100 transition duration-700" />

                        {/* SUBTLE BORDER GLOW ON HOVER */}
                        <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/20 transition duration-500" />

                        {/* TAG */}
                        <div className="absolute top-6 left-6 z-20">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
                                {item.tag}
                            </span>
                        </div>

                        {/* CONTENT */}
                        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">

                            {/* TITLE */}
                            <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug transform translate-y-2 group-hover:translate-y-0 transition duration-500">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                                {item.description}
                            </p>

                            {/* META + CTA */}
                            <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">

                                {/* DATE */}
                                <div className="flex items-center gap-2 text-white/40">
                                    <CalendarDays size={13} />
                                    <span className="text-[10px] uppercase tracking-[0.25em]">
                                        {item.date}
                                    </span>
                                </div>

                                {/* CTA */}
                                <Link
                                    to={`/events/${item.id}`}
                                    className="group/btn flex items-center gap-2 px-5 py-2.5 bg-white text-[#0b2a30] rounded-[4px] text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-red-800 hover:text-white transition-all duration-500"
                                >
                                    Explore
                                    <ArrowRight
                                        size={14}
                                        className="group-hover/btn:translate-x-1 transition-transform"
                                    />
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
