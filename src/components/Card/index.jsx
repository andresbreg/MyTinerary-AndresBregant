import './style.css'

const Card = ({name,country,photo}) => {
  return (
    <article className='city-card position-relative'>      
      <img src={photo} alt={name + ', ' + country}/>
      <p className='card-title position-absolute py-1'>{name + ', ' + country}</p>
    </article>
  )
}

export default Card