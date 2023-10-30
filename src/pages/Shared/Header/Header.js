import React, { useState } from 'react'
import styles from './Header.module.css';
import { Button, Container, Nav, NavDropdown, Navbar, Form } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action1">About</Nav.Link>
                        <Nav.Link href="#action1">Contact</Nav.Link>
                        <Nav.Link href="#action1">Contact</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;