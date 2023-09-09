import './style.css'

const City = ({name,country,photo,summary}) => {

  return (
    <article className='mt-5 mb-4 mx-5'>
      <div className='city d-flex flex-column align-items-center flex-lg-row'>        
        <h3 className='city-title d-lg-none'>{name + ', ' + country}</h3>
        <img src={photo} alt={name + ', ' + country} className='city-image order-lg-3 my-4'/>
      <div className='city-text d-lg-flex flex-lg-column px-lg-5'>
        <h3 className='city-title d-none d-lg-block mt-lg-5'>{name + ', ' + country}</h3>
        <p className='my-lg-5'>{summary}</p>
      </div>  
      </div>
    </article>
  )
}

export default City