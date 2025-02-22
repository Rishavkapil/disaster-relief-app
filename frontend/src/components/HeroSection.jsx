import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center text-light"
      style={{
        height: "90vh",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?rescue,help')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="fw-bold display-4">Be the Hope in Disaster</h1>
      <p className="fs-5">Join us in providing relief and support to those in need.</p>
      <Button variant="danger" className="mt-3 px-4 py-2" onClick={() => navigate("/volunteer")}>
        Get Involved
      </Button>
    </div>
  );
};

export default HeroSection;
    