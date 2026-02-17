import React from 'react'
import { JOB_DATA } from "../db/jobs";
import { ArrowUpRight, ArrowUpRightIcon, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobOpenings = () =>
{
    return (
        <div className="max-w-7xl mx-auto px-6 mb-24">
            <div className="flex items-end justify-between mb-12 border-b-2 border-slate-900 pb-4">
                <h2 className="text-xl md:text-3xl font-medium uppercase  text-slate-900">
                    Open <span className="text-red-700">Positions</span>
                </h2>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                    Total: {JOB_DATA.length}
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                {JOB_DATA.map((job) => (
                    <div
                        key={job.id}
                        className="group relative flex flex-col md:flex-row md:items-center justify-between 
                         p-4 md:p-10 bg-white border border-slate-200 hover:border-[#133a41] 
                         transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
                    >
                        {/* Engineering Detail: Sidebar indicator */}
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-red-700 transition-colors"></div>

                        <div className="relative z-10 flex-1">
                            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                                <span className="px-3 py-1 bg-slate-900 text-white text-[6px] md:text-[9px] font-medium uppercase tracking-widest rounded-sm">
                                    {job.tag}
                                </span>
                                <span className="text-slate-400 font-mono text-[8px] md:text-[10px] font-medium tracking-tighter">
                                    REF_ID: {job.id.slice(0, 12).toUpperCase()}
                                </span>
                                <span className="flex items-center gap-1.5 text-red-700 text-[7px] md:text-[10px] font-medium uppercase tracking-widest">
                                    <Globe size={12} />
                                    {job.location}
                                </span>
                            </div>

                            <h3 className="text-lg md:text-3xl font-medium text-slate-900 tracking-tighter group-hover:text-[#133a41] transition-colors leading-[1]">
                                {job.title}
                            </h3>

                            <div className="mt-7 md:flex items-center md:gap-6 gap-2">
                                <div>
                                    <p className="text-[6px] md:text-[9px] font-medium text-slate-400 uppercase tracking-widest mb-1">Compensation Package</p>
                                    <p className="text-[8px] md:text-sm font-bold text-slate-700">{job.salary}</p>
                                </div>
                                <div className="w-[1px] h-5 bg-slate-700 "></div>
                                <div>
                                    <p className="text-[6px] md:text-[9px] font-medium text-slate-400 uppercase tracking-widest mb-1">Onboarding</p>
                                    <p className="text-[8px] md:text-sm font-bold text-slate-700">{job.hiring}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8 md:mt-0 md:ml-12">
                            <Link
                                to={`/application/apply/${job.id}`}
                                className="inline-flex items-center justify-center gap-3 md:px-10 py-2 md:py-5 px-4 
                           bg-slate-900 text-white text-[11px] font-medium uppercase tracking-[0.2em]
                           hover:bg-red-700 transition-all duration-500 w-full md:w-auto rounded-md"
                            >
                                Apply
                                <ArrowUpRightIcon size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobOpenings