import { Link as TextLink } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import userActions from '../../store/actions/user'
import './style.css'

const LoginForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const emailInput = useRef()
  const passwordInput = useRef()

  const handlerLogin = (event) => {
    event.preventDefault()
    const email = emailInput.current.value
    const password = passwordInput.current.value
    try {
      dispatch(userActions.sign_in({email,password}))
      navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handlerLogin} className='login-form rounded-4 py-5'>
        <h3 className='form-title mb-4'>Sign In</h3>
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
        <p>Don't have an account? <span></span>
          <TextLink to='/sign-up' id='text-link' className='fw-bolder'>
            Create one.
          </TextLink>
        </p>
        <div>
          <button type="submit" id='login-button' className='fw-semibold btn mt-3 px-4'>Login</button>
        </div>
      </form>
    </>
  )
}

export default LoginForm