import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const skillCategories = [
    {
      label: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
      icon: "bi-code-slash",
      color: "#3b82f6",
    },
    {
      label: "Frontend Technologies",
      skills: ["HTML", "CSS", "React.js", "Bootstrap", "Tailwind CSS"],
      icon: "bi-window-stack",
      color: "#8b5cf6",
    },
    {
      label: "Backend Technologies",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
      icon: "bi-hdd-rack",
      color: "#10b981",
    },
    {
      label: "Databases",
      skills: ["MySQL", "MongoDB"],
      icon: "bi-database",
      color: "#f59e0b",
    },
    {
      label: "Tools & Technologies",
      skills: ["Git", "GitHub", "Socket.IO", "JWT", "Gemini API"],
      icon: "bi-tools",
      color: "#06b6d4",
    },
    {
      label: "Course Work",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
      icon: "bi-journal-bookmark",
      color: "#ec4899",
    },
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-header mb-3">Skills</h2>
          <p className="text-muted" style={{ fontSize: "1.05rem" }}>
            Technologies and tools I work with
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-row">
                  <div className="skill-label">
                    <span
                      className="skill-icon"
                      style={{ color: category.color }}
                    >
                      <i className={`bi ${category.icon}`}></i>
                    </span>
                    <span className="skill-label-text">{category.label}</span>
                  </div>
                  <div className="skill-tags">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag"
                        style={{
                          "--tag-color": category.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
