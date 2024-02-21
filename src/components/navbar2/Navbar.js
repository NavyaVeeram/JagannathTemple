import React from 'react';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar text-light">
      <Container>
        <Navbar.Brand href="#home">
          <img src='https://www.jagannathtemplebollaram.com/images/index_02.png' alt="Logo" width={'80px'} height={'80px'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title={<span>About us</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faqs">Faqs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span >About Deities</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/history">History of the deities</NavDropdown.Item>
              <NavDropdown.Item >Significance of the deities</NavDropdown.Item>
              <NavDropdown.Item >Jagannatha culture</NavDropdown.Item>
              <NavDropdown.Item >Rituals of the deities</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/rituals" className='active'>Rituals</Nav.Link>
            <Nav.Link as={Link} to="/culture">Culture</Nav.Link>
  
            <Nav.Link as={Link} to="/festivals">Festivals</Nav.Link>
            <Nav.Link as={Link} to="/rathayatra">Rathyatra</Nav.Link>

            <NavDropdown title={<span >Media gallery</span>} id="basic-nav-dropdown">
              <NavDropdown.Item >Photos</NavDropdown.Item>
              <NavDropdown.Item >Videos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
            <Nav.Link as={Link} to="/donate" className='btn btn-secondary text-light'>Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default BasicExample;
