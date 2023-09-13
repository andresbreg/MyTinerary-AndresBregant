import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="676836138664-l608u4i7bf8n8l119vmk3c6b7btn7bie.apps.googleusercontent.com">
        <App/>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)