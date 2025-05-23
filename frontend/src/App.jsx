import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Shelter from "./pages/Shelter";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
// import Victims from "./components/Victims";
import VictimsPage from "./pages/VictimPage";
import HelpRequests from "./pages/Help-request";
const backendUrl = import.meta.env.REACT_APP_BACKEND_URL;
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shelter" element={<Shelter />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/victims" element={<Victims />} /> */}
          <Route path="/VictimsPage" element={<VictimsPage />} />
          <Route path="/help-requests" element={<HelpRequests />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
