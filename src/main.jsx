import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './home'
import About from './about'
import Contact from './contact'
import ContactoAnadido from './contactoAnadido'
 
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<h1>Error</h1>
  },
  {
    path:'/about',
    element:<About/>,
  },
  {
    path:'/contact',
    element:<Contact/>,
    children:[{
      path:'/contact/:contactid',
      element:<ContactoAnadido/>,   
    },],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     
    </RouterProvider>
  </React.StrictMode>,
)
