import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo/logo.png";

function Navbar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() =>
  {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Vudevi" },
    { to: "/team", label: "Our Team" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/application", label: "Apply for Job", isButton: true },
  ];

  const getActiveClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ${isActive ? "text-[#133a41] font-bold" : "text-gray-600 hover:text-[#133a41]"
    }`;
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex justify-between items-center">

          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Vu Devi Services" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) =>
              link.isButton ? (
                <NavLink key={idx} to={link.to}>
                  <button className="bg-[#133a41] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0f2e34] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    {link.label}
                  </button>
                </NavLink>
              ) : (
                <NavLink key={idx} to={link.to} className={getActiveClass} end>
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#133a41] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#133a41] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`h-0.5 w-full bg-current transition duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-light text-[#133a41]"
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
