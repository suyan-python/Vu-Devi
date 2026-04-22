import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "";

export default function AdminTypingResults()
{
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");

    useEffect(() =>
    {
        const fetchResults = async () =>
        {
            try
            {
                const res = await axios.get(`${API}/api/results`);
                setResults(res.data);
            } catch (err)
            {
                console.error("Failed to fetch results", err);
            } finally
            {
                setLoading(false);
            }
        };

        fetchResults();
    }, []);

    useEffect(() =>
    {
        if (!token) navigate("/admin/login");
    }, [token]);

    const handleDelete = async (id) =>
    {
        const confirmDelete = window.confirm("Delete this result?");
        if (!confirmDelete) return;

        try
        {
            await axios.delete(`${API}/api/results/${id}`);

            // remove from UI instantly (no reload)
            setResults((prev) => prev.filter((r) => r._id !== id));
        } catch (err)
        {
            console.error("Delete failed", err);
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#0b0e14] p-6 md:py-36 md:px-24">

            {/* HEADER */}
            <div className="flex justify-between items-baseline">

                <div className="mb-10">
                    <h1 className="text-3xl font-bold">Typing Test Results</h1>
                    <p className="text-gray-500 text-sm mt-2">
                        Candidate performance overview
                    </p>
                </div>
                <div>
                    <Link to="/admin" className="text-[#0b0e14] hover:text-[#0b0e14]/80 text-[16px] hover:underline">

                        back to dashboard
                    </Link>
                </div>
            </div>

            {/* LOADING */}
            {loading ? (
                <p className="text-gray-400">Loading results...</p>
            ) : (

                <div className="overflow-x-auto border border-white/10 rounded-2xl">
                    <table className="w-full text-sm">

                        {/* TABLE HEAD */}
                        <thead className="bg-[#12171f] text-gray-400 uppercase text-[10px] tracking-widest">
                            <tr>
                                <th className="p-4 text-left">Candidate</th>
                                <th className="p-4 text-left">WPM</th>
                                <th className="p-4 text-left">Accuracy</th>
                                <th className="p-4 text-left">Words</th>
                                <th className="p-4 text-left">Errors</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Action</th>
                            </tr>
                        </thead>

                        {/* TABLE BODY */}
                        <tbody>
                            {results.map((r, i) => (
                                <tr
                                    key={i}
                                    className="border-t border-white/5 hover:bg-white/5 transition"
                                >
                                    {/* NAME */}
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="font-semibold">{r.name}</span>
                                            <span className="text-gray-500 text-xs">{r.email}</span>
                                        </div>
                                    </td>

                                    {/* WPM */}
                                    <td className="p-4 font-bold text-yellow-500">
                                        {r.wpm}
                                    </td>

                                    {/* ACCURACY */}
                                    <td className="p-4">{r.accuracy}%</td>

                                    {/* WORDS */}
                                    <td className="p-4">{r.wordsTyped}</td>

                                    {/* ERRORS */}
                                    <td className="p-4 text-red-400">{r.errors}</td>

                                    {/* STATUS */}
                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-bold ${r.passed
                                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                : "bg-red-500/10 text-red-400 border border-red-500/20"
                                                }`}
                                        >
                                            {r.passed ? "Passed" : "Failed"}
                                        </span>
                                    </td>


                                    <td className="p-4 ">
                                        <button
                                            onClick={() => handleDelete(r._id)}
                                            className="text-red-400 text-xs font-bold uppercase tracking-widest 
                       border border-red-500/20 px-4 py-2 rounded-lg 
                       hover:bg-red-500/10 hover:border-red-500/40 
                       transition-all cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            )}
        </div>
    );
}