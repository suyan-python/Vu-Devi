import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.png"

function Navbar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () =>
  {
    setIsMenuOpen(!isMenuOpen);

  };
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Vudevi" },
    { to: "/team", label: "Our Team" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/application", label: "Apply for Job", isButton: true },
  ];

  // Function to get the active class
  const getActiveClass = ({ isActive }) =>
  {
    return isActive
      ? "text-white font-bold p-2 rounded-full bg-[#133a41]"
      : " hover:text-red-900 font-semibold";
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500">
        <div
          className={`mx-auto w-full max-w-full py-3 font-medium transition-all duration-500
      ${isScrolled
              ? "px-36  backdrop-blur-[20px] shadow-inner"
              : "px-7 shadow-md"
            }`}
        >

          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/">
              <img src={Logo} alt="vudevi services" className="w-20" />
            </Link>

            {/* Mobile Menu Toggle (Hamburger Icon) */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="hover:text-red-300">
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
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={getActiveClass}
                  end={!link.isButton}
                >
                  {link.isButton ? (
                    <button className=" text-red-700 font-semibold px-4 py-2 rounded-full text-lg transition duration-300   cursor-pointer">
                      {link.label}
                    </button>
                  ) : (
                    link.label
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col items-center justify-center z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-red-500 hover:text-red-700"
        >
          ✖
        </button>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={`text-xl text-red-500 hover:text-red-700 mb-6`}
            onClick={() => setIsMenuOpen(false)}
            end={!link.isButton}
          >
            {link.isButton ? (
              <button className="text-white font-semibold px-6 py-3 mt-4 rounded-full text-lg transition duration-300 shadow-lg bg-red-700 hover:bg-red-900">
                {link.label}
              </button>
            ) : (
              link.label
            )}
          </NavLink>
        ))}
      </div>

      {/* Prevent content from overlapping with Navbar */}
      <div className="pt-20"></div>
    </>
  );
}

export default Navbar;
