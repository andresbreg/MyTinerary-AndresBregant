import { createAction } from "@reduxjs/toolkit"

const get_cities = createAction ('get_cities', array => {
  return {payload:array}
})

const get_city_itineraries = createAction ('get_city_itineraries', array => {
  return {payload:array}
})

const citiesActions = { get_cities, get_city_itineraries }

export default citiesActions