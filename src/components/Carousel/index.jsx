import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../Slide-1'
import Slide2 from '../Slide-2'
import Slide3 from '../Slide-3'
import './style.css'

function index() {
  return (
    <section className="text-bg-light py-5">
      <h2 className='fw-bold mb-5'>Popular MyTineraries</h2>
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
    </section>
  );
}

export default index;