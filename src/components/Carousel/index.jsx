import ReactCarousel from 'react-bootstrap/Carousel'
import Slide from '../Slide'
import './style.css'

const Carousel = () => {

  return (
    <section className="pb-5 pt-sm-4 pt-xl-4 px-3 px-md-4">
      <h2 className='section-title my-4 fw-bold mb-sm-5'>Popular MyTineraries</h2>
      <ReactCarousel>
        <ReactCarousel.Item interval={5000}>
          <Slide since={0} to={4}/>
        </ReactCarousel.Item>
        <ReactCarousel.Item interval={5000}>
          <Slide since={4} to={8}/>
        </ReactCarousel.Item>
        <ReactCarousel.Item interval={5000}>
          <Slide since={8} to={12}/>
        </ReactCarousel.Item>        
      </ReactCarousel>
    </section>
  )
}

export default Carousel