import React from 'react'
import Nav from '../Nav'

export default function index() {
  return (
    <header className="d-flex justify-content-between align-items-center my-3 mx-5 px-5">
      <a className="navbar-brand fs-4 fw-bold" href="#">MyTinerary</a>        
      <Nav/>
    </header>
  )
}