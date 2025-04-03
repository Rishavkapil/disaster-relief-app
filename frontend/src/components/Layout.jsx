import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Disaster Relief</Link>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                ...(isLoggedIn ? [
                  { name: "Dashboard", path: "/dashboard" },
                  { name: "Shelter", path: "/shelter" },
                  { name: "Victims", path: "/VictimsPage" },  // ✅ Added Victims Page
                ] : [])
              ].map(({ name, path }) => (
                <li key={path} className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === path ? "active-page" : ""}`}
                    to={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center">
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-outline-primary me-2 animated-btn" to="/login">Login</Link>
                <Link className="btn btn-primary animated-btn" to="/signup">Sign Up</Link>
              </>
            ) : (
              <button className="btn btn-danger animated-btn" onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">{children}</div>
    </div>
  );
};

export default Layout;
