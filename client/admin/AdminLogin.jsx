// src/pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden"
            >
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30 -z-10 rounded-t-3xl"></div>

                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Admin Login
                </h1>

                {error && (
                    <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
                )}

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Email / ID"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm transition-all"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm transition-all"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 text-white font-semibold rounded-xl transition-all shadow-lg flex items-center justify-center ${loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
                        }`}
                >
                    {loading ? (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Logging in...
                        </>
                    ) : (
                        "Login"
                    )}
                </button>

                <p className="text-center text-gray-400 text-sm mt-6">
                    Secure admin access | Powered by{" "}
                    <span className="font-semibold text-gray-700">
                        Vu Devi Services Pvt. Ltd.
                    </span>
                </p>
            </form>
        </div>
    );
}
