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


  return (
    <section className="relative h-screen flex justify-center  overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="eager"
        fetchpriority="high"
      />

      {/* Hero Content */}
      <div className="max-w-4xl text-center relative z-10 pt-56 ">
        <h1 className="text-4xl lg:text-6xl font-semibold text-[#133a41]">
          Excellence in <span className="text-red-700">Medical Documentation</span> Since 2013
        </h1>
        <p className="mt-4 text-lg lg:text-2xl text-[#133a41] max-w-2xl mx-auto">
          Vu Devi Services Pvt. Ltd. delivers accurate, timely, and high-quality
          medical documentation to international clients, blending precision with care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center py-8">
          <NavLink to="/about" className="px-8 py-3 text-lg text-white bg-[#133a41] rounded-xl shadow-lg hover:-translate-y-1 transition">
            Explore More
          </NavLink>
          <NavLink to="/team" className="px-8 py-3 text-lg bg-white rounded-xl shadow-lg hover:-translate-y-1 transition">
            Our Team
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
