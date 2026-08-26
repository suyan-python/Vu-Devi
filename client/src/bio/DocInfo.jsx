import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ravi from "../assets/leads/ravi.webp";
import nikita2 from "../assets/leads/nikita2.webp";
import rajiya from "../assets/leads/rajiya.webp";
import bandana from "../assets/leads/bandana2.webp";
import dilasha from "../assets/leads/dilasha.jpeg";

import rajendra from "../assets/leads/rajendra.jpg";
import anish from "../assets/leads/anish.JPG";

import { Mail, Calendar, UserCheck, ArrowLeft, Users, Briefcase } from "lucide-react";

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
        joiningDate: "April, 2024"
      }
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
        joiningDate: "April, 2024"
      }
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

function DocInfo()
{
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctorData[doctorId];

  if (!doctor)
  {
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
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Leadership Team
        </button>

        {/* 1. THE LEADERSHIP CARD (The Doctor/Team Lead) */}
        <motion.div
          className="bg-white rounded-sm border-t-4 border-[#133a41] shadow-[0_15px_50px_-15px_rgba(19,58,65,0.1)] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Column */}
            <div className="w-full md:w-1/3 bg-slate-100">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </div>

            {/* Details Column */}
            <div className="w-full md:w-2/3 p-8 lg:p-12">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#133a41]/5 text-[#133a41] rounded-sm text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-3">
                    <UserCheck size={12} />
                    Clinical Lead
                  </div>
                  <h2 className="text-xl md:text-4xl font-bold text-slate-900">{doctor.name}</h2>
                  <p className="text-sm md:text-xl text-red-700 font-medium mt-1">{doctor.designation}</p>
                </div>

                <div className="flex items-center gap-2 my-4 text-slate-400">
                  <Calendar size={14} />
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em]">
                    Tenure: <span className="text-slate-600">{doctor.joiningDate}</span>
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Professional Biography</h4>
                  <p className="text-slate-700 leading-relaxed text-xs md:text-lg">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEAM LEAD ASSISTANTS */}
        {doctor.leadAssistants?.length > 0 && (
          <motion.section
            className="mt-16 md:mt-20"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="flex items-end justify-between gap-6 mb-8 md:mb-10 border-b border-slate-200 pb-5">
              <div>
                <div className="flex items-center gap-2 text-red-700 text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] mb-3">
                  <span className="w-5 h-px bg-red-700" />
                  Clinical Leadership
                </div>

                <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter text-slate-900">
                  Team Lead Assistants
                </h3>
              </div>

              <span className="hidden sm:block text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Leadership Support
              </span>
            </div>


            {/* Assistants */}
            <div className="space-y-6 md:space-y-8">
              {doctor.leadAssistants.map((assistant, index) => (
                <motion.div
                  key={index}
                  className="group relative grid grid-cols-1 md:grid-cols-12 bg-white border border-slate-200 overflow-hidden transition-all duration-500 hover:border-slate-300 hover:shadow-[0_15px_45px_-20px_rgba(19,58,65,0.18)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >

                  {/* DESCRIPTION / INFORMATION */}
                  <div className="md:col-span-7 p-7 md:p-9 lg:p-12 flex flex-col justify-center order-2 md:order-1">

                    {/* Assistant Identifier */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-8 bg-red-700" />

                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-red-700">
                        Team Lead Assistant
                      </span>
                    </div>


                    {/* Name */}
                    <h4 className="text-2xl md:text-4xl font-semibold tracking-tighter text-slate-900 leading-tight">
                      {assistant.name}
                    </h4>


                    {/* Designation */}
                    <p className="mt-2 text-sm md:text-lg font-medium text-[#133a41]">
                      {assistant.designation}
                    </p>

                    {/* Tenure */}
                    <div className="flex items-center gap-2 mt-4 text-slate-400">
                      <Calendar size={14} />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em]">
                        Tenure: <span className="text-slate-600">{assistant.joiningDate}</span>
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-10 h-[2px] bg-slate-200 my-6" />


                    {/* Divider */}
                    <div className="w-10 h-[2px] bg-slate-200 my-6" />


                    {/* Biography */}
                    <div className="max-w-2xl">
                      <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                        Professional Profile
                      </p>

                      <p className="text-xs md:text-base text-slate-600 leading-[1.8]">
                        {assistant.bio}
                      </p>
                    </div>
                  </div>


                  {/* IMAGE */}
                  <div className="md:col-span-5 order-1 md:order-2 relative bg-slate-100 min-h-[280px] md:min-h-[380px] lg:min-h-[430px] overflow-hidden">

                    <img
                      src={assistant.image}
                      alt={assistant.name}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#133a41]/10" />

                    {/* Role Marker */}
                    <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm px-4 py-2 border border-white/50">
                      <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#133a41]">
                        Clinical Support
                      </p>
                    </div>

                  </div>


                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-700 group-hover:w-full transition-all duration-700" />

                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 2. TEAM MEMBERS SECTION (The Directory) */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-lg md:text-2xl font-bold text-slate-900">Direct Reports & Team</h3>
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
