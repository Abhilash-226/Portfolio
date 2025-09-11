import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{ marginTop: "76px", minHeight: "100vh" }}
    >
      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col md={6}>
            <div className="text-center text-md-start">
              <div className="mb-4">
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill mb-3">
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="display-4 fw-bold mb-4 text-white">
                Hi, I'm{" "}
                <span style={{ color: "#f59e0b" }}>Ashadapu Abhilash</span>
              </h1>
              <h2 className="h4 mb-4 text-light opacity-75">
                Java Developer | Full Stack (MERN) | AI Engineering Enthusiast |
                CBIT'27
              </h2>
              <p className="lead mb-5 text-light">
                I'm a Computer Science and Engineering student at CBIT,
                Hyderabad, skilled in Java, Python, MERN stack, and DSA
                problem-solving. I'm passionate about building scalable
                applications and exploring the world of AI/ML engineering.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                <Button
                  variant="light"
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
          <Col md={6} className="text-center">
            <div
              className="profile-img mx-auto"
              style={{ width: "320px", height: "320px" }}
            >
              <img
                src="/profile.jpg"
                alt="Ashadapu Abhilash"
                className="rounded-circle img-fluid shadow-lg"
                style={{
                  width: "320px",
                  height: "320px",
                  objectFit: "cover",
                  border: "4px solid #0d6efd",
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
