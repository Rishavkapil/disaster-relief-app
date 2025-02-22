import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Urgent Requests</Card.Title>
              <Card.Text>View and manage emergency help requests.</Card.Text>
              <Button variant="primary">View Requests</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Volunteer Coordination</Card.Title>
              <Card.Text>Assign volunteers for on-ground support.</Card.Text>
              <Button variant="success">Manage Volunteers</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3 shadow">
            <Card.Body>
              <Card.Title>Resources & Shelters</Card.Title>
              <Card.Text>Track available resources and shelter status.</Card.Text>
              <Button variant="warning">Check Shelters</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
