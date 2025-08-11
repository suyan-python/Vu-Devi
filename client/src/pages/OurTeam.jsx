import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ravi from "../assets/leads/ravi.png";
import nikita from "../assets/leads/nikita.png";
import rajiya from "../assets/leads/rajiya.png";
import bandana from "../assets/leads/bandana2.png";

const teamMembers = [
  {
    name: "Ravi Sunder Shrestha",
    role: "Medical Report Writer Lead",
    description:
      "Accurate and compliant medical reports tailored to global standards.",
    image: ravi,
    link: "/team/ravi",
  },
  {
    name: "Dr. Nikita Shakya",
    role: "Medical Report Writer Lead",
    description:
      "Accurate and compliant medical reports tailored to global standards.",
    image: nikita,
    link: "/team/nikita",
  },
  {
    name: "Pt. Rajiya Shakya",
    role: "Data Analytics & Healthcare Operations",
    description:
      "Efficient data handling and analytics for healthcare institutions.",
    image: rajiya,
    link: "/team/rajikya",
  },
  {
    name: "Pt. Bandana Manandhar",
    role: "Medical Report Writer/Lister Lead",
    description:
      "End-to-end backend support ensuring seamless healthcare operations.",
    image: bandana,
    link: "/team/bandana",
  },
];

function OurTeam()
{
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 bg-gradient-to-b from-white/20 to-gray-200/20 rounded-4xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Team Leads
        </motion.h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl bg-white transition-transform duration-300 will-change-transform"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => navigate(member.link)}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent text-white font-semibold text-center text-lg">
                {member.name}
              </div>

              {/* Hover Details */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="italic text-sm">{member.role}</p>
                <p className="mt-2 text-sm">{member.description}</p>
                <button
                  className="mt-4 px-4 py-2 bg-[#25727f] hover:bg-[#1b555c] rounded-lg text-sm transition-colors"
                  onClick={(e) =>
                  {
                    e.stopPropagation();
                    navigate(member.link);
                  }}
                >
                  View Team
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
