import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/products/Products.jsx'
import ViewProduct from './pages/ViewProduct.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/products/:id',
        element:<ViewProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
