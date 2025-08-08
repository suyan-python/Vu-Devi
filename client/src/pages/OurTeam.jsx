import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bandana from "../assets/leads/bandana.JPG";

function OurTeam()
{
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Ravi Sunder Shrestha",
      role: "Medical Report Writer Lead",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: "/assets/leads/bandana.JPG",
      link: "/team/ravi",
    },
    {
      name: "Dr. Nikita Shakya",
      role: "Medical Report Writer Lead",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      image: "/assets/leads/bandana.JPG",
      link: "/team/nikita",
    },
    {
      name: "Pt. Rajiya Shakya",
      role: "Data Analytics & Healthcare Operations",
      description:
        "Efficient data handling and analytics for healthcare institutions.",
      image: "/assets/leads/bandana.JPG",
      link: "/team/rajikya",
    },
    {
      name: "Bandana Manandhar",
      role: "Medical Report Writer/Lister Lead",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      image: bandana,
      link: "/team/bandana",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title with Animation */}
        <motion.h2
          className="header text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Team Leads
        </motion.h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer  overflow-hidden rounded-3xl shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300"
              onClick={() => navigate(member.link)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50"
              />

              {/* Always Visible Name Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#25727f] via-[#133a41] to-transparent  text-white text-center px-4 flex items-center justify-center text-lg font-semibold opacity-100 transition-opacity duration-300 truncate">
                {member.name}
              </div>

              {/* Hover Bio Section */}
              <div className="absolute inset-0 backdrop-blur-sm bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl sm:text-2xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-lg italic text-center">
                  {member.role}
                </p>
                <p className="mt-2 text-center px-6">{member.description}</p>
                <button className="my-4  px-3 py-1 rounded-md bg-[#25727f] hover:bg-[#234045] cursor-pointer transition-all duration-500" onClick={() => navigate(member.link)} >View Team</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
