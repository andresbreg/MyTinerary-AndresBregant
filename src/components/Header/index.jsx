import React from 'react'
import Logo from '../../assets/logo/mytinerary-logo.png'
import Nav from '../Nav'
import './style.css'

export default function index() {
  return (
    <header className="d-flex justify-content-between align-items-center px-5">
      <a href="#">
        <img src={Logo} alt="MyTinerary Logo" className='logo navbar-brand'/>      
      </a>      
      <Nav/>
    </header>
  )
}