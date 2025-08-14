import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ravi from "../assets/leads/ravi.png";
import nikita from "../assets/leads/nikita2.png";
import rajiya from "../assets/leads/rajiya.png";
import bandana from "../assets/leads/bandana2.png";

function WholeTeam()
{
  const navigate = useNavigate();

  const teamLeads = [
    {
      name: "Dr. Ravi Sunder Shrestha",
      role: "Downloader",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: ravi,
      link: "/team/ravi",
      date: "February, 2014"
    },
    {
      name: "Bandana Manandhar",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: bandana,
      link: "/team/bandana",
      date: "April, 2018"
    },
    {
      name: "Pt. Rajiya Shakya",
      role: "Data Analytics & Healthcare Operations",
      description:
        "Efficient data handling and analytics for healthcare institutions.",
      image: rajiya,
      link: "/team/rajikya",
      date: 'March, 2018'
    },
    {
      name: "Dr. Nikita Shakya",
      role: "Medical Report Writer Team Lead",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: nikita,
      link: "/team/nikita",
      date: "December, 2020"
    },
  ];

  const coreTeams = [
    {
      name: "Aayushma Pokharel",
      role: "Medical Report Writer Lead",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: "/images/nikita.jpg",
      date: 'April, 2023'
    },
    {
      name: "Dilasha Shakya",
      role: "Data Analytics & Healthcare Operations",
      description:
        "Efficient data handling and analytics for healthcare institutions.",
      image: "/images/rajikya.jpg",
      date: 'August, 2016'
    },
    {
      name: "Dipendra Thapa",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'March, 2019'
    },
    {
      name: "Karna Bahadur Bam",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'November, 2019'
    },
    {
      name: "Namita Sangroula",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'January, 2021'
    },
    {
      name: "Priyasha Mahara",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'July, 2022'
    },
    {
      name: "Rahul Lama",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'June, 2021'
    },
    {
      name: "Rojin Shakya",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'June, 2022'
    },
    {
      name: "Sammyek Ratna Bajracharya",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'May, 2021'
    },
    {
      name: "Sarita Ale",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'August, 2023'
    },
    {
      name: "Shristi Manandhar",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'April, 2022'
    },
    {
      name: "Tripti Halwai",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: "/images/bandana.jpg",
      date: 'May, 2022'
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ===== Team Leads ===== */}
        <motion.h2
          className="header text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-14 text-[#133a41]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Team Leads
        </motion.h2>

        {/* Horizontal scroll on small screens, grid on large */}
        <div className="subheader flex gap-8 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {teamLeads.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white min-w-[250px] sm:min-w-0 rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
              onClick={() => navigate(member.link)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain p-6 bg-white transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#133a41]">{member.name}</h3>
                <p className="text-[#25727f] font-medium">{member.role}</p>
                <p className="text-[#25727f] text-xs italic">Since: {member.date}</p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
                <button className="mt-4 px-4 py-2 rounded-lg bg-[#25727f] text-white hover:bg-[#1b555c] transition-colors text-sm">
                  View Team
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Divider ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="my-20 border-gray-300" />
      </div>

      {/* ===== Core Team ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#133a41]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Some of our Experienced Employees
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {coreTeams.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-[#133a41] truncate">{member.name}</h3>
                <p className="text-xs text-[#25727f] font-medium truncate">{member.role}</p>
                <p className="text-[#25727f] text-xs italic">Since: {member.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default WholeTeam;
