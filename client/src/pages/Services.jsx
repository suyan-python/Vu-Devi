import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Users, Activity, ShieldAlert, ChevronRight } from "lucide-react";

import
{
  FileText, ListOrdered, Keyboard, Database,
  BarChart4, ShieldCheck, Microscope, UserCheck,
} from "lucide-react";

const Services = () =>
{
  const serviceProtocols = [
    {
      id: "VDS-01",
      title: "Medical Dossier Construction",
      description: "Comprehensive medical reports synthesized for insurance, legal, and clinical accuracy.",
      icon: <FileText size={32} />,
      tag: "Certified Accuracy"
    },
    {
      id: "VDS-02",
      title: "Clinical Inventory Listing",
      description: "Systematic categorization of medical procedures following global ICD-10/11 standards.",
      icon: <ListOrdered size={32} />,
      tag: "Global Standards"
    },
    {
      id: "VDS-03",
      title: "High-Fidelity Data Entry",
      description: "Secure digitization of patient histories and clinical records with 99.9% precision.",
      icon: <Keyboard size={32} />,
      tag: "Precision Focused"
    },
    {
      id: "VDS-04",
      title: "Structured Documentation",
      description: "Formalizing diagnosis and treatment plans into audit-ready electronic formats.",
      icon: <Microscope size={32} />,
      tag: "Audit Ready"
    },
    {
      id: "VDS-05",
      title: "Data Intelligence Processing",
      description: "Cleaning and managing complex healthcare datasets to drive institutional efficiency.",
      icon: <Database size={32} />,
      tag: "Secure Management"
    },
    {
      id: "VDS-06",
      title: "Healthcare Bio-Analytics",
      description: "Transforming raw medical data into actionable clinical insights and visualizations.",
      icon: <BarChart4 size={32} />,
      tag: "Predictive Insight"
    },
    {
      id: "VDS-07",
      title: "Regulatory Compliance Audit",
      description: "Ensuring every operational layer meets HIPAA, GDPR, and local medical mandates.",
      icon: <ShieldCheck size={32} />,
      tag: "Zero-Risk Policy"
    },
    {
      id: "VDS-08",
      title: "Privacy Architecture",
      description: "Advanced encryption and privacy protocols to safeguard sensitive patient identity.",
      icon: <Activity size={32} />,
      tag: "End-to-End Encryption"
    },
    {
      id: "VDS-09",
      title: "Practitioner Support",
      description: "Operational assistance designed to reduce the administrative load on medical professionals.",
      icon: <UserCheck size={32} />,
      tag: "Provider-Centric"
    },
  ];

  return (
    <>


      <section className="pt-32 ">
        <div className="max-w-7xl mx-auto px-6">

          {/* Institutional Header */}
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#133a41] text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] rounded-sm mb-6">
              Institutional Capabilities
            </div>
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
              Our Core <br />
              <span className="text-red-700  font-light"> Clinical Protocols</span>
            </h2>
            <div className="w-24 h-1 bg-slate-200 mt-3"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl overflow-hidden">
            {serviceProtocols.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-10 group hover:bg-slate-50 transition-all duration-300 relative"
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {/* ID Badge */}
                <div className="absolute top-6 right-6 text-[10px] font-black text-slate-300 group-hover:text-red-700 transition-colors">
                  {service.id}
                </div>

                {/* Icon & Label */}
                <div className="text-[#133a41] mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {service.icon}
                </div>

                <p className="text-[10px] font-black text-red-700 uppercase tracking-widest mb-3">
                  {service.tag}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#133a41] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Footer Trust Signal */}
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Verified Compliance</span>
                  <div className="h-1 w-8 bg-slate-100 group-hover:w-16 group-hover:bg-red-700 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Footer Disclaimer */}
          <div className="mt-16 text-center">
            <p className="text-xs text-slate-400 font-medium italic">
              *All service protocols are executed under strict HIPAA and ISO 27001 data security frameworks.
            </p>
          </div>
        </div>
      </section>



      <section className="bg-slate-50 py-16 md:py-32 relative overflow-hidden">
        {/* Engineering Detail: Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(#133a41 1px, transparent 1px)`, size: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* 1. SECTION HEADER: Institutional Authority */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#133a41]"></div>
              <p className="text-[10px] font-black text-[#133a41] uppercase tracking-[0.4em]">
                Healthcare Excellence Protocol
              </p>
              <div className="w-12 h-[1px] bg-[#133a41]"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Advanced Medical Services <br />
              <span className="text-red-700 font-light">
                Built on Clinical Precision & Patient-Centered Care
              </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-8 text-slate-600 text-xs md:text-base leading-relaxed border-x border-slate-200 px-8">
              Our institution delivers evidence-based healthcare services through
              standardized clinical protocols, multidisciplinary collaboration,
              and internationally recognized quality assurance systems. We are
              committed to improving patient outcomes through innovation,
              diagnostic accuracy, and ethical medical practice.
            </p>
          </div>

          {/* 2. VALUE GRID: The Service Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200 shadow-2xl">

            {[
              {
                title: "Evidence-Based Treatment",
                desc: "All medical services are guided by peer-reviewed research, international healthcare standards, and continuously updated clinical guidelines to ensure optimal patient safety and treatment effectiveness.",
                icon: <Stethoscope size={24} />,
                index: "01"
              },
              {
                title: "Multidisciplinary Medical Team",
                desc: "Our healthcare professionals include MBBS physicians, physiotherapists, pharmacists, and allied health specialists working collaboratively to deliver comprehensive patient care.",
                icon: <Users size={24} />,
                index: "02"
              },
              {
                title: "Diagnostic & Preventive Care",
                desc: "We emphasize early diagnosis, preventive healthcare screening, chronic disease management, and rehabilitation services to support long-term patient wellness and recovery.",
                icon: <Activity size={24} />,
                index: "03"
              },
              {
                title: "Quality & Data Security Standards",
                desc: "Our operational systems comply with international medical compliance frameworks, data protection standards, and strict quality control processes to ensure transparency and patient trust.",
                icon: <ShieldAlert size={24} />,
                index: "04"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-10 border-r border-b border-slate-100 last:border-r-0 group hover:bg-slate-50 transition-all duration-500 flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-red-700 p-3 bg-red-50 rounded-sm group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-300 tracking-tighter">
                    NODE_REF/{card.index}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4 h-14 flex items-center">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-2 text-[#133a41] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-black uppercase tracking-widest">System Verified</span>
                  <ChevronRight size={12} />
                </div>
              </div>
            ))}
          </div>

          {/* 3. SEO BOOST: The "Institutional Seal" Summary */}
          <div className="mt-24 p-12 bg-[#133a41] text-white rounded-sm relative overflow-hidden">
            {/* Abstract Engineering Graphics */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <h3 className="text-2xl font-semibold leading-tight">
                  Comprehensive Healthcare Services Designed for <span className="text-red-400">Clinical Excellence</span>
                </h3>
              </div>

              <div className="lg:w-2/3 lg:pl-12 lg:border-l border-white/10">
                <p className="text-slate-300 text-xs md:text-base leading-relaxed italic">
                  "From outpatient consultations and specialized physiotherapy programs
                  to pharmaceutical care management and advanced clinical monitoring,
                  our services are structured to deliver high-quality, patient-focused
                  healthcare solutions. We integrate modern medical technology,
                  structured treatment pathways, and outcome-driven performance
                  metrics to ensure sustainable healthcare delivery."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-red-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Quality Assurance Division</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}

export default Services;