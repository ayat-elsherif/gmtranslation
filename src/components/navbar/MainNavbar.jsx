import { Container, Nav, Navbar } from "react-bootstrap";
import "./mainNavbar.scss";
import { Link, useLocation } from "react-router-dom";
export default function MainNavbar() {
  const location = useLocation();

  return (
    <Container>
      <Navbar expand="md" className="bg-body-tertiary">
        <Navbar.Brand as={"div"}>
          <Link to="/">
            {" "}
            <img src="./MedicalLogo.svg" alt="medical logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="li">
              <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link
                to={"/about"}
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link as="li">
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
