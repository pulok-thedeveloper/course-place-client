import React, { useContext } from 'react';
import { Container, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../../Images/logo.png'

const Header = () => {
    const { user, logOut, mode, handleToggle } = useContext(AuthContext);

    const renderTooltip = (props) => (

        <Tooltip id="button-tooltip" {...props}
        >
            {user?.displayName}
        </Tooltip>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className='navbar-brand text-decoration-none'>
                    <img className='me-2' src={logo} alt="" />
                    Course Place
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/courses">Courses</Link>
                        <Link className='nav-link' to="/blogs">Blogs</Link>
                        <Link className='nav-link' to="/faq">FAQ</Link>
                    </Nav>

                    <Nav className="d-flex align-items-center">
                        <div className="form-check form-switch m-0 me-3">
                            <input
                                onClick={handleToggle}
                                className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label text-white">
                                {
                                    mode ? 'Dark' : 'Light'
                                }
                            </label>
                        </div>
                        {
                            user?.uid ?
                                <Link className='nav-link' onClick={logOut}>Sign out</Link>

                                :
                                <Link className='nav-link' to="/login">Login</Link>
                        }
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >

                        {
                            user ?
                                user?.photoURL ?
                                    <img className="rounded-circle border border-3 ms-3" style={{ width: '40px' }} src={user.photoURL} alt="" />
                                    :
                                    <FaUserAlt></FaUserAlt>
                                :
                                <></>
                        }
                        </OverlayTrigger>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;