import React, { useState } from "react";
import Chart from "./Chart";

function NewsUpdates() {
  // State to manage expanded news items
  const [expanded, setExpanded] = useState(null);

  // Function to toggle visibility
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-green-500 text-center mb-12">
          Latest News & Updates
        </h2>

        <div>
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-7">
            {/* News Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 transition hover:shadow-lg duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                New Partnership with Global Hospitals
              </h3>
              <p className="text-gray-600">
                We have partnered with top hospitals to expand our services
                internationally.
              </p>

              {/* Hidden Content */}
              {expanded === 1 && (
                <div className="mt-3 text-gray-600">
                  <p>
                    Our latest collaboration enables us to bring cutting-edge
                    medical documentation solutions to a wider audience,
                    ensuring seamless healthcare processes.
                  </p>
                </div>
              )}

              {/* Read More Button */}
              <button
                className="mt-4 text-green-500 font-medium focus:outline-none"
                onClick={() => toggleExpand(1)}
              >
                {expanded === 1 ? "Read Less ▲" : "Read More ▼"}
              </button>
            </div>

            {/* News Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 transition hover:shadow-lg duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                New jobs openings
              </h3>
              <p className="text-gray-600">
                Strengthening our commitment to HIPAA and GDPR compliance with
                advanced security measures.
              </p>

              {/* Hidden Content */}
              {expanded === 2 && (
                <div className="mt-3 text-gray-600">
                  <p>
                    Our new security infrastructure includes end-to-end
                    encryption, multi-layer authentication, and AI-driven fraud
                    detection.
                  </p>
                </div>
              )}

              {/* Read More Button */}
              <button
                className="mt-4 text-green-500 font-medium focus:outline-none"
                onClick={() => toggleExpand(2)}
              >
                {expanded === 2 ? "Read Less ▲" : "Read More ▼"}
              </button>
            </div>
            {/* News Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 transition hover:shadow-lg duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                🔐 Enhancing Security & Compliance
              </h3>
              <p className="text-gray-600">
                Strengthening our commitment to HIPAA and GDPR compliance with
                advanced security measures.
              </p>

              {/* Hidden Content */}
              {expanded === 2 && (
                <div className="mt-3 text-gray-600">
                  <p>
                    Our new security infrastructure includes end-to-end
                    encryption, multi-layer authentication, and AI-driven fraud
                    detection.
                  </p>
                </div>
              )}

              {/* Read More Button */}
              <button
                className="mt-4 text-green-500 font-medium focus:outline-none"
                onClick={() => toggleExpand(2)}
              >
                {expanded === 2 ? "Read Less ▲" : "Read More ▼"}
              </button>
            </div>
            {/* News Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 transition hover:shadow-lg duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                🔐 Enhancing Security & Compliance
              </h3>
              <p className="text-gray-600">
                Strengthening our commitment to HIPAA and GDPR compliance with
                advanced security measures.
              </p>

              {/* Hidden Content */}
              {expanded === 2 && (
                <div className="mt-3 text-gray-600">
                  <p>
                    Our new security infrastructure includes end-to-end
                    encryption, multi-layer authentication, and AI-driven fraud
                    detection.
                  </p>
                </div>
              )}

              {/* Read More Button */}
              <button
                className="mt-4 text-green-500 font-medium focus:outline-none"
                onClick={() => toggleExpand(2)}
              >
                {expanded === 2 ? "Read Less ▲" : "Read More ▼"}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-16 px-6">
            {/* Heading */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-500 mb-4">
                Our Clients per Year
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We’re excited to share the growth and success of our new
                customer base.
              </p>
              <button className="bg-green-500 px-6 py-3 rounded-full text-white font-medium hover:bg-green-700 transition duration-300">
                View More Insights
              </button>
            </div>

            {/* Chart */}
            <div className="flex-1 flex justify-center items-center">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsUpdates;
