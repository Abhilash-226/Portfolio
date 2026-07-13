import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "MockMitra – AI-Powered Exam Preparation Platform",
      description: [
        "MockMitra is a context-aware question generation and exam preparation platform designed for competitive exam prep. It operates on a cache-first, template-grounded question generation pipeline, minimizing LLM API costs while guaranteeing sub-millisecond retrieval of pre-validated practice material.",
        "When the MongoDB question pool has a deficit for a requested topic, the system retrieves historical Previous Year Questions (PYQs) from a YAML database, injects them as prompt context to ground Gemini 2.5 Flash, and runs concurrent worker pools to generate new conceptually similar variations. It validates generated questions via a 2-pass solver consensus using Gemini's thinking budget and filters near-duplicates using a SequenceMatcher text similarity check (ratio < 0.82)."
      ],
      features: [
        "Cache-first question selector using MongoDB compound query indices for sub-millisecond retrieval",
        "Template-grounded generation utilizing historical PYQ context parsed from YAML blueprints",
        "2-pass solver verification consensus using Gemini's thinking model to ensure mathematical correctness",
        "FastAPI background tasks for asynchronous question generation and worker pool orchestration",
        "Deduplication pipeline enforcing a SequenceMatcher similarity threshold (ratio < 0.82)",
        "Complete CBT-style test interface with Custom Test, PYQ practice, Analytics, and History tracking modules"
      ],
      techStack: ["React", "FastAPI", "Python", "Gemini 2.5 Flash", "MongoDB", "YAML", "Git"],
      image: null,
      sourceLink: "https://mockmitra.app/",
      sourceLinkText: "Visit MockMitra"
    },
    {
      title: "StudySphere – Full-Stack EdTech Marketplace",
      description: [
        "StudySphere is a premium full-stack EdTech marketplace bridging students and tutors. It features high-fidelity real-time collaboration, cryptographic chat privacy, secure payment escrows, and WebRTC virtual classrooms.",
        "The platform secures communication by encrypting direct messages with AES-256-CBC prior to database persistence and decrypting them on-the-fly for active Socket.IO websocket clients. It incorporates an escrow-like payment flow via Razorpay API (holding and capturing funds upon student approval of completion), a custom-signed JWT WebRTC video classroom using 8x8 Jitsi As A Service (JaaS), and a database-level validation to prevent tutor scheduling double-bookings."
      ],
      features: [
        "Real-time communication using Socket.IO with AES-256-CBC encrypted chat history",
        "Escrow payment system integrating Razorpay signature verification and capture-hold workflow",
        "WebRTC classrooms via Jitsi/8x8 JaaS with custom RS256-signed moderator JWT tokens",
        "Double-booking scheduling prevention via MongoDB overlapping time-range queries",
        "Tutor and offline classroom discovery using MongoDB 2dsphere index geospatial distance queries",
        "Student profile completeness tracking and dynamically aggregated tutor rating reviews"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC (Jitsi)", "Razorpay", "JWT", "Bootstrap 5"],
      image: null,
      sourceLink: "https://studysphere-frontend-gtvp.onrender.com/",
      sourceLinkText: "Visit StudySphere"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-header mb-3">My Projects</h2>
          <p className="text-muted" style={{ fontSize: "1.05rem" }}>
            Some of my major software engineering projects
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {projects.map((project, index) => (
            <Col md={10} lg={6} key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
