// import Anchor from '../Anchor'
import { Link as NavLink } from 'react-router-dom'
import './style.css'

export default function index() {
  
  let anchors = [
    { name:'Home', href:'/' },
    { name:'Cities', href:'/cities' }
  ]
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-inline">
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="navbar-nav">
            <li className="nav-item d-flex mx-2">
              {anchors.map((each,key) => 
                <NavLink to={each.href} key={key} className='nav-link'>
                  <span className="nav-link fw-bold mx-2">{each.name}</span>
                </NavLink>
              )}
            </li>
          </ul>
        {/* </div> */}
      </div>
    </nav>
  )
}