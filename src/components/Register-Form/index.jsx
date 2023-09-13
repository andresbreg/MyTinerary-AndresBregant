import { Link as TextLink } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import userActions from '../../store/actions/user'
import data from '../../data.json'
import './style.css'

const RegisterForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const nameInput = useRef()
  const lastNameInput = useRef()
  const emailInput = useRef()
  const passwordInput = useRef()
  const pictureInput = useRef()
  const countrySelect = useRef()

  const handlerSubmit = (event) => {
    event.preventDefault()
    const name = nameInput.current.value
    const lastName = lastNameInput.current.value
    const email = emailInput.current.value
    const password = passwordInput.current.value
    const picture = pictureInput.current.value
    const country = countrySelect.current.value
    try {
      dispatch(userActions.register({name,lastName,email,password,picture,country}))
      navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handlerSubmit} className='register-form rounded-4 my-4 p-4'>
        <h3 className='form-title mb-4'>Sign Up</h3>
        <div className='d-flex gap-4'>
          <div>
            <label htmlFor="name" className='fw-semibold mb-2'>Name</label>
            <br/>
            <input ref={nameInput} type="text" id="name" name="name" className='border border-primary rounded-4 focus-ring mb-3 py-1 px-3'/>
          </div>
          <div>
            <label htmlFor="last-name" className='fw-semibold mb-2'>Last Name</label>
            <br/>
            <input ref={lastNameInput} type="text" id="last-name" name="last-name" className='border border-primary rounded-4 focus-ring mb-3 py-1 px-3'/>
          </div>
        </div>
        <div className='d-flex gap-4'>
          <div>
            <label htmlFor="email" className='fw-semibold mb-2'>Email</label>
            <br/>
            <input ref={emailInput} type="email" id="email" name="email" className='border border-primary rounded-4 focus-ring mb-3 py-1 px-3'/>
          </div>
          <div>
            <label htmlFor="password" className='fw-semibold mb-2'>Password</label>
            <br/>
            <input ref={passwordInput} type="password" id="password" name="password" className='border border-primary rounded-4 focus-ring mb-3 py-1 px-3'/>
          </div>
        </div>
        <div className='d-flex gap-4'>
          <div>
            <label htmlFor="picture" className='fw-semibold mb-2'>Picture</label>
            <br/>
            <input ref={pictureInput} type="text" id="picture" name="picture" className='border border-primary rounded-4 focus-ring mb-3 py-1 px-3'/>
          </div>
          <div>
            <label htmlFor="country" className='fw-semibold mb-2'>Country</label>
            <br/>
            <select ref={countrySelect} type="select" id="country" name="country" className='border border-primary rounded-4 focus-ring mb-3 py-1 px-3'>
              <option value="">Select your country</option>
              {data.map((country,key) => (
              <option key={key} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>
        <p>Already have an account? <span></span>
          <TextLink to='/sign-in' id='text-link' className='fw-bolder'>
            Sign in.
          </TextLink>
        </p>
        <div>
          <button type="submit" id='register-button' className='fw-semibold btn mt-3 px-4'>Register</button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm