import React, { useState } from "react";
import { User, Mail, FileText, Upload, ShieldCheck, Briefcase } from "lucide-react";

export default function GeneralForm()
{
    const API_URL = import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        coverLetter: "",
        resume: null,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) =>
    {
        const { name, value, files } = e.target;
        if (name === "resume")
        {
            setFormData({ ...formData, resume: files[0] });
        } else
        {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try
        {
            const emailCheckResponse = await fetch(
                `${API_URL}/api/applications/check-email?email=${formData.email}`
            );
            const emailCheckData = await emailCheckResponse.json();

            if (emailCheckData.exists)
            {
                setErrorMessage("⚠️ We Already have your Information.");
                setLoading(false);
                return;
            }

            const sendData = new FormData();
            sendData.append("name", formData.name);
            sendData.append("email", formData.email);
            sendData.append("coverLetter", formData.coverLetter);
            sendData.append("resume", formData.resume);

            // 🔵 Force as general enquiry
            sendData.append("jobTitle", "General Enquiry");
            sendData.append("jobTag", "N/A");
            sendData.append("jobLocation", "N/A");
            sendData.append("sourceWebsite", window.location.hostname);

            //   await axios.post(API_URL, sendData);

            /* ---------------- SUBMIT APPLICATION ---------------- */
            const response = await fetch(`${API_URL}/api/applications/apply`, {
                method: "POST",
                body: sendData, // DO NOT set headers manually
            });

            const data = await response.json();

            if (!response.ok)
            {
                throw new Error(data.error || "Submission failed");
            }
            setMessage("Your enquiry has been submitted successfully!");
            setFormData({ name: "", email: "", coverLetter: "", resume: null });
        } catch (err)
        {
            setMessage("Submission failed. Try again.", err);
        } finally
        {
            setLoading(false);
        }
    };

    return (
        <section className="w-full py-24 bg-[#f8fafc] border-t-2 border-black">
            <div className="max-w-5xl mx-auto px-6">

                <div className="bg-white border border-slate-200 rounded-xl p-10 md:p-16 shadow-sm">

                    {/* HEADER */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-[#133a41]/5 rounded-full">
                            <Briefcase size={18} className="text-red-500" />
                            <span className="text-[10px] tracking-[0.3em] uppercase text-[#133a41]/70 font-bold">
                                Talent Acquisition Portal
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-semibold text-[#133a41] tracking-tight">
                            General Talent <span className="text-red-500">Inquiry</span>
                        </h2>

                        <p className="text-slate-500 text-xs md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                            Submit your credentials to our centralized recruitment system. Profiles are reviewed for healthcare documentation, medical data processing, and clinical support roles.
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="fieldLabel">
                                    <User size={12} className="text-red-500" /> Full Legal Name
                                </label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" className="fieldInput" />
                            </div>

                            <div className="space-y-2">
                                <label className="fieldLabel">
                                    <Mail size={12} className="text-red-500" /> Professional Email
                                </label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="name@example.com" className="fieldInput" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="fieldLabel">
                                <FileText size={12} className="text-red-500" /> Professional Summary
                            </label>
                            <textarea name="coverLetter" rows="4" value={formData.coverLetter} onChange={handleChange} placeholder="Describe your experience in healthcare, medical documentation, or data services..." className="fieldInput resize-none" />
                        </div>

                        {/* CV Upload */}
                        <div className="space-y-2">
                            <label className="fieldLabel">
                                <Upload size={12} className="text-red-500" /> Curriculum Vitae (PDF)
                            </label>

                            <div className="relative group">
                                <input type="file" name="resume" accept=".pdf" onChange={handleChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                                <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center group-hover:border-red-400 group-hover:bg-red-50 transition-all">
                                    <Upload size={24} className="mx-auto text-slate-400 group-hover:text-red-500 mb-3" />
                                    <p className="text-xs font-semibold text-slate-600">
                                        {formData.resume ? formData.resume.name : "Click or Drag & Drop CV"}
                                    </p>
                                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                                        PDF Only • Max 5MB
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TRUST + ACTION */}
                        <div className="pt-8 border-t border-slate-200 flex flex-col items-center gap-6">

                            <div className="flex items-center gap-2 text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                                <ShieldCheck size={14} className="text-[#133a41]" />
                                Secure Submission • Data Protected • HIPAA-aligned
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="md:px-16 md:py-4 py-2 px-3 bg-red-700 text-white rounded-xl font-black uppercase tracking-[0.25em] text-xs hover:bg-red-800 transition-all active:scale-95 shadow-sm"
                            >
                                {loading ? "Submitting..." : "Submit Credentials"}
                            </button>

                            {message && (
                                <p className={`text-xs font-bold ${message.includes('success') ? 'text-[#133a41]' : 'text-red-500'}`}>
                                    {message}
                                </p>
                            )}
                        </div>

                    </form>
                </div>
            </div>
        </section>


    );
}
