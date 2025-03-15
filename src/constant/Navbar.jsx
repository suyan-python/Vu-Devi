import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-32 py-3 transition-all duration-300 text-blue-500 font-medium ${
          isScrolled
            ? "bg-white/30 shadow-lg backdrop-blur-xl"
            : "bg-white/30  shadow-md"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <h1 className="text-xl font-bold">Vu Devi Services</h1>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="hover:text-blue-300">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex items-center gap-7">
            <NavLink to="/" className="hover:text-blue-300">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-blue-300">
              About Us
            </NavLink>
            <NavLink to="/services" className="hover:text-blue-300">
              Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-300">
              Contact
            </NavLink>
            <NavLink to="/application">
              <button className="text-white font-semibold px-4 py-2 rounded-full text-lg transition duration-300 shadow-lg bg-blue-500 hover:bg-blue-700 cursor-pointer">
                Apply for Job
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col items-center justify-center z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-blue-500 hover:text-blue-700"
        >
          ✖
        </button>
        <NavLink
          to="/"
          className="text-xl text-blue-500 hover:text-blue-700 mb-6"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-xl text-blue-500 hover:text-blue-700 mb-6"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className="text-xl text-blue-500 hover:text-blue-700 mb-6"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className="text-xl text-blue-500 hover:text-blue-700 mb-6"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
        <NavLink to="/application">
          <button className="text-white font-semibold px-6 py-3 mt-4 rounded-full text-lg transition duration-300 shadow-lg bg-blue-500 hover:bg-blue-700">
            Apply for Job
          </button>
        </NavLink>
      </div>

      {/* Prevent content from overlapping with Navbar */}
      <div className="pt-20"></div>
    </>
  );
}

export default Navbar;
