import React from 'react'
import { motion } from "framer-motion"; // Importing Framer Motion
import Binayak from "../assets/person/binayak2.jpeg"
function MeetFounder()
{
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

            <motion.div
                className="bg-white p-12 rounded-2xl shadow-xl transition duration-300 text-center md:text-left w-full max-w-7xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="header text-5xl font-bold text-red-500 mb-12 text-center">
                    Meet Our Founder
                </h3>

                {/* Two-Column Layout */}
                <div className="flex flex-col md:flex-row items-center gap-14">
                    {/* Left Column: Image & Name */}
                    <div className="flex flex-col items-center  text-center ">
                        {/* Image Container */}
                        <div className="w-96 h-[550px] overflow-hidden rounded-3xl shadow-lg border border-gray-200">
                            <img
                                src={Binayak}
                                alt="Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        {/* Name & Designation */}
                        <p className="text-red-500 font-semibold text-3xl mt-6">
                            Mr. Binayak Malla
                        </p>
                        <p className="text-gray-600 text-lg">Founder & CEO</p>

                    </div>

                    {/* Right Column: Introduction & Vision */}
                    <div className="subheader max-w-xl">
                        <p className="text-gray-900 text-5xl font-extrabold leading-snug">
                            Hi there,{" "}
                            <span className="text-red-500 block">I'm Binayak</span>
                        </p>
                        <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                            I’m a passionate entrepreneur, innovator, and problem-solver. My
                            journey began with a simple goal: to create technology-driven
                            solutions that make a real difference in people’s lives.
                        </p>

                        <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                            With over a decade of experience in industry transformation, I
                            believe in the power of{" "}
                            <span className="text-gray-900 font-semibold">
                                innovation, strategy, and people
                            </span>{" "}
                            to drive success. At Vu Devi Services, we don’t just build
                            businesses—we build <i>impactful solutions</i> that last.
                        </p>

                        <p className="text-gray-800 font-semibold text-lg mt-8 italic border-l-4 border-red-500 pl-4">
                            "Great ideas start with a vision, but success comes from action."
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}

export default MeetFounder