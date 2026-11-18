import React from "react";
import GeneralForm from "./GeneralForm";
import { Briefcase, Globe, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
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

  const activeJobs = JOB_DATA.filter((job) => job.status === "OPEN");

  const totalOpenings = activeJobs.length;

  const hasOpenings = totalOpenings > 0;

  const featuredCompany =
    activeJobs[0]?.company || "Vu Devi Services Pvt. Ltd.";

  const siteUrl = "https://vudeviservices.com.np";
  const applicationUrl = `${siteUrl}/application`;
  const companyName = "Vu Devi Services Pvt. Ltd.";

  const jobTitles = activeJobs.map((job) => job.title);

  const pageTitle = activeJobs.length
    ? `${jobTitles.slice(0, 2).join(" & ")} Jobs in Nepal | Vu Devi Services`
    : "Careers in Nepal | Vu Devi Services";

  const pageDescription = activeJobs.length
    ? `Explore ${activeJobs.length} current job ${
        activeJobs.length === 1 ? "opening" : "openings"
      } at Vu Devi Services in Nepal. Apply for ${jobTitles.join(
        ", ",
      )} positions and grow your career with our team.`
    : "Explore career opportunities at Vu Devi Services Pvt. Ltd. in Nepal. Connect with our team and discover future opportunities in healthcare documentation and medical data management.";

  // Convert job sections into readable descriptions for search engines.
  const getJobDescription = (job) => {
    const overview = job.sections?.find(
      (section) => section.type === "overview",
    );

    const responsibilities = job.sections?.find(
      (section) => section.type === "responsibilities",
    );

    return [
      ...(overview?.content || []),
      ...(responsibilities?.content || []),
    ].join(" ");
  };

  // Generate individual JobPosting structured data.
  const jobPostingSchemas = activeJobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: getJobDescription(job),
    identifier: {
      "@type": "PropertyValue",
      name: companyName,
      value: job.id,
    },
    ...(job.datePosted && {
      datePosted: job.datePosted,
    }),
    ...(job.validThrough && {
      validThrough: job.validThrough,
    }),
    employmentType: job.employmentType || "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: companyName,
      sameAs: siteUrl,
      logo: `${siteUrl}/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.addressLocality || "Lalitpur",
        addressCountry: job.addressCountry || "NP",
      },
    },
    directApply: true,
  }));

  // Dynamic job listing schema.
  const jobListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Current Job Openings at Vu Devi Services",
    description: pageDescription,
    numberOfItems: activeJobs.length,
    itemListElement: activeJobs.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: job.title,
      url: `${applicationUrl}#${job.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link rel="canonical" href={applicationUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vu Devi Services" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={applicationUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:alt" content="Careers at Vu Devi Services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: companyName,
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lalitpur",
              addressCountry: "NP",
            },
          })}
        </script>

        {/* Dynamic JobPosting Schemas */}
        {jobPostingSchemas.map((schema) => (
          <script key={schema.identifier.value} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}

        {/* Dynamic Job Listing Schema */}
        {activeJobs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(jobListSchema)}
          </script>
        )}
      </Helmet>

      <section className="w-full min-h-screen pt-12 md:pt-20">
        {/* RECRUITMENT HERO */}
        <section className="relative w-full overflow-hidden bg-white px-6 md:px-12">
          <div className="relative mx-auto max-w-7xl py-16 md:py-24">
            {/* Subtle Background Detail */}
            <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-red-700/[0.035] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#133a41]/[0.04] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              {/* Eyebrow */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    hasOpenings ? "bg-emerald-500" : "bg-slate-400"
                  }`}
                />
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#133a41] md:text-[11px]">
                  {hasOpenings
                    ? "Career Opportunities · Nepal"
                    : "Careers · Vu Devi Services"}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="header mb-6 text-3xl font-bold leading-tight tracking-tight text-[#133a41] md:text-6xl">
                Build Your Career
                <br />
                <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                  With Vu Devi Services
                </span>
              </h1>

              {/* Dynamic Opening Count */}
              <div className="mb-6">
                <span className="inline-flex items-center rounded-lg bg-[#133a41]/[0.06] px-4 py-2 text-xs font-bold text-themeColor md:text-sm">
                  {hasOpenings
                    ? `${totalOpenings} ${totalOpenings === 1 ? "Position" : "Positions"} Currently Open`
                    : "No Current Openings"}
                </span>
              </div>

              {/* Dynamic Description */}
              <div className="mx-auto max-w-3xl">
                {hasOpenings ? (
                  <>
                    <h2 className="mb-4 text-base font-semibold leading-relaxed text-[#133a41] md:text-2xl">
                      Your Next Opportunity Starts Here.
                    </h2>

                    <p className="mb-7 text-xs leading-relaxed text-slate-600 md:text-lg">
                      Explore career opportunities at{" "}
                      <strong className="font-semibold text-[#133a41]">
                        {featuredCompany}
                      </strong>
                      . Join a professional team working in healthcare
                      documentation, medical data management, and
                      technology-driven services.
                    </p>

                    {/* Dynamic Job Titles */}
                    <div className="mb-9 flex flex-wrap justify-center gap-2">
                      {activeJobs.slice(0, 3).map((job) => (
                        <span
                          key={job.id}
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-semibold text-slate-600 shadow-sm md:text-xs"
                        >
                          {job.title}
                        </span>
                      ))}

                      {activeJobs.length > 3 && (
                        <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-semibold text-slate-500 md:text-xs">
                          +{activeJobs.length - 3} More
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="mb-4 text-base font-semibold leading-relaxed text-[#133a41] md:text-2xl">
                      We're Always Interested in Great Talent.
                    </h2>

                    <p className="mb-8 text-xs leading-relaxed text-slate-600 md:text-lg">
                      There are currently no open positions, but we're always
                      interested in connecting with talented and motivated
                      professionals. Check back for future opportunities or get
                      in touch with our team.
                    </p>
                  </>
                )}

                {/* CTA */}
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {hasOpenings ? (
                    <button
                      type="button"
                      onClick={scrollToJobs}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#133a41] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#133a41]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b4b53] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133a41] focus-visible:ring-offset-2 sm:w-auto"
                    >
                      Explore Open Positions
                      <ArrowUpRight size={17} className="ml-2" />
                    </button>
                  ) : (
                    <a
                      href="mailto:info@vudeviservices.com.np"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#133a41] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#133a41]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b4b53] hover:shadow-xl sm:w-auto"
                    >
                      Contact Our Team
                      <ArrowUpRight size={17} className="ml-2" />
                    </a>
                  )}

                  <a
                    href="mailto:info@vudeviservices.com.np"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-[#133a41] transition-all duration-300 hover:-translate-y-1 hover:border-[#133a41] hover:bg-slate-50 sm:w-auto"
                  >
                    Send Your CV
                  </a>
                </div>
              </div>

              {/* Bottom Information */}
              {hasOpenings && (
                <div className="mt-14 border-t border-slate-200 pt-7">
                  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 md:text-[10px]">
                    <span>Professional Growth</span>
                    <span className="hidden h-1 w-1 rounded-full bg-red-700 sm:block" />
                    <span>Collaborative Environment</span>
                    <span className="hidden h-1 w-1 rounded-full bg-red-700 sm:block" />
                    <span>Career Opportunities in Nepal</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

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
