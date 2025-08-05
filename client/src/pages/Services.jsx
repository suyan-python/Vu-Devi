import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import
{
  FaFileMedical,
  FaDatabase,
  FaHeadset,
  FaUserMd,
  FaChartBar,
  FaClipboardCheck,
} from "react-icons/fa";

function Services()
{
  const services = [
    {
      title: "Medical Documentation",
      description:
        "Accurate and compliant medical reports tailored to global standards.",
      icon: <FaFileMedical className="text-red-500 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Data Processing",
      description:
        "Efficient data handling and analytics for healthcare institutions.",
      icon: <FaDatabase className="text-red-500 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Healthcare Support",
      description:
        "End-to-end backend support ensuring seamless healthcare operations.",
      icon: <FaHeadset className="text-red-500 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Medical Consultation",
      description:
        "Expert medical advice from certified professionals to ensure quality care.",
      icon: <FaUserMd className="text-red-500 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Healthcare Analytics",
      description:
        "AI-driven insights and reports to optimize healthcare decision-making.",
      icon: <FaChartBar className="text-red-500 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Compliance Audits",
      description:
        "Ensuring regulatory compliance and quality assurance for healthcare providers.",
      icon: (
        <FaClipboardCheck className="text-red-500 text-5xl mx-auto mb-4" />
      ),
    },
  ];

  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-xl duration-300 flex flex-col justify-between min-h-[270px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {service.icon}
              <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                {service.description}
              </p>
              {/* <NavLink to={"/services"}>
                <button className="bg-red-600 px-6 py-3 mt-6 rounded-full text-white font-medium hover:bg-red-700 transition duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </NavLink> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
