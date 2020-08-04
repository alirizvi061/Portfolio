import React, { Component } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";


class NavBar extends Component {
    render() {
        return (
            <Container>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="dark"
                    variant="dark"
                    className="fixed-top"
                >
                    <Navbar.Brand id="nav-title" href="/">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Portfolio</Nav.Link>
                            <>
                                <Nav.Link href="/about">About Me</Nav.Link>
                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default NavBar;