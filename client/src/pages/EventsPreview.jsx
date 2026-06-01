import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { eventGallery } from "../db/events";

export default function EventsPreview()
{
    // show only first 3–4 events
    const previewEvents = eventGallery.slice(0, 3);

    return (
        <section className="py-28 bg-gradient-to-b from-white via-[#f8fafc] to-slate-500/10 relative overflow-hidden">

            {/* Soft background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#133a41]/5 blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-3">
                        Moments • Culture • Milestones
                    </p>

                    <h2 className="ext-4xl md:text-6xl font-semibold text-slate-900 tracking-tighter">
                        Our Events
                    </h2>

                    <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                        A glimpse into our journey — retreats, collaborations, and defining
                        moments that shape our culture and vision.
                    </p>
                </motion.div>

                {/* EVENT GRID */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {previewEvents.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-sm"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700 brightness-[0.9] group-hover:brightness-100"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                            {/* text */}
                            <div className="absolute bottom-5 left-5 text-white">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                                    {event.tag}
                                </p>
                                <h3 className="text-lg font-light">{event.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm text-slate-600 mb-6">
                        Explore the full archive of experiences and institutional milestones.
                    </p>

                    <Link to="/events">
                        <button className="px-10 py-4 bg-[#133a41] text-white rounded-[4px] text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#0f2f35] transition shadow-lg cursor-pointer">
                            View All Events
                        </button>
                    </Link>

                </motion.div>

            </div>
        </section>
    );
}