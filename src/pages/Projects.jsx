import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "MockMitra – AI-Powered Mock Test Platform",
      description: [
        "MockMitra is an intelligent mock test platform designed to help students prepare for competitive exams like EAMCET through personalized and adaptive practice. It combines full-length previous year question (PYQ) paper mocks with AI-generated content to provide a comprehensive and exam-focused preparation experience.",
        "The platform enables users to attempt both real exam-style PYQ mocks and customized tests generated using Gemini APIs. It leverages a pre-built question pool stored in a scalable NoSQL database (MongoDB), enabling fast test generation with minimal latency while maintaining high-quality and diverse questions.",
        "Users can navigate through tests in a smooth, real-time interface and gain actionable insights through performance analytics and progress tracking. The system is designed to ensure consistency in question standards and improve preparation efficiency through intelligent question selection."
      ],
      features: [
        "Full-length PYQ paper mock tests for real exam simulation",
        "AI-powered personalized test generation using Gemini APIs",
        "Scalable question pool built from previous year papers",
        "Efficient and low-latency test creation using MongoDB",
        "Real-time test interface with seamless navigation",
        "Performance analytics and progress tracking"
      ],
      techStack: ["MongoDB (NoSQL)", "FastAPI", "React", "Vite", "Gemini APIs"],
      image: null,
      sourceLink: "https://mockmitra.app/",
      sourceLinkText: "Visit MockMitra"
    },
    {
      title: "StudySphere – Tutor-Student Learning Platform",
      description: [
        "StudySphere is a tutor-student platform that connects students with verified tutors for both online and offline learning. It ensures trust through a manual tutor verification process using ID and qualification documents.",
        "Students can discover tutors, request live sessions, or chat for offline tuition. The platform also features Classrooms, where tutors list their teaching spaces with details like subjects, location, and pricing for group learning."
      ],
      features: [
        "Role-based student and tutor registration",
        "Manual tutor verification system",
        "Online session booking for live classes",
        "Real-time chat for offline coordination",
        "Classroom listings for group learning",
        "Demo class booking and tutor discovery"
      ],
      techStack: ["MongoDB", "Node.js", "React", "Socket.IO", "JWT"],
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
