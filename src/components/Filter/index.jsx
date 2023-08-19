import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import axios from 'axios'
import './style.css'

export default function index() {

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = () => {    
    axios('http://localhost:3000/api/filter', {params: {startsWith: search}})
      .then(response => setSearchResults(response.data))
      .catch(error => console.log(error))
  }
  
  useEffect(() => handleSearch(), [])  
  
  return (
    <section className='mb-5 mx-5 px-5'>
      <h2 className='section-title my-4 fw-bold mb-sm-5'>Cities</h2>
      <div className='d-flex justify-content-center mx-5'>
        <input type="text" placeholder="Search" value={search} onChange={event => setSearch(event.target.value)} className='form-control w-50 mb-5'/>
        <button onClick={handleSearch} id="search-button" className='btn d-flex align-items-center fs-6 fw-bold ms-sm-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search me-sm-2" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <span>Search</span>
        </button>
      </div>  
      <div>
        {searchResults.length > 0 ?        
        searchResults.map( (city,key) => 
          <Card className='w-25'
            key = {key}
            name = {city.name}
            country = {city.country}
            photo = {city.photo}
          />
        ) :
        <h3 className='section-title mt-5'>We're sorry. No results for your search.</h3>}
      </div>
    </section>  
  )
}