import { createReducer } from "@reduxjs/toolkit"
import userActions from '../actions/user'

const initialState = {
  user: {email:'', id:''},
  login: false
}

const userReducer = createReducer(initialState, builder => {
  return builder
    .addCase(userActions.register.fulfilled, (state,action) => {
      return {...state, user: action.payload.user}
    })
    .addCase(userActions.sign_in.fulfilled, (state, action) => {
      if (action.payload) return {user: action.payload, login: true}
      else return { ...state, login: false}
    })
    .addCase(userActions.authenticate.fulfilled, (state,action) => {
      if (action.payload) return {user: action.payload, login: true}
      else return {...state, login: false}
    })
    .addCase(userActions.sign_out.fulfilled, () => {
      return initialState
    })
})

export default userReducer