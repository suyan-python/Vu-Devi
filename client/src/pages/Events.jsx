import React from 'react'
import { motion } from "framer-motion";
import event1 from "../assets/outings/1.jpeg";
import event2 from "../assets/outings/46.jpeg";
import event3 from "../assets/outings/47.jpeg";
import event4 from "../assets/outings/4.jpeg";
import { ArrowRight, CalendarDays, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';


const Events = () =>
{

    const eventGallery = [
        {
            image: event3,
            title: "Annual Team Retreat",
            description: "Celebrating milestones and strengthening collaboration beyond the workplace.",
            tag: "Retreat",
            date: "May 2026",
            size: "large",
        },
        {
            image: event2,
            title: "Leadership Meetup",
            description: "Strategic discussions and future planning with department leads.",
            tag: "Management",
            date: "April 2026",
            size: "tall",
        },
        {
            image: event3,
            title: "Office Celebration",
            description: "Recognizing achievements and team dedication together.",
            tag: "Culture",
            date: "March 2026",
            size: "wide",
        },
        {
            image: event4,
            title: "Training Session",
            description: "Continuous learning and development across departments.",
            tag: "Workshop",
            date: "February 2026",
            size: "normal",
        },
    ];

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


            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"> <div> <div className="inline-flex items-center gap-2 text-red-700 font-bold uppercase tracking-[0.2em] text-xs mb-3"> <Camera size={16} /> Company Moments </div> <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-none"> Events & <span className="text-[#133a41] font-light">Team Culture</span> </h2> </div> <p className="text-slate-500 max-w-lg text-sm md:text-right italic leading-relaxed"> Beyond operations and documentation, we value collaboration, growth, and the people behind every successful outcome. </p> </div>



            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] md:auto-rows-[280px] gap-5 md:gap-6"
            >
                {eventGallery.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className={`
                        group relative overflow-hidden rounded-2xl
                        border border-slate-200/60 bg-slate-900
                        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                        hover:shadow-[0_25px_50px_rgba(19,58,65,0.18)]
                        transition-shadow duration-500
                        
                        ${item.size === "large"
                                ? "md:col-span-7 md:row-span-2"
                                : item.size === "wide"
                                    ? "md:col-span-7"
                                    : item.size === "tall"
                                        ? "md:col-span-5 md:row-span-2"
                                        : "md:col-span-5"
                            }
                    `}
                    >
                        {/* IMAGE - Starts slightly desaturated/darker and pops on hover */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="
                            absolute inset-0 w-full h-full object-cover
                            filter brightness-[0.85] contrast-[1.05] saturate-[0.85]
                            group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105
                            transition-all duration-[1000ms] ease-out
                        "
                        />

                        {/* DYNAMIC GRADIENT OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent mix-blend-multiply opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#133a41]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* TOP DECORATIVE ACCENT LINE */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#133a41] to-[#22636f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                        {/* TAG */}
                        <div className="absolute top-5 left-5 z-10">
                            <span className="
                            bg-white/90 backdrop-blur-md
                            px-3.5 py-1.5 rounded-full
                            text-[10px] font-bold uppercase
                            tracking-[0.2em] text-[#133a41]
                            shadow-md inline-block
                        ">
                                {item.tag}
                            </span>
                        </div>

                        {/* CONTENT LAYER */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10 pointer-events-none">
                            {/* TEXT BLOCK */}
                            <div className="max-w-xl">
                                <h3 className="
                                text-white font-bold tracking-tight
                                text-xl md:text-2xl lg:text-[1.75rem]
                                leading-tight
                                transform translate-y-2 group-hover:translate-y-0
                                transition-transform duration-500 ease-out
                            ">
                                    {item.title}
                                </h3>

                                <p className="
                                mt-2.5 text-white/80
                                text-sm leading-relaxed
                                max-w-lg
                                opacity-0 max-h-0 pointer-events-none
                                group-hover:opacity-100 group-hover:max-h-[100px]
                                transform translate-y-4 group-hover:translate-y-0
                                transition-all duration-500 ease-out delay-75
                            ">
                                    {item.description}
                                </p>
                            </div>

                            {/* FOOTER ACTION AREA */}
                            <div className="
                            mt-4 pt-4
                            border-t border-white/10
                            flex items-center justify-between
                            pointer-events-auto
                        ">
                                {/* DATE */}
                                <div className="flex items-center gap-2 text-white/70">
                                    <CalendarDays size={14} className="text-white/50" />
                                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
                                        {item.date}
                                    </span>
                                </div>


                                {/* DEDICATED REDIRECT BUTTON */}
                                <Link
                                    href={`/events/${item.id || index}`}
                                    aria-label={`View details for ${item.title}`}
                                    className="
                                    w-10 h-10 rounded-full
                                    border border-white/20
                                    flex items-center justify-center
                                    bg-white/5 backdrop-blur-sm
                                    hover:bg-white hover:scale-110
                                    transition-all duration-300 ease-out
                                    group/btn
                                "
                                >
                                    <ArrowRight
                                        size={18}
                                        className="
                                        text-white
                                        group-hover/btn:text-[#133a41]
                                        transform group-hover/btn:translate-x-0.5
                                        transition-all duration-300
                                    "
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
