import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [auth, setAuth] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            auth ? <Navigate to="/dashboard" /> : <Login setAuth={setAuth} />
          }
        />
        <Route
          path="/dashboard"
          element={auth ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
