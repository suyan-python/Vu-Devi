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
    isActive
      ? "text-white font-semibold p-2 rounded-full bg-[#133a41]"
      : "hover:text-red-700 font-semibold transition-colors duration-300";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-md shadow-lg py-3" : "py-5"
          }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 md:px-12 flex justify-between items-center transition-all duration-500`}
        >
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Vu Devi Services" className="w-20 md:w-24" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link, idx) =>
              link.isButton ? (
                <NavLink key={idx} to={link.to} className="hidden md:inline-block">
                  <button className="font-extrabold px-5 py-2 rounded-full text-white bg-[#133a41] hover:bg-red-700 transition-all duration-300">
                    {link.label}
                  </button>
                </NavLink>
              ) : (
                <NavLink key={idx} to={link.to} className={getActiveClass} end>
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-gray-800 hover:text-red-700 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <span className="text-3xl">✖</span>
              ) : (
                <span className="text-3xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-6 md:hidden shadow-lg"
          >
            {navLinks.map((link, idx) =>
              link.isButton ? (
                <NavLink key={idx} to={link.to} onClick={() => setIsMenuOpen(false)}>
                  <button className="font-semibold px-6 py-3 rounded-full bg-[#133a41] text-white hover:bg-red-700 transition-all duration-300">
                    {link.label}
                  </button>
                </NavLink>
              ) : (
                <NavLink
                  key={idx}
                  to={link.to}
                  className="text-2xl text-gray-800 hover:text-red-700 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  {link.label}
                </NavLink>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent overlap */}
      <div className="pt-24 md:pt-28"></div>
    </>
  );
}

export default Navbar;
