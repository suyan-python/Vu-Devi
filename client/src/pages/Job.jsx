import React from "react";
import GeneralForm from "./GeneralForm";
import { Briefcase, Globe, ShieldCheck, Cpu } from "lucide-react";
import JobOpenings from "./JobOpenings";
import { Helmet } from "react-helmet";
import { JOB_DATA } from "../db/jobs";

const Job = () => {
  const scrollToJobs = () => {
    const section = document.getElementById("jobs");
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
          <div className="max-w-7xl mx-auto py-14 md:py-20">
            <div className="text-center">
              <h1 className="header text-2xl md:text-6xl font-bold tracking-tight text-[themeColor] leading-tight mb-6">
                Sales & Growth Jobs in Nepal
                <br />
                <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent font-bold">
                  1 Position Open Now
                </span>
              </h1>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-sm md:text-2xl text-[themeColor] font-medium mb-4 leading-tight">
                  Hiring: <span className="font-bold">Country Lead, Nepal</span>
                </h2>
                <p className="text-xs md:text-lg text-slate-600 leading-relaxed mb-8">
                  Join us at Peatch AI in Kathmandu. Full-time roles with
                  <strong>
                    {" "}
                    competitive salary, portfolio growth, real client projects
                  </strong>
                  , and career advancement.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    className="border-2 border-slate-200 bg-white text-[themeColor] md:px-8 px-4 py-2 md:py-4 rounded-xl font-bold text-xs md:text-lg shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all duration-200 cursor-pointer"
                    onClick={scrollToJobs}
                  >
                    Apply
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm sm:mb-8 sm:px-4 sm:text-xs md:text-sm">
                <Briefcase size={15} className="shrink-0" />
                <span>No Current Openings</span>
              </div>

              <h1 className="header mb-5 text-3xl font-semibold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                Careers at Vu Devi Services
                <span className="mt-2 block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-light">
                  Future Opportunities in Nepal
                </span>
              </h1>

              <div className="mx-auto max-w-2xl">
                <h2 className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                  We're not hiring right now, but we'd love to hear from you.
                </h2>

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
          </div> */}
        </div>

        {/* 3. DEPLOYMENT OPPORTUNITIES: Structured Dossiers */}
        <div id="jobs">
          <JobOpenings />
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

        <GeneralForm />

        {/* CAREER INFORMATION & RECRUITMENT SECTION */}
        <section
          className="relative w-full overflow-hidden border-t border-slate-200 bg-slate-50/70 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
          aria-labelledby="career-information-heading"
        >
          <div className="mx-auto max-w-7xl">
            {/* SECTION INTRODUCTION */}
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="space-y-7">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-themeColor sm:text-xs">
                    Careers & Recruitment
                  </span>
                </div>

                {/* Heading */}
                <div>
                  <h2
                    id="career-information-heading"
                    className="text-3xl font-semibold leading-[1.2] tracking-tight text-[themeColor] sm:text-4xl md:text-5xl"
                  >
                    Build Your Career in
                    <span className="block mt-2 font-light text-red-700">
                      Healthcare Documentation
                    </span>
                  </h2>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    Explore career opportunities at{" "}
                    <strong className="font-semibold text-slate-900">
                      Vu Devi Services
                    </strong>
                    , where technology, medical knowledge, and accurate
                    healthcare documentation come together. We welcome
                    individuals interested in building professional careers in
                    medical documentation and healthcare support services.
                  </p>
                </div>

                {/* Recruitment Roles */}
                <div className="border-l-2 border-red-700 py-1 pl-5">
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                    Professional Roles We Look For
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Our recruitment interests include Medical Scribes, Clinical
                    Documentation Specialists, Medical Documentation Associates,
                    and other healthcare documentation professionals.
                  </p>
                </div>

                {/* Additional SEO Content */}
                <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Whether you have experience in healthcare documentation,
                  medical terminology, clinical workflows, or are looking to
                  develop relevant professional skills, we encourage you to
                  submit your application for consideration in future
                  opportunities in Nepal.
                </p>
              </div>

              {/* RIGHT: RECRUITMENT HIGHLIGHTS */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Card 1 */}
                <div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#133a41]/30 hover:shadow-lg sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#133a41]/10 text-[#133a41]">
                    <span className="text-lg font-bold">01</span>
                  </div>

                  <h3 className="text-base font-bold text-[themeColor]">
                    Medical Documentation
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Opportunities involving medical records, clinical notes,
                    medical terminology, and healthcare documentation workflows.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-700">
                    <span className="text-lg font-bold">02</span>
                  </div>

                  <h3 className="text-base font-bold text-[themeColor]">
                    Clinical Knowledge
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Medical terminology, clinical understanding, attention to
                    detail, and the ability to work with healthcare information.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#133a41]/30 hover:shadow-lg sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#133a41]/10 text-[#133a41]">
                    <span className="text-lg font-bold">03</span>
                  </div>

                  <h3 className="text-base font-bold text-[themeColor]">
                    Quality & Accuracy
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Emphasis on documentation accuracy, professional standards,
                    confidentiality, and consistent work quality.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-700">
                    <span className="text-lg font-bold">04</span>
                  </div>

                  <h3 className="text-base font-bold text-[themeColor]">
                    Professional Growth
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Opportunities to develop technical, communication,
                    documentation, and professional workplace skills.
                  </p>
                </div>
              </div>
            </div>

            {/* RECRUITMENT PROCESS */}
            <div className="mt-16 border-t border-slate-200 pt-12 md:mt-24 md:pt-16">
              <div className="mb-10 max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 sm:text-xs">
                  Our Recruitment Approach
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[themeColor] sm:text-3xl">
                  A Structured Approach to Recruitment
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                  We aim to evaluate applicants through a structured selection
                  process that considers relevant knowledge, practical skills,
                  communication, and suitability for the role.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Application Review",
                    description:
                      "Reviewing submitted CVs, qualifications, experience, and relevant background.",
                  },
                  {
                    number: "02",
                    title: "Initial Assessment",
                    description:
                      "Evaluating relevant knowledge, communication skills, and role requirements.",
                  },
                  {
                    number: "03",
                    title: "Skills Evaluation",
                    description:
                      "Assessing practical abilities, documentation accuracy, and attention to detail where applicable.",
                  },
                  {
                    number: "04",
                    title: "Final Selection",
                    description:
                      "Completing the selection process and discussing suitable candidates for onboarding.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.number}
                    className={`relative border-slate-200 py-6 sm:px-6 lg:px-7
              ${index !== 3 ? "border-b sm:border-b-0 lg:border-r" : ""}
              ${index === 0 || index === 2 ? "sm:border-r lg:border-r" : ""}`}
                  >
                    <span className="text-3xl font-light text-red-700/60">
                      {step.number}
                    </span>

                    <h4 className="mt-4 text-base font-bold text-[themeColor]">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CLOSING STATEMENT */}
            <div className="mt-12 flex flex-col gap-5 rounded-xl bg-[#133a41] px-6 py-8 sm:px-9 md:flex-row md:items-center md:justify-between md:py-9">
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Your Next Career Opportunity Could Start Here.
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Stay connected with Vu Devi Services and explore future
                  opportunities in medical and healthcare documentation.
                </p>
              </div>

              <a
                href="mailto:info@vudeviservices.com.np"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-[themeColor] transition-colors duration-200 hover:bg-red-50"
              >
                Mail Our Team Directly
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Job;
