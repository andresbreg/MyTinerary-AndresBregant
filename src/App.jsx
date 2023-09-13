import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import userActions from './store/actions/user'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cities from './pages/Cities'
import SignIn from './pages/Sign-In'
import SignUp from './pages/Sign-Up'
import './App.css'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(userActions.authenticate())
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/cities' element={<Cities/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/sign-in' element={<SignIn/>}/>            
              <Route path='/sign-up' element={<SignUp/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App