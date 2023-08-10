import './style.css'

export default function index({name,country,photo}) {
  return (
    <article className='d-inline position-relative'>
      <img src={photo} alt={name + ', ' + country} className='m-1'/>
      <div className='card-title position-absolute d-flex align-items-center m-1 p-1'>
        <p className='city m-0'>{name + ','}</p>
        <p className='country m-0 ms-1'>{country}</p>
      </div>      
    </article>
  )
}