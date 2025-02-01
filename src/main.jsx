import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ViewProduct from './pages/ViewProduct.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:id',
        element: <ViewProduct />
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
)
