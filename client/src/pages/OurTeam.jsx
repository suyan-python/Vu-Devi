import React from "react";
import { motion } from "framer-motion";
import ravi from "../assets/leads/ravi.png";
import nikita from "../assets/leads/nikita2.png";
import rajiya from "../assets/leads/rajiya.png";
import bandana from "../assets/leads/bandana2.png";
import { useNavigate } from "react-router-dom";

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
    <section className="w-full px-4 sm:px-6 md:px-8 py-16">
      <div className="max-w-7xl mx-auto bg-white/50 rounded-3xl py-12 px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="header text-3xl sm:text-4xl md:text-5xl font-semibold text-[#133a41]">
            Meet Our Leadership Team
          </h2>
          <p className="subheader mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            A group of passionate professionals dedicated to shaping our vision and driving our success forward
          </p>
        </motion.div>

        {/* Team Layout */}
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`rounded-2xl shadow-lg w-full max-w-sm object-cover ${index % 2 === 1 ? "border-l-8" : "border-r-8"}`}
                />
              </div>

              {/* Text */}
              <div className="subheader w-full md:w-1/2 text-center md:text-left flex flex-col justify-center max-w-lg">
                <h3 className="header text-2xl sm:text-3xl font-bold text-[#133a41]">
                  {member.name}
                </h3>
                <p className="text-[#25727f] font-medium mt-2 mb-4">
                  {member.role}
                </p>
                <blockquote className="italic text-gray-700 leading-relaxed text-lg mb-6">
                  “{member.quote}”
                </blockquote>
                <button
                  className="mx-auto md:mx-0 px-5 py-2 bg-[#25727f] hover:bg-[#1b555c] rounded-lg text-sm font-medium transition-colors text-white"
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
