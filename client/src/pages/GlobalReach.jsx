import React from "react";
import { motion } from "framer-motion";
import { Globe, Radio, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LIVE_LOGS = [
    "Transmission: Node_Nepal_01 >> Verified",
    "HIPAA Protocol Audit: Status_Green",
    "Inbound Data: Clinic_NY_339 >> Ingested",
    "AI-Sync: Structuring Node_Alpha Active",
    "Security Layer: AES-256 Handshake Success",
    "Clinical Review: Hub_Kathmandu >> 99.9% Acc",
];

export default function GlobalReachTerminal()
{
    return (
        <section className="bg-slate-50 border-t border-slate-200 pt-18 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* 1. LEFT SIDE: THE RADAR (Visual Focus) */}
                    <div className="lg:col-span-5 relative flex items-center justify-center">
                        {/* Pulsing Circles */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full border-2 border-red-700"
                            />
                            <motion.div
                                animate={{ scale: [1, 2], opacity: [0.2, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                className="absolute inset-0 rounded-full border-2 border-[#133a41]"
                            />

                            <div className="relative z-10 w-32 h-32 bg-white shadow-2xl rounded-full flex items-center justify-center border border-slate-100">
                                <Globe className="text-[#133a41] animate-spin-slow" size={48} strokeWidth={1} />
                            </div>
                        </div>

                        {/* Static Stats floating around */}
                        <div className="absolute top-0 right-0 bg-white p-4 shadow-xl border-l-4 border-red-700">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Hubs</p>
                            <p className="text-xl font-bold text-slate-900">Global Connectivity</p>
                        </div>
                    </div>

                    {/* 2. RIGHT SIDE: THE LIVE LOG & CTA */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter mb-8 leading-none">
                            Connecting <span className="text-red-700 font-light">Precision</span> <br />With Global Care.
                        </h2>

                        {/* THE ACTIVITY LOG (Dynamic Scroll) */}
                        <div className="bg-slate-900 rounded-sm p-6 mb-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-slate-900 to-transparent z-10"></div>

                            <div className="h-40 flex flex-col gap-2 overflow-hidden">
                                <motion.div
                                    animate={{ y: [0, -200] }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="space-y-4"
                                >
                                    {[...LIVE_LOGS, ...LIVE_LOGS].map((log, i) => (
                                        <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-2">
                                            <span className="text-emerald-500 font-mono text-[10px]">✓</span>
                                            <p className="text-white/60 font-mono text-[11px] uppercase tracking-tighter">
                                                {log}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                        </div>

                        {/* FINAL CTA */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <Link to="/application">
                                <button className="group px-10 py-5 bg-[#133a41] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-red-700 transition-all duration-500 flex items-center gap-4 cursor-pointer">
                                    Explore Opportunities
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <div className="flex items-center gap-3 text-slate-400">
                                <ShieldCheck size={20} className="text-red-700" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Validated Institutional Security</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}