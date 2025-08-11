import React, { useState, useEffect, useRef, Suspense } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

// Lazy load OurTeam to improve initial load time
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
      className={`relative px-6 sm:px-12 lg:px-16 xl:px-24 transition-all duration-1000 min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#132427] via-[#25727f] to-red-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-white space-y-8">
          {/* Logo */}
          <img
            src={Logo}
            alt="Vu Devi Services"
            className="w-48 sm:w-56 drop-shadow-lg"
            loading="eager"
          />

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Excellence in{" "}
            <span className="text-red-600">Medical Documentation</span> Since 2013
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-xl">
            Vu Devi Services Pvt. Ltd. delivers accurate, timely, and high-quality
            medical documentation to international clients, blending precision with care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/about"
              className="px-8 py-4 text-lg font-semibold text-white bg-[#133a41] rounded-xl hover:bg-yellow-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Explore More
            </NavLink>
            <NavLink
              to="/team"
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#25727f] to-red-600 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Our Team
            </NavLink>
          </div>
        </div>

        {/* Right Section - Team Preview */}
        <div className="w-full">
          <Suspense fallback={<div className="text-white">Loading team...</div>}>
            <OurTeam />
          </Suspense>
        </div>
      </div>

      {/* Bottom Decorative Divider */}

    </section>
  );
}

export default Hero;
