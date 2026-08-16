import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import MeetFounder from "./MeetFounder";
import MeetManagement from "./MeetManagement";
import
{
  ShieldCheck, Globe, Zap, HeartPulse,
  Target, Award, Scale, Microscope
} from "lucide-react";
import ValidationSlider from "./Slides";
import GlobalReachTerminal from "./GlobalReach";
import CompanyNetwork from "./CompanyNetwork";

function AboutUs()
{
  return (
    <section className="relative py-32 md:py-44 bg-[#f8fafc] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">

        <CompanyNetwork currentCompany="Vu Devi Services" />


        {/* VU DEVI — WHO WE ARE */}
        <section className="mb-24">

          {/* Section Heading */}
          <motion.div
            className="max-w-4xl mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[8px] md:text-[10px] font-black text-red-700 uppercase tracking-[0.3em] mb-5">
              Talking About Vu Devi Services
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.08]">
              Building Trust Through{" "}
              <span className="text-red-700 font-light">
                Clinical Precision.
              </span>
            </h2>
          </motion.div>


          {/* Corporate Brief */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* Left — Identity */}
            <div className="lg:col-span-4">
              <div className="border-l-2 border-red-700 pl-5 md:pl-6">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.25em] mb-4">
                  Who We Are
                </h3>

                <p className="text-sm md:text-xl text-slate-700 leading-snug">
                  Bridging clinical expertise with
                  <span className="text-slate-900 font-semibold">
                    {" "}technology, precision, and operational support.
                  </span>
                </p>
              </div>
            </div>


            {/* Right — Corporate Description */}
            <div className="lg:col-span-8">
              <div className="relative bg-white border border-slate-200 p-7 md:p-10 lg:p-12 overflow-hidden">

                {/* Decorative Element */}
                <div className="absolute -right-6 -top-6 text-slate-900 opacity-[0.025]">
                  <Microscope size={150} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <p className="text-xs md:text-lg text-slate-600 leading-[1.8]">
                    Vu Devi Services is a specialized provider of
                    <span className="text-slate-900 font-bold">
                      {" "}medical documentation and healthcare support
                    </span>
                    . We combine technology with human expertise to deliver
                    accurate, compliant, and dependable documentation
                    solutions for healthcare providers.
                  </p>

                  <p className="text-xs md:text-lg text-slate-600 leading-[1.8] mt-5">
                    By taking on the complexity of documentation and
                    administrative processes, we help healthcare
                    professionals focus on what matters most:
                    <span className="text-red-700 font-medium italic">
                      {" "}better patient outcomes.
                    </span>
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </section>

        {/* 3. PHILOSOPHY: VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 mb-24 overflow-hidden shadow-2xl">
          {/* Vision */}
          <div className="bg-white p-12 hover:bg-slate-50 transition-colors">
            <Target className="text-red-700 mb-6" size={40} />
            <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Strategic Vision</h3>
            <p className="text-slate-600 leading-relaxed text-[10px] md:text-[14px]">
              To be the global benchmark for medical documentation, setting the standard for <strong>precision-driven healthcare outsourcing</strong> through continuous technological evolution.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-white p-12 hover:bg-slate-50 transition-colors">
            <ShieldCheck className="text-[#133a41] mb-6" size={40} />
            <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Institutional Mission</h3>
            <p className="text-slate-600 leading-relaxed text-[10px] md:text-[14px]">
              To empower healthcare entities by delivering <strong>secure, ethical, and high-accuracy services</strong> that integrate seamlessly into the modern clinical workflow.
            </p>
          </div>
        </div>

        {/* 4. GOVERNING PRINCIPLES (CORE VALUES) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Governing Principles</h3>
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
        <ValidationSlider />

        {/* Founder & Management Mount Points */}
        <div className="md:mt-24 space-y-24">
          <MeetFounder />
          {/* <MeetManagement /> */}
        </div>

        <GlobalReachTerminal />

      </div>
    </section>
  );
}

export default AboutUs;
