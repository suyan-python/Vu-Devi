import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X } from "lucide-react"; // Using Lucide for institutional icons
import Logo from "../assets/logo/logo.png";

function Navbar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBar, setShowBar] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80)
      {
        // scrolling down
        setShowBar(false);
      } else
      {
        // scrolling up
        setShowBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
    {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    { to: "/application", label: "Career", isButton: true },
  ];

  const getActiveClass = ({ isActive }) =>
    `relative text-sm  transition-colors duration-300 ${isActive ? "text-[#133a41] font-bold" : "hover:text-[#133a41] font-medium"
    }`;
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[500] transition-all duration-500 ease-in-out
        ${isScrolled
            ? "py-3  backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.05)] border-b border-slate-100 max-w-5xl mx-auto left-0 right-0  md:top-2 rounded-lg bg-white"
            : "py-8 bg-transparent"
          }
        ${showBar ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex justify-between items-center">

          {/* 1. LOGO AREA: Institutional Anchor */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={Logo}
              alt="Vu Devi Services"
              className={`transition-all duration-500 object-contain ${isScrolled ? "h-10" : "md:h-14 h-10"}`}
            />
            {/* Subtle Status Indicator (Matches your "Operational Pulse" vibe) */}
            {!isScrolled && (
              <div className="hidden lg:flex flex-col border-l border-slate-300 pl-4 py-1">
                <span className="text-[8px] font-black text-[#133a41] uppercase tracking-[0.3em]">Healthcare excellence</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">Authority</span>
              </div>
            )}
          </Link>

          {/* 2. DESKTOP LINKS: Structured Information Architecture */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, idx) =>
              link.isButton ? (
                <NavLink key={idx} to={link.to}>
                  <button className="relative overflow-hidden group bg-[#133a41] text-white px-7 py-3 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-red-700 shadow-xl shadow-[#133a41]/10 cursor-pointer">
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </NavLink>
              ) : (
                <NavLink key={idx} to={link.to} className={getActiveClass} end>
                  {link.label}
                  {/* Engineered Underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              )
            )}
          </div>

          {/* 3. MOBILE INTERFACE: Minimalist Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#133a41] hover:bg-slate-100 transition-colors rounded-sm"
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* 4. OPTIONAL: TOP STRIP (Only visible when not scrolled) */}
        {!isScrolled && (
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-700 via-[#133a41] to-red-700 opacity-50"></div>
        )}
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
                className={getActiveClass}
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
