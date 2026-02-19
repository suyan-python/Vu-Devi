import React from "react";
import { Award, GraduationCap, Calendar, ChevronRight, Medal } from "lucide-react";

import rajendra from "../assets/month/rajendra.jpeg";
import anamika from "../assets/month/anamika.jpeg";
import shruti from "../assets/month/shruti.jpeg";

const employees = [
    {
        name: "Dr. Rajendra Kumar Singh",
        designation: "Medical Report Writer",
        team: "Team: Nikita",
        image: rajendra,
    },
    {
        name: "Pt. Anamika Shahi",
        designation: "Pt. Report Writer",
        team: "Team: Rajiya",
        image: anamika,
    },
    {
        name: "Ms. Shruti Gautam",
        designation: "Medical Lister",
        team: "Team: Bandana",
        image: shruti,
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
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-800 ">
                            Honoring Our <br />
                            <span className="text-red-700 font-light">December 2025</span> Employees of the Month
                        </h2>
                    </div>
                </div>

                {/* EMPLOYEE OF THE MONTH GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {employees.map((emp, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                        >
                            {/* Main Image Section */}
                            <div className="relative w-full h-80 md:h-96 overflow-hidden">
                                <img
                                    src={emp.image}
                                    alt={emp.name}
                                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Gradient overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B44]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex flex-col justify-between space-y-5">
                                {/* Name & Designation */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{emp.name}</h3>
                                    <div className="flex items-center gap-2 text-[#D9534F] mt-2">
                                        <GraduationCap size={18} />
                                        <span className="text-sm md:text-base font-medium uppercase tracking-wide">{emp.designation}</span>
                                    </div>
                                </div>

                                {/* Achievement Section */}
                                <div className="bg-[#F7FAFC] rounded-lg p-5 border-l-4 border-[#0F3B44] shadow-sm">
                                    <p className="text-xs md:text-sm uppercase font-semibold text-slate-400 tracking-widest mb-2">
                                        Service Excellence
                                    </p>
                                    <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">
                                        "{emp.achievement || 'Outstanding contribution to medical documentation accuracy and team leadership.'}"
                                    </p>
                                </div>

                                {/* Footer / Certification */}
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-tighter italic">
                                        Certified by Vu Devi Services
                                    </span>
                                    <button className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-[#0F3B44] hover:text-white transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
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
