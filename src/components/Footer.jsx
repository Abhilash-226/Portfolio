import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="mb-2" style={{ color: "#fff", fontWeight: 600 }}>
              Ashadapu Abhilash
            </h5>
            <p className="mb-2" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.938rem" }}>
              Java Developer &bull; Full Stack (MERN) &bull; AI Engineering Enthusiast
            </p>
            <p className="mb-0" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.875rem" }}>
              &copy; 2025 All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end mt-4 mt-md-0">
            <div className="mb-3 d-flex gap-3 justify-content-center justify-content-md-end">
              <a
                href="https://github.com/Abhilash-226"
                className="text-white fs-5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0.6, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.6)}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="mailto:ashadapuabhilash240@gmail.com"
                className="text-white fs-5"
                style={{ opacity: 0.6, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.6)}
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ashadapu-abhilash-398011280/"
                className="text-white fs-5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0.6, transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.6)}
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <p
              className="mb-0"
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.813rem" }}
            >
              Built with React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
