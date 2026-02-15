import React from "react";
import { Link } from "react-router-dom";
import
{
  Facebook, Instagram, Linkedin, Mail, Phone, MapPin,
  ShieldCheck, Globe, ChevronRight, Activity
} from "lucide-react";
import logo from "../assets/logo/logo.png";

function Footer()
{
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2d33] text-white pt-20 pb-20 border-t-4 border-red-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* 1. TOP TIER: BRAND & COMPLIANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* Column A: Identity */}
          <div className="lg:col-span-4">
            <img src={logo} className="w-44 mb-8 brightness-0 invert" alt="Vu Devi Services" />
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Vu Devi Services operates as a global node for medical administrative excellence.
              We bridge the gap between clinical complexity and operational precision.
            </p>
            {/* Trust Badges - Essential for Medical BPO */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="p-2 border border-slate-700 rounded-sm hover:border-red-500 transition-colors">
                  <ShieldCheck className="text-red-500" size={20} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest mt-2 text-slate-500">HIPAA Compliant</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-2 border border-slate-700 rounded-sm hover:border-red-500 transition-colors">
                  <Activity className="text-red-500" size={20} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest mt-2 text-slate-500">ISO 27001</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-2 border border-slate-700 rounded-sm hover:border-red-500 transition-colors">
                  <Globe className="text-red-500" size={20} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest mt-2 text-slate-500">Global Node</span>
              </div>
            </div>
          </div>


          {/* Column B: Navigation Protocol */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-shadow-white uppercase tracking-[0.4em] mb-8">
              Navigation Protocol
            </h4>

            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Careers", path: "/application" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-all"
                  >
                    <ChevronRight
                      size={14}
                      className="text-red-700 group-hover:translate-x-1 transition-transform"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Column C: Global Headquarters */}
          <div className="lg:col-span-5">
            <h4 className="text-[10px] font-black text-shadow-white uppercase tracking-[0.4em] mb-8">Administrative Headquarters</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-red-700 shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Location</p>
                    <p className="text-sm text-slate-300">Balkumari-Gwarko, Lalitpur<br />Bagmati, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-red-700 shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Email</p>
                    <a href="mailto:vudeviservices@gmail.com" className="text-sm text-slate-300 hover:text-white">vudeviservices@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-red-700 shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Direct Line</p>
                    <a href="tel:+9779817576110" className="text-sm text-slate-300 hover:text-white">+977 9817576110</a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-3">Network Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase">Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BOTTOM TIER: LEGAL & SOCIAL */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Social Links with unified square design */}
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61574993381205" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vu-devi-09676b339" },
              { Icon: Instagram, href: "https://www.instagram.com/vudeviservices" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-slate-700 text-slate-400 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Fine Print */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              &copy; {currentYear} Vu Devi Services Pvt. Ltd. | Secure Infrastructure
            </p>
            <div className="flex gap-4 text-[9px] text-slate-600 font-bold uppercase tracking-tighter">
              <Link to="/privacy" className="hover:text-red-500">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-red-500">Terms of Service</Link>
              <span>•</span>
              <span>Data Processing Agreement</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;