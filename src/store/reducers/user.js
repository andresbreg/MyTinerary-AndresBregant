import { createReducer } from "@reduxjs/toolkit"
import userActions from '../actions/user'

const initialState = {
  user: {email:'', id:''}
}

const userReducer = createReducer(initialState, builder => {
  return builder
    .addCase(userActions.sign_in.fulfilled, (state,action) => {
      return {user: action.payload.user}
    })
    .addCase(userActions.authenticate.fulfilled, (state,action) => {
      return {user: action.payload.user}
    })
})

export default userReducer