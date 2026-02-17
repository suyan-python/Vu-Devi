import React from "react";
import GeneralForm from "./GeneralForm";
import { Briefcase, Globe, ShieldCheck, Cpu } from "lucide-react";
import JobOpenings from "./JobOpenings";
import { Helmet } from "react-helmet";


const Job = () =>
{
    return (

        <>

            <Helmet>
                <title>
                    Medical Jobs in Nepal | Healthcare Documentation Careers | Vu Devi Services
                </title>

                <meta
                    name="description"
                    content="Apply for medical jobs in Nepal at Vu Devi Services. We hire Clinical Documentation Specialists, Medical Scribes, and Healthcare Professionals. Explore job openings in Nepal with global career opportunities."
                />

                <link rel="canonical" href="https://vudeviservices.com.np/application" />

                {/* Open Graph */}
                <meta property="og:title" content="Medical Jobs in Nepal | Vu Devi Services" />
                <meta property="og:description" content="Explore healthcare documentation and medical job openings in Nepal." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vudeviservices.com.np/application" />


                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Vu Devi Services Pvt. Ltd.",
                            "url": "https://vudeviservices.com.np",
                            "logo": "https://vudeviservices.com.np/logo.png",
                            "sameAs": []
                        }
                    `}
                </script>

                <script type="application/ld+json">
                    {
                        JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "JobPosting",
                            title: "Medical Scribe – Clinical Documentation Specialist",
                            description:
                                "Vu Devi Services is hiring Medical Scribes in Nepal. Responsibilities include clinical documentation, medical record management, and HIPAA-compliant healthcare data processing.",
                            identifier: {
                                "@type": "PropertyValue",
                                name: "Vu Devi Services Pvt. Ltd.",
                                value: "VDS-MED-001"
                            },
                            datePosted: "2026-02-01",
                            validThrough: "2026-05-01T23:59",
                            employmentType: "FULL_TIME",
                            hiringOrganization: {
                                "@type": "Organization",
                                name: "Vu Devi Services Pvt. Ltd.",
                                sameAs: "https://vudeviservices.com.np",
                                logo: "https://vudeviservices.com.np/logo.png"
                            },
                            jobLocation: {
                                "@type": "Place",
                                address: {
                                    "@type": "PostalAddress",
                                    addressLocality: "Lalitpur",
                                    addressCountry: "NP"
                                }
                            },
                            applicantLocationRequirements: {
                                "@type": "Country",
                                name: "Nepal"
                            },
                            directApply: true
                        })
                    }
                </script>

            </Helmet>


            <section className="w-full min-h-screen pt-32">
                {/* 1. RECRUITMENT HERO: Command Center Style */}
                <div className="w-full px-6 md:px-12 mb-12 ">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="text-center ">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#133a41] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                                    <Briefcase size={12} />
                                    Active Recruitment: Medical Operations
                                </div>
                                <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
                                    Medical Jobs in Nepal <br />
                                    <span className="text-red-700 font-light">Clinical Documentation & Healthcare Careers</span>
                                </h1>
                                <h2 className="mt-8 text-slate-500 mx-auto max-w-2xl text-xs md:text-lg leading-relaxed font-medium ">
                                    Vu Devi Services is scaling its global documentation nodes. We are
                                    identifying <span className="text-[#133a41]">high-fidelity professionals</span> to join our specialized clinical support teams.
                                </h2>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 2. TRUST INFRASTRUCTURE BAR */}
                <div className="bg-white py-6 border-y border-slate-100 mb-12 md:mb-20">
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
                </div>

                {/* 3. DEPLOYMENT OPPORTUNITIES: Structured Dossiers */}
                <JobOpenings />

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