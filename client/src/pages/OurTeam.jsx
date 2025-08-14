import React from "react";
import { motion } from "framer-motion";
import ravi from "../assets/leads/ravi.png";
import nikita from "../assets/leads/nikita2.png";
import rajiya from "../assets/leads/rajiya.png";
import bandana from "../assets/leads/bandana2.png";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "Ravi Sunder Shrestha",
    role: "Medical Report Writer Lead",
    quote:
      "Every report we deliver carries the weight of our commitment to precision and care. My mission is to ensure our work meets the highest global standards.",
    image: ravi,
    link: "/team/ravi",
  },
  {
    name: "Dr. Nikita Shakya",
    role: "Medical Report Writer Lead",
    quote:
      "Medical documentation is not just about accuracy — it's about trust. We work to bridge that gap every single day for our clients worldwide.",
    image: nikita,
    link: "/team/nikita",
  },
  {
    name: "Pt. Bandana Manandhar",
    role: "Medical Report Writer / Lister Lead",
    quote:
      "In healthcare, seamless backend support isn’t just efficiency — it’s patient safety. That’s what drives my work every day.",
    image: bandana,
    link: "/team/bandana",
  },
  {
    name: "Pt. Rajiya Shakya",
    role: "Data Analytics & Healthcare Operations",
    quote:
      "Data tells stories that can transform healthcare. I’m passionate about turning complex information into actionable insights.",
    image: rajiya,
    link: "/team/rajiya",
  },
];

function OurTeam()
{
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16">
      <div className="max-w-7xl mx-auto bg-white/50 rounded-3xl py-8 px-2">
        {/* Section Title */}
        <motion.h2
          className="header text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16 text-[#133a41]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1>Meet Our Leadership Team</h1>
          <span className="subheader text-[18px] font-normal text-gray-500">
            A group of passionate professionals dedicated to shaping our vision and driving our success forward
          </span>
        </motion.h2>

        {/* Alternating Layout */}
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className={`rounded-2xl shadow-lg w-full h-auto max-w-md object-contain bg-white  ${index % 2 === 1 ? "border-l-8" : "border-r-8"
                  }`}
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center px-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#133a41]">{member.name}</h3>
              <p className="text-[#25727f] font-semibold mb-4">{member.role}</p>
              <blockquote className="italic text-gray-700 leading-relaxed text-lg">
                “{member.quote}”
              </blockquote>
              <button
                className="mt-4 px-4 py-2 bg-[#25727f] hover:bg-[#1b555c] rounded-lg text-sm transition-colors text-white"
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
    </section>
  );
}

export default OurTeam;
