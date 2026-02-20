import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, UserCheck, ShieldCheck, Zap } from "lucide-react";

const PROTOCOLS = [
    {
        id: "01",
        label: "Secure Ingestion",
        icon: <Database size={20} />,
        title: "Encrypted Data Intake",
        desc: "Raw clinical data is received via AES-256 encrypted channels, ensuring zero-leakage during initial transmission from the provider node.",
        stats: { latency: "< 1.2ms", security: "Military Grade", status: "Active" }
    },
    {
        id: "02",
        label: "Intelligence Processing",
        icon: <Cpu size={20} />,
        title: "AI-Augmented Structuring",
        desc: "Proprietary algorithms categorize unstructured medical voice/text data into standardized clinical fields, preparing it for specialist review.",
        stats: { accuracy: "99.8%", engine: "VDS-Core v2", status: "Active" }
    },
    {
        id: "03",
        label: "Expert Validation",
        icon: <UserCheck size={20} />,
        title: "Clinical Integrity Audit",
        desc: "Certified medical professionals perform a high-fidelity review of the structured data to ensure absolute diagnostic and terminology accuracy.",
        stats: { oversight: "Human-in-loop", protocol: "Double-Blind", status: "Active" }
    },
    {
        id: "04",
        label: "Final Deployment",
        icon: <ShieldCheck size={20} />,
        title: "HIPAA Compliant Delivery",
        desc: "The verified clinical document is integrated directly into the client's EHR system, closing the loop with a full audit trail.",
        stats: { compliance: "HIPAA/GDPR", uptime: "100%", status: "Secured" }
    }
];

export default function WorkflowEngine()
{
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="bg-white py-18 md:py-32 overflow-hidden border-b-2 border-red-800">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-14 md:mb-20">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap size={16} className="text-red-700 fill-red-700" />
                        <span className="text-[10px] font-black text-[#133a41] uppercase tracking-[0.4em]">Operational Pulse</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter">
                        Clinical Transmission <span className="text-red-700 font-light">Lifecycle.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: STEP SELECTOR (The "Control Panel") */}
                    <div className="lg:col-span-4 space-y-2">
                        {PROTOCOLS.map((step, index) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`w-full flex items-center gap-6 p-6 transition-all duration-300 border-l-4 text-left
                  ${activeStep === index
                                        ? "bg-slate-50 border-red-700"
                                        : "bg-transparent border-slate-100 hover:border-slate-300"}`}
                            >
                                <span className={`font-mono text-xs font-bold ${activeStep === index ? "text-red-700" : "text-slate-300"}`}>
                                    {step.id}
                                </span>
                                <div className="flex-1">
                                    <p className={`text-xs font-black uppercase tracking-widest ${activeStep === index ? "text-[#133a41]" : "text-slate-400"}`}>
                                        {step.label}
                                    </p>
                                </div>
                                <div className={activeStep === index ? "text-red-700" : "text-slate-200"}>
                                    {step.icon}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: DATA DISPLAY (The "Screen") */}
                    <div className="lg:col-span-8 bg-[#133a41] rounded-sm p-8 md:p-16 text-white relative min-h-[450px] flex flex-col justify-center shadow-2xl">
                        {/* Background Grid for Tech Vibe */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="px-3 py-1 bg-red-700 text-[9px] font-black uppercase tracking-widest">Stage Verified</div>
                                    <div className="h-[1px] flex-1 bg-white/10"></div>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter text-white">
                                    {PROTOCOLS[activeStep].title}
                                </h3>
                                <p className="text-slate-300 text-sm md:text-xl leading-relaxed max-w-2xl mb-12">
                                    {PROTOCOLS[activeStep].desc}
                                </p>

                                {/* DYNAMIC SYSTEM STATS */}
                                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                                    {Object.entries(PROTOCOLS[activeStep].stats).map(([key, val], i) => (
                                        <div key={i}>
                                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{key}</p>
                                            <p className="text-xs md:text-sm font-bold text-red-400 font-mono tracking-tighter uppercase">{val}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}