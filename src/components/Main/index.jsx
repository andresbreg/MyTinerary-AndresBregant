import { Link as MainLink } from 'react-router-dom'
import Welcome from '/Welcome.jpg'
import './style.css'

export default function index() {
  return (
    <main className="d-flex flex-column flex-lg-row align-items-center py-3 px-4 py-lg-5">
      <div className="card-body mx-lg-4 ps-xl-3 text-center text-lg-start">
        <h2 className="fw-bold">Find the perfect destination</h2>
        <p className='fw-bolder slogan my-4'>Find your perfect trip designed by insiders who know and love their cities!</p>
        <p className="card-text my-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <div className='d-flex justify-content-center justify-content-lg-start mb-2'>
          <MainLink to="/cities" id="call-to-action" className="btn px-5 fw-medium">View More</MainLink>
        </div>
      </div>
      <div className='me-lg-4'>
        <img src={Welcome} className='welcome-image my-5 my-lg-1'/>
      </div>
    </main>
  )
}