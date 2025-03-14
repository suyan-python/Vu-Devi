import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="my-4 text-blue-400">
      <div className="relative flex justify-between items-center shadow-xl rounded-xl mx-8 md:mx-32 px-2 py-3 text-xl">
        {/* Logo Section */}
        <div>
          <h1 className="text-xl font-bold">Vu Devi Services</h1>
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-400 hover:text-blue-700"
          >
            <svg
              className="w-6 h-6"
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

        {/* Navbar Links */}
        <div className="hidden md:flex items-center gap-7 justify-end w-3xl space-x-4">
          <NavLink
            to="/"
            className="text-blue-400 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-blue-400 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Us
          </NavLink>
          <NavLink
            to="/services"
            className="text-blue-400 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-blue-400 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink to={"/application"}>
            <button className="relative text-white font-semibold px-4 py-1.5 rounded-full text-lg transition duration-300 shadow-lg bg-blue-500 hover:cursor-pointer">
              Apply for job
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (when menu is open) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-gray-50 p-4 mt-4 rounded-lg shadow-lg md:hidden z-10`}
      >
        <NavLink
          to="/"
          className="block text-blue-400 hover:text-blue-700 mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="block text-blue-400 hover:text-blue-700 mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          Us
        </NavLink>
        <NavLink
          to="/services"
          className="block text-blue-400 hover:text-blue-700 mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className="block text-blue-400 hover:text-blue-700 mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
        <NavLink to={"/application"}>
          <button className="relative text-white font-semibold px-6 py-3 mt-4 rounded-full text-lg transition duration-300 shadow-lg bg-blue-500 hover:cursor-pointer">
            Apply for job
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
