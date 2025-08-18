import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import back1 from "../assets/background/back.png";
import back2 from "../assets/background/back2.jpg";
import back3 from "../assets/background/back.png";

function Hero()
{
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [back1];

  const nextSlide = () =>
  {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () =>
  {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto slide

  // useEffect(() =>
  // {
  //   const interval = setInterval(nextSlide, 5000); // change every 5s
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      className="relative h-screen py-20 flex justify-center px-6 sm:px-12 lg:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1.5s ease-in-out",
      }}
    >
      {/* Floating elements */}
      <div className="absolute left-0 top-1/4 w-40 h-40 bg-[#25727f]/10 rounded-full blur-3xl hidden md:block"></div>
      <div className="absolute right-0 bottom-1/4 w-56 h-56 bg-red-600/10 rounded-full blur-3xl hidden md:block"></div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition cursor-pointer"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition cursor-pointer"
      >
        <ChevronRight size={30} />
      </button> */}

      {/* Hero Content */}
      <div className="max-w-4xl w-full text-center sm:space-y-8 relative z-10 mt-18">
        <h1 className="header text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-[#133a41]">
          Excellence in{" "}
          <span className="text-red-700">Medical Documentation</span> Since 2013
        </h1>
        <p className="subheader text-base sm:text-lg md:text-2xl text-[#133a41] leading-relaxed max-w-2xl mx-auto">
          Vu Devi Services Pvt. Ltd. delivers accurate, timely, and high-quality
          medical documentation to international clients, blending precision with care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center py-8">
          <NavLink
            to="/about"
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#133a41] rounded-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Explore More
          </NavLink>
          <NavLink
            to="/team"
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover:-translate-y-1 transition-transform duration-300 shadow-lg"
          >
            Our Team
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
