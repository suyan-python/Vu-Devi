import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight } from "lucide-react";
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
            "email": "vudeviservices@gmail.com",
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
            <motion.div
              className="w-full lg:w-5/12 space-y-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-700 text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-sm mb-6">
                  <Globe size={12} />
                  Global Operations
                </div>
                <h1 className="text-3xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
                  Connect with our <br />
                  <span className="text-[#133a41] font-light">Service Center</span>
                </h1>
                <p className="mt-6 text-slate-600 text-xs md:text-lg leading-relaxed border-l-2 border-slate-200 pl-6">
                  Vu Devi Services Pvt. Ltd. provides 24/7 support coordination for international medical documentation projects.
                </p>
              </div>

              {/* Structured Contact Cards */}
              <div className="grid grid-cols-1 gap-6">
                {/* Card 1: Email */}
                <a href="mailto:vudeviservices@gmail.com" className="group flex items-start gap-5 p-6 bg-white border border-slate-100 shadow-sm hover:border-red-700 transition-all duration-300">
                  <div className="p-3 bg-slate-50 text-red-700 group-hover:bg-red-700 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Official Inquiry</p>

                    <a href="mailto:vudeviservices@gmail.com" className="text-xs md:text-lg font-semibold text-slate-800" aria-label="Email Vu Devi Services">vudeviservices@gmail.com</a>
                  </div>
                </a>

                {/* Card 2: Phone */}
                <div className="group flex items-start gap-5 p-6 bg-white border border-slate-100 shadow-sm hover:border-[#133a41] transition-all duration-300">
                  <div className="p-3 bg-slate-50 text-[#133a41] group-hover:bg-[#133a41] group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Assistance</p>
                    <a
                      href="tel:+015924646"
                      className="text-xs md:text-md font-bold text-slate-800 hover:underline"
                    >
                      015924646
                    </a>
                    <br />
                    <a
                      href="tel:+9779817576110"
                      className="text-xs md:text-md font-bold text-slate-800 hover:underline"
                    >
                      9817576110
                    </a>
                    <p className="text-xs text-slate-500 mt-1 font-medium italic">Available during business hours (NPT)</p>
                  </div>
                </div>

                {/* Card 3: Address */}
                <div className="flex items-start gap-5 p-6 bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm">
                  <div className="p-3 bg-slate-50 text-slate-400">
                    <MapPin size={24} />
                  </div>

                  <address className="not-italic">
                    <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Headquarters
                    </p>
                    <p className="text-xs md:text-md font-bold text-slate-800 leading-snug">
                      Balkumari, Lalitpur, Nepal
                    </p>
                  </address>

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
                      <p className="text-xs font-bold text-slate-800 tracking-tight">Accepting Global Requests</p>
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