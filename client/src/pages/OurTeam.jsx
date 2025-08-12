import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ravi from "../assets/leads/ravi.png";
import nikita from "../assets/leads/nikita2.png";
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
    <section className="w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 text-[#133a41]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team Leads
        </motion.h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl bg-white transition-transform duration-300 will-change-transform w-full max-w-xs sm:max-w-sm md:max-w-md"
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
                className="w-full h-[300px] sm:h-[320px] md:h-[350px] object-contain object-center transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-[#133a41] to-transparent text-white font-semibold text-center text-lg">
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
