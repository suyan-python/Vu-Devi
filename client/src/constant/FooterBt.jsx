import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Briefcase,
  Stethoscope,
  PhoneCall,
  Info,
  Icon,
  CalendarDays,
} from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react"; // Optional: Use icons for a professional touch
import { motion } from "framer-motion";

const FooterBT = () => {
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowBar(false);
      } else {
        // scrolling up
        setShowBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", to: "/", icon: <Home size={20} /> },
    { label: "About", to: "/about", icon: <Info size={20} /> },
    { label: "Jobs", to: "/application", icon: <Briefcase size={20} /> },
    { label: "Services", to: "/services", icon: <Stethoscope size={20} /> },
    { label: "Contact", to: "/contact", icon: <PhoneCall size={20} /> },
  ];

  return (
    <>
      {/* MOBILE FLOATING BOTTOM NAVIGATION */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: showBar ? 0 : 120,
          opacity: showBar ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 30,
          mass: 0.8,
        }}
        className="md:hidden fixed bottom-3 left-3 right-3 z-50"
      >
        <div className="relative mx-auto max-w-lg overflow-hidden rounded-full border border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.13)] backdrop-blur-xl">
          <div className="flex h-[48px] items-center justify-around px-1">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className="relative flex h-full flex-1 flex-col items-center justify-center "
              >
                {({ isActive }) => (
                  <>
                    {/* Active Background */}
                    <motion.div
                      className="absolute inset-x-2 inset-y-1 rounded-full bg-[#133a41]/[0.10]"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.85,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      animate={{
                        y: isActive ? -2 : 0,
                        scale: isActive ? 1.08 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive ? "text-[#133a41]" : "text-slate-900"
                      }`}
                    >
                      {item.icon}
                    </motion.div>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* DESKTOP FOOTER - Hidden on Mobile */}
      <footer
        className={`hidden md:block fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 
  transition-all duration-500 ease-in-out
  ${showBar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <div className="bg-white backdrop-blur-md text-[#133a41] px-12 py-2 rounded-full border border-white/10 shadow-xl flex justify-between items-center">
          {/* Brand Section */}
          <div className="flex flex-col gap-1">
            <p className="header text-sm font-bold">
              Vu Devi Services Pvt. Ltd.
            </p>
            <p className="text-[10px] text-slate-500 font-light uppercase tracking-widest">
              © 2026 All Rights Reserved
            </p>
          </div>

          {/* Info Grid */}
          <div className="flex gap-10">
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-[#133a41]">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-light">
                  Location
                </span>
                <span className="text-xs font-medium">
                  Balkumari, Lalitpur, Nepal
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-[#133a41]">
                <Phone size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-light">
                  Contact
                </span>
                <a
                  href="tel:+015924646"
                  className="text-xs font-medium hover:text-[#133a41] transition-colors"
                >
                  015924646
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg text-[#133a41]">
                <Mail size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-light">
                  Email
                </span>
                <a
                  href="mailto:info@vudeviservices.com.np"
                  className="text-xs font-medium hover:text-[#133a41] transition-colors"
                >
                  info@vudeviservices.com.np
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
