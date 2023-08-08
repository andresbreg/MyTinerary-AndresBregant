import React from 'react'
import './style.css'

export default function index() {
  return (
    <main className="d-flex mx-5 my-5">
      <div className="card-body w-50 ms-5 ps-5 text-start">
        <h2 className="fw-bold">Find the perfect destination</h2>
        <p className="card-text my-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <a href="#" id="call-to-action-button" className="btn px-5">View More</a>
      </div>
      <div className="w-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-image-alt" viewBox="0 0 16 16">
          <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z"/>
        </svg>
      </div>
    </main>
  )
}