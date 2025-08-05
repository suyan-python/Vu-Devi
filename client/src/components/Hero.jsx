import React, { useState, useEffect, useRef } from "react";
import Services from "../pages/Services";
import { NavLink } from "react-router-dom";
import OurTeam from "../pages/OurTeam";
import Logo from '../assets/logo/logo.png'

function Hero()
{
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() =>
  {
    const observer = new IntersectionObserver(
      ([entry]) =>
      {
        if (entry.isIntersecting)
        {
          setIsVisible(true);
        } else
        {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current)
    {
      observer.observe(heroRef.current);
    }

    return () =>
    {
      if (heroRef.current)
      {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative px-6 sm:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 xl:gap-12">
        {/* Left Content Section */}
        <div className="w-full lg:w-3/6 space-y-6 sm:space-y-8">
          <img src={Logo} alt="" />

          <p className="test text-lg sm:text-xl text-tedBlack leading-relaxed">
            Founded in 2013, Vu Devi Services streamlines medical documentation
            outsourcing for global healthcare providers. Our expert team
            leverages innovative technology to deliver precise, compliant
            solutions—empowering you to focus on patient care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <NavLink
              to="/about"
              className="flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 text-lg font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>

            <NavLink
              to="/team"
              className="flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-red-500 rounded-xl hover:bg-gradient-to-l transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Meet Our Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </NavLink>
          </div>
        </div>

        <div className="w-full lg:w-3/4 mt-8 lg:mt-0 sm:p-8 flex items-center justify-center">
          <div className="w-full max-w-4xl py-8 rounded-xl shadow-lg space-y-8">
            <OurTeam />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
