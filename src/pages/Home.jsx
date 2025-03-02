export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero relative py-20 px-6 md:px-12 mb-16 rounded-lg  overflow-hidden">
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6 tracking-wide uppercase">
            VU DEVI SERVICES PVT LTD
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Established in 2013, Vu Devi Services is a trusted Business Process
            Outsourcing partner specializing in medical documentation solutions
            for global healthcare providers. With a highly skilled team and
            cutting-edge technology, we ensure precision, compliance, and
            efficiency, enabling healthcare professionals to focus on patient
            care.
          </p>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full text-lg hover:bg-blue-100 transition duration-300 shadow-md">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Medical Documentation
            </h3>
            <p className="text-gray-600">
              Accurate and compliant medical reports tailored to global
              standards.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Data Processing
            </h3>
            <p className="text-gray-600">
              Efficient data handling and analytics for healthcare institutions.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Healthcare Support
            </h3>
            <p className="text-gray-600">
              End-to-end backend support ensuring seamless healthcare
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className=" py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Latest News & Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                New Partnership with Global Hospitals
              </h3>
              <p className="text-gray-600">
                We have partnered with top hospitals to expand our services
                internationally.
              </p>
            </div>

            {/* News Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
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
    </div>
  );
}
