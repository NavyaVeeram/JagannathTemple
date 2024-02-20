import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Container4 = () => {
  return (
    <Container className='text-center p-5 my-2' style={{width:'600px',background:'gold',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px'}}>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
          <h3>Keep up-to-date with Jagannath Temple</h3>
          <Form className='pt-5'>
            <Row className='align-items-center'>
              <Col xs={12} md={8} className='w-50'>
                <Form.Control type="email" placeholder="name@example.com" />
              </Col>
              <Col xs={12} md={4}>
                <Button variant="primary" block>
                 Send me
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Container4;
