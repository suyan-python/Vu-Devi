import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Clock, Users, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export default function JobModal({ job, onClose })
{
    return (
        <AnimatePresence>
            {job && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[900] bg-black/70  flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.98, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.98, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white max-w-5xl w-full max-h-[75vh] md:max-h-[80vh] overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col relative"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* 1. TOP UTILITY BAR (System Feel) */}
                        <div className="bg-slate-50 px-8 py-3 border-b border-slate-100 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                                <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Official Deployment Document</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-900"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* 2. MODAL BODY (Scrollable Area) */}
                        <div className="overflow-y-auto p-8 md:p-12">

                            {/* Header Section */}
                            <div className="mb-4 md:mb-12">
                                <p className="text-red-700 font-mono text-[8px] md:text-xs mb-2 tracking-tighter">
                                    REF_ID: VDS-{job.id?.toUpperCase() || "INT-04"}
                                </p>
                                <h2 className="text-xl md:text-5xl font-medium  tracking-tighter leading-[1.2] mb-3 md:mb-6">
                                    {job.title}
                                </h2>

                                {/* Professional Metadata Grid */}
                                <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-3 md:py-6">
                                    <div className="space-y-1">
                                        <p className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Location</p>
                                        <div className="flex items-center gap-2 text-slate-700 font-bold text-[10px] md:text-sm">
                                            <MapPin size={14} className="text-red-700 hidden md:block" />
                                            {job.location}
                                        </div>
                                    </div>
                                    <div className="space-y-1 border-l border-slate-100 pl-4">
                                        <p className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Schedule</p>
                                        <div className="flex items-center gap-2 text-slate-700 font-bold text-[10px] md:text-sm">
                                            <Clock size={14} className="text-red-700 hidden md:block" />
                                            {job.schedule}
                                        </div>
                                    </div>
                                    <div className="space-y-1 border-l border-slate-100 pl-4">
                                        <p className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Capacity</p>
                                        <div className="flex items-center gap-2 text-slate-700 font-bold text-[10px] md:text-sm">
                                            <Users size={14} className="text-red-700 hidden md:block" />
                                            {job.openings || "Multiple Positions"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Content Sections */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {job.sections.map((section, index) => (
                                    <section key={index} className="space-y-5">
                                        <div className="flex items-center gap-3">
                                            <div className="h-4 w-1 bg-[#133a41]"></div>
                                            <h3 className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-[#133a41]">
                                                {section.title}
                                            </h3>
                                        </div>

                                        <ul className="space-y-4">
                                            {section.content.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-[10px] md:text-[14px] text-slate-600 leading-relaxed">
                                                    <div className="mt-1.5 flex-none">
                                                        <div className="w-1 h-1 bg-red-700 rotate-45" />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                ))}
                            </div>

                            {/* Institutional Footer Note */}
                            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center gap-3 md:gap-6">
                                <div className="flex-none w-8 h-8 md:w-12 md:h-12 rounded-full   flex items-center justify-center text-red-700">
                                    <ShieldCheck size={24} />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-[8px] md:text-xs font-black text-[#133a41] uppercase tracking-widest mb-1">Standard Disclaimer</p>
                                    <p className="text-[8px] md:text-xs text-slate-500 leading-relaxed">
                                        All clinical data processing roles require strict adherence to HIPAA and GDPR protocols.
                                        Compensation is structured based on institutional grading and professional experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. MODAL ACTION FOOTER */}
                        <div className="p-8 bg-white border-t border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="flex items-center gap-4 text-slate-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                                <FileText size={16} />
                                Digital Application Processing
                            </div>
                            <button
                                onClick={onClose}
                                className="group w-auto px-12 py-4 bg-[#133a41] text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-red-700 transition-all duration-500 flex items-center justify-center gap-3 "
                            >
                                Apply
                            </button>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}