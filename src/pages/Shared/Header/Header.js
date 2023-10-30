import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Logo.png';

const Header = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: 'var(--primary-color)' }}>
            {/* used React-bootstrap to make responsive navigation */}
            <Container >
                <div >
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
                <Navbar.Collapse id="navbarScroll" className="text-white">
                    <Nav
                        className="m-auto my-2 my-lg-0 text-white"
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="text-white fs-5">Home</Nav.Link>
                        <Nav.Link href="#action1" className="text-white fs-5">Gallery</Nav.Link>
                        <Nav.Link href="#action1" className="text-white fs-5">Contact</Nav.Link>
                        <Nav.Link href="#action2" className="text-white fs-5">Contact</Nav.Link>
                        <Nav.Link href="#action1" className="text-white fs-5">About</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;