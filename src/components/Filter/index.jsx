import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import citiesActions from '../../store/actions/cities'
import axios from 'axios'
import Card from '../../components/Card'
import City from '../../components/City'
import Itinerary from '../../components/Itinerary'
import './style.css'

export default function index() {

  let cities = useSelector(store => store.citiesReducer.cities)
  let cityItineraries = useSelector(store => store.citiesReducer.city_itineraries)
  
  const [search, setSearch] = useState('')
  const [selectedCity, setSelectedCity] = useState({})
  const [cityState, setCityState] = useState(false)
  
  const dispatch = useDispatch()

  const handleSearch = () => {    
    axios.get('http://localhost:3000/api/filter', {params: {startsWith: search}})
      .then (response => dispatch(citiesActions.get_cities(response.data)))
      .catch(error => console.log(error))
  }

  const getCityItineraries = (cityId) => {
    axios.get(`http://localhost:3000/api/city/itineraries/${cityId}`)
      .then (response => dispatch(citiesActions.get_city_itineraries(response.data)))      
      .catch(error => console.log(error))
  }

  const viewCity = city => {
    setSelectedCity(city)
    setCityState(true)
    getCityItineraries(city._id)
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
            {cities.length > 0 ?
            cities.map( (city,key) => 
              <div onClick={() => viewCity(city)} key={key} className='card-container'>
                <Card name={city.name} country={city.country} photo={city.photo}/>
              </div>
            ) :
            <h3 className='section-title mt-5'>We sorry. There are no itineraries for this city yet.</h3>}
          </div>      
        </section> :
        <section className='d-flex flex-column align-items-center'>
          <City name={selectedCity.name} country={selectedCity.country} photo={selectedCity.photo} summary={selectedCity.summary}/>
          <div>
            <h2 className='section-title mb-5'>Itineraries</h2>    
            {cityItineraries.length > 0 ?
            cityItineraries.map( (itinerary,key) => 
              <Itinerary key={key} name={itinerary.name} photo={itinerary.photo} author={itinerary.author} duration={itinerary.duration} price={itinerary.price} likes={itinerary.likes} hashtags={itinerary.hashtags}/>     
            ) :
            <h3 className='section-title mt-5'>There are no itineraries for this city yet.</h3>}
          </div>    
          <button onClick={backToCities} id='back-button' className='btn d-flex align-items-center fs-6 fw-bold my-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-left-circle me-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            <span>All Cities</span>
          </button>          
        </section>
      }
    </>    
  )
}