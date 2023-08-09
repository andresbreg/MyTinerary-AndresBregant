import React from 'react'
import Logo from '../../assets/logo/mytinerary-logo.png'
import Nav from '../Nav'
import LoginButton from '../Login-Button'
import { Link as HeaderLink } from 'react-router-dom'
import './style.css'

export default function index() {
  return (
    <header className="d-flex justify-content-between align-items-center px-5">
      <HeaderLink to="/">
        <img src={Logo} alt="MyTinerary Logo" className='logo navbar-brand'/>      
      </HeaderLink>
      <div className='d-flex align-items-center'>
        <Nav/>
        <LoginButton/>
      </div>
    </header>
  )
}