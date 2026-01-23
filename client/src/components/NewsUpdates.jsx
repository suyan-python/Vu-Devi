import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight, BarChart3, Radio, ArrowUpRight } from "lucide-react";
import Chart from "./Chart";

function NewsUpdates()
{
  const [expanded, setExpanded] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleExpand = (index) =>
  {
    setExpanded(expanded === index ? null : index);
  };

  const newsData = [
    {
      date: "Jan 20, 2026",
      tag: "Global Alliance",
      title: "Strategic Partnership with International Health Systems",
      summary: "Expanding our operational footprint across global borders to enhance clinical efficiency.",
      details: "Our latest collaboration enables us to bring cutting-edge medical documentation solutions to a wider audience, ensuring seamless healthcare processes and international compliance standards."
    },
    {
      date: "Dec 12, 2025",
      tag: "Expansion",
      title: "Infrastructure Scaling: New Talent Acquisition",
      summary: "Opening 50+ specialized positions to support our growing medical documentation node.",
      details: "As we scale, we are seeking experts in medical coding, documentation, and data security to maintain our high-fidelity output for international clinical partners."
    },
    {
      date: "Nov 05, 2025",
      tag: "Security",
      title: "Hardening Data Protocols & HIPAA Compliance",
      summary: "Upgrading our security architecture with AI-driven fraud detection and encryption.",
      details: "The new infrastructure includes multi-layer authentication and end-to-end encryption protocols, ensuring that patient data remains impenetrable and fully HIPAA/GDPR compliant."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* 1. SECTION HEADER */}
        <div className="flex flex-col items-center mb-24">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-slate-900 text-center uppercase tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Strategic <span className="text-red-700 ">Bulletins.</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#133a41] mt-6"></div>
        </div>

        {/* 2. NEWS GRID - "Official Dossier" Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {newsData.map((news, idx) => (
            <motion.div
              key={idx}
              className={`relative p-8 bg-white border border-slate-200 transition-all duration-500 cursor-pointer group ${expanded === idx ? "ring-2 ring-red-700 shadow-2xl" : "hover:border-red-700"
                }`}
              onClick={() => toggleExpand(idx)}
            >
              {/* Card Header Info */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 text-[10px] font-bold text-red-700 uppercase tracking-widest">
                  <Calendar size={12} />
                  {news.date}
                </div>
                <span className="px-2 py-0.5 bg-slate-100 text-[9px] font-black text-slate-500 uppercase rounded-sm">
                  {news.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-700 transition-colors leading-tight">
                {news.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {news.summary}
              </p>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-600 italic leading-relaxed">
                      {news.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-slate-900">
                  {expanded === idx ? "Close File" : "Open Dossier"}
                </span>
                <ChevronRight className={`transition-transform duration-300 ${expanded === idx ? "rotate-90 text-red-700" : "text-slate-300 group-hover:translate-x-1"}`} size={18} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. INSIGHTS SECTION - "Scale Analytics" */}
        <div className="relative group">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-[#133a41] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>

          <div className="bg-white border-2 border-[#133a41] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-16">

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="text-red-700" size={20} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Growth Metrics</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                Institutional Scale: <br />
                <span className="text-[#133a41]">Workforce Evolution</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
                Transparency is a core value. Monitor our year-on-year scaling as we expand our medical documentation capabilities.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-8 py-3 bg-[#133a41] text-white text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all rounded-sm shadow-lg">
                  Deep Insights <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-slate-50 p-6 lg:p-10 border border-slate-100 shadow-inner">
              {/* Internal Header for Chart */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] font-bold text-slate-400 uppercase">System Chart: v2.4</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                </div>
              </div>
              <Chart />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default NewsUpdates;