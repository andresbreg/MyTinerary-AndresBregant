import Logo from '../../assets/logo/mytinerary-logo.png'
import Nav from '../Nav'
import LoginButton from '../Login-Button'
import { Link as HeaderLink } from 'react-router-dom'
import './style.css'

export default function index() {
  return (
    <header className="d-flex justify-content-between align-items-center py-3 py-lg-4 px-lg-5">
      <HeaderLink to="/">
        <img src={Logo} alt="MyTinerary Logo" className='logo navbar-brand'/>      
      </HeaderLink>
      <div className='nav-bar w-100 d-flex align-items-center pe-3'>
        <Nav/>
        <LoginButton/>
      </div>
    </header>
  )
}