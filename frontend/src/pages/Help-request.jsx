import React, { useState, useEffect } from "react";
import { Container, Table, Spinner, Alert } from "react-bootstrap";

const HelpRequests = () => {
  const [helpRequests, setHelpRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = import.meta.env.REACT_APP_BACKEND_URL ;

  useEffect(() => {
    const fetchHelpRequests = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/help-requests`);
        if (!response.ok) {
          throw new Error("Failed to fetch help requests");
        }
        const data = await response.json();
        setHelpRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHelpRequests();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Help Requests</h2>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : helpRequests.length === 0 ? (
        <Alert variant="info">No help requests available.</Alert>
      ) : (
        <Table striped bordered hover>
          <thead className="bg-dark text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Location</th>
              <th>Description</th>
              <th>Urgency</th>
            </tr>
          </thead>
          <tbody>
            {helpRequests.map((request, index) => (
              <tr key={request._id}>
                <td>{index + 1}</td>
                <td>{request.name}</td>
                <td>{request.location}</td>
                <td>{request.description}</td>
                <td>
                  <span
                    className={`badge ${
                      request.urgency === "high"
                        ? "bg-danger"
                        : request.urgency === "medium"
                        ? "bg-warning"
                        : "bg-success"
                    }`}
                  >
                    {request.urgency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default HelpRequests;
