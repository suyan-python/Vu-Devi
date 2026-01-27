// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import
{
    Search, LogOut, FileUser, ExternalLink,
    Mail, Calendar, Users, Clock, Filter, X,
    FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Download, Eye, Trash2 } from "lucide-react";
import { FileSpreadsheet, ShieldAlert, ChevronRight } from "lucide-react";


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

    const handleDelete = async (id) =>
    {
        if (!window.confirm("Are you sure you want to delete this application?")) return;

        try
        {
            const res = await fetch(
                `${API_URL}/api/admin/applications/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!res.ok) throw new Error("Delete failed");

            setApplications((prev) => prev.filter((app) => app._id !== id));
        } catch (err)
        {
            alert("Failed to delete application", err);
        }
    };

    const viewResume = (resumeUrl) =>
    {
        if (!resumeUrl)
        {
            alert("No resume uploaded for this applicant.");
            return;
        }
        window.open(resumeUrl, "_blank");
    };


    const exportToExcel = () =>
    {
        const exportData = applications.map((app, index) => ({
            SN: index + 1,
            Name: app.name,
            Email: app.email,
            "Applied Date": new Date(app.appliedAt).toLocaleString(),
            "Resume URL": app.resumeUrl || "",
            "Cover Letter": app.coverLetter || "",
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Job Applications");

        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        const blob = new Blob([excelBuffer], {
            type: "application/octet-stream",
        });

        saveAs(blob, "job_applications.xlsx");
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
            <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
                {/* Top Thin Security Bar (Adds authenticity) */}
                <div className="h-1 w-full bg-gradient-to-r from-[#133a41] via-red-700 to-[#133a41]"></div>

                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* LEFT: System Identity */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white rounded-sm shadow-inner group cursor-default">
                                <ShieldAlert size={20} className="group-hover:text-red-500 transition-colors" />
                            </div>
                            <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-sm font-black text-slate-900 uppercase tracking-tighter">
                                    Vu Devi /<span className="text-slate-400"> Evolve Vue</span>
                                </h1>
                                <ChevronRight size={14} className="text-slate-300" />
                                <span className="text-sm font-bold text-[#133a41] uppercase">Admin Portal</span>
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">
                                Secure Recruitment Node v2.0
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: System Controls */}
                    <div className="flex items-center gap-4 lg:gap-8">

                        {/* Enhanced Search - "The Filter Engine" */}
                        <div className="relative hidden lg:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                type="text"
                                placeholder="Query candidate database..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-72 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-[#133a41] focus:bg-white outline-none rounded-sm text-xs font-medium transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Export Action - Styled as a Professional Utility */}
                            <button
                                onClick={exportToExcel}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 rounded-sm shadow-sm"
                            >
                                <FileSpreadsheet size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Generate Report</span>
                            </button>

                            {/* Logout Action */}
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 border border-red-100 text-red-600 hover:bg-red-50 font-black text-[10px] uppercase tracking-widest transition-all rounded-sm"
                            >
                                <LogOut size={16} /> Exit
                            </button>
                        </div>
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
                            className="bg-white border border-slate-200 hover:border-[#133a41] hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                        >
                            {/* Card Header - Fixed height container to ensure vertical alignment */}
                            <div className="p-6 border-b border-slate-50 relative flex-none h-[180px]">
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-[#133a41] transition-colors"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[#133a41] flex-none">
                                        <FileUser size={24} />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-50 px-2 py-1 flex-none">
                                        {new Date(app.appliedAt).toLocaleDateString()}
                                    </span>
                                </div>

                                {/* Truncated Name: Prevents long names from breaking the grid */}
                                <h2 className="text-xl font-bold text-slate-900 mb-1 truncate" title={app.name}>
                                    {app.name}
                                </h2>

                                {/* Truncated Email: Maintains professional spacing */}
                                <div className="flex items-center gap-2 text-slate-500 hover:text-[#133a41] transition-colors overflow-hidden">
                                    <Mail size={14} className="flex-none" />
                                    <a href={`mailto:${app.email}`} className="text-sm font-medium truncate" title={app.email}>
                                        {app.email}
                                    </a>
                                </div>
                            </div>

                            {/* Card Actions Container - Pushed to the bottom via flex-grow */}
                            <div className="p-6 bg-white border-t border-slate-100 flex-grow flex flex-col">
                                <div className="flex flex-col gap-5 h-full">

                                    {/* 1. PRIMARY EVALUATION ACTION */}
                                    <button
                                        onClick={() => setSelectedApp(app)}
                                        className="w-full flex items-center justify-center gap-2 py-3.5  text-[#133a41] border-x-2 border-[#133a41] text-[10px] font-black uppercase tracking-[0.2em] rounded-sm shadow-lg shadow-[#133a41]/10 group cursor-pointer flex-none"
                                    >
                                        <Eye size={14} className="group-hover:scale-110 transition-transform" />
                                        Review Application Letter
                                    </button>

                                    {/* 2. DOCUMENT & DESTRUCTION ROW */}
                                    <div className="flex items-center gap-3 flex-none">
                                        <a
                                            href={app.resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 rounded-sm hover:bg-slate-200 transition-colors"
                                        >
                                            <FileText size={14} className="text-red-700" />
                                            <span className="text-[10px] font-semibold uppercase tracking-tight">RESUME.PDF</span>
                                            <Download size={12} className="text-slate-400" />
                                        </a>

                                        <button
                                            onClick={() => handleDelete(app._id)}
                                            className="ml-auto p-2.5 text-slate-300 hover:text-red-700 hover:bg-red-50 transition-all duration-300 rounded-sm"
                                            title="Permanently remove application from node"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    {/* 3. METADATA FOOTER - Pushed to the absolute bottom of the card */}
                                    <div className="pt-4 border-t border-slate-50 space-y-2 mt-auto">
                                        <div className="flex justify-between items-center gap-4">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex-none">Applied Position</span>
                                            <span className="text-[11px] font-bold text-[#133a41] truncate text-right">{app.jobTitle}</span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Job Type</span>
                                            <div className="flex items-center gap-1.5 overflow-hidden">
                                                <span className="px-1.5 py-0.5 bg-red-50 text-red-700 text-[9px] rounded-sm uppercase whitespace-nowrap">
                                                    {app.jobTag}
                                                </span>
                                                <span className="px-1.5 py-0.5 bg-green-50 text-green-700 text-[9px] rounded-sm uppercase whitespace-nowrap">
                                                    {app.jobLocation}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Source</span>
                                            <span className="text-[10px] font-semibold text-slate-500 italic underline truncate ml-4" title={app.sourceWebsite}>
                                                {app.sourceWebsite}
                                            </span>
                                        </div>
                                    </div>

                                </div>
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
