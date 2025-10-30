import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import MeetFounder from "./MeetFounder";
import MeetManagement from "./MeetManagement";

function AboutUs()
{
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Blurred red Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(220,20,60,0.4)_0%,_rgba(220,20,60,0)_70%)] before:blur-3xl before:opacity-80"></div>


      <div className="relative max-w-6xl mx-auto">
        {/* Section Title with Animation */}
        <motion.h2
          className="header text-5xl font-semibold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-red-700">Vu Devi Services</span>
        </motion.h2>

        {/* Company Overview with Animation */}
        <motion.div
          className="subheader not-first:bg-white p-8 rounded-xl shadow-lg transition duration-300 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold  mb-4">
            Who We Are
          </h3>
          <p className="">
            Vu Devi Services is a trusted partner in{" "}
            <strong>
              medical documentation, data processing, and healthcare support
              services
            </strong>
            . Our mission is to provide{" "}
            <strong>accurate, compliant, and efficient</strong> solutions for
            global healthcare providers. With a team of industry experts and
            cutting-edge technology, we empower businesses to focus on what
            truly matters—
            <strong>delivering exceptional patient care</strong>.
          </p>
        </motion.div>

        {/* Vision & Mission Section with Animation */}
        <div className="subheader grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="p-8 rounded-xl shadow-md border-l-8 border-red-700 bg-white"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-red-700 mb-2">
              Our Vision
            </h3>
            <p className="">
              To be the <strong>leading provider</strong> of medical
              documentation and healthcare support, ensuring
              <strong> efficiency, compliance, and innovation</strong> in the
              industry.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl shadow-md border-l-8 border-green-500 bg-white"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold  mb-2">
              Our Mission
            </h3>
            <p className="">
              Our mission is to deliver{" "}
              <strong>precise, high-quality services</strong> while maintaining
              the highest
              <strong>
                {" "}
                ethical standards, efficiency, and technological advancement
              </strong>
              .
            </p>
          </motion.div>
        </div>

        {/* Core Values Section with Animation */}
        <motion.div
          className="subheader bg-white p-8 rounded-xl shadow-lg transition duration-300 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold  mb-4">
            Our Core Values
          </h3>
          <ul className="list-disc list-inside  text-lg">
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency.
            </li>
            <li>
              <strong>Excellence:</strong> We strive for top-tier quality in
              every service.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace technology for smarter
              solutions.
            </li>
            <li>
              <strong>Customer-Centric:</strong> Our clients' success is our
              priority.
            </li>
            <li>
              <strong>Ethical Practices:</strong> Sustainability and compliance
              are at our core.
            </li>
          </ul>
        </motion.div>

        {/* Why Choose Us Section with Animation */}
        <motion.div
          className="subheader p-8 rounded-xl transition duration-300 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="header text-2xl font-semibold text-red-700 mb-4">
            Why Vu Devi Services?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-red-700">Expertise</h4>
              <p>
                10+ years of experience in{" "}
                <strong>medical documentation & healthcare outsourcing</strong>.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-red-700">Compliance</h4>
              <p>
                Adhering to{" "}
                <strong>global medical standards & regulations</strong>.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-red-700">
                Advanced Technology
              </h4>
              <p>
                Utilizing the latest{" "}
                <strong>AI-driven documentation tools</strong>.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="font-semibold text-red-700">Global Reach</h4>
              <p>
                Serving <strong>clients worldwide</strong> with 24/7 operational
                support.
              </p>
            </motion.div>
          </div>

          <MeetFounder />
          <MeetManagement />

        </motion.div>


      </div>
    </section>
  );
}

export default AboutUs;
