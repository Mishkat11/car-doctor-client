import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './Routes/MainRoute'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={MainRoute}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
