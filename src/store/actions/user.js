import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import Swal from "sweetalert2"

const register = createAsyncThunk('register', async payload => {
  try {
    let {name, lastName, email, password, picture, country} = payload
    const user = await axios    
      .post('http://localhost:3000/api/user/register', {
        name: name,
        last_name: lastName,
        email: email,
        password: password,
        picture: picture,
        country: country
      })
      .then(response => {
        console.log('User successfully register')
        return response.data.user
      })
      .catch(error => console.log(error.response.data.messages))
    return {user: user}
  }
  catch (error) {
    console.log(error.message)
  }
})

const sign_in = createAsyncThunk('sign_in', async (payload, {rejectWithValue}) => {
  try {
    let {email,password} = payload
    const response = await axios.post('http://localhost:3000/api/user/login', {
      email: email,
      password: password,
    })
    if (response.data.user) {
      // console.log('User successfully logged in')
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton: true,
        timer: 4000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })        
      Toast.fire({
        icon: 'success',
        title: 'Successful login'
      })
      localStorage.setItem('token', response.data.token)
      return response.data.user
    } else {
      console.log('Login failed');
      return rejectWithValue({message: 'Login failed'})
    }
  } catch (error) {
    console.log('Login error:', error)
    return rejectWithValue(error)
  }
})

const authenticate = createAsyncThunk('authenticate', async (_, {rejectWithValue}) => {
  try {
    let token = localStorage.getItem('token')
    let response = await axios.post('http://localhost:3000/api/user/auth', null, {
      headers: { 'Authorization': 'Bearer ' + token }
    })
    if (response.data.user) {
      console.log('User successfully authenticated')
      localStorage.setItem('token', response.data.token)
      return response.data.user
    } else {
      console.log('Authentication failed')
      return rejectWithValue({message: 'Authentication failed'})
    }
  } catch (error) {
    console.log('Authentication error: ', error)
    return rejectWithValue(error);
  }
})

const sign_out = createAsyncThunk('sign_out', async () => {
  try {
    await axios
    .post('http://localhost:3000/api/user/logout')
    .then(localStorage.removeItem('token'))
    .then(console.log('Successful logout'))    
  }
  catch (error) {
    console.log(error.message)
  }
})

const userActions = {register, sign_in, authenticate, sign_out}

export default userActions