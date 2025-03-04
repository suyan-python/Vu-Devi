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
    // Add your submission logic here
    console.log("Application submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 shadow-lg rounded-lg text-white"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Apply for Position #{jobId}
      </h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          required
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Resume (PDF)</label>
        <input
          type="file"
          accept=".pdf"
          required
          className="w-full p-2 border rounded"
          onChange={(e) =>
            setFormData({ ...formData, resume: e.target.files[0] })
          }
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Cover Letter</label>
        <textarea
          rows="4"
          className="w-full p-2 border rounded"
          onChange={(e) =>
            setFormData({ ...formData, coverLetter: e.target.value })
          }
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition-all"
      >
        Submit Application
      </button>
    </form>
  );
}
