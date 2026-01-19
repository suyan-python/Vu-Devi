// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import
{
    Search, LogOut, FileUser, ExternalLink,
    Mail, Calendar, Users, Clock, Filter, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard()
{
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedApp, setSelectedApp] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");


    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    useEffect(() =>
    {
        const fetchApps = async () =>
        {
            if (!token) return;

            try
            {
                const res = await fetch(`${API_URL}/api/admin/applications`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setApplications(data);
            } catch (err)
            {
                console.error("Error fetching applications:", err);
            } finally
            {
                setLoading(false);
            }
        };

        fetchApps();
    }, [token]);

    const filteredApplications = applications.filter((app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() =>
    {
        if (!token) navigate("/admin/login");
    }, [token]);

    const handleLogout = () =>
    {
        localStorage.removeItem("adminToken"); // Remove token
        navigate("/admin/login");              // Redirect to login
    };


    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-500 text-lg animate-pulse">
                    Loading applications...
                </p>
            </div>
        );

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20 ">

            {/* 1. TOP NAVIGATION BAR */}
            <nav className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#133a41] rounded-sm flex items-center justify-center text-white font-bold">V</div>
                        <div>
                            <h1 className="text-lg font-bold text-slate-900 leading-none">Admin Dashboard</h1>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Recruitment Portal</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search candidates..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-80 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-[#133a41] outline-none rounded-sm text-sm transition-all"
                            />
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-700 hover:bg-red-50 font-bold text-xs uppercase tracking-widest transition-all rounded-sm"
                        >
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 mt-10">

                {/* 2. ANALYTICS SUMMARY BAR */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 border-l-4 border-[#133a41] shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Applications</p>
                                <h3 className="text-3xl font-bold text-slate-900">{filteredApplications.length}</h3>
                            </div>
                            <Users className="text-slate-200" size={40} />
                        </div>
                    </div>
                    <div className="bg-white p-6 border-l-4 border-red-700 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Awaiting Review</p>
                                <h3 className="text-3xl font-bold text-slate-900">Active</h3>
                            </div>
                            <Clock className="text-slate-200" size={40} />
                        </div>
                    </div>
                    <div className="bg-white p-6 border-l-4 border-slate-300 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Date</p>
                                <h3 className="text-xl font-bold text-slate-900">{new Date().toLocaleDateString()}</h3>
                            </div>
                            <Calendar className="text-slate-200" size={40} />
                        </div>
                    </div>
                </div>

                {/* 3. APPLICATIONS GRID (The "Candidate Dossiers") */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredApplications.map((app) => (
                        <motion.div
                            key={app._id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white border border-slate-200 hover:border-[#133a41] hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            {/* Card Header */}
                            <div className="p-6 border-b border-slate-50 relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-[#133a41] transition-colors"></div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#133a41]">
                                        <FileUser size={24} />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-50 px-2 py-1">
                                        {new Date(app.appliedAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-1">{app.name}</h2>
                                <div className="flex items-center gap-2 text-slate-500 hover:text-[#133a41] transition-colors">
                                    <Mail size={14} />
                                    <a href={`mailto:${app.email}`} className="text-sm font-medium">{app.email}</a>
                                </div>
                            </div>

                            {/* Card Actions */}
                            <div className="p-6 bg-slate-50/50 flex flex-col gap-3 mt-auto">
                                <a
                                    href={`${API_URL}/${app.resumePath}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all rounded-sm"
                                >
                                    <ExternalLink size={14} /> Download Resume
                                </a>
                                <button
                                    onClick={() => setSelectedApp(app)}
                                    className="w-full py-3 bg-[#133a41] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#1b4d56] transition-all rounded-sm shadow-sm"
                                >
                                    Read Cover Letter
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 4. MODAL: FULL DOCUMENT VIEW */}
            <AnimatePresence>
                {selectedApp && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-[50] p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white w-full max-w-3xl shadow-2xl relative overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">{selectedApp.name}</h2>
                                    <p className="text-xs font-bold text-red-700 uppercase tracking-widest">Statement of Purpose</p>
                                </div>
                                <button
                                    onClick={() => setSelectedApp(null)}
                                    className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-red-700"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 md:p-12 max-h-[60vh] overflow-y-auto">
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-slate-700 leading-relaxed whitespace-pre-line font-serif text-lg">
                                        {selectedApp.coverLetter || "The candidate did not provide a cover letter for this application."}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-slate-100 flex justify-end gap-4">
                                <button
                                    onClick={() => setSelectedApp(null)}
                                    className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest"
                                >
                                    Close Document
                                </button>
                                <a
                                    href={`mailto:${selectedApp.email}`}
                                    className="px-6 py-2 bg-[#133a41] text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all rounded-sm"
                                >
                                    Reply to Candidate
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
