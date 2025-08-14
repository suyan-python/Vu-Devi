import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

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
      className={`relative transition-all duration-1000 py-18 flex items-center justify-center px-6 sm:px-12 lg:px-16 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Left floating element */}
      <div className="absolute left-0 top-1/4 w-40 h-40 bg-[#25727f]/10 rounded-full blur-3xl hidden md:block"></div>

      {/* Right floating element */}
      <div className="absolute right-0 bottom-1/4 w-56 h-56 bg-red-600/10 rounded-full blur-3xl hidden md:block"></div>

      {/* Decorative line pattern on left */}
      <div className="absolute left-4 top-10 hidden lg:block opacity-20">
        <svg width="80" height="200" viewBox="0 0 80 200" fill="none">
          <rect x="10" y="0" width="4" height="200" fill="#25727f" />
          <rect x="30" y="0" width="4" height="200" fill="#25727f" />
          <rect x="50" y="0" width="4" height="200" fill="#25727f" />
        </svg>
      </div>

      {/* Decorative line pattern on right */}
      <div className="absolute right-4 bottom-10 hidden lg:block opacity-20">
        <svg width="80" height="200" viewBox="0 0 80 200" fill="none">
          <rect x="10" y="0" width="4" height="200" fill="#dc2626" />
          <rect x="30" y="0" width="4" height="200" fill="#dc2626" />
          <rect x="50" y="0" width="4" height="200" fill="#dc2626" />
        </svg>
      </div>

      {/* Main content (unchanged) */}
      <div className="max-w-4xl w-full text-center sm:space-y-8 relative z-10">
        <img
          src={Logo}
          alt="Vu Devi Services"
          className="w-40 sm:w-56 md:w-80 mx-auto drop-shadow-lg"
          loading="eager"
        />

        <h1 className="header text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-[#133a41]">
          Excellence in{" "}
          <span className="text-red-700">Medical Documentation</span> Since 2013
        </h1>

        <p className="subheader text-base sm:text-lg md:text-xl text-[#133a41] leading-relaxed max-w-2xl mx-auto">
          Vu Devi Services Pvt. Ltd. delivers accurate, timely, and high-quality
          medical documentation to international clients, blending precision with care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center py-8">
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
    </section>
  );
}

export default Hero;
