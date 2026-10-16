import React from "react";
import { Award, Quote } from "lucide-react";
import { ShieldCheck } from "lucide-react";

import akriti from "../assets/month/akriti.jpeg";
import subekshya from "../assets/month/subekshya.jpeg";
import shruti from "../assets/month/shruti.jpeg";

import sarita from "../assets/month/sarita.jpeg";
import sakshi from "../assets/month/sakshi.jpeg";

import sujil from "../assets/month/sujil.jpeg";
import anjila from "../assets/month/anjila.png";
import bandana from "../assets/month/bandana.jpeg";

import { motion } from "framer-motion";

const employees1 = [
  // {
  //   name: "Dr. Rushmi",
  //   designation: "Medical Report Writer",
  //   team: "Team: Nikita",
  //   image: akriti,
  //   achievement:
  //     "Recognized for consistently delivering clear, well-structured medical reports while maintaining high standards of clinical accuracy and documentation quality.",
  // },
  {
    name: "Pt. Sarita Ale",
    designation: "PT Report Writer",
    team: "Team: Rajiya",
    image: sarita,
    achievement:
      "Demonstrates strong consistency in producing detailed and patient-focused physical therapy reports with accurate clinical interpretation.",
  },
  {
    name: "Ms. Sakshi Dhungel",
    designation: "Medical Lister",
    team: "Team: Bandana",
    image: sakshi,
    achievement:
      "Maintains high precision in organizing and structuring medical data, contributing to smoother workflows and reliable documentation processes.",
  },
  // {
  //     name: "Mr. Suman Dahal",
  //     designation: "Data Analyst",
  //     team: "Team: Ravi",
  //     image: suman,
  //     achievement: "Developed a new data visualization dashboard that enhanced the team's ability to track key performance metrics, leading to a 20% improvement in decision-making speed."
  // },
];

const employees2 = [
  {
    name: "Dr. Sujil Manandhar",
    designation: "Medical Report Writer",
    team: "Team: Nikita",
    image: sujil,
    achievement:
      "Recognized for consistently delivering clear, well-structured medical reports while maintaining high standards of clinical accuracy and documentation quality.",
  },
  {
    name: "Pt. Anjila Ghimire",
    designation: "PT Report Writer",
    team: "Team: Rajiya",
    image: anjila,
    achievement:
      "Demonstrates strong consistency in producing detailed and patient-focused physical therapy reports with accurate clinical interpretation.",
  },
  {
    name: "Ms Bandana Manandhar",
    designation: "Medical Lister",
    team: "Team: Bandana",
    image: bandana,
    achievement:
      "Maintains high precision in organizing and structuring medical data, contributing to smoother workflows and reliable documentation processes.",
  },
];

const EmployeeOfTheMonth = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Structural Backdrop */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#133a41]/5 -skew-x-12 translate-x-1/2" />

      {/* September 2026 */}
      <EmployeeMonthSection
        month="September"
        year="2026"
        employees={employees1}
      />

      {/* August 2026 */}
      <EmployeeMonthSection
        month="August"
        year="2026"
        employees={employees2}
        className="mt-24 md:mt-32"
      />
    </section>
  );
};

export default EmployeeOfTheMonth;

const EmployeeCard = ({ emp, idx, month = "September", year = "2026" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ delay: idx * 0.12, duration: 0.55 }}
    className="group relative flex h-[480px] flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#133a41]/10 sm:h-[540px] lg:h-[580px]"
  >
    {/* Employee Portrait */}
    <div className="absolute inset-0 bg-[#133a41]">
      <img
        src={emp.image}
        alt={emp.name}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
    </div>

    {/* Restrained Image Treatment */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#102f34] via-[#133a41]/25 to-[#133a41]/10" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

    {/* Employee Information */}
    <div className="relative z-10 mt-auto px-5 pb-6 sm:px-7 sm:pb-7">
      <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
        {emp.name}
      </h3>

      <p className="mt-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-white/75 sm:text-xs">
        {emp.designation}
      </p>

      {/* Achievement Reveal */}
      <div className="grid grid-rows-[1fr] transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
        <div className="overflow-hidden">
          <div className="mt-5 border-t border-white/20 pt-4">
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
              Achievement
            </p>
            <p className="text-xs leading-relaxed text-white/90 sm:text-sm">
              {emp.achievement}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Brand Accent */}
    <div className="absolute bottom-0 left-0 z-20 h-[3px] w-full origin-left scale-x-0 bg-red-700 transition-transform duration-500 group-hover:scale-x-100" />
  </motion.div>
);

const EmployeeMonthSection = ({ month, year, employees, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 relative z-10 ${className}`}>
    {/* Month Header */}
    <div className="mb-12 md:mb-16">
      <div className="border-l-4 border-red-700 pl-5 md:pl-8">
        <h2 className="header text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold tracking-tighter leading-[0.98] text-slate-900">
          Employee of the Month -{" "}
          <span className="text-red-700 font-light ">
            {month}, {year}
          </span>
        </h2>
        <p className="mt-4 text-slate-500 text-xs md:text-sm uppercase tracking-[0.25em] font-bold">
          Based on Performance Audit
        </p>
      </div>
    </div>

    {/* Employee Cards */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
      {employees.map((emp, idx) => (
        <EmployeeCard
          key={`${month}-${emp.name}`}
          emp={emp}
          idx={idx}
          month={month}
          year={year}
        />
      ))}
    </div>
  </div>
);
