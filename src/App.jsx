import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./constant/Navbar";
import JobApplicationForm from "./components/JobApplicationForm";
import ScrollToTop from "./ScrollToTop";

import "./animation.css";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<JobApplicationForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
