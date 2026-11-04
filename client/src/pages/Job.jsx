import React from "react";
import GeneralForm from "./GeneralForm";
import { Briefcase, Globe, ShieldCheck, Cpu } from "lucide-react";
import JobOpenings from "./JobOpenings";
import { Helmet } from "react-helmet";
import { JOB_DATA } from "../db/jobs";

const Job = () => {
  const scrollToJobs = () => {
    const section = document.getElementById("generalForm");
    const offset = 80; // adjust based on navbar height
    const top = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Job Openings Nepal | Vu Devi Services</title>

        <meta
          name="description"
          content="Apply for Medical Report Reviewer & Graphic Designer jobs in Nepal. Full-time roles at Vu Devi Services with growth opportunities."
        />

        <link
          rel="canonical"
          href="https://vudeviservices.com.np/application"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Job Openings Nepal | Vu Devi Services"
        />
        <meta
          property="og:description"
          content="Hiring Medical Report Reviewers and Graphic Designers/Video Editors in Nepal. Apply now at Vu Devi Services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vudeviservices.com.np/application"
        />
        <meta
          property="og:image"
          content="https://vudeviservices.com.np/og-image.jpg"
        />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Vu Devi Services Pvt. Ltd.",
            url: "https://vudeviservices.com.np",
            logo: "https://vudeviservices.com.np/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lalitpur",
              addressCountry: "NP",
            },
            jobPosting: [
              {
                "@type": "JobPosting",
                title: "Medical Report Reviewer",
                description:
                  "Review medical reports and ensure accuracy for global healthcare providers.",
                employmentType: "FULL_TIME",
                jobLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lalitpur",
                    addressCountry: "NP",
                  },
                },
              },
              {
                "@type": "JobPosting",
                title: "Graphic Designer & Video Editor",
                description:
                  "Create graphics, videos, and content for digital marketing campaigns.",
                employmentType: "FULL_TIME",
                jobLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lalitpur",
                    addressCountry: "NP",
                  },
                },
              },
            ],
          })}
        </script>

        {/* ItemList Schema for job listings */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Job Openings at Vu Devi Services Nepal",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Medical Report Reviewer",
                url: "https://vudeviservices.com.np/application#medical",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Graphic Designer & Video Editor",
                url: "https://vudeviservices.com.np/application#graphic",
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="w-full min-h-screen pt-16 md:pt-32">
        {/* 1. RECRUITMENT HERO: Command Center Style */}
        <div className="w-full px-6 md:px-12 ">
          {/* <div className="max-w-7xl mx-auto py-14 md:py-20">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-[8px] md:text-sm font-bold uppercase tracking-wider rounded-lg mb-8 shadow-lg">
                                <Briefcase size={16} />
                                1 Active Openings | Apply Today
                            </div>


                            <h1 className="header text-2xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                                Sales & Growth Jobs in Nepal
                                <br />

                                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-light">
                                    1 Position Open Now
                                </span>
                            </h1>


                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-sm md:text-2xl text-slate-700 font-medium mb-4 leading-tight">
                                    Hiring: <span className="font-bold">Country Lead, Nepal</span>
                                </h2>
                                <p className="text-xs md:text-lg text-slate-600 leading-relaxed mb-8">
                                    Join us at Peatch AI in Kathmandu. Full-time roles with
                                    <strong> competitive salary, portfolio growth, real client projects</strong>,
                                    and career advancement.
                                </p>


                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white md:px-8 px-4 py-2 md:py-4 rounded-xl font-bold text-xs md:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
                                        onClick={scrollToJobs}
                                    >
                                        Apply Country Lead, Nepal
                                    </a>
                                    <a
                                        className="border-2 border-slate-200 bg-white text-slate-900 md:px-8 px-4 py-2 md:py-4 rounded-xl font-bold text-xs md:text-lg shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all duration-200"
                                        onClick={scrollToJobs}
                                    >
                                        Medical Report Jobs
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              {/* Status Badge */}
              <div className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm sm:mb-8 sm:px-4 sm:text-xs md:text-sm">
                <Briefcase size={15} className="shrink-0" />
                <span>No Current Openings</span>
              </div>

              {/* Main Heading */}
              <h1 className="header mb-5 text-3xl font-semibold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                Careers at Vu Devi Services
                <span className="mt-2 block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-light">
                  Future Opportunities in Nepal
                </span>
              </h1>

              {/* Supporting Content */}
              <div className="mx-auto max-w-2xl">
                <h2 className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                  We're not hiring right now, but we'd love to hear from you.
                </h2>

                {/* CTA Buttons */}
                <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="mailto:info@vudeviservices.com.np"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 sm:min-h-14 sm:px-8 sm:text-base"
                  >
                    Mail Us
                  </a>

                  <button
                    type="button"
                    onClick={scrollToJobs}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 sm:min-h-14 sm:px-8 sm:text-base"
                  >
                    Send Us Your CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 border-y border-slate-100 mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 justify-between items-center">
            {[
              { Icon: Briefcase, text: "Portfolio-Driven Growth" },
              { Icon: Globe, text: "Work on Global Projects" },
              { Icon: Cpu, text: "Creative + AI Workflow" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.Icon className="text-red-700" size={16} />
                <span className="text-[8px] md:text-[10px] font-medium uppercase tracking-widest text-slate-400">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DEPLOYMENT OPPORTUNITIES: Structured Dossiers */}
        <div id="jobs">
          <JobOpenings />
        </div>

        <GeneralForm />

        {/* 4. INSTITUTIONAL RECRUITMENT FOOTER */}
        <footer className="w-full px-6 py-18 md:py-28 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 md:gap-24 items-start">
              {/* LEFT CONTENT BLOCK */}
              <div className="space-y-8">
                {/* Section Label */}
                <div className="flex items-center gap-4">
                  <h4 className="text-xs font-semibold text-[#133a41] uppercase tracking-[0.4em]">
                    Clinical Recruitment Standards
                  </h4>
                </div>

                {/* Main Heading (SEO Optimized) */}
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
                  Institutional Hiring for
                  <span className="text-red-700 font-light">
                    {" "}
                    Medical Documentation Professionals
                  </span>
                </h2>

                {/* SEO Content */}
                <p className="text-slate-600 text-xs md:text-lg leading-relaxed max-w-xl">
                  Our recruitment process is built for healthcare accuracy. We
                  hire and validate
                  <strong className="text-slate-900">
                    {" "}
                    Clinical Documentation Specialists, Medical Scribes, and
                    Healthcare Documentation Experts{" "}
                  </strong>
                  through structured evaluation protocols aligned with
                  <strong className="text-slate-900">
                    {" "}
                    HIPAA compliance and global medical data standards
                  </strong>
                  .
                </p>

                <p className="text-slate-600 text-xs md:text-lg leading-relaxed max-w-xl">
                  Every candidate undergoes credential verification, domain
                  testing, compliance review, and documentation accuracy
                  assessment before onboarding. We prioritize long-term
                  healthcare documentation careers backed by secure digital
                  infrastructure.
                </p>
              </div>

              {/* RIGHT AUTHORITY GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="relative p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#133a41] rounded-t-xl"></div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
                    Infrastructure Security
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    100% HIPAA Compliant Data Handling & Encrypted Clinical
                    Systems
                  </p>
                </div>

                {/* Card 2 */}
                <div className="relative p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-700 rounded-t-xl"></div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
                    Recruitment Audit
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    ISO 27001-Aligned Screening & Compliance Verification
                  </p>
                </div>

                {/* Card 3 */}
                <div className="relative p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0F3B44] rounded-t-xl"></div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
                    Clinical Accuracy
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    Structured Documentation Validation & Domain Testing
                  </p>
                </div>

                {/* Card 4 */}
                <div className="relative p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 rounded-t-xl"></div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
                    Global Readiness
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    Remote Workforce Structured for International Healthcare
                    Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Job;
