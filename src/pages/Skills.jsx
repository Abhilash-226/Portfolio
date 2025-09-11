import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "bi bi-brush-fill",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: [
        { name: "React", level: 85, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🟧" },
        { name: "CSS3", level: 85, icon: "🔵" },
        { name: "Bootstrap", level: 80, icon: "🟣" },
        { name: "Responsive Design", level: 85, icon: "📱" },
      ],
    },
    {
      title: "Backend Development",
      icon: "bi bi-server",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: [
        { name: "Java", level: 90, icon: "☕" },
        { name: "Spring Boot", level: 75, icon: "🍃" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "⚡" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "REST APIs", level: 80, icon: "🔗" },
      ],
    },
    {
      title: "Database & Data",
      icon: "bi bi-database-fill",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: [
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "Data Structures", level: 85, icon: "📊" },
        { name: "Algorithms", level: 80, icon: "🧮" },
        { name: "Machine Learning", level: 65, icon: "🤖" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "bi bi-gear-fill",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      skills: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "Problem Solving", level: 90, icon: "🧩" },
        { name: "DSA", level: 85, icon: "📈" },
        { name: "AI Engineering", level: 70, icon: "🤖" },
        { name: "Full Stack Development", level: 80, icon: "💻" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-header mb-3">Skills & Technologies</h2>
          <p className="text-muted lead">
            My technical expertise and proficiency levels
          </p>
        </div>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col lg={6} key={index}>
              <Card className="h-100 border-0 shadow-lg skill-category-card position-relative overflow-hidden">
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{ background: category.gradient }}
                ></div>
                <Card.Body className="p-4 position-relative">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: category.gradient,
                        color: "white",
                      }}
                    >
                      <i className={category.icon}></i>
                    </div>
                    <div>
                      <h4 className="mb-1 fw-bold">{category.title}</h4>
                      <small className="text-muted">
                        Click to expand details
                      </small>
                    </div>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="d-flex align-items-center">
                            <span className="me-2 fs-5">{skill.icon}</span>
                            <span className="fw-medium">{skill.name}</span>
                          </span>
                          <span
                            className="badge rounded-pill"
                            style={{
                              background: category.gradient,
                              color: "white",
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <ProgressBar
                          now={skill.level}
                          className="skill-progress"
                          style={{ height: "6px" }}
                        />
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
