import { useState } from "react";
import
{
  FileText, CheckCircle2, AlertCircle, FileUp,
  Keyboard, Briefcase, GraduationCap, Coins, Clock,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const jobDescription = `
Online data entry and analysis.
Write, edit, and review a variety of scientific and medical documents.
Follow standard procedures to manage data and present it accordingly.
Prepare documents within established timelines and follow well-defined processes.
Prepare documents of high quality in terms of scientific content, with attention to format, consistency, and accuracy.
Team player- communicate, rely on, and assist other team members as needed.
Able to navigate through frequent changes to instructions.
Able to show initiative.
Able to work quickly yet efficiently to achieve productivity goals.
Able to work according to US-based timelines and holiday coverage.
Able to check email and notifications throughout the day.
Excellent communication/language skills.
Knowledge of medical terminologies. 
  `;
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


  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Build Your Career in <br />
            <span className="text-red-700">Clinical Excellence</span>
          </h1>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg italic">
            "Join a team dedicated to precision, integrity, and the future of global healthcare documentation."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* 2. JOB SPECIFICATIONS (LEFT SIDE) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-sm border-l-4 border-red-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-red-700" size={20} />
                Position: Documentation Associate
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2 bg-slate-50 rounded text-[#133a41] h-fit"><Keyboard size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Core Requirement</p>
                    <p className="text-sm font-semibold text-slate-700">40+ WPM Typing Speed & MS Office Mastery</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-slate-50 rounded text-[#133a41] h-fit"><Coins size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Remuneration</p>
                    <p className="text-sm font-semibold text-slate-700">Rs. 40,000 — Rs. 50,000 (Gross/Monthly)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-slate-50 rounded text-[#133a41] h-fit"><Clock size={20} /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Engagement Period</p>
                    <p className="text-sm font-semibold text-red-700">Minimum 18 Months Commitment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  *Selected candidates will undergo a rigorous clinical terminology assessment before final onboarding.
                </p>
              </div>
            </div>

            {/* Application Tips */}
            <div className="bg-[#133a41] p-6 text-white rounded-sm">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <GraduationCap size={18} />
                Application Tip
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">
                Ensure your CV highlights experience with medical software or data entry. Attachment of a certified Typing Test result is mandatory.
              </p>
              <a href="https://www.typing.com/student/tests" target="_blank" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors">
                TAKE TYPING TEST NOW <ArrowRight size={14} />
              </a>
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

            <form className="bg-white p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">Application Submission</h3>

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
                    placeholder="e.g. Dr. Sameer Thapa"
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
                  placeholder="Tell us about your background in medical services..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 focus:border-[#133a41] outline-none transition-all rounded-sm text-sm resize-none"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#133a41] text-white font-bold py-4 rounded-sm shadow-lg transition-all flex items-center justify-center gap-3 tracking-widest text-xs
    ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#1b4d56]"}`}
              >
                {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                <CheckCircle2 size={16} />
              </button>

            </form>
          </div>
        </div>
      </div>

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
                Your credentials have been successfully transmitted to our HR department. Please monitor your email for next steps.
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
    </section>
  );
}
