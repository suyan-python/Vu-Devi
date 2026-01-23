import React from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin, Zap, Users, ShieldCheck } from "lucide-react";
import Dilasha from "../assets/person/all/dilasha.jpeg";

const MeetManagement = () =>
{
    return (
        <section className="py-24 bg-[#f8fafc] border-y border-slate-100 relative overflow-hidden">
            {/* Structural Background Accent (Left side for balance) */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-white hidden lg:block -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* 1. CONTENT COLUMN (Left side for contrast with Founder section) */}
                    <motion.div
                        className="lg:col-span-7 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-12 h-[2px] bg-red-700"></span>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Operations Executive</p>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
                            Operational Mastery & <br />
                            <span className="text-[#133a41] italic font-light">Scalable Growth.</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                As the <span className="text-slate-900 font-bold uppercase text-sm tracking-tighter">Head of Management</span>, Dilasha Shakya orchestrates the core operational pulse of Vu Devi Services. Her focus is the cultivation of a <span className="font-semibold">high-performance culture</span> that balances clinical compliance with human-centric empowerment.
                            </p>

                            <p>
                                She believes that effective management is the silent engine of any successful organization. By integrating <span className="text-red-700 font-bold">advanced logistical strategies</span> with a deep commitment to teamwork, she ensures that every client interaction is handled with precision and every internal team member is positioned to thrive.
                            </p>
                        </div>

                        {/* Management Philosophy Block */}
                        <div className="mt-12 p-8 bg-white border-r-4 border-red-700 shadow-sm relative text-right">
                            <Quote className="absolute top-4 left-4 text-slate-100 rotate-180" size={40} />
                            <p className="text-xl font-serif italic text-slate-800 leading-relaxed">
                                "Strong teams are the bedrock of resilient organizations; our goal is to achieve collective excellence through strategic empowerment."
                            </p>
                        </div>

                        {/* Operational Credentials */}
                        <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-slate-200 pt-8">
                            <div className="flex items-center gap-2">
                                <Users className="text-[#133a41]" size={20} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Team Empowerment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="text-[#133a41]" size={20} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Process Optimization</span>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-red-700 hover:text-slate-900 transition-colors ml-auto">
                                <Linkedin size={20} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Executive Network</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* 2. IMAGE COLUMN (Right side) */}
                    <motion.div
                        className="lg:col-span-5 order-1 lg:order-2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Geometric Decorative Frame (Flipped for symmetry) */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-[#133a41]"></div>

                        <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group">
                            <img
                                src={Dilasha}
                                alt="Dilasha Shakya - Management Head"
                                className="w-full h-[650px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-0 right-0 w-full p-8 bg-gradient-to-t from-[#133a41] via-[#133a41]/60 to-transparent text-right">
                                <p className="text-white font-black text-3xl uppercase tracking-tighter">Dilasha Shakya</p>
                                <p className="text-red-400 font-bold text-xs uppercase tracking-[0.3em] mt-1">Head of Institutional Management</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-red-700"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MeetManagement;