import React from 'react'
import { motion } from "framer-motion";
// import Dilasha from "../assets/person/dilasha.jpeg";

function MeetManagement()
{
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                className="bg-white/10 p-12 rounded-2xl shadow-xl transition duration-300 text-center md:text-left w-full max-w-7xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="header text-5xl font-semibold mb-12 text-center">
                    Meet Our Management Head
                </h3>

                {/* Two-Column Layout (Image Right) */}
                <div className="flex flex-col md:flex-row items-center gap-14">
                    {/* Left Column: Introduction & Vision */}
                    <div className="subheader max-w-xl order-2 md:order-1">
                        <p className="header text-5xl leading-snug text-yellow-500">
                            Hello,{" "}
                            <span className="text-red-700 block">I'm Dilasha</span>
                        </p>
                        <p className="text-lg mt-6 leading-relaxed">
                            As the <span className="font-semibold">Management Head</span>, my mission is
                            to ensure seamless operations and cultivate a culture of collaboration
                            and growth within our organization.
                        </p>

                        <p className="text-lg mt-6 leading-relaxed">
                            I strongly believe that <span className="font-semibold">effective management
                                is about empowering people</span> — giving them the right tools, guidance, and
                            opportunities to thrive. At Vu Devi Services, we value teamwork, innovation,
                            and commitment above all.
                        </p>

                        <p className="header font-semibold text-lg mt-8 italic border-l-4 border-red-700 pl-4">
                            "Strong teams build stronger organizations — together we achieve more."
                        </p>
                    </div>

                    {/* Right Column: Image & Name */}
                    <div className="flex flex-col items-center text-center order-1 md:order-2">
                        <div className="w-96 h-[550px] overflow-hidden rounded-3xl shadow-lg border border-gray-200">
                            <img
                                src={'Dilasha'}
                                alt="Management Head"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="header text-red-700 font-semibold text-3xl mt-6">
                            Dilasha Shakya
                        </p>
                        {/* <p className="text-lg">Management Head</p> */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default MeetManagement
