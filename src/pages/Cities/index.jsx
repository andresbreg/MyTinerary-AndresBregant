import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../components/Card'

export default function index() {
  
  const [cities, setCities] = useState([])
  
  useEffect(() => {
    axios('http://localhost:3000/api/cities')
    .then(response => {setCities(response.data)})      
    .catch(err => {console.log(err)})
  }, [])

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