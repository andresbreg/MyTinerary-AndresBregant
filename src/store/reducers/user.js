import { createReducer } from "@reduxjs/toolkit"
import userActions from '../actions/user'

const initialState = {
  user: {email:'', id:''},
  login: false
}

const userReducer = createReducer(initialState, builder => {
  return builder
    .addCase(userActions.register.fulfilled, (state,action) => {
      return {user: action.payload.user}
    })
    .addCase(userActions.sign_in.fulfilled, (state,action) => {
      return {user: action.payload.user, login: true}
    })
    .addCase(userActions.authenticate.fulfilled, (state,action) => {
      return {user: action.payload.user}
    })
    .addCase(userActions.sign_out.fulfilled, (state,action) => {
      return initialState
    })
})

export default userReducer