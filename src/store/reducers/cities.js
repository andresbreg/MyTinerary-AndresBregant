import { createReducer } from "@reduxjs/toolkit"
import citiesActions from '../actions/cities'

const initialState = {
  cities: [],
  city_itineraries: []
}

const citiesReducer = createReducer (initialState, builder => {
  return builder
    .addCase (citiesActions.get_cities, (state,action) => {
      const newState = {...state, cities: action.payload}
      return newState  
  })
    .addCase (citiesActions.get_city_itineraries, (state,action) => {
      const newState = {...state, city_itineraries: action.payload}
      return newState
  })
})

export default citiesReducer