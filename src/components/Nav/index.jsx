import React from 'react'
import Anchor from '../Anchor'

export default function index() {
  
  let anchors = [
    { name:'Home', href:'#' },
    { name:'Cities', href:'#' }
  ]
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex mx-2">
              {anchors.map((each,key) => <Anchor key={key} name={each.name} href={each.href}/>)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}