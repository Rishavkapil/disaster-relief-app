import { Card, Container, Row, Col } from "react-bootstrap";

const Features = () => {
  const features = [
    { title: "Live Help Requests", text: "Get real-time SOS alerts." },
    { title: "Volunteer Support", text: "Coordinate rescue teams easily." },
    { title: "Shelter Locator", text: "Find the nearest safe locations." },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {features.map((feature, idx) => (
          <Col md={4} key={idx} className="d-flex justify-content-center">
            <Card className="shadow-lg border-0 rounded-3 p-3" style={{ width: "100%", maxWidth: "300px" }}>
              <Card.Body>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
