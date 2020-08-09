import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          className="fixed-top"
        >
          <Navbar.Brand id="nav-title" href="/">
            <img
              src="logo.png"
              width="45"
              height="40"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navBarLinks">
              <Nav.Link href="/">Projects</Nav.Link>
              <>
                <Nav.Link href="/about">About Me</Nav.Link>
              </>
              {/* <>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                            </> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavBar;
