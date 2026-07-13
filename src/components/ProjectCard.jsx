import { Card, Button, Badge } from "react-bootstrap";

const ProjectCard = ({ title, description, features, techStack, image, sourceLink, sourceLinkText = "View Live Demo" }) => {
  return (
    <Card className="h-100 border-0 shadow-sm project-card">
      {image && <Card.Img variant="top" src={image} alt={title} />}
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "1rem",
            borderBottom: "2px solid #f1f5f9",
            paddingBottom: "0.5rem"
          }}
        >
          {title}
        </Card.Title>
        
        {/* Project Description */}
        <div
          style={{
            color: "#475569",
            fontSize: "0.938rem",
            lineHeight: 1.6,
            marginBottom: "1.25rem"
          }}
        >
          {Array.isArray(description) ? (
            description.map((para, idx) => (
              <p key={idx} style={{ marginBottom: "0.75rem" }}>{para}</p>
            ))
          ) : (
            <p style={{ marginBottom: "0.75rem" }}>{description}</p>
          )}
        </div>

        {/* Key Features */}
        {features && features.length > 0 && (
          <div style={{ marginBottom: "1.5rem" }}>
            <h6 style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              Key Features:
            </h6>
            <ul style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.875rem", color: "#475569" }}>
              {features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: "0.35rem" }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mb-4 mt-auto">
          <h6 style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
            Tech Stack:
          </h6>
          <div className="d-flex flex-wrap gap-1">
            {techStack.map((tech, index) => (
              <Badge key={index} className="me-1 mb-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          {sourceLink && (
            <Button
              variant="primary"
              href={sourceLink}
              target="_blank"
              className="w-100 py-2.5"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              <i className="bi bi-box-arrow-up-right me-2"></i>
              {sourceLinkText}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
