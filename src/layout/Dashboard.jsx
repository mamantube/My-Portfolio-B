import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import "../assets/css/dashboard.css"

export default function Dashboard() {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Maman</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink
              className="nav-list"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-list"
              to="/resume"
            >
              Resume
            </NavLink>
            <NavLink
              className="nav-list"
              to="/project"
            >
              Project
            </NavLink>
            <NavLink
              className="nav-list"
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

      <Outlet id="dashboard" />
    </nav>
  );
}
