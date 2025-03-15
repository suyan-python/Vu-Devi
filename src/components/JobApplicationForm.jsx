import { useState } from "react";

export default function JobApplicationForm({ jobId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200 my-14"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Apply for Position #{jobId}
      </h2>

      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">
          Resume (PDF)
        </label>
        <input
          type="file"
          accept=".pdf"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
          onChange={(e) =>
            setFormData({ ...formData, resume: e.target.files[0] })
          }
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Cover Letter
        </label>
        <textarea
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          onChange={(e) =>
            setFormData({ ...formData, coverLetter: e.target.value })
          }
        ></textarea>
      </div>

      <div className="text-center my-3">
        <div>
          <a
            href="https://www.typing.com/student/tests"
            className="text-blue-500 font-medium"
          >
            https://www.typing.com/student/tests
          </a>
        </div>
        <div className="text-red-400 text-xs font-bold">
          *Please take a typing test before submitting your application* <br />
          *Attach the typing result with your application*
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
      >
        Submit Application
      </button>
    </form>
  );
}
