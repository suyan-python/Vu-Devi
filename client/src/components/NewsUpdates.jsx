import React, { useState, useEffect, useRef } from "react";
import Chart from "./Chart";

function NewsUpdates()
{
  const [expanded, setExpanded] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggleExpand = (index) =>
  {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() =>
  {
    const observer = new IntersectionObserver(
      ([entry]) =>
      {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current)
    {
      observer.observe(sectionRef.current);
    }

    return () =>
    {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 sm:px-12 md:px-16 transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } bg-gray-100/50`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold  text-center mb-16 tracking-wide">
          Latest News & Updates
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto">
          {[1, 2, 3].map((idx) =>
          {
            const newsData = [
              {
                title: "New Partnership with Global Hospitals",
                summary:
                  "We have partnered with top hospitals to expand our services internationally.",
                details:
                  "Our latest collaboration enables us to bring cutting-edge medical documentation solutions to a wider audience, ensuring seamless healthcare processes.",
              },
              {
                title: "New Jobs Openings",
                summary:
                  "Strengthening our commitment to HIPAA and GDPR compliance with advanced security measures.",
                details:
                  "Our new security infrastructure includes end-to-end encryption, multi-layer authentication, and AI-driven fraud detection.",
              },
              {
                title: "Enhancing Security & Compliance",
                summary:
                  "Strengthening our commitment to HIPAA and GDPR compliance with advanced security measures.",
                details:
                  "Our new security infrastructure includes end-to-end encryption, multi-layer authentication, and AI-driven fraud detection.",
              },
            ];

            const news = newsData[idx - 1];

            return (
              <div
                key={idx}
                className=" p-8 rounded-2xl shadow-lg border-t-4 border-red-600 transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300 cursor-pointer"
                onClick={() => toggleExpand(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                {
                  if (e.key === "Enter" || e.key === " ")
                  {
                    e.preventDefault();
                    toggleExpand(idx);
                  }
                }}
                aria-expanded={expanded === idx}
                aria-controls={`news-details-${idx}`}
              >
                <h3 className="text-2xl font-semibold text-[#133a41] mb-3">{news.title}</h3>
                <p className="text-gray-700">{news.summary}</p>

                {expanded === idx && (
                  <p
                    id={`news-details-${idx}`}
                    className="mt-4 text-gray-600 leading-relaxed"
                  >
                    {news.details}
                  </p>
                )}

                <button
                  className="mt-6 text-red-600 font-semibold focus:outline-none hover:underline"
                  onClick={(e) =>
                  {
                    e.stopPropagation();
                    toggleExpand(idx);
                  }}
                  aria-expanded={expanded === idx}
                  aria-controls={`news-details-${idx}`}
                >
                  {expanded === idx ? "Read Less ▲" : "Read More ▼"}
                </button>
              </div>
            );
          })}
        </div>


        {/* Insights Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-24 bg-gray-50 p-12 rounded-2xl shadow-md max-w-7xl mx-auto border border-gray-300">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl sm:text-4xl md:text-4xl  font-semibold mb-4 tracking-wide text-gray-800">
              Our Team per Year
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              We’re excited to share the growth and success over the years through data-driven insights.
            </p>
            <button className="bg-[#133a41] text-white font-medium px-6 py-2 rounded-lg shadow-sm hover:bg-gray-800 transition-colors duration-300">
              View More Insights
            </button>
          </div>

          <div className="flex-1 max-w-lg mx-auto">
            <Chart />
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewsUpdates;
