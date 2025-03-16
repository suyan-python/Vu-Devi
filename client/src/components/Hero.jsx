import React, { useState, useEffect, useRef } from "react";
import Services from "../pages/Services";
import { NavLink } from "react-router-dom";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative py-24 px-6 sm:px-12 text-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="main flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section - Content with background */}
        <div className="w-full lg:w-2/5 bg-opacity-90 rounded-3xl p-8 sm:p-12 flex flex-col justify-center ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-blue-600 leading-tight">
            VU DEVI SERVICES PVT LTD
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 max-w-full sm:max-w-xl text-gray-800">
            Founded in 2013, Vu Devi Services streamlines medical documentation
            outsourcing for global healthcare providers. Our expert team
            leverages innovative technology to deliver precise, compliant
            solutions—empowering you to focus on patient care.
          </p>
          {/* Button adjusted to not be full width */}
          <div className="flex justify-center">
            <NavLink
              to="/about"
              className="relative inline-block text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-2xl"
            >
              Explore More
            </NavLink>
          </div>
        </div>

        {/* Right Section - Services with clean and simple design */}
        <div className="w-full lg:w-3/5 mt-8 lg:mt-0 sm:p-8 flex items-center justify-center">
          <div className="w-full max-w-4xl px-4 py-8 rounded-xl shadow-lg space-y-8">
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
