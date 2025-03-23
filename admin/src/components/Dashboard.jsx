import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:5000/admin/applications",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setApplications(res.data);
      } catch (err) {
        console.error("Error fetching applications", err);
      }
    };

    fetchApplications();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h2>Job Applications</h2>
      <button onClick={handleLogout}>Logout</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Cover Letter</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.coverLetter}</td>
              <td>
                <a
                  href={`http://localhost:5000/${app.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume (PDF)
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
