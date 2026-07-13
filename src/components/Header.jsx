import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="navbar">
      <Container fluid className="px-4 px-lg-5">
        <Navbar.Brand
          href="#home"
          className="fw-bold"
          style={{
            color: "#0f172a",
            fontSize: "1.25rem",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          Ashadapu Abhilash
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
