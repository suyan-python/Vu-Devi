import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ShieldCheck, Microscope, Database, ArrowUpRight } from "lucide-react";
import back from "../assets/background/back4.jpeg";
import back2 from "../assets/background/back5.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function EventHero()
{
    useEffect(() =>
    {
        if (window.location.hash)
        {
            const element = document.querySelector(window.location.hash);

            if (element)
            {
                setTimeout(() =>
                {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 100);
            }
        }
    }, []);
    return (

        <>
            <section className="relative min-h-[100vh] md:h-screen overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 -z-20">

                    <img
                        src={back}
                        alt="Vu Devi Services team event"
                        className="
                    w-full
                    h-full
                    object-cover
                    object-bottom
                    brightness-[0.75]
                "
                    />

                    {/* Top readability overlay */}
                    <div className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white
                via-white/55
                via-[45%]
                to-transparent
            " />

                    {/* Bottom image fade */}
                    <div className="
                absolute
                inset-x-0
                bottom-0
                h-[45%]
                bg-gradient-to-t
                from-white
                via-white/40
                to-transparent
            " />
                </div>


                {/* HERO CONTENT */}
                <div className="
            container
            mx-auto
            px-6
            lg:px-12
            relative
            z-10
            pt-28
            md:pt-32
            pb-24
            md:pb-0
            flex
            justify-center
        ">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >

                        {/* SECTION LABEL */}
                        <div className="
                    inline-flex
                    items-center
                    gap-2
                    mb-6
                ">
                            <span className="
                        w-1.5
                        h-1.5
                        bg-red-700
                        rounded-full
                    " />

                            <p className="
                        text-[#133a41]
                        font-black
                        tracking-[0.3em]
                        uppercase
                        text-[10px]
                        md:text-[14px]
                    ">
                                Life at Vu Devi
                            </p>
                        </div>


                        {/* HEADLINE */}
                        <h1 className="
                    text-3xl
                    md:text-6xl
                    lg:text-7xl
                    font-semibold
                    text-slate-800
                    leading-tight
                    md:leading-[1.05]
                    tracking-tighter
                    mb-5
                    md:mb-7
                ">
                            Beyond the Work,
                            <span className="
                        block
                        text-red-700
                        font-light
                    ">
                                We Build Together.
                            </span>
                        </h1>


                        {/* DESCRIPTION */}
                        <p className="
                    text-xs
                    md:text-lg
                    text-slate-600
                    leading-relaxed
                    max-w-2xl
                    mx-auto
                    mb-8
                    md:mb-10
                ">
                            From team gatherings to meaningful milestones,
                            explore the people, moments, and experiences that
                            shape life at Vu Devi Services.
                        </p>


                        {/* ACTIONS */}
                        <div className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-center
                    gap-3
                    md:gap-4
                ">

                            <NavLink
                                to="#eventpreview"
                                className="
                            group
                            flex
                            items-center
                            justify-center
                            gap-3
                            px-6
                            md:px-9
                            py-3
                            md:py-4
                            bg-[#133a41]
                            text-white
                            text-[9px]
                            md:text-xs
                            uppercase
                            tracking-[0.2em]
                            rounded-sm
                            hover:bg-red-700
                            transition-all
                            duration-500
                        "
                            >
                                Explore Events

                                <ChevronRight
                                    size={15}
                                    className="
                                group-hover:translate-x-1
                                transition-transform
                            "
                                />
                            </NavLink>


                            <NavLink
                                to="/about"
                                className="
                            group
                            flex
                            items-center
                            justify-center
                            gap-3
                            px-6
                            md:px-9
                            py-3
                            md:py-4
                            bg-white/90
                            backdrop-blur-sm
                            text-[#133a41]
                            border
                            border-slate-200
                            text-[9px]
                            md:text-xs
                            uppercase
                            tracking-[0.2em]
                            rounded-sm
                            hover:border-red-700
                            hover:text-red-700
                            transition-all
                            duration-500
                        "
                            >
                                About Vu Devi

                                <ArrowUpRight
                                    size={14}
                                    className="
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                                transition-transform
                            "
                                />
                            </NavLink>

                        </div>

                    </motion.div>
                </div>


                {/* SCROLL INDICATOR */}
                <div className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            z-10
            hidden
            md:flex
            flex-col
            items-center
            gap-2
        ">
                    <span className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.25em]
                text-slate-400
            ">
                        Explore
                    </span>

                    <span className="
                w-px
                h-8
                bg-slate-300
            " />
                </div>

            </section>
        </>
    );
}

export default EventHero;