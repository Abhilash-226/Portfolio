import { Container, Row, Col, Card } from "react-bootstrap";

const ContactForm = () => {
  const contacts = [
    {
      title: "Email",
      value: "ashadapuabhilash240@gmail.com",
      link: "mailto:ashadapuabhilash240@gmail.com",
      icon: "bi-envelope-fill",
      color: "#3b82f6",
      btnText: "Send Email"
    },
    {
      title: "Mobile & WhatsApp",
      value: "+91 9177608973",
      links: [
        { href: "tel:+919177608973", text: "Call", icon: "bi-telephone-fill" },
        { href: "https://wa.me/919177608973", text: "WhatsApp", icon: "bi-whatsapp", color: "#25d366" }
      ],
      icon: "bi-chat-left-text-fill",
      color: "#10b981",
    },
    {
      title: "LinkedIn",
      value: "ashadapu-abhilash-398011280",
      link: "https://www.linkedin.com/in/ashadapu-abhilash-398011280/",
      icon: "bi-linkedin",
      color: "#0a66c2",
      btnText: "Connect"
    }
  ];

  const codingProfiles = [
    {
      title: "GitHub",
      value: "Abhilash-226",
      subtitle: "5+ Repositories & Active Contributions",
      link: "https://github.com/Abhilash-226",
      icon: "bi-github",
      color: "#1f2937",
      btnText: "View GitHub"
    },
    {
      title: "LeetCode",
      value: "abhilash_226",
      subtitle: "470+ Solved & 100 Days Badge 2026",
      link: "https://leetcode.com/u/abhilash_226/",
      icon: "bi-code-slash",
      color: "#f59e0b",
      btnText: "View LeetCode"
    },
    {
      title: "GeeksforGeeks",
      value: "ashadapuab1180",
      subtitle: "304 Solved & Coding Score 966",
      link: "https://www.geeksforgeeks.org/profile/ashadapuab1180",
      icon: "bi-terminal-fill",
      color: "#15803d",
      btnText: "View GFG"
    }
  ];

  return (
    <section id="contact" className="py-5">
      <Container>
        {/* Section 1: Contact Information */}
        <div className="text-center mb-5">
          <h2 className="section-header mb-3">Get In Touch</h2>
          <p className="text-muted" style={{ fontSize: "1.05rem" }}>
            Let's connect! Reach out to me via any of the channels below.
          </p>
        </div>
        
        <Row className="g-4 justify-content-center mb-5">
          {contacts.map((contact, index) => (
            <Col key={index} xs={12} md={4} className="d-flex">
              <Card 
                className="border-0 shadow-sm w-100 text-center p-4 d-flex flex-column align-items-center justify-content-between" 
                style={{ 
                  borderRadius: "16px", 
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  transition: "all 0.3s ease" 
                }}
              >
                <div 
                  className="mb-3 d-flex align-items-center justify-content-center" 
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: `${contact.color}15`,
                    color: contact.color,
                    fontSize: "1.5rem"
                  }}
                >
                  <i className={`bi ${contact.icon}`}></i>
                </div>
                <h5 className="mb-2" style={{ fontWeight: 600, color: "#1e293b" }}>{contact.title}</h5>
                <p className="text-muted mb-4" style={{ fontSize: "0.9rem", wordBreak: "break-all" }}>{contact.value}</p>
                
                <div className="w-100 mt-auto">
                  {contact.links ? (
                    <div className="d-flex gap-2 justify-content-center">
                      {contact.links.map((lnk, lIdx) => (
                        <a
                          key={lIdx}
                          href={lnk.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn flex-fill py-2 d-flex align-items-center justify-content-center"
                          style={{
                            fontSize: "0.85rem",
                            backgroundColor: lnk.color || contact.color,
                            color: "#fff",
                            borderRadius: "10px",
                            border: "none",
                            boxShadow: "none"
                          }}
                        >
                          <i className={`bi ${lnk.icon} me-1.5`}></i>
                          {lnk.text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-100 py-2 d-flex align-items-center justify-content-center"
                      style={{
                        fontSize: "0.85rem",
                        backgroundColor: contact.color,
                        color: "#fff",
                        borderRadius: "10px",
                        border: "none",
                        boxShadow: "none"
                      }}
                    >
                      <i className={`bi ${contact.icon} me-1.5`}></i>
                      {contact.btnText}
                    </a>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Section 2: Coding Profiles */}
        <div className="text-center mb-5 mt-5">
          <h3 className="mb-3" style={{ fontWeight: 700, color: "#0f172a" }}>Coding Profiles</h3>
          <p className="text-muted" style={{ fontSize: "1.02rem" }}>
            Check out my active progress and problem-solving records.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {codingProfiles.map((profile, index) => (
            <Col key={index} xs={12} md={4} className="d-flex">
              <Card 
                className="border-0 shadow-sm w-100 text-center p-4 d-flex flex-column align-items-center justify-content-between" 
                style={{ 
                  borderRadius: "16px", 
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  transition: "all 0.3s ease" 
                }}
              >
                <div 
                  className="mb-3 d-flex align-items-center justify-content-center" 
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: `${profile.color}15`,
                    color: profile.color,
                    fontSize: "1.5rem"
                  }}
                >
                  <i className={`bi ${profile.icon}`}></i>
                </div>
                <h5 className="mb-1" style={{ fontWeight: 600, color: "#1e293b" }}>{profile.title}</h5>
                <p className="mb-2" style={{ fontWeight: 500, fontSize: "0.95rem", color: profile.color }}>
                  {profile.value}
                </p>
                <p className="text-muted mb-4" style={{ fontSize: "0.85rem" }}>
                  {profile.subtitle}
                </p>
                
                <div className="w-100 mt-auto">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100 py-2 d-flex align-items-center justify-content-center"
                    style={{
                      fontSize: "0.85rem",
                      backgroundColor: profile.color,
                      color: "#fff",
                      borderRadius: "10px",
                      border: "none",
                      boxShadow: "none"
                    }}
                  >
                    <i className="bi bi-box-arrow-up-right me-1.5"></i>
                    {profile.btnText}
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
