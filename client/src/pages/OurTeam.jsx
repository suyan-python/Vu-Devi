import React from "react";
import { motion } from "framer-motion";
import ravi from "../assets/leads/ravi.webp";
import nikita from "../assets/leads/nikita2.webp";
import rajiya from "../assets/leads/rajiya.webp";
import bandana from "../assets/leads/bandana2.webp";
import { useNavigate } from "react-router-dom";
import { Linkedin, Quote, GraduationCap, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Nikita Shakya",
    role: "Medical Report Writer Lead",
    quote:
      "Medical documentation is not just about accuracy — it's about trust. We work to bridge that gap every single day for our clients worldwide.",
    image: nikita,
    link: "/team/nikita",
  },
  {
    name: "Dr. Rajiya Shakya  [PT]",
    role: "Medical Report Writer, PT Lead",
    quote:
      "Data tells stories that can transform healthcare. I’m passionate about turning complex information into actionable insights.",
    image: rajiya,
    link: "/team/rajiya",
  },
  {
    name: "Dr. Bandana Manandhar [PT]",
    role: "Medical Report Writer, Lister Lead",
    quote:
      "In healthcare, seamless backend support isn’t just efficiency — it’s patient safety. That’s what drives my work every day.",
    image: bandana,
    link: "/team/bandana",
  },
  {
    name: "Ravi Sunder Shrestha",
    role: "Data Analyst Lead",
    quote:
      "Every report we deliver carries the weight of our commitment to precision and care. My mission is to ensure our work meets the highest global standards.",
    image: ravi,
    link: "/team/ravi",
  },
];

function OurTeam()
{
  const navigate = useNavigate();

  return (
    <section className=" md:py-24 relative overflow-hidden">
      {/* Texture Layer - Subtle corporate feel */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header: Institutional Authority */}
        <motion.div
          className="max-w-3xl mb-24 border-l-4 border-[#133a41] pl-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
            Strategic <span className="text-[#133a41]">Leadership</span>
          </h2>
          <p className="mt-4 text-xs md:text-lg text-slate-600 leading-relaxed">
            Our vision is guided by a cohort of seasoned medical documentation experts
            dedicated to bridging the gap between clinical precision and operational excellence.
          </p>
        </motion.div>

        {/* Team Profiles */}
        <div className="space-y-32">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image Column - The "Portrait Frame" */}
              <div className="w-full md:w-5/12 relative">
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle Name Overlay for Mobile */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent md:hidden">
                    <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                    <p className="text-slate-300 text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Decorative Background Block (Connects to the background color) */}
                <div className={`absolute -bottom-6 -right-6 w-full h-full border-2 border-[#133a41]/10 -z-10 rounded-sm ${index % 2 === 1 ? "right-auto -left-6" : ""
                  }`}></div>
              </div>

              {/* Text Column - The "Bio Dossier" */}
              <div className="w-full md:w-7/12 space-y-6">
                <div className="hidden md:block">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#133a41]/5 text-[#133a41] text-xs font-bold uppercase tracking-widest rounded">
                      {member.role}
                    </span>
                    <div className="h-px w-12 bg-slate-200"></div>
                    <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-[#133a41]/5" size={60} />
                  <p className="italic text-slate-700 text-xs md:text-lg leading-relaxed relative z-10 pl-4 border-l-2 border-slate-100">
                    “{member.quote}”
                  </p>
                </div>

                {/* Professional Qualifications Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <div className="p-2 bg-white shadow-sm rounded-full text-red-700">
                      <GraduationCap size={16} />
                    </div>
                    Expertise in Medical Ethics
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <div className="p-2 bg-white shadow-sm rounded-full text-red-700">
                      <Award size={16} />
                    </div>
                    10+ Years Management
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 text-slate-800 text-sm font-bold rounded-sm shadow-sm hover:border-[#133a41] hover:text-[#133a41] transition-all duration-300"
                    onClick={() => navigate(member.link)}
                  >
                    View Full Professional Profile
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
