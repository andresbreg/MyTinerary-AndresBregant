import React from 'react'
import RioDeJaneiro from '../../assets/Rio-de-Janeiro.jpg'
import Roma from '../../assets/Roma.jpg'
import Shanghai from '../../assets/Shanghai.jpg'
import Sidney from '../../assets/Sidney.jpg'

export default function index() {
  return (
    <div className="d-flex flex-wrap gap-4">
      <div className="d-flex gap-4 justify-content-center">
          <img src={RioDeJaneiro} alt="Río de Janeiro"/>
          <img src={Roma} alt="Roma"/>
        </div>
        <div className="d-flex gap-4 justify-content-center">
          <img src={Shanghai} alt="Shanghái"/>
          <img src={Sidney} alt="Sidney"/>
        </div>
    </div>        
  )
}