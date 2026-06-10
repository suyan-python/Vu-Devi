import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { eventGallery } from "../db/events";



const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
});

export default function EventDetails()
{
    const { id } = useParams();

    // Convert id to index or match logic (safe fallback)
    const event =
        eventGallery.find((_, index) => String(index) === id) ||
        eventGallery.find((e) => e.id === id);

    if (!event)
    {
        return (
            <div className="h-screen flex items-center justify-center text-gray-500">
                Event not found
            </div>
        );
    }

    const { image, title, description, date, images } = event;

    return (
        <div className="min-h-screen ">

            <div className=" pb-20">

                {/* FEATURE IMAGE: Editorial Full-Bleed */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom "Luxury" easing
                    className="relative w-full h-screen overflow-hidden mb-24"
                >
                    {/* Decorative Frame Effect */}
                    <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none"></div>

                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover scale-[1.02] transition-transform duration-[3000ms] hover:scale-100"
                    />

                    {/* Subtle Gradient for Bottom Anchoring */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    {/* HERO MARQUEE OVERLAY */}
                    <div className="absolute bottom-10 left-0 w-full overflow-hidden z-20">
                        <div className="flex items-center bg-white/5 backdrop-blur-md border-y border-white/10 py-3">
                            <motion.div
                                className="flex gap-16 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                            >
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-16">
                                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/90">
                                            {title}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)]"></span>
                                        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/60">
                                            {date} • Institutional Archival Record
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* FEATURE IMAGE: Editorial Full-Bleed */}
                <div className=" px-6 mb-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">

                        {images?.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                // This logic creates the "Curated" look
                                className={`group relative overflow-hidden bg-slate-100 
                    ${i % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
                `}
                            >
                                <img
                                    src={img}
                                    alt={`${title}-${i}`}
                                    className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 group-hover:brightness-110"
                                />

                                {/* Subtle Overlay to unify photo tones */}
                                <div className="absolute inset-0 bg-[#133a41]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Continuous Marquee Ticker */}
                <div className="relative flex overflow-x-hidden  border-y border-slate-200 py-6 bg-white">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#133a41]">
                                    {title} // {date}
                                </span>
                                <span className="w-2 h-2 rounded-full bg-red-700"></span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                                    Institutional Record Archive
                                </span>
                                <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* 3. MASONRY GALLERY: The "Fun" Luxury Grid */}

                {/* BOTTOM SECTION: The Climax */}
                <div className="py-24 bg-gradient-to-b from-white via-[#f8fbfc] to-white relative">

                    {/* Soft Glow Accent */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="hidden md:absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#133a41]/40 blur-3xl rounded-full"></div>
                    </div>

                    {/* CTA CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-[#133a41] to-[#0f2f35] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">

                            {/* Texture */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                            {/* Accent line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-red-500"></div>

                            {/* Small intro */}
                            <p className="text-xs tracking-[0.4em] uppercase text-[#7fb8c1] mb-4 relative z-10">
                                Careers & Opportunities
                            </p>

                            {/* Main heading */}
                            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6 relative z-10">
                                Build the Future With Us
                            </h2>

                            {/* Description */}
                            <p className="text-[#a0c5cb] text-base md:text-lg mb-6 max-w-2xl mx-auto relative z-10 leading-relaxed">
                                We are looking for passionate individuals who want to create, innovate, and grow with us.
                                Join our team and be part of meaningful work that shapes real impact.
                            </p>

                            {/* Highlight line */}
                            <p className="text-red-400 text-xs uppercase tracking-[0.3em] mb-10 relative z-10">
                                Design • Build • Grow • Lead
                            </p>

                            {/* CTA BUTTON */}
                            <Link to="/application">
                                <button className="px-10 py-4 bg-red-800 text-white rounded-[4px] font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-[#133a41] transition-all duration-500 shadow-xl shadow-red-900/20 relative z-10 cursor-pointer">
                                    Apply Now
                                </button>
                            </Link>

                            {/* Sub text */}
                            <p className="mt-6 text-[11px] text-[#7fb8c1] relative z-10">
                                Applications reviewed continuously • Response within shortlisted candidates
                            </p>

                        </div>
                    </motion.div>

                    {/* FOOTER */}
                    <footer className="mt-24 border-t border-slate-100 pt-12 text-center">

                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                                Institutional Documentation
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                                Verified Archives
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                                Media Records
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                                © 2026 Internal System
                            </span>
                        </div>


                        {/* Sub emotional line */}
                        <p className="mt-4 text-[11px] text-slate-400">
                            Every moment preserved. Every story continues.
                        </p>

                    </footer>
                </div>

            </div>

        </div>
    );
}