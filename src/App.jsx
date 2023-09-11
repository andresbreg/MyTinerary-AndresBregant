import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import userActions from './store/actions/user'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cities from './pages/Cities'
import SignIn from './pages/Sign-In'
import './App.css'

function App() {

  const router = createBrowserRouter ([
    { path: '/', element: <Layout/>,
      children: [
        { path: '/', element: <Home/> },
        { path: '/cities', element: <Cities/> },
        { path: '/sign-in', element: <SignIn/> }
      ]
    }
  ])

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(userActions.authenticate())
  }, [])

  return (
    <>
      <RouterProvider router={router}/>    
    </>
  )
}

export default App