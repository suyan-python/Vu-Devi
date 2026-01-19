import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import back from "../assets/background/back3.jpg";

function Hero()
{
  return (
    <section className="relative h-screen w-full flex items-start lg:items-center overflow-hidden">
      {/* 1. Background Image - Anchored to the bottom to ensure faces are always visible */}
      <div className="absolute inset-0 -z-20">
        <img
          src={back}
          alt="Medical Professionals"
          className="w-full h-full object-cover object-bottom scale-100 md:scale-105"
        />
        {/* 2. Intelligent Gradient: Dark at top (for text), Transparent at bottom (for faces) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#133a41]/90 via-[#133a41]/40 to-transparent lg:bg-gradient-to-r lg:from-[#133a41]/90 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 md:pt-32 lg:pt-0">
        <div className="max-w-3xl text-left">

          {/* Subtle Label */}
          <p className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Established 2013
          </p>

          {/* Main Heading - Sized specifically for mobile readability */}
          <h1 className="header text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Excellence in <br />
            <span className="text-white">Medical Documentation</span>
          </h1>

          {/* Description - Shorter on mobile to save space */}
          <p className="text-base md:text-lg lg:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl border-l-2 border-red-700 pl-4 lg:pl-6">
            Vu Devi Services Pvt. Ltd. delivers accurate, timely, and high-quality
            medical documentation to international clients.
          </p>

          {/* Action Buttons - Stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/about"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-red-700 text-white rounded-lg font-bold text-sm md:text-base hover:bg-red-800 transition-all shadow-lg"
            >
              Explore More
              <ChevronRight size={18} />
            </NavLink>

            <NavLink
              to="/team"
              className="flex items-center justify-center px-7 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-lg font-bold text-sm md:text-base hover:bg-white hover:text-[#133a41] transition-all"
            >
              Our Team
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;