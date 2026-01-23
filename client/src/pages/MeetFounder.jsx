import React from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin, Award, ShieldCheck } from "lucide-react";
import Binayak from "../assets/person/binayak2.jpeg";

const MeetFounder = () =>
{
    return (
        <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
            {/* Structural Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fafc] hidden lg:block -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* 1. IMAGE COLUMN (The "Portrait") */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Geometric Decorative Frame */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-700"></div>

                        <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group">
                            <img
                                src={Binayak}
                                alt="Binayak Malla - Founder of Vu Devi Services"
                                className="w-full h-[650px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
                                <p className="text-white font-black text-3xl uppercase tracking-tighter">Binayak Malla</p>
                                <p className="text-red-500 font-bold text-xs uppercase tracking-[0.3em] mt-1">Founder & Chief Executive</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#133a41]"></div>
                    </motion.div>

                    {/* 2. CONTENT COLUMN (The "Philosophy") */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-12 h-[2px] bg-red-700"></span>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Leadership Profile</p>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
                            Driving Global Healthcare <br />
                            <span className="text-red-700 italic font-light">through Innovation.</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                As an entrepreneur and innovator, my journey has been defined by a single
                                commitment: <span className="text-slate-900 font-bold">transforming complex challenges into seamless technological solutions.</span>
                                At Vu Devi Services, we recognize that the healthcare industry demands more than just data processing—it requires absolute precision and unwavering trust.
                            </p>

                            <p>
                                With over a decade of experience in industrial transformation, I believe that
                                true success is found at the intersection of <span className="text-[#133a41] font-bold underline decoration-slate-200 underline-offset-4">strategy, ethics, and human-centric technology.</span>
                                We don’t just build businesses; we architect impactful clinical solutions that safeguard the future of patient care documentation.
                            </p>
                        </div>

                        {/* Quote Block */}
                        <div className="mt-12 p-8 bg-slate-50 border-l-4 border-[#133a41] relative">
                            <Quote className="absolute top-4 right-4 text-slate-200" size={40} />
                            <p className="text-xl font-serif italic text-slate-800 leading-relaxed">
                                "Great ideas start with a vision, but institutional success is born from the relentless pursuit of clinical integrity."
                            </p>
                        </div>

                        {/* Institutional Credentials */}
                        <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-slate-100 pt-8">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="text-red-700" size={20} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Minded</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="text-red-700" size={20} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Industry Leader</span>
                            </div>
                            <a href="#" className="flex items-center gap-2 text-[#133a41] hover:text-red-700 transition-colors">
                                <Linkedin size={20} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Connect on Professional Network</span>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MeetFounder;