import { Container, Row, Col, Card } from "react-bootstrap";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Internet of Things (Elite Silver)",
      issuer: "NPTEL",
      date: "Jul-Oct 2025",
      credentialId: "NPTEL25CS147S958200846",
      link: "https://nptel.ac.in/noc/",
      image: "/nptel-iot.png",
      color: "#ffa116"
    },
    {
      title: "Full Stack Web development",
      issuer: "Internshala",
      date: "October 2024",
      credentialId: "8duonojqlrd",
      link: "https://trainings.internshala.com/verify_certificate",
      image: "/internshala-web-development.png",
      color: "#0073e6"
    },
    {
      title: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      issuer: "Udemy",
      date: "July 2025",
      credentialId: "UC-57418ff9-b0c9-41ea-8368-5a58d48057dd",
      link: "https://ude.my/UC-57418ff9-b0c9-41ea-8368-5a58d48057dd",
      image: "/udemy-mern-stack.png",
      color: "#a435f0"
    },
    {
      title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
      issuer: "Udemy",
      date: "Dec 2025",
      credentialId: "UC-c5ddb17e-9445-4e75-87ac-d831cc8a13b2",
      link: "https://ude.my/UC-c5ddb17e-9445-4e75-87ac-d831cc8a13b2",
      image: "/udemy-complete-ai-guide.png",
      color: "#a435f0"
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "March 2026",
      credentialId: "AE89DA4122AC",
      link: "https://www.hackerrank.com/certificates/ae89da4122ac",
      image: "/hackerrank-java-basic.png",
      color: "#2ec866"
    }
  ];

  return (
    <section id="certificates" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-header mb-3">Certificates & Achievements</h2>
          <p className="text-muted" style={{ fontSize: "1.05rem" }}>
            Validations of my skills, coursework, and career achievements
          </p>
        </div>
        
        <Row className="g-4 justify-content-center">
          {certificates.map((cert, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
              <Card 
                className="h-100 border-0 shadow-sm w-100 certificate-card position-relative overflow-hidden d-flex flex-column"
                style={{ 
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  transition: "all 0.3s ease",
                  maxWidth: "350px"
                }}
              >
                {cert.image ? (
                  <div 
                    className="certificate-img-container d-flex align-items-center justify-content-center"
                    style={{ height: "160px", overflow: "hidden", backgroundColor: "#f8fafc", padding: "10px" }}
                  >
                    <Card.Img 
                      variant="top" 
                      src={cert.image} 
                      alt={cert.title} 
                      style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
                    />
                  </div>
                ) : (
                  <div 
                    className="d-flex flex-column align-items-center justify-content-center text-white p-4"
                    style={{ 
                      height: "160px", 
                      background: `linear-gradient(135deg, ${cert.color || "#3b82f6"} 0%, ${cert.color ? cert.color + "dd" : "#2563eb"} 100%)` 
                    }}
                  >
                    <i className="bi bi-award-fill" style={{ fontSize: "3rem" }}></i>
                    <span className="mt-2 fw-semibold" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {cert.issuer}
                    </span>
                  </div>
                )}
                
                <Card.Body className="p-4 d-flex flex-column flex-grow-1">
                  <h6 className="fw-bold mb-1" style={{ color: "#1e293b", fontSize: "0.95rem", lineHeight: 1.4 }}>
                    {cert.title}
                  </h6>
                  <p className="text-muted mb-3" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
                    Issued by {cert.issuer} {cert.date && `• ${cert.date}`}
                  </p>
                  
                  {cert.credentialId && (
                    <p className="mb-4" style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748b" }}>
                      ID: {cert.credentialId}
                    </p>
                  )}
                  
                  <div className="mt-auto">
                    {cert.link ? (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn w-100 py-2 d-flex align-items-center justify-content-center"
                        style={{ 
                          fontSize: "0.8rem", 
                          backgroundColor: "#f1f5f9", 
                          color: "#334155", 
                          borderRadius: "10px", 
                          border: "none",
                          fontWeight: 500
                        }}
                      >
                        <i className="bi bi-patch-check-fill me-1.5" style={{ color: cert.color || "#3b82f6" }}></i>
                        Verify Credential
                      </a>
                    ) : (
                      <div 
                        className="w-100 py-2 text-center text-muted"
                        style={{ 
                          fontSize: "0.8rem", 
                          backgroundColor: "#f8fafc", 
                          borderRadius: "10px",
                          border: "1px dashed #e2e8f0"
                        }}
                      >
                        Verified
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Key Achievements */}
        <div className="text-center mt-5 mb-4">
          <h3 className="fw-bold mb-3" style={{ color: "#0f172a" }}>Key Achievements</h3>
        </div>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-sm p-4" style={{ borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li className="d-flex align-items-start">
                  <div className="bg-primary-subtle text-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", flexShrink: 0, backgroundColor: "rgba(59, 130, 246, 0.15)", color: "#2563eb" }}>
                    <i className="bi bi-code-slash" style={{ fontSize: "1.2rem" }}></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>Competitive Programming & Problem Solving</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                      Solved 430+ algorithmic problems across LeetCode and GeeksforGeeks, focusing on data structures, algorithms, and logical problem-solving.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start border-top pt-3">
                  <div className="bg-primary-subtle text-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", flexShrink: 0, backgroundColor: "rgba(59, 130, 246, 0.15)", color: "#2563eb" }}>
                    <i className="bi bi-award-fill" style={{ fontSize: "1.2rem" }}></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: "#1e293b" }}>NPTEL Elite Silver Badge</h6>
                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                      Awarded Elite Silver Badge in Introduction to Internet of Things from NPTEL for scoring 75%.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
