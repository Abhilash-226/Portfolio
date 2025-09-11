import { Card, Button, Badge } from "react-bootstrap";

const ProjectCard = ({ title, description, techStack, image, sourceLink }) => {
  return (
    <Card className="h-100 shadow-sm">
      {image && <Card.Img variant="top" src={image} alt={title} />}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <div className="mb-3">
          {techStack.map((tech, index) => (
            <Badge key={index} bg="secondary" className="me-1 mb-1">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto">
          {sourceLink && (
            <Button
              variant="primary"
              href={sourceLink}
              target="_blank"
              className="w-100"
            >
              View Source Code
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
