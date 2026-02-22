import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Globe, ShieldCheck, Zap, BarChart3, TrendingUp, Layers } from "lucide-react";

export default function InsightsTerminal()
{
    const [time, setTime] = useState(new Date());

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-32 min-h-screen text-slate-900  selection:bg-red-200">
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(90deg,transparent_98%,#ff0000_100%)] bg-[length:40px_40px]" />

            {/* 1. TOP STATUS BAR (AI System Initialization) */}
            <div className="relative bg-slate-900 text-white md:py-2 px-6 flex justify-between items-center border-b border-white/10 overflow-hidden">

                {/* Left Side Indicators */}
                <div className="flex items-center gap-4 relative z-10">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-[#133a41]"></div>
                    </div>

                    {/* Continuous Sliding Text */}
                    <div className="overflow-hidden whitespace-nowrap w-[500px] md:w-[700px]">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 18,
                                ease: "linear",
                            }}
                            className="flex gap-16 text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] opacity-70"
                        >
                            <span>
                                VDS_NEURAL_GRID v4.2.1 // Autonomous Clinical Intelligence Layer
                            </span>
                            <span>
                                VDS_NEURAL_GRID v4.2.1 // Autonomous Clinical Intelligence Layer
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side Timestamp */}
                <span className="text-[9px] font-mono opacity-50 uppercase tracking-widest relative z-10">
                    Quantum Sync Timestamp: {time.toLocaleTimeString()}
                </span>

                {/* Subtle Scanning Glow */}
                <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none"
                />
            </div>

            <main className="max-w-[1600px] mx-auto p-6 lg:p-12">


                {/* 2. AI HERO HEADER */}
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 bg-[#133a41]/5 px-4 py-1.5 rounded-full border border-[#133a41]/10">
                        <Zap size={14} className="text-red-700" />
                        <span className="text-[10px] font-black text-[#133a41] uppercase tracking-widest">Neural Insights Enabled</span>
                    </div>
                    <h1 className="text-3xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
                        Autonomous Clinical
                        <br />
                        <span className="text-red-700 font-light">
                            Intelligence Engine
                        </span>
                    </h1>
                    <p className="mt-6 text-slate-500 text-xs md:text-lg max-w-2xl leading-relaxed">
                        The VDS Neural Engine continuously models workforce velocity, documentation entropy, and diagnostic accuracy — recalibrating operational throughput in real time across global clinical nodes.
                    </p>
                </header>

                {/* 3. THE BENTO GRID (Modern AI Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[240px]">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <motion.div
                            animate={{ opacity: [0.02, 0.05, 0.02] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.15),transparent_40%)]"
                        />
                    </div>

                    {/* Card: Live Workforce Node (Big Focus) */}
                    <div className="lg:col-span-8 lg:row-span-2 bg-slate-50 border border-slate-200 p-5 md:p-10 relative overflow-hidden group">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 tracking-tight">Workforce Capacity</h3>
                                    <p className="text-[8px] md:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Global Documentation Nodes</p>
                                </div>
                                <div className="p-2 md:p-4 bg-white shadow-xl rounded-sm">
                                    <TrendingUp className="text-red-700" size={24} />
                                </div>
                            </div>
                            {/* Simulated Chart Placeholder */}
                            <div className="mt-auto h-48 w-full flex items-end gap-2">
                                {[40, 60, 45, 90, 65, 80, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: [`${h - 15}%`, `${h}%`, `${h - 10}%`] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                                        className="flex-1 bg-[#133a41] opacity-20 hover:opacity-100 transition-opacity rounded-t-sm"
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Background Grid Decoration */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
                    </div>

                    {/* Card: Accuracy Audit (Small Highlight) */}
                    <div className="lg:col-span-4 lg:row-span-1 bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white p-4 md:p-8 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <ShieldCheck size={28} />
                            <span className="text-[10px] font-mono">SECURE_ISO</span>
                        </div>
                        <div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="text-5xl  tracking-tight"
                            >
                                <motion.span
                                    initial={{ count: 90 }}
                                    animate={{ count: 99.9 }}
                                    transition={{ duration: 2 }}
                                >
                                    99.9%
                                </motion.span>
                            </motion.p>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Clinical Data Integrity</p>
                        </div>
                    </div>

                    {/* Card: AI Processing (Glassmorphism) */}
                    <div className="lg:col-span-4 lg:row-span-2 bg-[#133a41] text-white p-10 relative overflow-hidden">

                        <div className="relative z-10 h-full flex flex-col">
                            <Cpu size={32} className="text-red-500 md:mb-8" />
                            <h3 className="text-lg md:text-2xl font-bold mb-4 tracking-tight">Neural Core Processing</h3>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-10 flex-1">
                                Real-time NLP structuring for medical transcription and diagnostic coding automation.
                            </p>
                            <div className="space-y-4">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                                    <span>Logic Flow</span>
                                    <span>88% Optimized</span>
                                </div>
                                <div className="h-1 w-full bg-white/10 overflow-hidden">
                                    <motion.div
                                        animate={{ x: [-100, 400] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="h-full w-20 bg-red-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card: Global Latency (Data List) */}
                    <div className="lg:col-span-4 lg:row-span-1 bg-white border border-slate-200 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Globe size={18} className="text-[#133a41]" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Global Network Status</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                <span className="text-xs font-bold">Nepal</span>
                                <span className="text-xs font-mono text-emerald-500">Active</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-50 pb-2">
                                <span className="text-xs font-bold">USA</span>
                                <span className="text-xs font-mono text-emerald-500">Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Card: Volume Metric */}
                    <div className="lg:col-span-4 lg:row-span-1 bg-slate-900 text-white p-8 flex items-center gap-6">
                        <div className="h-full w-1 bg-red-700"></div>
                        <div>
                            <motion.p
                                animate={{ opacity: [1, 0.85, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-4xl font-bold tracking-tight"
                            >
                                1.2M+
                            </motion.p>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Records Transmitted/Year</p>
                        </div>
                    </div>

                </div>

                {/* 4. TECHNICAL FOOTNOTE */}
                <footer className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <BarChart3 className="text-slate-300" size={20} />
                        <p className="text-[10px] text-slate-400 font-medium max-w-sm">
                            *Calculations are performed by the VDS Predictive Engine using historical throughput data. Values are refreshed every 24 hours.
                        </p>
                    </div>
                </footer>
            </main>

        </div>
    );
};