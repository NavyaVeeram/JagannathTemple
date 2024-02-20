import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TwoColumnContainer = () => {
  return (
    <Container fluid>
      <Row>
        {/* First Column */}
        <Col xs={12} md={6}>
          <div style={{ padding: '40px', minHeight: '300px', fontSize:'20px', alignItems:'center' ,textAlign:'center' }}>
            {/* Content for the first column */}
            <p style={{ paddingTop: '50px'}}>" Om Shuklam Bharatharam Vishnum Sashivarnam Chathurbhujam</p>

<p>Prasanna Vadanam Dhyayeth Sarva Vignopa Shanthaye</p>

<p>Vyasam Vashita Naptharam Shakte Poutramakalmasham Parasharathmajam Vande Shukathathum</p>

<p>Thaponidhim Vyasaya Vishnu Roopaya Vyasroopaya Vishanave Namovai Brahmanidhaye Vasishtaya Namonamaha "</p>
          </div>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={6}>
          <div style={{ padding: '20px', minHeight: '300px'}}>
            {/* Content for the second column */}
            <img
        src='https://www.jagannathtemplebollaram.com/images/image.png'
        alt="Example Image"
        style={{ width: '100%'}}
      />       </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumnContainer;
