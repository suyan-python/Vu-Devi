import React from "react";
import { Award, GraduationCap, Calendar, ChevronRight, Medal, Quote } from "lucide-react";

import umesh from "../assets/month/umesh.jpeg";
import priyanka from "../assets/month/priyanka.jpeg";
import deepak from "../assets/month/deepak.jpeg";

import umesh2 from "../assets/month/umesh2.jpeg";
import priyanka2 from "../assets/month/priyanka2.jpeg";
import deepak2 from "../assets/month/deepak2.jpeg";

import { motion } from "framer-motion";


const employees = [
    // {
    //     name: "Dr. Rajendra Kumar Singh",
    //     designation: "Medical Report Writer",
    //     team: "Team: Nikita",
    //     image: rajendra,
    //     achievement: "Led the implementation of a new documentation protocol that improved report accuracy by 15% and reduced turnaround time by 20%."
    // },
    {
        name: "Pt. Umesh Kunwar",
        designation: "Pt. Report Writer",
        team: "Team: Rajiya",
        image: umesh2,
        achievement: "Consistently delivered high-quality physical therapy reports, contributing to a 25% increase in patient satisfaction scores."
    },
    {
        name: "Ms. Priyanka Chaudhary",
        designation: "Medical Lister",
        team: "Team: Bandana",
        image: priyanka2,
        achievement: "Played a key role in streamlining the medical listing process, resulting in a 30% reduction in errors and improved workflow efficiency."
    },
    {
        name: "Mr. Deepak Maharjan",
        designation: "Data Analyst",
        team: "Team: Bandana",
        image: deepak2,
        achievement: "Developed a new data visualization dashboard that enhanced the team's ability to track key performance metrics, leading to a 20% improvement in decision-making speed."
    },
];

const EmployeeOfTheMonth = () =>
{
    return (
        <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Institutional Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER: Institutional Alignment */}
                <div className="mb-20 border-l-4 border-red-700 pl-8">
                    <p className="text-[8px] md:text-[10px] font-black text-[#133a41] uppercase tracking-[0.4em] mb-4">
                        Personnel Excellence Appreciation
                    </p>
                    <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-none">
                        The Best Employee of Month <span className="text-red-700 font-light"></span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-xs md:text-lg max-w-xl uppercase tracking-widest font-medium">
                        January 2026 / Performance Audit Monthly
                    </p>
                </div>

                {/* EMPLOYEE GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {employees.map((emp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative aspect-[1/1.618] md:aspect-[1/1.4] lg:aspect-[1/1.3] overflow-hidden bg-[#133a41] rounded-lg"
                        >
                            {/* 1. IMAGE LAYER with Normalization Filter */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={emp.image}
                                    alt={emp.name}
                                    className="w-full h-full object-cover brightness-75 contrast-125 transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:brightness-100 "
                                />
                            </div>

                            {/* 2. GRADIENT OVERLAY (The 30% Primary Color) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f34] via-[#133a41]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                            {/* 3. ACCENT BORDER (The 10% Accent) */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                            {/* 4. CONTENT OVERLAY */}
                            <div className="absolute inset-0 p-3 md:p-8 flex flex-col justify-end text-white ">
                                <div className="mb-1 md:mb-4">
                                    <h3 className="text-[8px] md:text-xl lg:text-2xl font-semibold tracking-tight uppercase">
                                        {emp.name}
                                    </h3>
                                    <p className="text-[7px] md:text-sm font-bold tracking-wider text-red-500 uppercase">
                                        {emp.designation}
                                    </p>
                                </div>

                                {/* Bottom Status Bar */}
                                <div className="pt-1 md:pt-5 border-t border-white/10 flex justify-between items-center md:items-baseline">
                                    <div className="flex items-center md:items-baseline gap-2">
                                        <Award size={14} className="text-red-500" />
                                        <span className="text-[4px] md:text-[9px] font-bold uppercase tracking-widest text-white/50">Verified Excellence</span>
                                    </div>
                                    <h3 className="text-[4px] md:text-[8px] font-mono text-white/30 tracking-tighter">Vu Devi Services</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployeeOfTheMonth;
