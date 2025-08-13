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

  const stats = [
    { value: 10, label: "Years Experience", icon: "⏳" },
    { value: 500, label: "Projects Completed", icon: "📄" },
    { value: 50, label: "Trusted Partners", icon: "🤝" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() =>
  {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) =>
    {
      const increment = stat.value / 100; // smoother increment
      return setInterval(() =>
      {
        setCounters((prev) =>
        {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value)
          {
            newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
          }
          return newCounters;
        });
      }, 20);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, [isVisible]);

  return (
    <section
      ref={heroRef}
      className={`relative transition-all duration-1000 min-h-screen flex items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="max-w-fit mx-auto w-full px-6 sm:px-12 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

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

        {/* Right Section */}
        <div className="relative">
          <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 flex flex-col gap-6 items-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#133a41] mb-6">
              Our Journey in Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-50 rounded-xl shadow-md p-6 hover:scale-105 transform transition-transform duration-300"
                >

                  <p className="text-[#dc143c] text-3xl sm:text-4xl font-extrabold mt-2">
                    {Math.floor(counters[index])}+
                  </p>
                  <p className="text-gray-700 text-center mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
