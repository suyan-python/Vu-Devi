import React from "react";
import { NavLink } from "react-router-dom";
// Use Lucide icons for a clean, professional look
import { Home, Briefcase, Stethoscope, PhoneCall, Info } from "lucide-react";

const FooterBT = () =>
{
  // Navigation items for the mobile bar
  const navItems = [
    { label: "Home", to: "/", icon: <Home size={20} /> },
    { label: "Services", to: "/services", icon: <Stethoscope size={20} /> },
    { label: "Jobs", to: "/application", icon: <Briefcase size={20} /> },
    { label: "About", to: "/about", icon: <Info size={20} /> },
    { label: "Contact", to: "/contact", icon: <PhoneCall size={20} /> },
  ];

  return (
    <>
      {/* MOBILE BOTTOM NAVIGATION (App Style) - Visible only on Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full  bg-white  shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${isActive ? "text-[#133a41]" : "text-gray-400"
                }`
              }
            >
              <div className="mb-1">{item.icon}</div>
              <span className="text-[10px] font-medium uppercase tracking-wider">
                {item.label}
              </span>
              {/* Active Indicator Dot */}
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `h-1 w-1 rounded-full mt-1 ${isActive ? "bg-[#133a41]" : "bg-transparent"}`
                }
              />
            </NavLink>
          ))}
        </div>
      </nav>

      {/* DESKTOP FOOTER - Hidden on Mobile */}
      <footer className="hidden md:block w-full bg-[#133a41] text-white py-2 fixed bottom-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-sm font-semibold">
            © 2026 Vu Devi Services Pvt. Ltd.
          </div>

          <div className="flex gap-8 text-xs text-slate-300">
            <div className="flex flex-col items-start">
              <span className="text-white font-bold uppercase text-[10px]">Location</span>
              <span>Balkumari, Lalitpur, Nepal</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white font-bold uppercase text-[10px]">Contact</span>
              <a href="tel:+9779817576110">+977 9817576110</a>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white font-bold uppercase text-[10px]">Email</span>
              <a href="mailto:vudeviservices@gmail.com">vudeviservices@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBT;