import React from 'react'
import Data from '../../data.json'
import Card from '../../components/Card'

export default function index() {

  let cities = Data.slice(4,8);

  return (
    <section>
      {cities.map( (city,key) => 
        <Card
        key = {key}
        name = {city.name}
        country = {city.country}
        photo = {city.photo}
        />
      )}
    </section>
  )
}