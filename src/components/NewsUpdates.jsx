import React from "react";

function NewsUpdates() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Latest News & Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Item 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transition transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              New Partnership with Global Hospitals
            </h3>
            <p className="text-gray-600">
              We have partnered with top hospitals to expand our services
              internationally.
            </p>
          </div>

          {/* News Item 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transition transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Enhancing Security & Compliance
            </h3>
            <p className="text-gray-600">
              Strengthening our commitment to HIPAA and GDPR compliance with
              advanced security measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsUpdates;
