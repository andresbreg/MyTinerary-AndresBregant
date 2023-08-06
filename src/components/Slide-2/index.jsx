import React from 'react'
import Estambul from '../../assets/Estambul.jpg'
import LaHabana from '../../assets/La-Habana.jpg'
import Moscu from '../../assets/Moscu.jpg'
import Paris from '../../assets/Paris.jpg'

export default function index() {
  return (
    <div className="d-flex flex-wrap gap-4">
        <div className="d-flex gap-4 justify-content-center">
          <img src={Estambul} alt="Estambul"/>
          <img src={LaHabana} alt="La Habana"/>
        </div>
        <div className="d-flex gap-4 justify-content-center">
          <img src={Moscu} alt="Moscú"/>
          <img src={Paris} alt="París"/>
        </div>
    </div>        
  )
}