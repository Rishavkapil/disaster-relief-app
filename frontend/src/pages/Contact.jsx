import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5">
      <Card className="p-4 shadow w-50 mx-auto">
        <h2 className="text-center mb-3">Contact Us</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" className="w-100">Submit</Button>
        </Form>
      </Card>
      <div className="container mt-5">

      <p>Email: support@disasterrelief.com</p>
      <p>Phone: +1 234 567 890</p>
    </div>
    </Container>
    
  );
};

export default Contact;
