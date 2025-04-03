import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button, ListGroup, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [urgentRequests, setUrgentRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api";

  useEffect(() => {
    console.log("Fetching urgent requests from:", `${backendUrl}/api/help-requests`);

    const fetchUrgentRequests = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/help-requests`);
        if (!response.ok) {
          throw new Error("Failed to fetch help requests");
        }
        const data = await response.json();

        // Filter only high urgency requests
        const urgent = data.filter((request) => request.urgency === "high");
        setUrgentRequests(urgent);
      } catch (error) {
        console.error("Error fetching urgent requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUrgentRequests();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <Row>
        {/* Urgent Requests Section */}
        <Col md={4}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Urgent Requests</Card.Title>
              <Card.Text>View and manage emergency help requests.</Card.Text>
              
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : urgentRequests.length === 0 ? (
                <p>No urgent requests.</p>
              ) : (
                <ListGroup>
                  {urgentRequests.slice(0, 3).map((request) => (
                    <ListGroup.Item key={request._id}>
                      <strong>{request.name}</strong> - {request.location}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}

              <Button
                variant="primary"
                className="mt-3"
                onClick={() => navigate("/help-requests")}
              >
                View Requests
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Volunteer Coordination */}
        <Col md={4}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Volunteer Coordination</Card.Title>
              <Card.Text>Assign volunteers for on-ground support.</Card.Text>
              <Button variant="success">Manage Volunteers</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Resources & Shelters */}
        <Col md={4}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Resources & Shelters</Card.Title>
              <Card.Text>Track available resources and shelter status.</Card.Text>
              <Button variant="warning"
                onClick={()=>navigate("/shelter")}
              >Check Shelters</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
