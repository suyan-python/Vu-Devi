import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight } from "lucide-react";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet";


function Contact()
{
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vu Devi Services Pvt. Ltd.",
            "url": "https://vudeviservices.com.np",
            "email": "info@vudeviservices.com.np",
            "telephone": "+9779817576110",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Balkumari",
              "addressLocality": "Lalitpur",
              "addressCountry": "Nepal"
            }
          })}
        </script>
      </Helmet>

      <section className="relative w-full py-32 bg-[#f8fafc] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* LEFT: Institutional Contact Details */}
            <motion.div className="w-full lg:w-5/12" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* HEADER */}
              <div className="mb-10">
                <div className="flex items-center gap-2 text-[#133a41] text-[8px] md:text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                  <Globe size={12} />
                  Global Operations
                </div>

                <h1 className="text-3xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.05]">
                  Connect with our
                  <span className="block text-[#133a41] font-light mt-1">
                    Service Center.
                  </span>
                </h1>

                <p className="mt-6 text-xs md:text-lg text-slate-500 leading-relaxed max-w-xl">
                  Vu Devi Services Pvt. Ltd. provides dedicated support coordination for international medical documentation projects.
                </p>
              </div>


              {/* CONTACT INFORMATION */}
              <div className="border-t border-slate-200">

                {/* EMAIL */}
                <a href="mailto:info@vudeviservices.com.np" className="group flex items-center justify-between gap-5 py-5 md:py-6 border-b border-slate-200 hover:px-2 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                      <Mail size={18} />
                    </div>

                    <div>
                      <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                        Official Inquiry
                      </p>
                      <p className="text-xs md:text-base font-semibold text-slate-800 group-hover:text-red-700 transition-colors">
                        info@vudeviservices.com.np
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight size={16} className="text-slate-300 group-hover:text-red-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>


                {/* PHONE */}
                <div className="group flex items-center justify-between gap-5 py-5 md:py-6 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 text-[#133a41] group-hover:bg-[#133a41] group-hover:text-white transition-all duration-300">
                      <Phone size={18} />
                    </div>

                    <div>
                      <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                        Direct Assistance
                      </p>

                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        <a href="tel:015924646" className="text-xs md:text-base font-semibold text-slate-800 hover:text-[#133a41] transition-colors">
                          015924646
                        </a>

                        <span className="text-slate-300">/</span>

                        <a href="tel:+9779817576110" className="text-xs md:text-base font-semibold text-slate-800 hover:text-[#133a41] transition-colors">
                          9817576110
                        </a>
                      </div>

                      <p className="text-[9px] text-slate-400 mt-1">
                        Available during business hours (NPT)
                      </p>
                    </div>
                  </div>
                </div>


                {/* ADDRESS */}
                <div className="flex items-center gap-4 py-5 md:py-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-400">
                    <MapPin size={18} />
                  </div>

                  <address className="not-italic">
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                      Headquarters
                    </p>

                    <p className="text-xs md:text-base font-semibold text-slate-800">
                      Balkumari, Lalitpur, Nepal
                    </p>
                  </address>
                </div>

              </div>


              {/* SOCIAL NETWORK */}
              <div className="mt-8 pt-7 border-t border-slate-200">

                <div className="flex items-center justify-between mb-4">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em]">
                    Connect With Us
                  </p>

                  <span className="w-8 h-px bg-red-700" />
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-3">

                  {/* FACEBOOK */}
                  <a href="https://www.facebook.com/profile.php?id=61574993381205" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-3 md:p-4 border border-slate-200 bg-white hover:border-[#1877F2] hover:bg-slate-50 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Facebook size={17} className="text-slate-400 group-hover:text-[#1877F2] transition-colors" />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900">
                        Facebook
                      </span>
                    </div>

                    <ArrowUpRight size={12} className="hidden md:block text-slate-300 group-hover:text-[#1877F2]" />
                  </a>


                  {/* LINKEDIN */}
                  <a href="https://www.linkedin.com/company/vu-devi-services" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-3 md:p-4 border border-slate-200 bg-white hover:border-[#0A66C2] hover:bg-slate-50 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Linkedin size={17} className="text-slate-400 group-hover:text-[#0A66C2] transition-colors" />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900">
                        LinkedIn
                      </span>
                    </div>

                    <ArrowUpRight size={12} className="hidden md:block text-slate-300 group-hover:text-[#0A66C2]" />
                  </a>

                  {/* INSTAGRAM */}
                  <a href="https://www.instagram.com/vudeviservices" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-3 md:p-4 border border-slate-200 bg-white hover:border-pink-500 hover:bg-slate-50 transition-all duration-300">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Instagram size={17} className="text-slate-400 group-hover:text-pink-500 transition-colors" />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900">
                        Instagram
                      </span>
                    </div>

                    <ArrowUpRight size={12} className="hidden md:block text-slate-300 group-hover:text-pink-500" />
                  </a>

                </div>
              </div>
            </motion.div>

            {/* RIGHT: High-Tech Map Interface */}
            <motion.div
              className="w-full lg:w-7/12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-2 bg-white shadow-2xl rounded-sm border border-slate-200">
                {/* Map UI Decoration */}
                <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 shadow-xl border-l-4 border-red-700 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <Clock className="text-red-700" size={18} />
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400">Current Status</p>
                      <p className="text-xs font-bold text-slate-800 tracking-tight">Open to Work</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[500px] grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                  <iframe

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.84505588054168!2d85.33343193813188!3d27.670291154199543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sInaya%20Cafe!5e0!3m2!1sen!2snp!4v1742110639291!5m2!1sen!2snp"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Contact;