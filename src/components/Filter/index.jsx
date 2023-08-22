import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import City from '../../components/City'
import axios from 'axios'
import './style.css'

export default function index() {

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState({})
  const [cityState, setCityState] = useState(false)
  
  const handleSearch = () => {    
    axios('http://localhost:3000/api/filter', {params: {startsWith: search}})
      .then(response => setSearchResults(response.data))
      .catch(error => console.log(error))
  }
  
  const viewCity = city => {
    setSelectedCity(city)
    setCityState(true)
  }

  const backToCities = () => {
    setSelectedCity({})
    setCityState(false)
  }
  
  useEffect(() => handleSearch(), [])
  
  return (    
    <>
      {cityState == false ?      
        <section className='mb-5 mx-sm-5 px-2 px-lg-3'>
          <h2 className='section-title my-4 fw-bold mb-sm-5'>Cities</h2>
          <div className='filter d-flex justify-content-center mx-sm-2 mx-md-4 mx-lg-5'>
            <input type="text" placeholder="Search" value={search} onChange={event => setSearch(event.target.value)} className='form-control mb-5 mx-2'/>
            <button onClick={handleSearch} id="search-button" className='btn d-flex align-items-center fs-6 fw-bold mx-2 ms-sm-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search me-2" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              <span>Search</span>
            </button>
          </div>
          <div className='d-flex flex-wrap justify-content-center gap-2'>
            {searchResults.length > 0 ?        
            searchResults.map( (city,key) => 
              <div onClick={() => viewCity(city)} key={key} className='card-container'>
                <Card name={city.name} country={city.country} photo={city.photo}/>
              </div>
            ) :
            <h3 className='section-title mt-5'>We're sorry. No results for your search.</h3>}
          </div>      
        </section> :
        <section className='d-flex flex-column align-items-center'>
          <City name={selectedCity.name} country={selectedCity.country} photo={selectedCity.photo} summary={selectedCity.summary}/>
          <button onClick={backToCities} id='back-button' className='btn d-flex align-items-center fs-6 fw-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-left-circle me-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            <span>All Cities</span>
          </button>
          <div className='warning d-flex align-items-center justify-content-around py-2 px-3 my-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-diamond me-2" viewBox="0 0 16 16">
              <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            <h4 className='mt-1'>Under construction</h4>
          </div>
        </section>
      }
    </>    
  )
}