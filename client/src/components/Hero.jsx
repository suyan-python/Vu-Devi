import React from "react";
import Services from "../pages/Services";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero relative py-24 px-6 sm:px-12">
      <div className="main flex flex-col sm:flex-row">
        {/* Left Section - White Background (40%) */}
        <div className="w-full sm:w-2/5  bg-opacity-20 rounded-br-4xl rounded-tr-4xl p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tight uppercase text-blue-500">
            VU DEVI SERVICES PVT LTD
          </h1>
          <div className="my-4 sm:my-7">
            <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 max-w-full sm:max-w-2xl">
              Founded in 2013, Vu Devi Services streamlines medical
              documentation outsourcing for global healthcare providers. Our
              expert team leverages innovative technology to deliver precise,
              compliant solutions—empowering you to focus on patient care.
            </p>
          </div>
          <button className="relative text-white font-semibold px-8 py-3 rounded-full text-lg transition duration-300 shadow-lg bg-blue-500 hover:cursor-pointer hover:bg-blue-600">
            <NavLink to={"/about"}>Explore More</NavLink>
          </button>
        </div>

        {/* Right Section - Services (60%) */}
        <div className="w-full sm:w-3/5 p-4 sm:p-8 flex items-center justify-center">
          <div className="max-w-[90%]">
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
