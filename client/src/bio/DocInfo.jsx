import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ravi from "../assets/leads/ravi.png";
import nikita2 from "../assets/leads/nikita2.png";
import rajiya from "../assets/leads/rajiya.png";
import bandana from "../assets/leads/bandana2.png";

import { Mail, Calendar, UserCheck, ArrowLeft, Users, Briefcase } from "lucide-react";

const doctorData = {
  nikita: {
    name: "Dr. Nikita Shakya",
    designation: "Medical Report Writer Lead",
    joiningDate: "December, 2020",
    image: nikita2,
    bio: "Dr. Nikita Shakya is an expert in crafting precise and compliant medical reports, ensuring adherence to global standards. With over 6 years of experience in the medical field, she has contributed to numerous healthcare projects.",
    mail: "nikita@reportprep.com",
    teamMembers: [
      "Dr. Abhishek Chaurasiya",
      "Dr. Akriti Shrestha",
      "Dr. Anup Subedi",
      "Dr. Apekshya Subedi",
      "Dr. Apurva Bhandari",
      "Dr. Birendra Yadav",
      "Dr. Khush-Boo Gurung",
      "Dr. Manoj Kumar Shrestha",
      "Dr. Prakash Acharya",
      "Dr. Rajendra Kumar Singh",
      "Dr. Shikha Pradhan",
      "Dr. Shristi Manandhar",
      "Dr. Sujan Gautam",
      "Dr. Dipesh Ghimire",
      "Dr. Chitij Karki",
      "Dr. Suvechhya Sigdel",
      "Dr. Sangita K.C.",
      "Dr. Rushmi Maharjan",
      "Dr. Niguma Rayamajhi",
      "Dr. Shushil Sah",
    ],
    role: "Medical Report Writer",
  },
  rajiya: {
    name: "Pt. Rajiya Shakya",
    designation: "Physiotherapy report writer Lead",
    joiningDate: "March, 2018",
    image: rajiya,
    bio: "Rajiya specializes in handling large-scale healthcare data, ensuring efficiency in medical data processing and analytics. His leadership has streamlined data operations in multiple hospitals.",
    mail: "rajiya@reportprep.com",
    teamMembers: [
      "Aayushma Pokharel",
      "Anamika Shahi",
      "Anish Phuyal",
      "Anjila Ghimire",
      "Diggaj Shrestha",
      "Raghuveer Bohara",
      "Sajana Poudel",
      "Sarita Ale",
      "Sheema Koirala",
      "Sushma Kc",
      "Tripti Halwai",
      "Umesh Kunwar",
      "Subekshya Satta",
    ],
    role: "Medical Report Writer",
  },
  bandana: {
    name: "Bandana Manandhar",
    designation: "Backend Operations Lead",
    joiningDate: "April, 2018",
    image: bandana,
    bio: "Bandana is responsible for backend operations, ensuring seamless healthcare support systems. She has played a key role in integrating new technologies into medical report listing systems.",
    mail: "bandana@reportprep.com",
    teamMembers: [
      "Arju Khadka",
      "Bandu Manandhar",
      "Krija Shrestha",
      "Namita Sangroula",
      "Priyanka Chaudary",
      "Priyasha Mahara",
      "Sakshi Dhungel",
      "Sameera Shrestha",
      "Shruti Gautam",
      "Sushmita Khadka",
      "Suyan Man Amatya",
      "Swastika Neupane",
      "Nilima Mulmi",
      "Simran Thapa",
    ],
    role: "Medical Report Lister",
  },
  ravi: {
    name: "Ravi Sunder Shrestha",
    designation: "Downloader",
    joiningDate: "February, 2014",
    image: ravi,
    bio: "Ravi is responsible for backend operations, ensuring seamless healthcare support systems. She has played a key role in integrating new technologies into medical report listing systems.",
    mail: "ravi@reportprep.com",
    teamMembers: [
      "Dipendra Thapa",
      "Karna Bahadur Bam",
      "Rojin Shakya",
      "Sammyek Ratna Bajracharya",
      "Rajjak Miyan",
      "Deepak Maharjan",
      "Mahesh Shahi",
      "Suman Dahal ",
    ],
    role: "Medical Report Downloader",
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
    <section className="w-full py-16 bg-[#fffff7] min-h-screen mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Navigation / Breadcrumbs */}
        <button
          className="group flex items-center gap-2 mb-8 text-slate-500 hover:text-[#133a41] transition-colors font-semibold text-sm uppercase tracking-widest"
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#133a41]/5 text-[#133a41] rounded-sm text-[10px] font-bold uppercase tracking-widest mb-3">
                    <UserCheck size={12} />
                    Clinical Lead
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">{doctor.name}</h2>
                  <p className="text-xl text-red-700 font-medium mt-1">{doctor.designation}</p>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Mail size={18} className="text-slate-400" />
                    <a href={`mailto:${doctor.mail}`} className="hover:text-[#133a41] underline decoration-slate-200 underline-offset-4">
                      {doctor.mail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar size={18} className="text-slate-400" />
                    <span>Tenure: {doctor.joiningDate}</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Professional Biography</h4>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {doctor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. TEAM MEMBERS SECTION (The Directory) */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Direct Reports & Team</h3>
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
