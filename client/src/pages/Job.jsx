import React from "react";
import GeneralForm from "./GeneralForm";
import { Briefcase, Globe, ShieldCheck, Cpu } from "lucide-react";
import JobOpenings from "./JobOpenings";
import { Helmet } from "react-helmet";
import { JOB_DATA } from "../db/jobs";


const Job = () =>
{

    const scrollToJobs = () =>
    {
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
                <title>Job Openings Nepal | Medical & Graphic Design Careers | Vu Devi Services</title>

                <meta
                    name="description"
                    content="Apply for Medical Report Reviewer & Graphic Designer jobs in Nepal. Full-time roles at Vu Devi Services with growth opportunities."
                />

                <link rel="canonical" href="https://vudeviservices.com.np/application" />

                {/* Open Graph */}
                <meta property="og:title" content="Job Openings Nepal | Vu Devi Services" />
                <meta
                    property="og:description"
                    content="Hiring Medical Report Reviewers and Graphic Designers/Video Editors in Nepal. Apply now at Vu Devi Services."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vudeviservices.com.np/application" />
                <meta property="og:image" content="https://vudeviservices.com.np/og-image.jpg" />

                {/* Organization Schema */}
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
                        "jobPosting": [
                            {
                                "@type": "JobPosting",
                                "title": "Medical Report Reviewer",
                                "description": "Review medical reports and ensure accuracy for global healthcare providers.",
                                "employmentType": "FULL_TIME",
                                "jobLocation": {
                                    "@type": "Place",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Lalitpur",
                                        "addressCountry": "NP"
                                    }
                                }
                            },
                            {
                                "@type": "JobPosting",
                                "title": "Graphic Designer & Video Editor",
                                "description": "Create graphics, videos, and content for digital marketing campaigns.",
                                "employmentType": "FULL_TIME",
                                "jobLocation": {
                                    "@type": "Place",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Lalitpur",
                                        "addressCountry": "NP"
                                    }
                                }
                            }
                        ]
                    })}
                </script>

                {/* ItemList Schema for job listings */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Job Openings at Vu Devi Services Nepal",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Medical Report Reviewer",
                                "url": "https://vudeviservices.com.np/application#medical"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Graphic Designer & Video Editor",
                                "url": "https://vudeviservices.com.np/application#graphic"
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <section className="w-full min-h-screen pt-16 md:pt-32">
                {/* 1. RECRUITMENT HERO: Command Center Style */}
                <div className="w-full px-6 md:px-12 ">
                    <div className="max-w-7xl mx-auto py-14 md:py-20">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-[8px] md:text-sm font-bold uppercase tracking-wider rounded-lg mb-8 shadow-lg">
                                <Briefcase size={16} />
                                2 Active Openings | Apply Today
                            </div>

                            {/* H1 - Keyword-optimized like top portals */}
                            <h1 className="header text-2xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                                Graphic Design & Medical Jobs in Nepal
                                <br />

                                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-light">
                                    2 Positions Open Now
                                </span>
                            </h1>

                            {/* H2 - Benefits + CTA like JobsNepal */}
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-sm md:text-2xl text-slate-700 font-medium mb-4 leading-tight">
                                    Hiring: <span className="font-bold">Graphic Designer/Video Editor </span>
                                    & <span className="text-[#133a41] font-bold">Medical Report Reviewer</span>
                                </h2>
                                <p className="text-xs md:text-lg text-slate-600 leading-relaxed mb-8">
                                    Join us at Vu Devi Services in Lalitpur. Full-time roles with
                                    <strong> competitive salary, portfolio growth, real client projects</strong>,
                                    and career advancement.
                                </p>

                                {/* CTA Buttons - Conversion focus like KumariJob */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white md:px-8 px-4 py-2 md:py-4 rounded-xl font-bold text-xs md:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
                                        onClick={scrollToJobs}
                                    >
                                        Apply Graphic Design Jobs
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
                    </div>
                </div>
                {/* 2. TRUST INFRASTRUCTURE BAR */}
                {/* <div className="bg-white py-6 border-y border-slate-100 mb-12 md:mb-20">
                    <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 justify-between items-center">
                        {[
                            { Icon: ShieldCheck, text: "HIPAA Compliant Environment" },
                            { Icon: Globe, text: "International Career Tracks" },
                            { Icon: Cpu, text: "AI-Enhanced Documentation" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <item.Icon className="text-red-700" size={16} />
                                <span className="text-[8px] md:text-[10px] font-medium uppercase tracking-widest text-slate-400">{item.text}</span>
                            </div>
                        ))}

                    </div>
                </div> */}


                <div className="bg-white py-6 border-y border-slate-100 mb-12 md:mb-20">
                    <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 justify-between items-center">
                        {[
                            { Icon: Briefcase, text: "Portfolio-Driven Growth" },
                            { Icon: Globe, text: "Work on Global Projects" },
                            { Icon: Cpu, text: "Creative + AI Workflow" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <item.Icon className="text-red-700" size={16} />
                                <span className="text-[8px] md:text-[10px] font-medium uppercase tracking-widest text-slate-400">{item.text}</span>
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
                                    <div className="w-14 h-[2px] bg-red-700"></div>
                                    <h4 className="text-xs font-semibold text-[#133a41] uppercase tracking-[0.4em]">
                                        Clinical Recruitment Standards
                                    </h4>
                                </div>

                                {/* Main Heading (SEO Optimized) */}
                                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
                                    Institutional Hiring for
                                    <span className="text-red-700 font-light"> Medical Documentation Professionals</span>
                                </h2>

                                {/* SEO Content */}
                                <p className="text-slate-600 text-xs md:text-lg leading-relaxed max-w-xl">
                                    Our recruitment process is built for healthcare accuracy. We hire and validate
                                    <strong className="text-slate-900"> Clinical Documentation Specialists, Medical Scribes, and Healthcare Documentation Experts </strong>
                                    through structured evaluation protocols aligned with
                                    <strong className="text-slate-900"> HIPAA compliance and global medical data standards</strong>.
                                </p>

                                <p className="text-slate-500 text-xs md:text-lg leading-relaxed max-w-xl">
                                    Every candidate undergoes credential verification, domain testing, compliance review,
                                    and documentation accuracy assessment before onboarding. We prioritize long-term
                                    healthcare documentation careers backed by secure digital infrastructure.
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
                                        100% HIPAA Compliant Data Handling & Encrypted Clinical Systems
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
                                        Remote Workforce Structured for International Healthcare Clients
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