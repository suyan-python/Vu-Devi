import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ravi from "../assets/leads/ravi.webp";
import nikita2 from "../assets/leads/nikita2.webp";
import rajiya from "../assets/leads/rajiya.webp";
import bandana from "../assets/leads/bandana2.webp";
import dilasha from "../assets/leads/dilasha.jpeg";

import rajendra from "../assets/leads/rajendra.jpeg";
import anish from "../assets/leads/anish.JPG";

import {
  Mail,
  Calendar,
  UserCheck,
  ArrowLeft,
  Users,
  Briefcase,
} from "lucide-react";

const doctorData = {
  nikita: {
    name: "Dr. Nikita Shakya",
    designation: "Medical Report Writer Lead",
    joiningDate: "December, 2020",
    image: nikita2,
    bio: "Dr. Nikita Shakya is an expert in crafting precise and compliant medical reports, ensuring adherence to global standards. With over 6 years of experience in the medical field, she has contributed to numerous healthcare projects.",
    leadAssistants: [
      {
        name: "Dr. Rajendra Kumar Singh",
        designation: "Medical Report Writer",
        image: rajendra,
        bio: "Dr. Rajendra Kumar Singh is a skilled medical report writer with a focus on accuracy and clarity. He has been instrumental in developing comprehensive reports for various medical cases.",
        joiningDate: "April, 2024",
      },
    ],
    teamMembers: [
      "Dr. Abhishek Chaurasiya",
      "Dr. Akriti Shrestha",
      "Dr. Apekshya Subedi",
      "Dr. Apurva Bhandari",
      "Dr. Khush-Boo Gurung",
      "Dr. Prakash Acharya",
      "Dr. Shikha Pradhan",
      "Dr. Shristi Manandhar",
      "Dr. Dipesh Ghimire",
      "Dr. Sangita K.C.",
      "Dr. Rushmi Maharjan",
      "Dr. Niguma Rayamajhi",
      "Dr. Surakshya Amatya",
      "Dr. Subhanshi Sharma",
      "Dr. Narendra Kumar Yadav",
      "Dr. Sujil Manandhar",
      "Dr. Anushree Karki",
    ],
    role: "Medical Report Writer",
  },
  rajiya: {
    name: "PT. Rajiya Shakya",
    designation: "Physiotherapy report writer Lead",
    joiningDate: "March, 2018",
    image: rajiya,
    bio: "Rajiya specializes in handling large-scale healthcare data, ensuring efficiency in medical data processing and analytics. His leadership has streamlined data operations in multiple hospitals.",
    leadAssistants: [
      {
        name: "PT. Anish Phuyal",
        designation: "Medical Report Writer",
        image: anish,
        bio: "PT. Anish Phuyal is a dedicated medical report writer with a keen eye for detail. He has contributed to the development of accurate and comprehensive medical documentation.",
        joiningDate: "April, 2024",
      },
    ],
    teamMembers: [
      "PT. Aayushma Pokharel",
      "PT. Anamika Shahi",
      "PT. Anjila Ghimire",
      "PT. Diggaj Shrestha",
      "PT. Sajana Poudel",
      "PT. Sarita Ale",
      "PT. Sheema Koirala",
      "PT. Sushma Kc",
      "PT. Tripti Halwai",
      "PT. Umesh Kunwar",
      "PT. Subekshya Satta",
    ],
    role: "Medical Report Writer",
  },
  bandana: {
    name: "Bandana Manandhar",
    designation: "Medical File Lister Lead",
    joiningDate: "April, 2018",
    image: bandana,
    bio: "Bandana is responsible for backend operations, ensuring seamless healthcare support systems. She has played a key role in integrating new technologies into medical report listing systems.",
    teamMembers: [
      "Arju Khadka",
      "Bandu Manandhar",
      "Namita Sangroula",
      "Priyanka Chaudary",
      "Priyasha Mahara",
      "Sakshi Dhungel",
      "Shruti Gautam",
      "Sushmita Khadka",
      "Suyan Man Amatya",
      "Nilima Mulmi",
      "Simran Thapa",
      "Bivek Shrestha",
      "Ajay Subedi",
    ],
    role: "Medical Report Lister",
  },
  ravi: {
    name: "Ravi Sunder Shrestha",
    designation: "Downloader/Data Analyst",
    joiningDate: "February, 2014",
    image: ravi,
    bio: "Ravi is responsible for backend operations, ensuring seamless healthcare support systems. He has played a key role in integrating new technologies into medical report listing systems.",
    teamMembers: [
      "Karna Bahadur Bam",
      "Rojin Shakya",
      "Deepak Maharjan",
      "Suman Dahal",
      "Rameshwor Karki",
    ],
    role: "Medical Report Downloader",
  },
  dilasha: {
    name: "Dilasha Thapa",
    designation: "Head of Operations",
    joiningDate: "2016",
    image: dilasha,
    bio: "Dilasha leads operational management at ReportPrep, ensuring smooth coordination across healthcare support systems and internal workflows. With years of experience in process management and healthcare operations, she plays a vital role in improving efficiency, streamlining report handling, and supporting the integration of modern technologies into the platform. Her leadership helps maintain reliable, organized, and patient-focused services across the organization.",
    teamMembers: [
      "Mr. Nishan Khadka",
      "Ms. Pratistha Pokhrel",
      "Mr. Bibek Odd",
      "Mr. Lokesh Bhatta",
      "Ms. Luna Bharati",
    ],
    role: "",
  },
};

function DocInfo() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctorData[doctorId];

  if (!doctor) {
    return (
      <div className="text-center text-red-500 text-2xl">Doctor Not Found</div>
    );
  }

  return (
    <section className="w-full py-16  min-h-screen mt-12 md:mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation / Breadcrumbs */}
        <button
          className="group flex items-center gap-2 mb-8 text-slate-500 hover:text-[#133a41] transition-colors font-semibold text-xs md:text-sm uppercase tracking-widest"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Leadership Team
        </button>

        {/* TEAM LEAD — FEATURED PROFILE */}
        <motion.div
          className="group relative overflow-hidden bg-white border border-slate-200 shadow-[0_20px_60px_-25px_rgba(19,58,65,0.18)]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
            {/* IMAGE */}
            <div className="relative md:col-span-5 lg:col-span-4 bg-slate-100 min-h-[420px] md:min-h-full overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 w-full h-full object-cover object-top grayscale-[8%] group-hover:grayscale-0 group-hover:scale-[1.025] transition-all duration-700"
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#133a41]/45 via-transparent to-transparent" />

              {/* Profile marker */}
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-px bg-white/70" />
                  <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white">
                    Leadership Profile
                  </span>
                </div>
              </div>

              {/* Decorative number */}
              <span className="absolute top-5 left-6 text-[9px] font-black tracking-[0.3em] text-white/50">
                01
              </span>
            </div>

            {/* PROFILE INFORMATION */}
            <div className="relative md:col-span-7 lg:col-span-8 p-7 md:p-10 lg:p-14 flex flex-col justify-center">
              {/* Decorative background element */}
              <div className="absolute right-0 top-0 text-[180px] md:text-[240px] font-black leading-none text-slate-900/[0.018] select-none pointer-events-none">
                Lead
              </div>

              <div className="relative z-10">
                {/* ROLE */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#133a41]/5 text-[#133a41]">
                    <UserCheck size={15} />
                  </span>

                  <div>
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-red-700">
                      Clinical Leadership
                    </p>

                    <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400 mt-0.5">
                      Team Lead
                    </p>
                  </div>
                </div>

                {/* NAME */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900 leading-[1.05] max-w-2xl">
                  {doctor.name}
                </h2>

                {/* DESIGNATION */}
                <p className="mt-3 text-sm md:text-lg lg:text-xl font-medium text-[#133a41]">
                  {doctor.designation}
                </p>

                {/* METADATA */}
                <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-7 pb-7 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={14} />

                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em]">
                      Tenure:
                      <span className="text-slate-600 ml-1">
                        {doctor.joiningDate}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                      Active Leadership
                    </span>
                  </div>
                </div>

                {/* BIO */}
                <div className="mt-7 max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">
                      Professional Biography
                    </span>

                    <span className="h-px w-8 bg-slate-200" />
                  </div>

                  <p className="text-xs md:text-base lg:text-lg text-slate-600 leading-[1.8]">
                    {doctor.bio}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                  <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Vu Devi Services
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="w-8 h-px bg-red-700" />
                    <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-[#133a41]">
                      Clinical Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#133a41] via-red-700 to-[#133a41]" />
        </motion.div>

        {/* TEAM LEAD ASSISTANTS */}
        {doctor.leadAssistants?.length > 0 && (
          <motion.section
            className="mt-20 md:mt-28"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-10 pb-5 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-px bg-red-700" />
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-red-700">
                    Clinical Leadership
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter text-slate-900">
                  Team Lead Assistants
                </h3>
              </div>

              <p className="max-w-xs text-[9px] md:text-xs text-slate-400 leading-relaxed md:text-right">
                Supporting clinical leadership through coordinated expertise and
                operational continuity.
              </p>
            </div>

            {/* ASSISTANTS */}
            <div className="space-y-8 md:space-y-10">
              {doctor.leadAssistants.map((assistant, index) => (
                <motion.div
                  key={index}
                  className="group relative grid grid-cols-1 md:grid-cols-12 min-h-[420px] md:min-h-[440px] bg-white border border-slate-200 overflow-hidden transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_60px_-25px_rgba(19,58,65,0.18)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  {/* INFORMATION */}
                  <div className="md:col-span-7 lg:col-span-8 order-2 md:order-1 p-7 md:p-10 lg:p-14 flex flex-col justify-center relative">
                    {/* Background Number */}
                    <span className="absolute right-5 top-0 text-[150px] md:text-[150px] font-black leading-none tracking-tighter text-slate-900/[0.018] select-none pointer-events-none">
                      Assistant
                    </span>

                    <div className="relative z-10">
                      {/* ROLE */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-8 flex items-center justify-center bg-[#133a41]/5 text-[#133a41]">
                          <UserCheck size={14} />
                        </span>

                        <div>
                          <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-red-700">
                            Team Lead Assistant
                          </p>

                          <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400 mt-0.5">
                            Clinical Leadership Support
                          </p>
                        </div>
                      </div>

                      {/* NAME */}
                      <h4 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900 leading-[1.05] max-w-xl">
                        {assistant.name}
                      </h4>

                      {/* DESIGNATION */}
                      <p className="mt-3 text-sm md:text-lg font-medium text-[#133a41]">
                        {assistant.designation}
                      </p>

                      {/* TENURE */}
                      <div className="flex items-center gap-2 mt-6 pb-6 border-b border-slate-200">
                        <Calendar size={14} className="text-slate-400" />

                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                          Tenure:
                          <span className="text-slate-600 ml-1">
                            {assistant.joiningDate}
                          </span>
                        </span>
                      </div>

                      {/* BIO */}
                      <div className="mt-6 max-w-2xl">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">
                            Professional Profile
                          </span>

                          <span className="w-7 h-px bg-slate-200" />
                        </div>

                        <p className="text-xs md:text-base text-slate-600 leading-[1.8]">
                          {assistant.bio}
                        </p>
                      </div>

                      {/* FOOTER */}
                      <div className="flex items-center gap-3 mt-7">
                        <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-slate-300">
                          Vu Devi Services
                        </span>

                        <span className="w-5 h-px bg-red-700" />

                        <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-[#133a41]">
                          Leadership Support
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="md:col-span-5 lg:col-span-4 order-1 md:order-2 relative min-h-[320px] md:min-h-full bg-slate-100 overflow-hidden">
                    <img
                      src={assistant.image}
                      alt={assistant.name}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale-[8%] group-hover:grayscale-0 group-hover:scale-[1.025] transition-all duration-700"
                    />

                    {/* Image Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#133a41]/35 via-transparent to-transparent" />

                    {/* Profile Number */}
                    <span className="absolute top-5 right-5 text-[9px] font-black tracking-[0.3em] text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Role Marker */}
                    <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm px-4 py-2 border border-white/60">
                      <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#133a41]">
                        Clinical Support
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#133a41] to-red-700 group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 2. TEAM MEMBERS SECTION (The Directory) */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-lg md:text-2xl font-bold text-slate-900">
              Direct Reports & Team
            </h3>
            <div className="h-px flex-1 bg-slate-200"></div>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
              <Users size={16} />
              {doctor.teamMembers.length} Members
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {doctor.teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-sm border border-slate-200 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-[#133a41]/30 transition-all group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#133a41] group-hover:bg-[#133a41] group-hover:text-white transition-colors">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 leading-none mb-1 group-hover:text-[#133a41]">
                    {member}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-tight">
                    {doctor.role}
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

export default DocInfo;
