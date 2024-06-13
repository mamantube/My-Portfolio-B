import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useState } from "react";
import "../assets/css/dashboard.css";

export default function Dashboard() {
  const [show, setShow] = useState(false);

  function onShowMenu() {
    setShow(!show);
    console.log("INI");
  }

  let closeMenu = show ? "d-block" : "d-none";
  let openMenu = show ? "d-none" : "d-block";

  return (
    <nav>
      <Navbar bg="dark" data-bs-theme="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <h3 className="text-h3">Maman</h3>
          </Navbar.Brand>
          <Button className="d-md-none" onClick={onShowMenu}>
            <i className={`${closeMenu} bi bi-list nav-button-icon`}></i>
            <i className={`${openMenu} bi bi-x-lg nav-button-icon`}></i>
          </Button>

          <Navbar.Collapse id="navbar--dashboard" className={openMenu}>
            <Nav className="ms-auto">
              <NavLink to="/" className=" nav-list" activeclassname="active">
                Home
              </NavLink>
              <NavLink
                to="/resume"
                className="nav-list "
                activeclassname="active"
              >
                Resume
              </NavLink>
              <NavLink
                to="/project"
                className="nav-list "
                activeclassname="active"
              >
                Project
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-list "
                activeclassname="active"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className=" my-5">
        <Outlet id="dashboard" />
      </Container>
    </nav>
  );
}
