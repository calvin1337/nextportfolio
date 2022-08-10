import Carousel from 'react-bootstrap/Carousel';

const PortfolioCarousel = ({images}) => {
  
  return (
    <Carousel fade variant="dark" >
      {
        images.map((image) => (
          <Carousel.Item>
        <img
          className="d-block w-100"
          src={image.url}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
        ))
      }
      
    </Carousel>
  );
}

export default PortfolioCarousel;