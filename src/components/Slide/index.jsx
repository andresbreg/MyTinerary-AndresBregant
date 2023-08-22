import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import axios from 'axios'

export default function index() {

  const [cities, setCities] = useState([])
  
  const createCards = () => {   
    axios('http://localhost:3000/api/cities')
    .then(response => setCities(response.data)      )
    .catch(error => console.log(error))
  }  
  
  useEffect(() => createCards(), [])

  return (
    <section className='d-flex justify-content-center gap-2'>

        {cities.map( (city,key) =>
          <Card key={key} name={city.name} country={city.country} photo={city.photo}/>
          )}      
      
    </section>
  )
}