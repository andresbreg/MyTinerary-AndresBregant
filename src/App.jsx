import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header class="d-flex justify-content-between align-items-center my-3 mx-5 px-5">
        <a class="navbar-brand fs-4 fw-bold" href="#">MyTinerary</a>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                  <a class="nav-link active fs-6 fw-bold" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link fs-6 fw-bold" href="#">Cities</a>
                </li>        
              </ul>      
              <button class="btn purple-button d-flex align-items-center fs-6 fw-bold ms-4" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill me-2" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                Login
              </button>      
            </div>
          </div>
        </nav>        
      </header>
      <main class="d-flex mx-5">
        <div class="card-body w-50 ms-5 ps-5 text-start">
          <h2 class="card-title fw-bold">Find the perfect destination</h2>
          <p class="card-text my-4">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <a href="#" class="btn purple-button px-5">View More</a>
        </div>
        <div class="w-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-image-alt" viewBox="0 0 16 16">
            <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z"/>
          </svg>
        </div>
      </main>
      <footer>        
      </footer>
    </>
  )
}

export default App
