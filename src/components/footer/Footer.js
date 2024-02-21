import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <Container fluid className='p-0'>
      <footer className="text-center text-lg-start text-white" style={{background:'linear-gradient(to right, grey,lightgrey)'}}>

        {/* Grid container */}
        <Container className="p-4">
          {/* Grid row */}
          <Row className="my-4">
            {/* Grid column */}
            <Col lg={3} md={6} mb={4} mb-md-0>
              <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                <img src="https://www.jagannathtemplebollaram.com/images/index_02.png" height="70" alt="" loading="lazy" />
              </div>
               
            </Col>
            {/* Grid column */}

            {/* Column for Quick Links section */}
            <Col lg={3} md={6} mb={4} mb-md-0>
              <h5 className="text-uppercase mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-home pe-3"></i>Home</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-home pe-3"></i>About Us</a>
                </li>
                <li className="mb-2">
                <a href="#!" className="text-white"><i className="fas fa-gift pe-3"></i>Celebrations</a>
</li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-envelope pe-3"></i>Contact Us</a>
                </li>
              </ul>
            </Col>

            {/* Column for Useful Links section */}
            <Col lg={3} md={6} mb={4} mb-md-0>
              <h5 className="text-uppercase mb-4">Useful Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-info-circle pe-3"></i>General Information</a>
                </li>
                {/* Add more items as needed */}
              </ul>
            </Col>

            {/* Column for Contact section */}
            <Col lg={3} md={6} mb={4} mb-md-0>
              <h5 className="text-uppercase mb-4">Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <p><i className="fas fa-map-marker-alt pe-2"></i>Temple Street, Your City, Country</p>
                </li>
                <li>
                  <p><i className="fas fa-phone pe-2"></i>+1 234 567 890</p>
                </li>
                <li>
                  <p><i className="fas fa-envelope pe-2 mb-0"></i>info@temple.org</p>
                </li>
              </ul>
            </Col>
          </Row>
          {/* Grid row */}
        </Container>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; 2024 Temple. All rights reserved.
        </div>
        {/* Copyright */}
      </footer>
    </Container>
    // End of .container
  );
};

export default Footer;
