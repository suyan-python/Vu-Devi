import React from "react";
import { Award, GraduationCap, Calendar, ChevronRight, Medal } from "lucide-react";

import apurva from "../assets/month/apurva.jpeg";
import sarita from "../assets/month/sarita.jpeg";
import sameera from "../assets/month/sameera.jpeg";

const employees = [
    {
        name: "Dr. Apurva Bhandari",
        designation: "Medical Report Writer",
        team: "Team: Nikita",
        image: apurva,
    },
    {
        name: "Pt. Sarita Ale",
        designation: "Pt. Report Writer",
        team: "Team: Rajiya",
        image: sarita,
    },
    {
        name: "Ms. Sameera Shrestha",
        designation: "Medical Lister",
        team: "Team: Bandana",
        image: sameera,
    },
];

const EmployeeOfTheMonth = () =>
{
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Texture: Subtle medical grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* SECTION HEADER: The Month Focus */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="h-[2px] w-12 bg-red-700"></span>
                            <span className="header text-red-700 font-bold uppercase tracking-[0.3em] text-xs">Monthly Distinction</span>
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold text-slate-900">
                            Honoring Our <br />
                            <span className="text-[#133a41]">November 2025</span> Awardees
                        </h2>
                    </div>

                    {/* Professional Context Box */}
                    <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm hidden lg:block">
                        <div className="flex items-center gap-4 text-[#133a41]">
                            <Calendar size={32} strokeWidth={1.5} />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-400">Review Period</p>
                                <p className="text-sm font-bold">Nov 01 — Nov 30</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EMPLOYEE CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {employees.map((emp, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white flex flex-col transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Top Highlight: The Month Ribbon */}
                            <div className="absolute -top-3 left-6 z-20">
                                <div className="bg-[#133a41] text-white text-[10px] font-bold px-4 py-1 shadow-md flex items-center gap-2">
                                    <Medal size={12} />
                                    MERIT OF PROFESSIONAL INTEGRITY • NOV '25
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="relative aspect-[3/4] overflow-hidden border-x border-t border-slate-100">
                                <img
                                    src={emp.image}
                                    alt={emp.name}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#133a41]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Content Section: Professional Credentials */}
                            <div className="p-8 border-x border-b border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] bg-white">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{emp.name}</h3>
                                    <div className="flex items-center gap-2 text-red-700">
                                        <GraduationCap size={16} />
                                        <span className="text-xs font-bold uppercase tracking-wider">{emp.designation}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-slate-50">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Service Excellence</p>
                                        <p className="text-sm text-slate-600 italic leading-relaxed">
                                            "{emp.achievement || "Outstanding contribution to medical documentation accuracy and team leadership."}"
                                        </p>
                                    </div>
                                </div>

                                {/* Corner Decoration: Official Stamp Look */}
                                <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-50 opacity-40 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter italic">Vu Devi Services Certified</span>
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center">
                                        <ChevronRight size={14} className="text-slate-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployeeOfTheMonth;
