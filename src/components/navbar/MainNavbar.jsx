import { Container, Nav, Navbar } from "react-bootstrap";
import "./mainNavbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
export default function MainNavbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false); // Collapse the Navbar when a Nav.Link is clicked
  };
  return (
    <Container>
      <Navbar
        expanded={expanded}
        expand="md"
        className="bg-body-tertiary"
        collapseOnSelect
      >
        <Navbar.Brand as={"div"}>
          <Link to="/">
            {" "}
            <img src="./MedicalLogo.svg" alt="medical logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="li" onClick={handleNavItemClick}>
              <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link as="li" onClick={handleNavItemClick}>
              <Link
                to={"/about"}
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link as="li" onClick={handleNavItemClick}>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
