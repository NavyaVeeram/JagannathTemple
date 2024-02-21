import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './fixed.css'

const FixedComponent= () => {
  return (
    <Container fluid className='bg-secondary text-light p-3 fixed'>
      <Row>
     <Col> <span>+9198484 88436,</span></Col><Col><span>+918309189534</span> </Col> <Col><span>shrijagannathtemplebollaram@gmail.com</span></Col>
      </Row>
    </Container>
  );
};

export default FixedComponent;
