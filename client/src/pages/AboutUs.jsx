import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import MeetFounder from "./MeetFounder";
import MeetManagement from "./MeetManagement";
import
{
  ShieldCheck, Globe, Zap, HeartPulse,
  Target, Award, Scale, Microscope
} from "lucide-react";

function AboutUs()
{
  return (
    <section className="relative py-32 bg-[#f8fafc] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-8 lg:mb-14 gap-8">
          {/* Left/Main Column: Institutional Title */}
          <motion.div
            className="max-w-3xl text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Institutional Badge - Centered on mobile */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#133a41] text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-6">
              <Award size={12} />
              Established Excellence
            </div>

            {/* Main Headline - Using tight tracking for authority */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
              The Architecture of <br />
              <span className="text-red-700 font-light ">Clinical Trust.</span>
            </h2>
          </motion.div>

          {/* Right Column: Operational Status - Centered on mobile */}
          <div className="text-center lg:text-right border-t lg:border-t-0 border-slate-100  lg:pt-0 w-full lg:w-auto">
            <div className="flex lg:block flex-col items-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Global Operations
              </p>
              <div className="flex items-center gap-2 lg:justify-end">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-tighter">
                  Medical Support Node v4.0
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. WHO WE ARE (THE CORPORATE BRIEF) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-4">
            <h3 className="text-xs font-black text-red-700 uppercase tracking-[0.3em] md:mb-4">Corporate Identity</h3>
            <p className="text-[14px] md:text-2xl  text-slate-800 leading-snug">
              Bridging the gap between clinical care and administrative precision.
            </p>
          </div>
          <div className="lg:col-span-8 p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
              <Microscope size={120} />
            </div>
            <p className="text-xs md:text-lg text-slate-600 leading-relaxed">
              Vu Devi Services is a specialized partner in <span className="text-slate-900 font-bold">medical documentation and healthcare support</span>. We operate at the intersection of technology and human expertise, providing global providers with compliant, high-fidelity data solutions. Our infrastructure is built to ensure that healthcare professionals can redirect their focus toward <span className="text-red-700 italic">patient outcomes</span> while we manage the complexity of their documentation.
            </p>
          </div>
        </motion.div>

        {/* 3. PHILOSOPHY: VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 mb-24 overflow-hidden shadow-2xl">
          {/* Vision */}
          <div className="bg-white p-12 hover:bg-slate-50 transition-colors">
            <Target className="text-red-700 mb-6" size={40} />
            <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Strategic Vision</h3>
            <p className="text-slate-600 leading-relaxed text-xs md:text-[14px]">
              To be the global benchmark for medical documentation, setting the standard for <strong>precision-driven healthcare outsourcing</strong> through continuous technological evolution.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-white p-12 hover:bg-slate-50 transition-colors">
            <ShieldCheck className="text-[#133a41] mb-6" size={40} />
            <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Institutional Mission</h3>
            <p className="text-slate-600 leading-relaxed text-xs md:text-[14px]">
              To empower healthcare entities by delivering <strong>secure, ethical, and high-accuracy services</strong> that integrate seamlessly into the modern clinical workflow.
            </p>
          </div>
        </div>

        {/* 4. GOVERNING PRINCIPLES (CORE VALUES) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Governing Principles</h3>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: "Integrity", desc: "Honest operations and total transparency.", icon: <Scale /> },
              { label: "Excellence", desc: "Top-tier quality in every clinical file.", icon: <Award /> },
              { label: "Innovation", desc: "Smart tools for faster diagnostics.", icon: <Zap /> },
              { label: "Client-First", desc: "Prioritizing provider success.", icon: <Globe /> },
              { label: "Compliance", desc: "Strict adherence to HIPAA & standards.", icon: <ShieldCheck /> }
            ].map((value, i) => (
              <div key={i} className="p-6 bg-white border border-slate-100 shadow-sm hover:border-[#133a41] transition-all group">
                <div className="text-red-700 mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tighter text-sm">{value.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. VALIDATION: WHY CHOOSE US */}
        <div className="bg-slate-900 p-12 lg:p-20 text-white rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#133a41]/20 skew-x-12 translate-x-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
            <div>
              <h3 className="text-xl md:text-3xl font-bold mb-6">Why Global Providers Trust <br /><span className="text-red-500 underline decoration-1 underline-offset-8">Vu Devi Services</span></h3>
              <p className="text-slate-400 text-xs md:text-lg">We don't just process data; we safeguard medical records and ensure business continuity for clinics worldwide.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">10+ Years</h4>
                <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Industry Expertise</p>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">24/7</h4>
                <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Support</p>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">99.9%</h4>
                <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Accuracy Rate</p>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">ISO/HIPAA</h4>
                <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Certified Protocols</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder & Management Mount Points */}
        <div className="md:mt-24 space-y-24">
          <MeetFounder />
          <MeetManagement />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
