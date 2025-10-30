import React from "react";
import khushbu from "../assets/person/khushboo.jpeg";
import anjila from "../assets/person/anjila.jpeg";
import bandana from "../assets/person/bandana.jpeg";

const employees = [
    {
        name: "Dr. Khushbu Gurung",
        designation: "Medical Report Writer",
        team: "Team: Nikita",
        image: khushbu,
    },
    {
        name: "Pt. Anjila Ghimire",
        designation: "Pt. Report Writer",
        team: "Team: Rajiya",
        image: anjila,
    },
    {
        name: "Ms. Bandana Manandhar",
        designation: "LSU",
        team: "Team: Bandana",
        image: bandana,
    },
];

const EmployeeOfTheMonth = () =>
{
    return (
        <section className="bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] min-h-screen flex items-center px-6 py-16 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-row-5 gap-12 items-center w-full relative z-10">
                {/* Left Side */}
                <div className="md:col-span-2 space-y-8 text-center">
                    {/* Heading */}
                    <div>
                        <h2 className="header text-5xl font-semibold text-white mb-3 leading-snug">
                            Employees of the Month -{" "}
                            <span className="text-red-700 drop-shadow-md">September</span>
                        </h2>
                        <div className="w-full h-0.5 bg-red-700 rounded-full shadow-lg"></div>
                    </div>

                    {/* Description */}
                    <p className="subheader text-gray-300 text-lg leading-relaxed">
                        Every month, we recognize outstanding employees who go above and
                        beyond. Their dedication and excellence drive our mission forward
                        and inspire the whole team.
                    </p>

                    {/* Stats / Highlight cards */}
                    {/* <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center shadow-md">
                            <p className="text-3xl font-bold text-red-600">3</p>
                            <p className="text-sm text-gray-300">Employees Awarded</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center shadow-md">
                            <p className="text-3xl font-bold text-red-600">July</p>
                            <p className="text-sm text-gray-300">Recognition Month</p>
                        </div>
                    </div> */}

                    {/* Badge / Appreciation */}
                    {/* <div className="inline-block px-5 py-2  text-white font-semibold rounded-full shadow-md tracking-wide text-sm">
                        Celebrating Excellence
                    </div> */}
                </div>

                {/* Right Side - Employees */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
                    {employees.map((emp, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition duration-300 "
                        >
                            {/* Image wrapper */}
                            <div className="h-[50vh] w-full overflow-hidden">
                                <img
                                    src={emp.image}
                                    alt={emp.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 to-black/40 text-white">
                                <div>
                                    <h3 className="header text-lg font-semibold">{emp.name}</h3>
                                    <p className="text-sm text-gray-300 font-medium">
                                        {emp.designation}
                                    </p>
                                    <p className="text-xs text-gray-300 font-bold italic">{emp.team}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background glow elements */}
            <div className="absolute top-20 left-10 w-64 h-40 bg-red-700/40 rounded-full blur-[80px] "></div>
            <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-600/30 rounded-full blur-3xl"></div>
        </section>
    );
};

export default EmployeeOfTheMonth;
