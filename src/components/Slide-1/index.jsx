import Data from '../../data.json'
import Card from '../../components/Card'

export default function index() {

  let cities = []

  function createSlide(array) {
    for (let i=0; i<3; i++) {
      cities.push(array.slice(i*4,(i+1)*4))
    }
  }

  createSlide(Data)
  console.log(cities);

  return (
    <section>      
      {cities[0].map( (city,key) => 
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