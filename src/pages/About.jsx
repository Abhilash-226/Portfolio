import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <h2 className="text-center section-header mb-5">About Me</h2>
            <Row className="g-4">
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary rounded-circle p-2 me-3">
                        <i className="bi bi-person-fill text-white"></i>
                      </div>
                      <h4 className="mb-0">Who I Am</h4>
                    </div>
                    <p className="text-muted">
                      I'm a Computer Science and Engineering student at CBIT,
                      Hyderabad, skilled in Java, Python, MERN stack, and DSA
                      problem-solving. I'm passionate about building scalable
                      applications and exploring the world of AI/ML engineering.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary rounded-circle p-2 me-3">
                        <i className="bi bi-mortarboard-fill text-white"></i>
                      </div>
                      <h4 className="mb-0">Education</h4>
                    </div>
                    <p className="text-muted">
                      Currently pursuing my Bachelor's degree in Computer
                      Science and Engineering at Chaitanya Bharathi Institute of
                      Technology (CBIT), developing strong foundations in
                      programming, data structures, and algorithms.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12}>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary rounded-circle p-2 me-3">
                        <i className="bi bi-rocket-takeoff-fill text-white"></i>
                      </div>
                      <h4 className="mb-0">My Journey</h4>
                    </div>
                    <p className="text-muted mb-4">
                      I'm eager to learn, collaborate, and grow through
                      opportunities in software development, AI/ML, and
                      internships. My technical expertise spans across
                      full-stack development with the MERN stack, Java
                      development, and Python programming.
                    </p>
                    <p className="text-muted">
                      When I'm not coding, I enjoy exploring new technologies,
                      solving complex problems, and staying updated with the
                      latest trends in artificial intelligence and machine
                      learning.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
