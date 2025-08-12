import React, { useState, useEffect, useRef, Suspense } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

// Lazy load OurTeam
const OurTeam = React.lazy(() => import("../pages/OurTeam"));

function Hero()
{
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() =>
  {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => heroRef.current && observer.unobserve(heroRef.current);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative transition-all duration-1000 min-h-screen flex ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="max-w-fit mx-auto w-full px-6 sm:px-12 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

        {/* Left Section */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <img
            src={Logo}
            alt="Vu Devi Services"
            className="w-40 sm:w-56 md:w-80 mx-auto lg:mx-0 drop-shadow-lg"
            loading="eager"
          />

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-[#133a41]">
            Excellence in{" "}
            <span className="text-red-700">Medical Documentation</span> Since 2013
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#133a41] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Vu Devi Services Pvt. Ltd. delivers accurate, timely, and high-quality
            medical documentation to international clients, blending precision with care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NavLink
              to="/about"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#133a41] rounded-xl hover:bg-yellow-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Explore More
            </NavLink>
            <NavLink
              to="/team"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#25727f] to-red-600 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Our Team
            </NavLink>
          </div>
        </div>

        {/* Right Section - Team Preview */}
        <div className="flex justify-center lg:justify-end">
          <Suspense fallback={<div className="text-[#133a41]">Loading team...</div>}>
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
              <OurTeam />
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Hero;
