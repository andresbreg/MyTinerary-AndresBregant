import { Link as ButtonLink } from 'react-router-dom'
import { useDispatch } from "react-redux"
import userActions from '../../store/actions/user'
import './style.css'

const LogoutButton = () => {

  const dispatch = useDispatch()
  
  const handlerLogout = () => {
    try {
      dispatch(userActions.sign_out())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ButtonLink onClick={handlerLogout} to='/' id="logout-button" className="btn d-flex align-items-center fs-6 fw-bold me-2 ms-sm-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill me-sm-2" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      </svg>
      <span className='login-span d-inline ms-2'>Logout</span>
    </ButtonLink>
  )
}

export default LogoutButton