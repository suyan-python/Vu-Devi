import React from "react";
import { Award, GraduationCap, Calendar, ChevronRight, Medal, Quote } from "lucide-react";
import { ShieldCheck, User } from "lucide-react";

import akriti from "../assets/month/akriti.jpeg";
import aayushma from "../assets/month/aayushma.jpeg";
import arju from "../assets/month/arju.jpeg";

import { motion } from "framer-motion";


const employees = [
    {
        name: "Dr. Akriti Shrestha",
        designation: "Medical Report Writer",
        team: "Team: Nikita",
        image: akriti,
        achievement: "Recognized for consistently delivering clear, well-structured medical reports while maintaining high standards of clinical accuracy and documentation quality."
    },
    {
        name: "Pt. Aayushma Pokharel",
        designation: "PT Report Writer",
        team: "Team: Rajiya",
        image: aayushma,
        achievement: "Demonstrates strong consistency in producing detailed and patient-focused physical therapy reports with accurate clinical interpretation."
    },
    {
        name: "Ms. Arju Khadka",
        designation: "Medical Lister",
        team: "Team: Bandana",
        image: arju,
        achievement: "Maintains high precision in organizing and structuring medical data, contributing to smoother workflows and reliable documentation processes."
    },
    // {
    //     name: "Mr. Suman Dahal",
    //     designation: "Data Analyst",
    //     team: "Team: Ravi",
    //     image: suman,
    //     achievement: "Developed a new data visualization dashboard that enhanced the team's ability to track key performance metrics, leading to a 20% improvement in decision-making speed."
    // },
];

const EmployeeOfTheMonth = () =>
{
    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
            {/* Structural Backdrop */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#133a41]/5 -skew-x-12 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. HEADER: Institutional Authority */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="border-l-4 border-red-700 pl-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[1px] bg-[#133a41]"></span>
                            <p className="text-[10px] font-black text-[#133a41] uppercase tracking-[0.4em]">
                                Personnel Excellence Appreciation
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-none">
                            Employee of the Month -  <span className="text-red-700 font-light italic">March, 2026</span>
                        </h2>
                        <p className="mt-4 text-slate-500 text-xs md:text-sm uppercase tracking-[0.25em] font-bold">
                            Based on Performance Audit
                        </p>
                    </div>

                    <div className="hidden lg:block text-right">
                        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Auth_Code: Verified under Vu Devi Services</p>
                        <div className="flex justify-end gap-1 mt-2">
                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-red-700"></div>)}
                        </div>
                    </div>
                </div>

                {/* 2. EMPLOYEE GRID: Balanced 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {employees.map((emp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="group relative h-[500px] lg:h-[600px] overflow-hidden bg-[#133a41] rounded-sm shadow-2xl"
                        >
                            {/* IMAGE NORMALIZATION: Fixes clashing backgrounds */}
                            <div className="absolute inset-0 w-full h-full bg-[#133a41]">
                                <img
                                    src={emp.image}
                                    alt={emp.name}
                                    className="w-full h-full object-cover  contrast-125 brightness-75  transition-all duration-700 group-hover:scale-105  group-hover:mix-blend-normal group-hover:brightness-100"
                                />
                            </div>

                            {/* OVERLAY GRADIENTS (60-30-10 Rule) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f34] via-[#133a41]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* TOP ACCENT LINE */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                            {/* CONTENT ARCHITECTURE */}
                            <div className="absolute inset-0 p-8 flex flex-col">

                                {/* Top Corner: Meta Data */}
                                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                                    <div className="p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm">
                                        <ShieldCheck size={16} className="text-red-500" />
                                    </div>
                                    <span className="text-[9px] font-mono text-white/40 tracking-tighter">REF_0{idx + 1}</span>
                                </div>

                                {/* Bottom Section: Info & Achievement */}
                                <div className="mt-auto">
                                    <div className="mb-6">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tighter leading-none mb-2">
                                            {emp.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-[1px] bg-red-500"></div>
                                            <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                                {emp.designation}
                                            </p>
                                        </div>
                                    </div>

                                    {/* ACHIEVEMENT REVEAL: Hidden until hover */}
                                    <div className="h-0 group-hover:h-32 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 overflow-hidden">
                                        <div className="pt-4 border-t border-white/10">
                                            <Quote className="text-red-700 mb-2" size={16} />
                                            <p className="text-xs lg:text-sm text-slate-300 leading-relaxed italic">
                                                {emp.achievement}
                                            </p>
                                        </div>
                                    </div>

                                    {/* STATIC STATUS BAR */}
                                    <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Award size={14} className="text-red-500" />
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Verified Excellence</span>
                                        </div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">VDS_2026</div>
                                    </div>
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
