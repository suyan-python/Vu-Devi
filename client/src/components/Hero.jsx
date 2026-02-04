import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ShieldCheck, Microscope, Database } from "lucide-react";
import back from "../assets/background/back3.jpg";
import { motion } from "framer-motion";

function Hero()
{
  return (
    <section className="relative h-screen w-full flex items-start overflow-hidden ">
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <img
          src={back}
          alt="Vu Devi Services Staff"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Intelligent Medical Gradient: 
            White at the top (Clinical Cleanliness) to 
            Transparent at the bottom (Human Connection)
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      </div>

      {/* 2. CENTRAL COMMAND UI */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 md:pt-32 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          {/* Institutional Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full mb-5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-800"></span>
            </span>
            <p className="text-slate-600 font-black tracking-[0.3em] uppercase text-[9px]">
              Institutional Excellence • Since 2013
            </p>
          </div>

          {/* Clinical Headline - Using lg:7xl for Authority */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.1] tracking-tighter mb-6">
            Pioneering Precision in <br />
            <span className="text-red-700  font-light">Medical Documentation</span>
          </h1>

          {/* Medical Credibility Sub-text */}
          <p className="text-base md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Bridging the gap between <span className="text-[#133a41] font-bold">clinical workflow</span> and
            <span className="text-[#133a41] font-bold"> data integrity</span>. We provide HIPAA-compliant solutions tailored for global healthcare practitioners.
          </p>

          {/* Quick Stats - Direct value for Doctors */}
          {/* <div className="hidden md:flex justify-center gap-12 mb-12 py-6 border-y border-slate-100">
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-red-700 mb-2" size={20} />
              <span className="text-[10px] font-black uppercase text-slate-400">HIPAA Secure</span>
            </div>
            <div className="flex flex-col items-center">
              <Microscope className="text-red-700 mb-2" size={20} />
              <span className="text-[10px] font-black uppercase text-slate-400">Clinical Accuracy</span>
            </div>
            <div className="flex flex-col items-center">
              <Database className="text-red-700 mb-2" size={20} />
              <span className="text-[10px] font-black uppercase text-slate-400">ISO Certified</span>
            </div>
          </div> */}

          {/* Professional Action Buttons */}
          <div className="flex flex-row gap-4 justify-center flex-wrap">
            <NavLink
              to="/about"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-[#133a41] text-white font-black text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-red-700 transition-all duration-500 shadow-xl shadow-[#133a41]/20"
            >
              Enterprise Profile
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>

            <NavLink
              to="/team"
              className="flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#133a41] border-2 border-slate-200 font-black text-xs uppercase tracking-[0.2em] rounded-sm hover:border-red-700 hover:text-red-700 transition-all duration-500"
            >
              Medical Board
            </NavLink>
          </div>
        </motion.div>
      </div>

      {/* Visual Bottom Anchor: Ensures the transition to the staff image is seamless */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Hero;