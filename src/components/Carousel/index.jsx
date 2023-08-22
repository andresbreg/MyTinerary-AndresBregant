import Carousel from 'react-bootstrap/Carousel'
import Slide from '../Slide'
import './style.css'

function index() {

  // function createSlide(array) {
  //   for (let i=0; i<3; i++) {
  //     cities.push(array.slice(i*4,(i+1)*4))
  //   }
  // }

  return (
    <section className="pb-5 pt-sm-4 pt-xl-4 px-3 px-md-4">
      <h2 className='section-title my-4 fw-bold mb-sm-5'>Popular MyTineraries</h2>
      <Carousel>
        <Carousel.Item interval={5000}>
          {
          <Slide/>

          }
        </Carousel.Item>
        {/* <Carousel.Item interval={5000}>
          <Slide/>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Slide/>
        </Carousel.Item> */}
      </Carousel>
    </section>
  );
}

export default index;