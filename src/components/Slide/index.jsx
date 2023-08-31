import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import axios from 'axios'

export default function index({since,to}) {

  const [cities, setCities] = useState([])
  
  const getCities = () => {   
    axios.get('http://localhost:3000/api/cities')
    .then(response => setCities(response.data))
    .catch(error => console.log(error))
  }  
  
  useEffect(() => getCities(), [])

  return (
    <section className='d-flex flex-wrap flex-row justify-content-center gap-2'>      
      {cities.slice(since,to).map((city,key) =>
        <Card key={key} name={city.name} country={city.country} photo={city.photo}/>
      )}
    </section>
  )
}