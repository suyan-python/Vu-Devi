// src/pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, User, ShieldCheck, Fingerprint, Activity } from "lucide-react";

export default function AdminLogin()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) =>
    {
        e.preventDefault();
        setError("");
        setLoading(true);

        try
        {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (data.success)
            {
                localStorage.setItem("adminToken", data.token);
                navigate("/admin");
            } else
            {
                setError(data.message);
            }
        } catch (err)
        {
            setError("Login failed, try again.");
        } finally
        {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f8fafc] relative overflow-hidden">

            {/* 1. SECURITY BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Grid Pattern - Suggests structure/security */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
                {/* Blurred Trust Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#133a41]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-50/30 rounded-full blur-[120px]" />
            </div>

            {/* 2. LOGIN CONTAINER */}
            <motion.div
                className="w-full max-w-md z-10 px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="bg-white rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-slate-200 overflow-hidden">

                    {/* Header Area */}
                    <div className="bg-slate-900 p-8 text-center relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4 backdrop-blur-md">
                            <ShieldCheck className="text-white" size={28} />
                        </div>
                        <h1 className="text-white text-xl font-bold tracking-[0.2em] uppercase">
                            Administrative <span className="text-blue-500">Portal</span>
                        </h1>
                        <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-2">
                            Unauthorized Access is Strictly Prohibited
                        </p>
                    </div>

                    {/* Form Area */}
                    <form onSubmit={handleLogin} className="p-8 md:p-10 space-y-6">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-50 border-l-4 border-red-600 p-4 flex items-center gap-3"
                            >
                                <Activity size={16} className="text-red-600" />
                                <p className="text-red-700 text-xs font-bold uppercase">{error}</p>
                            </motion.div>
                        )}

                        <div className="space-y-4">
                            {/* Email Input */}
                            <div className="group">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                                    Identity Identifier
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#133a41] transition-colors" size={18} />
                                    <input
                                        type="text"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Admin ID"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#133a41] focus:bg-white outline-none transition-all text-sm rounded-sm"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="group">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                                    Encrypted Access Key
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#133a41] transition-colors" size={18} />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#133a41] focus:bg-white outline-none transition-all text-sm rounded-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full group bg-slate-900 text-white font-bold py-4 rounded-sm shadow-lg hover:bg-black transition-all flex items-center justify-center gap-3 tracking-[0.2em] text-xs"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <Fingerprint className="animate-pulse" size={18} /> VERIFYING...
                                </span>
                            ) : (
                                <>AUTHENTICATE <Lock size={14} /></>
                            )}
                        </button>
                    </form>

                    {/* Institutional Footer */}
                    <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <ShieldCheck className="text-blue-500" size={14} />
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.1em]">
                                Secure by Vu Devi Services
                            </span>
                        </div>
                        <p className="text-[9px] text-slate-400 font-medium">
                            Enterprise Grade Encryption • SSL Secured Endpoint
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
