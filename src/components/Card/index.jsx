import React from 'react'
import './style.css'

export default function index({name,country,photo}) {
  return (
    <article className='d-inline position-relative'>
      <img src={photo} alt={name + ', ' + country} className='m-1'/>
      <div className='city-card-name position-absolute'>
        <h2>{name}</h2>
        <p className='fw-bolder'>{country}</p>
      </div>
    </article>
  )
}