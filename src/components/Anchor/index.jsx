import React from 'react'

export default function index({name,href}) {
  return (
    <a className="nav-link fs-6 fw-bold" href={href}>{name}</a>
  )
}