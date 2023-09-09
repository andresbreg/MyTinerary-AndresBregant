import { Link as HeaderLink } from 'react-router-dom'
import Nav from '../Nav'
import LoginButton from '../Login-Button'
import Logo from '/mytinerary-logo.png'
import './style.css'

const Header = () => {
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

export default Header