import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Link } from 'react-router-dom';

function BasicExample() {
  // const whiteText = { color: 'white' }; // Updated white text color
  // const blackText = { color: 'black' };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src='https://www.jagannathtemplebollaram.com/images/index_02.png' alt="Logo" width={'80px'} height={'80px'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>

            <NavDropdown title={<span >About us</span>} id="basic-nav-dropdown">
              <NavDropdown.Item>
              <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>About us</Link>
          </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Faqs
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span >About Deities</span>} id="basic-nav-dropdown">
              <NavDropdown.Item >History of the deities</NavDropdown.Item>
              <NavDropdown.Item >Significance of the deities</NavDropdown.Item>
              <NavDropdown.Item >Jagannatha culture</NavDropdown.Item>
              <NavDropdown.Item >Rituals of the deities</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link >Rituals</Nav.Link>

            <Nav.Link href="#link" >Culture</Nav.Link>
            <Nav.Link href="#home" >Festivals</Nav.Link>
            <Nav.Link href="#home" >Rathyatra</Nav.Link>
            <Nav.Link href="#link" >Link</Nav.Link>

            <NavDropdown title={<span >Media gallery</span>} id="basic-nav-dropdown">
              <NavDropdown.Item >Photos</NavDropdown.Item>
              <NavDropdown.Item >Videos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home" >Contact us</Nav.Link>
            <Nav.Link href="#home" className='btn btn-secondary text-light'>Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
