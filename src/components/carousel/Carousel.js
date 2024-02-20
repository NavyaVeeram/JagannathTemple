import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shorturl.at/npGL5"
          alt="First slide"
          style={{width:'800px',height:'500px'}}
        />
        <Carousel.Caption>
          <h3>Jaganatha Temple</h3>
          <p>The three devoties are present</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.jagannathtemplebollaram.com/images/banner3256.jpg"
          alt="Second slide"
          style={{width:'800px',height:'500px'}}
        />
        <Carousel.Caption>
          <h3>Decoration</h3>
          <p>Here is the decorative look of jagannathtemplebollaram</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rb.gy/dvf80v"
          alt="Third slide"
          style={{width:'800px',height:'500px'}}
        />
        <Carousel.Caption>
          <h3>The outview of Jagannath temple</h3>
          <p>Super view of the jagannathtemplebollaram.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
