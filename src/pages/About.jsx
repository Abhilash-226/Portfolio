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
                    <p className="text-muted" style={{ lineHeight: "1.6", fontSize: "0.92rem" }}>
                      I'm a Computer Science undergraduate at CBIT, Hyderabad with hands-on experience building and deploying full-stack web applications and AI-powered systems. I'm proficient in the MERN Stack, FastAPI, and REST API design, and have developed production-grade platforms featuring real-time communication, cryptographic privacy, role-based access control, and payment gateway integrations.
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
                    <div className="education-timeline" style={{ fontSize: "0.88rem", lineHeight: "1.4" }}>
                      <div className="mb-3">
                        <div className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>Chaitanya Bharathi Institute of Technology</div>
                        <div className="text-primary font-monospace mb-1" style={{ fontSize: "0.78rem" }}>Sep 2023 — May 2027 | Hyderabad</div>
                        <div className="text-muted">BTech, CSE (IoT & CS including Blockchain)</div>
                        <div className="text-dark fw-semibold" style={{ fontSize: "0.85rem" }}>GPA: 8.43 / 10 (up to 5 semesters)</div>
                      </div>
                      <div className="mb-3" style={{ borderTop: "1px solid #f1f5f9", paddingTop: "0.75rem" }}>
                        <div className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>Alphores Junior College</div>
                        <div className="text-primary font-monospace mb-1" style={{ fontSize: "0.78rem" }}>Jun 2021 — May 2023 | Karimnagar</div>
                        <div className="text-muted">Class XI & XII, MPC</div>
                        <div className="text-dark fw-semibold" style={{ fontSize: "0.85rem" }}>Percentage: 98.8%</div>
                      </div>
                      <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "0.75rem" }}>
                        <div className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>Alphores High School</div>
                        <div className="text-primary font-monospace mb-1" style={{ fontSize: "0.78rem" }}>Jun 2020 — Apr 2021 | Karimnagar</div>
                        <div className="text-muted">Class X</div>
                        <div className="text-dark fw-semibold" style={{ fontSize: "0.85rem" }}>GPA: 10.0 / 10</div>
                      </div>
                    </div>
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
