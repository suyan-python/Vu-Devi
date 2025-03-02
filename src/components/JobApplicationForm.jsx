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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">Apply for Position #{jobId}</h2>

      <div>
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          required
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
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

      <div>
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
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
}
