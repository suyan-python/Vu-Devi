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
    name: "Pt. Rajiya Shakya",
    role: "Data Analytics & Healthcare Operations",
    quote:
      "Data tells stories that can transform healthcare. I’m passionate about turning complex information into actionable insights.",
    image: rajiya,
    link: "/team/rajiya",
  },
  {
    name: "Pt. Bandana Manandhar",
    role: "Medical Report Writer / Lister Lead",
    quote:
      "In healthcare, seamless backend support isn’t just efficiency — it’s patient safety. That’s what drives my work every day.",
    image: bandana,
    link: "/team/bandana",
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
          className="header text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-[#133a41]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team Leads
        </motion.h2>

        {/* Alternating Layout */}
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <div
              className={`w-full flex justify-center ${index % 2 === 1 ? "order-2 md:order-1" : "order-1"
                }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-2xl shadow-lg w-full max-w-sm object-contain bg-white"
              />
            </div>

            {/* Text Content */}
            <div
              className={`text-center md:text-left ${index % 2 === 1 ? "order-1 md:order-2" : "order-2"
                }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#133a41]">
                {member.name}
              </h3>
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
