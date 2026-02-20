import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCheck, Clock, Users, ArrowRight, ShieldCheck, BadgeCheck } from "lucide-react";

import ravi from "../assets/leads/ravi.webp";
import nikita from "../assets/leads/nikita2.webp";
import rajiya from "../assets/leads/rajiya.webp";
import bandana from "../assets/leads/bandana2.webp";

import aayushma from "../assets/person/all/Aayushma Pokhrel.png"
import dipendra from "../assets/person/all/Dipendra Thapa.png"
import karna from "../assets/person/all/Karna Bahadur Bam.png"
import namita from "../assets/person/all/Namita Sangroula.png"
import priyasha from "../assets/person/all/Priyasha Mahara.png"
import rahul from "../assets/person/all/Rahul Lama.png"
import rojin from "../assets/person/all/Rojin Shakya.png"
import sammyek from "../assets/person/all/sammyek ratna .png"
import sarita from "../assets/person/all/SARITA ALE.png"
import shristi from "../assets/person/all/Shristi Manandhar.png"
import tripti from "../assets/person/all/Tripti Rajkarnikar.png"


function WholeTeam()
{
  const navigate = useNavigate();

  const teamLeads = [
    {
      name: "Dr. Nikita Shakya",
      role: "Medical Report Writer Team Lead",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: nikita,
      link: "/team/nikita",
      date: "2020",
    },
    {
      name: "Dr. Rajiya Shakya[PT]",
      role: "Data Analytics & Healthcare Operations",
      description:
        "Efficient data handling and analytics for healthcare institutions.",
      image: rajiya,
      link: "/team/rajiya",
      date: "2018",
    },
    {
      name: "Dr. Bandana Manandhar[PT]",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: bandana,
      link: "/team/bandana",
      date: "2018",
    },
    {
      name: "Ravi Sunder Shrestha",
      role: "Medical Report Downloader",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: ravi,
      link: "/team/ravi",
      date: "2014",
    },

  ];

  const coreTeams = [
    {
      name: "Dr. Aayushma Pokharel",
      role: "Medical Report Writer",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: aayushma,
      date: "April, 2023",
    },
    {
      name: "Dipendra Thapa",
      role: "Medical Report File Downloader",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: dipendra,
      date: "March, 2019",
    },
    {
      name: "Karna Bahadur Bam",
      role: "Medical Report File Downloader",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: karna,
      date: "November, 2019",
    },
    {
      name: "Namita Sangroula",
      role: "Medical Report File Lister",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: namita,
      date: "January, 2021",
    },
    {
      name: "Priyasha Mahara",
      role: "Medical Report File Lister",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: priyasha,
      date: "July, 2022",
    },
    {
      name: "Rahul Lama",
      role: "Finance Department",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: rahul,
      date: "June, 2021",
    },
    {
      name: "Rojin Shakya",
      role: "Medical Report File Downloader",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: rojin,
      date: "June, 2022",
    },
    {
      name: "Sammyek Ratna Bajracharya",
      role: "Medical Report File Downloader",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: sammyek,
      date: "May, 2021",
    },
    {
      name: "Sarita Ale",
      role: "Medical Report Writer",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: sarita,
      date: "August, 2023",
    },
    {
      name: "Dr. Shristi Manandhar",
      role: "Medical Report Writer",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: shristi,
      date: "April, 2022",
    },
    {
      name: "Dr. Tripti Halwai",
      role: "Medical Report Writer",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: tripti,
      date: "May, 2022",
    },
  ];

  return (
    <section className="w-full py-32  relative overflow-hidden">
      {/* Texture: Professional Medical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ===== SECTION 1: STRATEGIC TEAM LEADS ===== */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-red-700 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                <ShieldCheck size={16} />
                Management Layer
              </div>
              <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-slate-900 ">
                Strategic <span className="text-[#133a41] font-light">Team Leads</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm md:text-right italic">
              Our leads ensure clinical accuracy and maintain international standards across all documentation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamLeads.map((member, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col bg-white rounded-sm border-t-4 border-[#133a41] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={() => navigate(member.link)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  {/* Tenure Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <Clock size={12} className="text-red-700" />
                    <span className="text-[10px] font-bold text-slate-700 uppercase">Since {member.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#133a41] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-red-700 uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 italic">
                    "{member.description}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between group-hover:border-[#133a41]/20 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#133a41]">View Dept.</span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-[#133a41] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== DIVIDER WITH ICON ===== */}
        <div className="relative md:py-12 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative  px-6 text-slate-300"><Users size={32} strokeWidth={1} /></div>
        </div>

        {/* ===== SECTION 2: THE CORE EXPERIENCED TEAM ===== */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Expert <br /> <span className="text-[#133a41]">Clinical Associates</span></h2>
            <p className="text-slate-500 text-sm mt-2">The backbone of our high-precision documentation services.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {coreTeams.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-sm border border-slate-200 shadow-sm hover:border-[#133a41] hover:shadow-md transition-all group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-square rounded-sm overflow-hidden mb-4 bg-slate-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter saturate-[0.8] group-hover:saturate-100 transition-all"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#133a41] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#133a41]">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck size={12} className="text-red-700" />
                    <p className="text-[10px] font-bold text-slate-500 uppercase truncate">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium italic">
                    Expert since {member.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WholeTeam;
