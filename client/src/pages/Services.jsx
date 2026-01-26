import React from "react";
import { motion } from "framer-motion";
import
{
  FileText, ListOrdered, Keyboard, Database,
  BarChart4, ShieldCheck, Microscope, UserCheck, Activity
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
    <section className="py-32 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Institutional Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm mb-6">
            Institutional Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
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
              className="bg-white p-10 group hover:bg-slate-50 transition-all duration-500 relative"
              initial={{ opacity: 0 }}
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
  );
}

export default Services;