import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className='navbar-brand text-decoration-none'>Course Place</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/courses">Courses</Link>
                        <Link className='nav-link' to="/blogs">Blogs</Link>
                        <Link className='nav-link' to="/faq">FAQ</Link>
                    </Nav>
                    <Nav>
                        <Link className='nav-link' to="/signup">Sign Up</Link>
                        <Link className='nav-link' to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;