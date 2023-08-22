import React from 'react'
import './style.css'

export default function index() {
  return (
    <button id="login-button" className="btn d-flex align-items-center fs-6 fw-bold me-2 ms-sm-4" type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill me-sm-2" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      </svg>
      <span className='login-span d-sm-inline'>Login</span>
    </button>
  )
}