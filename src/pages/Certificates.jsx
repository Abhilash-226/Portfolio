import { Container, Row, Col, Card } from "react-bootstrap";

const Certificates = () => {
  const certificates = [
    {
      title: "Future Interns Internship",
      image: "/Future Interns Internship.png",
      description: "Completed internship program with Future Interns",
    },
    {
      title: "Internshala Web Development",
      image: "/Internshala-web develpment.png",
      description: "Web Development certification from Internshala",
    },
    {
      title: "Oracle Cloud Infrastructure",
      image: "/Oracle cloud.png",
      description: "Oracle Cloud certification",
    },
    {
      title: "Udemy MERN Stack",
      image: "/Udemy-MERN stack.png",
      description: "MERN Stack development course completion",
    },
  ];

  return (
    <section id="certificates" className="py-5">
      <Container>
        <h2 className="text-center section-header mb-5">
          Certificates & Achievements
        </h2>
        <Row className="g-4">
          {certificates.map((cert, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 border-0 shadow-sm certificate-card position-relative overflow-hidden">
                <div
                  className="certificate-img-container"
                  style={{ height: "220px", overflow: "hidden" }}
                >
                  <Card.Img
                    variant="top"
                    src={cert.image}
                    alt={cert.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: "contain",
                      padding: "15px",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                <Card.Body className="text-center p-4">
                  <div className="mb-2">
                    <i className="bi bi-award-fill text-warning fs-4"></i>
                  </div>
                  <Card.Title className="h6 fw-bold mb-2">
                    {cert.title}
                  </Card.Title>
                  <Card.Text className="small text-muted">
                    {cert.description}
                  </Card.Text>
                </Card.Body>
                <div
                  className="position-absolute top-0 end-0 p-2"
                  style={{
                    background: "linear-gradient(45deg, #667eea, #2563eb)",
                    borderRadius: "0 0 0 10px",
                  }}
                >
                  <i className="bi bi-check-circle-fill text-white"></i>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
