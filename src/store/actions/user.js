import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

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

const sign_in = createAsyncThunk('sign_in', async payload => {
  try {
    let {email,password} = payload
    const user = await axios
      .post('http://localhost:3000/api/user/login', {
        email: email,
        password: password
      })
      .then(response => {
        console.log('User successfully logged in')
        localStorage.setItem('token', response.data.token)
        return response.data.user
      })
      .catch(error => console.log(error))
    return {user: user}
  }
  catch (error) {
    console.log(error.message)
  }
})

const authenticate = createAsyncThunk('authenticate', async () => {
  try {
    let token = localStorage.getItem('token')
    let user = await axios
      .post('http://localhost:3000/api/user/auth', null, {
        headers: {'Authorization': 'Bearer ' + token}
      })
      .then(response => {
        console.log('User successfully authenticated')
        localStorage.setItem('token', response.data.token)
        return response.data.user
      })
      .catch(error => console.log(error))
    return {user: user}
  } 
  catch (error) {
    console.log(error.message)
  }
})

const sign_out = createAsyncThunk('sign_out', async () => {
  try {
    await axios
    .post('http://localhost:3000/api/user/logout')
    .then(localStorage.removeItem('token'))
  }
  catch (error) {
    console.log(error.message)
  }
})

const userActions = {register, sign_in, authenticate, sign_out}

export default userActions