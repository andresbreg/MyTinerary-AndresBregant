import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Cities from './pages/Cities'

function App() {

  const router = createBrowserRouter ([
    { path: '/', element: <Layout/>,
      children: [
        { path: '/', element: <Home/> }
      ]
    },
    { path: '/cities', element: <Layout/>,
      children: [
        { path: '/cities', element: <Cities/> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>    
    </>
  )
}

export default App