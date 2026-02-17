import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Briefcase, Stethoscope, PhoneCall, Info } from "lucide-react";

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
      <footer className="hidden md:block w-full bg-[#133a41] text-white py-2 fixed bottom-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-sm font-semibold">
            © 2026 Vu Devi Services Pvt. Ltd.
          </div>

          <div className="flex gap-8 text-xs text-slate-300">
            <div className="flex flex-col items-start">
              <span className="text-white font-bold uppercase text-[10px]">
                Location
              </span>
              <span>Balkumari, Lalitpur, Nepal</span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-white font-bold uppercase text-[10px]">
                Contact
              </span>
              <a href="tel:+9779817576110">+977 9817576110</a>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-white font-bold uppercase text-[10px]">
                Email
              </span>
              <a href="mailto:vudeviservices@gmail.com">
                vudeviservices@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
};

export default FooterBT;