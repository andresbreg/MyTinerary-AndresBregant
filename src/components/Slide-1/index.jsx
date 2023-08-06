import React from 'react'
import Bangkok from '../../assets/Bangkok.jpg'
import CiudadDelCabo from '../../assets/Ciudad-del-Cabo.jpg'
import Cuzco from '../../assets/Cuzco.jpg'
import ElCairo from '../../assets/El-Cairo.jpg'

export default function index() {
  return (
    <div className="d-flex flex-wrap gap-4">
      <div className="d-flex gap-4 justify-content-center">
        <img src={Bangkok} alt="Bangkok"/>
        <img src={CiudadDelCabo} alt="Ciudad Del Cabo"/>
      </div>
      <div className="d-flex gap-4 justify-content-center">
        <img src={Cuzco} alt="Cuzco"/>
        <img src={ElCairo} alt="El Cairo"/>
      </div>
    </div>
  )
}