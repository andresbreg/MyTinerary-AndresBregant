import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../Slide-1'
import Slide2 from '../Slide-2'
import Slide3 from '../Slide-3'
import './style.css'

function index() {
  return (
    <div className="carouselContainer py-5">
      <Carousel>
        <Carousel.Item interval={5000}>
          <Slide1/>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Slide2/>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Slide3/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default index;