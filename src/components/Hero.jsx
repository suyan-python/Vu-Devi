import React from "react";
import Services from "./Services";

function Hero() {
  return (
    <section className="hero relative py-24   ">
      <div className="main flex flex-col md:flex-row">
        {/* Left Section - Yellow Background */}
        <div className="w-full md:w-1/2 bg-white bg-opacity-20 rounded-br-4xl rounded-tr-4xl p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-blue-500">
            VU DEVI SERVICES PVT LTD
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Founded in 2013, Vu Devi Services streamlines medical documentation
            outsourcing for global healthcare providers. Our expert team
            leverages innovative technology to deliver precise, compliant
            solutions—empowering you to focus on patient care.
          </p>
          <button className="relative text-white font-semibold px-8 py-3 rounded-full text-lg transition duration-300 shadow-lg neon-border hover:cursor-pointer">
            Explore More
          </button>
        </div>

        {/* Right Section - Red Background */}
        <div className="w-full md:w-1/2  p-8 md:p-12 flex items-center justify-center">
          <div>
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
