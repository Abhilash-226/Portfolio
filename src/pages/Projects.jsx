import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "YourPlaces",
      description:
        "A full-stack MERN application for sharing and discovering places. Features user authentication, place management, image uploads, and interactive maps with location sharing capabilities.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      image: null, // Replace with actual image path
      sourceLink: "https://github.com/Abhilash-226/yourplaces",
    },
    {
      title: "StudySphere",
      description:
        "A comprehensive educational platform designed for students and educators. Features course management, assignment tracking, progress monitoring, and collaborative learning tools with intuitive user interface.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      image: null, // Replace with actual image path
      sourceLink: "https://github.com/Abhilash-226/studysphere",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Bootstrap. Features smooth navigation, project showcase, and contact form with professional design.",
      techStack: ["React", "Vite", "Bootstrap", "JavaScript", "CSS3"],
      image: null, // Replace with actual image path
      sourceLink: "https://github.com/Abhilash-226",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center section-header mb-5">My Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
