import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterBT = () => {
  const location = useLocation();

  // Determine background color based on the current path
  const getNavbarBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-animate2";
      case "/process":
        return "bg-black";
      case "/farming":
        return "bg-prim";
      case "/sustainability":
        return "bg-pink-700";
      case "/contact":
        return "bg-gray-500";
      case "/order":
        return "bg-orange-700";
      case "/inaya":
        return "bg-amber-900";
      default:
        return "bg-gray-800";
    }
  };

  if (location.pathname === "/inaya/home") {
    return null; // Return null to hide the Navbar on this page
  }

  return (
    <footer
      className={`${getNavbarBackgroundColor()} text-white py-1 w-full fixed bottom-0 left-0 z-50`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo or main link */}
        <Link
          to="/"
          className="text-[12px] lg:text-xl md:text-2xl font-bold hover:text-yellow-400 transition duration-300 "
        >
          Services
        </Link>

        {/* Information section */}
        <div className="flex flex-row md:text-xs md:flex-row gap-4">
          {/* Information items */}
          <div className=" hidden flex-col lg:flex items-center space-x-2 animate-pulse">
            <div>
              <span className="font-semibold text-xs md:text-sm">
                Trustworthy
              </span>
            </div>
            <div>
              <span className="text-yellow-300 text-xs md:text-sm">
                Outsourcing
              </span>
            </div>
          </div>

          <div className="flex-col  justify-center lg:flex items-center  animate-pulse text-[8px] lg:text-xs">
            <div>
              <span className="font-semibold  md:text-sm">Location:</span>
            </div>

            <div>
              <span className="text-yellow-300  md:text-sm">
                Balkumari, Lalitpur
              </span>
            </div>
          </div>

          <div className="flex-col lg:flex items-center animate-pulse text-[8px] lg:text-xs">
            <div>
              <span className="font-semibold  md:text-sm">Contact:</span>
            </div>
            <div>
              <a
                href="tel:+9779851174646"
                className="text-yellow-300  md:text-sm"
              >
                +977 9851174646
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex justify-center items-center animate-pulse text-[8px] lg:text-xs">
            <div>
              <span className="font-semibold  md:text-sm">Email:</span>
            </div>
            <div>
              <a
                href="mailto:jewel.himalayan.2021@gmail.com"
                className="text-yellow-300  md:text-sm"
              >
                vudeviservices@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBT;
