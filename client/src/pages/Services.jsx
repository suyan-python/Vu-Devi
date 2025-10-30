import React from "react";
import { motion } from "framer-motion";
import
{
  FaFileMedical,
  FaClipboardList,
  FaKeyboard,
  FaDatabase,
  FaChartBar,
  FaClipboardCheck,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";

function Services()
{
  const services = [
    {
      title: "Medical Report Writing",
      description:
        "Accurate medical reports tailored for clinical, insurance, and legal needs.",
      icon: <FaFileMedical className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Medical Listing",
      description:
        "Categorization of services and procedures as per global standards.",
      icon: <FaClipboardList className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Medical Data Entry",
      description:
        "Secure entry of patient records, clinical data, and histories.",
      icon: <FaKeyboard className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Medical Documentation",
      description:
        "Structured documentation of diagnoses and treatment plans.",
      icon: <FaFileMedical className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Data Processing",
      description:
        "Clean and manage healthcare data for better decisions.",
      icon: <FaDatabase className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Healthcare Analytics",
      description:
        "Actionable insights through advanced analytics and visualization.",
      icon: <FaChartBar className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Compliance Audits",
      description:
        "Ensure healthcare operations meet regulatory standards.",
      icon: <FaClipboardCheck className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Data Security & Privacy",
      description:
        "Protect sensitive data with secure, compliant processes.",
      icon: <FaShieldAlt className="text-[#133a41] text-4xl mb-4" />,
    },
    {
      title: "Clinical Support Services",
      description:
        "Support professionals with accurate records and efficiency.",
      icon: <FaUserMd className="text-[#133a41] text-4xl mb-4" />,
    },
  ];

  return (
    <section className="w-full py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          className="header text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-20 text-[#133a41]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4 shadow-md py-4 rounded-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-medium text-[#133a41]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-xs px-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
