import './style.css'

export default function index({name,country,photo}) {
  return (
    <article className='position-relative'>      
        <img src={photo} alt={name + ', ' + country}/>
        <p className='card-title position-absolute py-1'>{name + ', ' + country}</p>
    </article>    
  )
}