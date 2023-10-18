import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './home'
import About from './about'
import Contact from './contact'

const router = createBrowserRouter([
  {
    path:'/',
    element:Home,
  },
  {
    path:'/about',
    element:About,
  },
  {
    path:'/contact',
    element:Contact,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
