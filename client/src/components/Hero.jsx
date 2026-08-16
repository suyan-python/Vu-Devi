import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Hero()
{
  return (

    <>

      <Helmet>
        {/* Primary SEO - Concise and targeted */}
        <title>Vu Devi Services | Medical BPO & Healthcare Documentation Nepal</title>

        <meta
          name="description"
          content="Join Vu Devi Services for medical scribe and BPO jobs in Nepal. Specializing in clinical documentation, HIPAA-compliant services, and healthcare data processing. Apply now for full-time roles in Lalitpur."
        />

        <meta
          name="keywords"
          content="medical scribe jobs Nepal, medical BPO Nepal, clinical documentation jobs, healthcare BPO Nepal, medical transcription Nepal, HIPAA jobs Nepal"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://vudeviservices.com.np/" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Medical Scribe & BPO Jobs | Vu Devi Services Nepal" />
        <meta
          property="og:description"
          content="Leading medical BPO in Nepal hiring scribes for clinical documentation and healthcare services. Build your career with Vu Devi Services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vudeviservices.com.np/" />
        <meta property="og:image" content="https://vudeviservices.com.np/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Scribe Jobs Nepal | Vu Devi Services" />
        <meta
          name="twitter:description"
          content="Apply for medical scribe roles at Nepal's top medical BPO. Clinical documentation specialists needed."
        />
        <meta name="twitter:image" content="https://vudeviservices.com.np/og-image.jpg" />

        {/* Organization Schema - Clean and factual */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vu Devi Services Pvt. Ltd.",
            "url": "https://vudeviservices.com.np",
            "logo": "https://vudeviservices.com.np/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lalitpur",
              "addressCountry": "NP"
            },
            "description": "Medical BPO specializing in clinical documentation and healthcare services in Nepal."
          })}
        </script>

        {/* Job Posting Schema - Simplified, Google-compliant */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Medical Scribe",
            "description": "Vu Devi Services seeks Medical Scribes for clinical documentation and HIPAA-compliant healthcare data processing. Full-time roles in Lalitpur, Nepal. Night shifts to serve global clients.",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Vu Devi Services Pvt. Ltd.",
              "value": "VDS-MED-001"
            },
            "datePosted": "2026-04-01",
            "validThrough": "2026-07-01T23:59:59+05:45",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Vu Devi Services Pvt. Ltd.",
              "sameAs": "https://vudeviservices.com.np",
              "logo": "https://vudeviservices.com.np/logo.png"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lalitpur",
                "addressCountry": "NP"
              }
            },
            "applicantLocationRequirements": {
              "@type": "Country",
              "name": "Nepal"
            },
            "directApply": true
          })}
        </script>
      </Helmet>

      <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-[#f8fafb]">

        {/* SUBTLE BACKGROUND DETAILS */}
        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Base */}
          <div className="absolute inset-0 bg-[#f8fafb]" />

          {/* Mobile architectural grid */}
          <div className="absolute inset-0 md:hidden opacity-[0.45]" style={{ backgroundImage: "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)" }} />

          {/* Mobile red glow */}
          <div className="absolute -top-28 -right-28 md:hidden w-80 h-80 rounded-full bg-red-700/[0.06] blur-3xl" />

          {/* Mobile teal glow */}
          <div className="absolute top-[38%] -left-32 md:hidden w-80 h-80 rounded-full bg-[#133a41]/[0.05] blur-3xl" />

          {/* Mobile architectural circles */}
          <div className="absolute -right-44 top-20 md:hidden w-[430px] h-[430px] rounded-full border border-red-700/[0.08]" />
          <div className="absolute -right-32 top-32 md:hidden w-[300px] h-[300px] rounded-full border border-[#133a41]/[0.08]" />

          {/* Mobile vertical accent */}
          <div className="absolute right-8 top-28 bottom-24 md:hidden w-px bg-gradient-to-b from-transparent via-red-700/20 to-transparent" />

          {/* Desktop architectural circles */}
          <div className="absolute -right-40 -top-40 hidden md:block w-[600px] h-[600px] rounded-full border border-[#133a41]/[0.06]" />
          <div className="absolute -right-20 -top-20 hidden md:block w-[450px] h-[450px] rounded-full border border-red-700/[0.05]" />

          {/* Desktop grid */}
          <div className="absolute right-[12%] top-0 bottom-0 hidden md:block w-px bg-slate-200/60" />
          <div className="absolute right-0 top-[58%] hidden md:block w-[45%] h-px bg-slate-200/60" />

          {/* Desktop glow */}
          <div className="absolute right-[12%] top-[25%] hidden md:block w-72 h-72 rounded-full bg-[#133a41]/[0.04] blur-3xl" />
        </div>


        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 min-h-[90vh] md:min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full pt-28 pb-24 md:pt-28 md:pb-16">

            <div className="absolute top-28 right-7 md:hidden flex flex-col items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
              <span className="w-px h-12 bg-gradient-to-b from-red-700/40 to-transparent" />
            </div>

            {/* LEFT CONTENT */}
            <motion.div
              className="lg:col-span-7 max-w-4xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* LABEL */}
              <div className="
                    flex
                    items-center
                    justify-center
                    md:justify-start
                    gap-3
                    mb-6
                ">
                <span className="
                hidden
                md:block
                        w-8
                        h-px
                        bg-red-700
                    " />

                <p className="
                    text-[8px]
                    md:text-[10px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-[#133a41]
                ">
                  Medical Excellence • Since 2013
                </p>
              </div>


              {/* HEADLINE */}
              <h1 className="
                    text-3xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    xl:text-[5.5rem]
                    font-semibold
                    tracking-tighter
                    leading-[0.98]
                    text-slate-900
text-center
md:text-start
                ">
                Pioneering Precision in <br />
                <span className="
                        block
                        text-red-700
                        font-light
                        mt-2
                    ">
                  Medical Documentation
                </span>
              </h1>


              {/* DESCRIPTION */}
              <p className="
                    mt-7
                    md:mt-8
                    max-w-2xl
                    text-[12px]
                    md:text-lg
                    text-slate-500
                    leading-[1.8]
                    text-center
md:text-start
                ">
                Specialized medical documentation and healthcare
                support services built around accuracy, efficiency,
                and dependable clinical operations.
              </p>


              {/* ACTIONS */}
              <div className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-3
                    md:gap-4
                    mt-8
                    md:mt-10
                ">

                <NavLink
                  to="/services"
                  className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-3
                            px-6
                            md:px-8
                            py-3.5
                            md:py-4
                            bg-[#133a41]
                            text-white
                            text-[9px]
                            md:text-xs
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            rounded-sm
                            hover:bg-red-700
                            transition-all
                            duration-500
                        "
                >
                  Explore Services

                  <ChevronRight
                    size={15}
                    className="
                                group-hover:translate-x-1
                                transition-transform
                            "
                  />
                </NavLink>


                <NavLink
                  to="/about"
                  className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-3
                            px-6
                            md:px-8
                            py-3.5
                            md:py-4
                            bg-white
                            text-[#133a41]
                            border
                            border-slate-200
                            text-[9px]
                            md:text-xs
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            rounded-sm
                            hover:border-red-700
                            hover:text-red-700
                            transition-all
                            duration-500
                        "
                >
                  Who We Are

                  <ArrowUpRight
                    size={14}
                    className="
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                                transition-transform
                            "
                  />
                </NavLink>

              </div>

            </motion.div>


            {/* RIGHT VISUAL */}
            <motion.div
              className="
                    hidden
                    lg:flex
                    lg:col-span-5
                    justify-center
                    items-center
                "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >

              <div className="
                    relative
                    w-[380px]
                    h-[380px]
                    xl:w-[440px]
                    xl:h-[440px]
                ">

                {/* Outer Ring */}
                <div className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#133a41]/10
                    " />

                {/* Inner Ring */}
                <div className="
                        absolute
                        inset-10
                        rounded-full
                        border
                        border-red-700/10
                    " />

                {/* Center */}
                <div className="
                        absolute
                        inset-20
                        rounded-full
                        bg-white
                        border
                        border-slate-200
                        shadow-xl
                        flex
                        items-center
                        justify-center
                    ">

                  <div className="text-center px-8">

                    <p className="
                                text-[8px]
                                font-black
                                uppercase
                                tracking-[0.3em]
                                text-slate-400
                                mb-3
                            ">
                      Vu Devi
                    </p>

                    <p className="
                                text-2xl
                                xl:text-3xl
                                font-semibold
                                tracking-tight
                                text-[#133a41]
                            ">
                      Services
                    </p>

                    <div className="
                                w-8
                                h-[2px]
                                bg-red-700
                                mx-auto
                                mt-4
                            " />


                    <div className="absolute bottom-32 left-6 md:hidden flex items-center gap-3 opacity-60">
                      <span className="w-8 h-px bg-[#133a41]/30" />
                      <span className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-400">Clinical Support</span>
                    </div>

                  </div>

                </div>


                {/* Orbit Markers */}
                <span className="
                        absolute
                        top-[18%]
                        right-[8%]
                        w-2
                        h-2
                        rounded-full
                        bg-red-700
                    " />

                <span className="
                        absolute
                        bottom-[18%]
                        left-[8%]
                        w-2
                        h-2
                        rounded-full
                        bg-[#133a41]
                    " />

                <span className="
                        absolute
                        top-[50%]
                        left-[-4px]
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-slate-300
                    " />

              </div>

            </motion.div>

          </div>
        </div>


        {/* BOTTOM INFORMATION BAR */}
        <div className="
              bottom-0
              left-0
              right-0
              border-t
              border-slate-200
              bg-white/70
              backdrop-blur-sm
    ">
          <div className="
            max-w-7xl
            mx-auto
            px-6
            md:px-8
            lg:px-12
            grid
            grid-cols-2
            md:grid-cols-4
        ">

            {[
              "Medical Documentation",
              "Healthcare Support",
              "Data Accuracy",
              "Operational Excellence",
            ].map((item, index) => (
              <div
                key={item}
                className={`
                        py-4
                        md:py-5
                        px-3
                        md:px-5
                        text-center
                        border-slate-200
                        ${index !== 0 ? "border-l" : ""}
                    `}
              >
                <p className="
                        text-[7px]
                        md:text-[9px]
                        font-black
                        uppercase
                        tracking-[0.15em]
                        text-slate-500
                    ">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </section>

    </>
  );
}

export default Hero;