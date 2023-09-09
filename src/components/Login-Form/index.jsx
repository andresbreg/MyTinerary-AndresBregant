import { useRef } from 'react'
import axios from 'axios'
import './style.css'

const LoginForm = () => {
  
  const emailInput = useRef()
  const passwordInput = useRef()

  const handlerLogin = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/api/user/login', {
      email: emailInput.current.value,
      password: passwordInput.current.value
    })
    .then(response => {
      console.log(response.data.token)
      localStorage.setItem('token', response.data.token)
  })
    .catch(error => console.log(error.response.data.message))
  }

  return (
    <>
      <form onSubmit={handlerLogin} className='rounded-4 py-5'>
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
        <div>
          <button type="submit" id='login-button' className='fw-semibold btn mt-3 px-4'>Login</button>
        </div>
      </form>
    </>
  )
}

export default LoginForm