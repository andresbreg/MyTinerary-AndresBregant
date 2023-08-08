import React from 'react'
import './style.css'
import Welcome from '../../assets/Welcome.jpg'

export default function index() {
  return (
    <main className="d-flex px-5 align-items-center">
      <div className="card-body w-50 ms-5 ps-3 text-start">
        <h2 className="fw-bold">Find the perfect destination</h2>
        <p className='fw-bolder slogan my-4'>Find your perfect trip designed by insiders who know and love their cities!</p>
        <p className="card-text my-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <a href="#" id="call-to-action-button" className="btn px-5">View More</a>
      </div>
      <div>
        <img src={Welcome} className='welcome-image'/>
      </div>
    </main>
  )
}