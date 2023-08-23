import Carousel from 'react-bootstrap/Carousel'
import Slide from '../Slide'
import './style.css'

export default function index() {

  return (
    <section className="pb-5 pt-sm-4 pt-xl-4 px-3 px-md-4">
      <h2 className='section-title my-4 fw-bold mb-sm-5'>Popular MyTineraries</h2>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Slide since={0} to={4}/>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Slide since={4} to={8}/>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Slide since={8} to={12}/>
        </Carousel.Item>        
      </Carousel>
    </section>
  )
}