import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Briefcase, Stethoscope, PhoneCall, Info } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react"; // Optional: Use icons for a professional touch

const FooterBT = () =>
{
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

  const navItems = [
    { label: "Home", to: "/", icon: <Home size={20} /> },
    { label: "Services", to: "/services", icon: <Stethoscope size={20} /> },
    { label: "Jobs", to: "/application", icon: <Briefcase size={20} /> },
    { label: "About", to: "/about", icon: <Info size={20} /> },
    { label: "Contact", to: "/contact", icon: <PhoneCall size={20} /> },
  ];

  return (
    <>
      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className={`md:hidden fixed bottom-0 left-0 w-full bg-white z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]
 ${showBar ? "translate-y-0" : "translate-y-full"}`}>
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
              {({ isActive }) => (
                <>
                  <div className="mb-1">{item.icon}</div>

                  <span className="text-[8px] font-medium uppercase tracking-wider">
                    {item.label}
                  </span>

                  {/* Active Indicator Dot */}
                  <div
                    className={`h-1 w-1 rounded-full mt-1 transition-all duration-300 ${isActive
                      ? "bg-[#133a41] scale-100"
                      : "bg-transparent scale-0"
                      }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* DESKTOP FOOTER - Hidden on Mobile */}
      <footer
        className={`hidden md:block fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 
  transition-all duration-500 ease-in-out
  ${showBar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <div className="bg-[#133a41] backdrop-blur-md text-white px-12 py-2 rounded-2xl border border-white/10 shadow-2xl flex justify-between items-center">

          {/* Brand Section */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold">Vu Devi Services <span className="font-light text-slate-400">Pvt. Ltd.</span></p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">© 2026 All Rights Reserved</p>
          </div>

          {/* Info Grid */}
          <div className="flex gap-10">

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-teal-400">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Location</span>
                <span className="text-xs font-medium">Balkumari, Lalitpur, Nepal</span>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-teal-400">
                <Phone size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Contact</span>
                <a href="tel:+015924646" className="text-xs font-medium hover:text-teal-400 transition-colors">
                  015924646
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-teal-400">
                <Mail size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Email</span>
                <a href="mailto:vudeviservices@gmail.com" className="text-xs font-medium hover:text-teal-400 transition-colors">
                  vudeviservices@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>

  );
};

export default FooterBT;