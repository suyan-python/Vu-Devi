import { useState } from "react";
import
{
  FileText, CheckCircle2, AlertCircle, FileUp,
  Keyboard, Briefcase, GraduationCap, Coins, Clock,
  ArrowRight,
  Section,
  SectionIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GeneralForm from "./GeneralForm";

export default function JobApplicationForm()
{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const [resumeName, setResumeName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);


  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (!formData.resume)
    {
      setErrorMessage("❌ Please upload your resume (PDF).");
      setLoading(false);
      return;
    }


    try
    {
      const emailCheckResponse = await fetch(
        `${API_URL}/api/applications/check-email?email=${formData.email}`
      );
      const emailCheckData = await emailCheckResponse.json();

      if (emailCheckData.exists)
      {
        setErrorMessage("⚠️ You have already applied.");
        setLoading(false);
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("resume", formData.resume);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("sourceWebsite", window.location.hostname);



      const response = await fetch(`${API_URL}/api/applications/apply`, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok)
      {
        setShowSuccess(true);
        setFormData({ name: "", email: "", resume: null, coverLetter: "" });
        setResumeName("");
      } else
      {
        setErrorMessage(data.error || "Submission failed.");
      }
    } catch (error)
    {
      console.error("Error submitting application:", error);
      setErrorMessage("❌ Submission failed. Try again later.");
    } finally
    {
      setLoading(false);
    }
  };

  const jobData = {
    title: "Medical Report Writer / Physiotherapy Report Writer",
    openings: "10 Positions",
    company: "Vu Devi Services Pvt. Ltd.",
    location: "Balkumari, Lalitpur",
    schedule: "Full-time | Monday–Friday | Work from Office",
    holidays: "Weekends & U.S. Public Holidays (Nepali holidays not observed)",

    overview: [
      "Responsible for reviewing patient records and preparing structured medical reports.",
      "Work focuses on clinical accuracy, documentation standards, and evidence-based reporting.",
      "Position suited for candidates with strong medical knowledge and attention to detail."
    ],

    responsibilities: [
      "Review and analyze medical records, reports, and claims documentation.",
      "Evaluate diagnosis, treatment history, and work-relatedness using medical evidence.",
      "Prepare structured medical and physiotherapy reports in required formats.",
      "Ensure quality, compliance, and formatting standards are met.",
      "Collaborate with internal teams to maintain accuracy and consistency.",
      "Apply clinical reasoning and communicate findings clearly.",
      "Incorporate feedback professionally and improve documentation quality.",
      "Meet project deadlines and client expectations."
    ],

    qualifications: [
      "MBBS",
      "Bachelor’s in Physiotherapy",
      "Master’s in Physiotherapy"
    ],

    requirements: [
      "Strong medical terminology and diagnostic knowledge",
      "Proficiency in Microsoft Office",
      "Typing speed minimum 40 WPM",
      "Excellent written and spoken English",
      "Minimum 2-year commitment required"
    ],

    training: [
      "1-month paid training program",
      "Continuous learning and performance-based growth"
    ],

    application: [
      "Updated CV",
      "Screenshot of typing test result (40+ WPM)"
    ]
  };

  const Section = ({ title, items, color, grid }) =>
  {
    if (!items || items.length === 0) return null; // prevents crash

    return (
      <section className="mb-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#133a41] mb-4">
          {title}
        </h3>

        <ul
          className={`${grid ? "grid grid-cols-1 sm:grid-cols-2 gap-2" : "space-y-2"
            } text-sm text-slate-700`}
        >
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className={`mt-1 w-1.5 h-1.5 ${color} rounded-full`} />
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  };




  return (
    <section className="min-h-screen py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-red-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-[#133a41]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* 1. INSTITUTIONAL HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#133a41] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
            <Briefcase size={12} />
            Now Hiring: Medical Operations
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight">
            Build Your Career in <br />
            <span className="text-red-700 font-light">Clinical Excellence</span>
          </h1>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg italic">
            "Explore a long-term career opportunity in medical documentation, data entry, and healthcare services with an international medical operations team."

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* 2. JOB SPECIFICATIONS (LEFT SIDE) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden">

              {/* HEADER */}
              <div className="border-l-4 border-red-700 px-8 py-6 bg-slate-50/40">
                <h3 className="text-[11px] font-black tracking-[0.35em] text-slate-400 uppercase mb-2">
                  Position
                </h3>
                <p className="text-xl font-bold text-slate-900 leading-snug">
                  Medical Report Writer / Physiotherapy Report Writer
                </p>
              </div>

              {/* SPEC GRID */}
              <div className="px-8 py-8 grid gap-8">

                {/* CORE REQUIREMENT */}
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-slate-50 border border-slate-200 text-[#133a41] rounded-sm">
                    <Keyboard size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                      Core Requirement
                    </p>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                      Strong typing speed (40+ WPM), proficiency in MS Word, Excel, and digital documentation tools.
                    </p>
                  </div>
                </div>

                {/* REMUNERATION */}
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-slate-50 border border-slate-200 text-[#133a41] rounded-sm">
                    <Coins size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                      Remuneration
                    </p>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                      Compensation is competitive and negotiable based on qualifications, skills, and relevant experience.
                    </p>
                  </div>
                </div>

                {/* ENGAGEMENT */}
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-slate-50 border border-slate-200 text-[#133a41] rounded-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                      Engagement Period
                    </p>
                    <p className="text-sm font-bold text-red-700 leading-relaxed">
                      Long-term role with a minimum commitment of 24 months
                    </p>
                  </div>
                </div>

              </div>

              {/* ASSESSMENT NOTE */}
              <div className="px-8 py-5 border-t border-slate-100 bg-slate-50/40">
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  Shortlisted candidates will complete a structured assessment covering medical terminology, documentation accuracy, and attention to detail.
                </p>
              </div>

              {/* ACTION ZONE */}
              <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-100">

                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 transition rounded-sm"
                >
                  View Full Job Description
                  <ArrowRight size={14} />
                </button>

                <a
                  href="https://www.typing.com/student/tests"
                  target="_blank"
                  className="text-xs font-bold tracking-widest text-red-700 hover:text-red-600 transition uppercase"
                >
                  Take Typing Test →
                </a>

              </div>
            </div>
          </div>


          {/* 3. APPLICATION PORTAL (RIGHT SIDE) */}
          <div className="lg:col-span-7">
            {errorMessage && (
              <div className="mb-6 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm">
                <AlertCircle size={16} />
                {errorMessage}
              </div>
            )}

            <form className="bg-white p-8 md:p-10  border border-slate-100" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 border-b pb-4">Apply for Medical Documentation Job in Nepal</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="e.g. Sameer Thapa"
                    className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-[#133a41] outline-none transition-all rounded-sm text-sm"
                  />

                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="example@medical.com"
                    className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-[#133a41] outline-none transition-all rounded-sm text-sm"
                  />

                </div>
              </div>

              {/* Enhanced File Upload Area */}
              <div className="mb-6">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Resume & Typing Result (PDF)</label>
                <div className="relative group">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) =>
                    {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      setFormData((prev) => ({ ...prev, resume: file }));
                      setResumeName(file.name);
                    }}
                  />

                  <label
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 p-8 rounded-sm bg-slate-50 group-hover:bg-white group-hover:border-[#133a41] transition-all cursor-pointer"
                  >
                    <FileUp className="text-slate-300 group-hover:text-[#133a41] mb-2" size={32} />
                    <span className="text-sm font-bold text-slate-500">
                      {resumeName ? resumeName : "Click to Upload CV + Typing Test"}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1">Maximum file size: 5MB</span>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Cover Letter / Statement of Purpose</label>
                <textarea
                  rows="4"
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))
                  }
                  placeholder="Briefly describe your education, relevant experience, and interest in medical documentation or healthcare services."
                  className="w-full p-4 bg-slate-50 border border-slate-200 focus:border-[#133a41] outline-none transition-all rounded-sm text-sm resize-none placeholder-gray-400"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#133a41] text-white font-bold py-4 rounded-sm shadow-lg transition-all flex items-center justify-center gap-3 tracking-widest text-xs cursor-pointer
    ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#1b4d56]"}`}
              >
                {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                <CheckCircle2 size={16} />
              </button>

            </form>
          </div>
        </div>
      </div>

      <GeneralForm />

      {/* SUCCESS POPUP (Glassmorphism Style) */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#133a41]/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-10 max-w-sm w-full text-center shadow-2xl border-t-8 border-green-500"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Application Lodged</h3>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed">
                Your application has been successfully received. Our recruitment team will review your profile and contact shortlisted candidates.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-8 w-full py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] cursor-pointer"
              >
                Return to Career Hub
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 30 }}
              transition={{ duration: 0.25 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-md shadow-2xl p-8 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >

              {/* HEADER */}
              <div className="mb-6 border-b pb-5">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {jobData.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  {jobData.company}
                </p>

                <div className="flex flex-wrap gap-3 mt-4 text-xs font-medium">
                  <span className="bg-slate-100 px-3 py-1 rounded">{jobData.location}</span>
                  <span className="bg-slate-100 px-3 py-1 rounded">{jobData.schedule}</span>
                  <span className="bg-slate-100 px-3 py-1 rounded">{jobData.openings}</span>
                </div>
              </div>

              {/* OVERVIEW */}
              <Section title="Role Overview" color="bg-red-700" items={jobData.overview} />

              {/* RESPONSIBILITIES */}
              <Section title="Key Responsibilities" color="bg-slate-400" items={jobData.responsibilities} />

              {/* QUALIFICATIONS */}
              <Section title="Eligible Qualifications" color="bg-green-600" items={jobData.qualifications} grid />

              {/* REQUIREMENTS */}
              <Section title="Core Requirements" color="bg-[#133a41]" items={jobData.requirements} />

              {/* TRAINING */}
              <Section title="Training & Development" color="bg-indigo-600" items={jobData.training} />

              {/* APPLICATION */}
              <section className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#133a41] mb-4">
                  Application Process
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {jobData.application.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-red-700 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FOOTER NOTE */}
              <div className="bg-slate-50 border-l-4 border-[#133a41] p-4 text-xs text-slate-600 mb-6">
                Compensation is <strong>competitive and negotiable</strong> based on qualifications and performance during the selection process.
              </div>

              {/* APPLY BUTTON */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-[#133a41] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#1b4d56] transition"
              >
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </section>
  );
}
