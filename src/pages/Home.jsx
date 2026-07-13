import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center"
      style={{ marginTop: "76px", minHeight: "calc(100vh - 76px)", padding: 0 }}
    >
      <Container className="hero-content py-5">
        <Row className="align-items-center">
          <Col md={7}>
            <div className="text-center text-md-start">
              <div className="mb-4">
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(59, 130, 246, 0.15)",
                    color: "#93c5fd",
                    padding: "0.4rem 1.2rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                  }}
                >
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="display-4 fw-bold mb-3">
                <span style={{ color: "rgba(255,255,255,0.9)" }}>
                  Hi, I'm{" "}
                </span>
                <span
                  style={{
                    color: "#3b82f6",
                  }}
                >
                  Ashadapu Abhilash
                </span>
              </h1>
              <h2
                className="h5 mb-4"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                Java Developer &bull; Full Stack (MERN) &bull; AI Engineering
                Enthusiast &bull; CBIT'27
              </h2>
              <p
                className="mb-5"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: "520px",
                }}
              >
                Computer Science student at CBIT, Hyderabad — skilled in Java,
                Python, MERN stack, and DSA. Passionate about building scalable
                applications and exploring AI/ML engineering.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  href="#projects"
                  className="px-4 py-3"
                >
                  <i className="bi bi-code-slash me-2"></i>
                  View My Work
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  href="#contact"
                  className="px-4 py-3"
                >
                  <i className="bi bi-envelope me-2"></i>
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
          <Col md={5} className="text-center mt-5 mt-md-0">
            <div
              className="profile-img mx-auto"
              style={{ width: "300px", height: "300px" }}
            >
              <img
                src="/profile.jpg"
                alt="Ashadapu Abhilash"
                className="rounded-circle img-fluid"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  border: "3px solid rgba(59, 130, 246, 0.4)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
