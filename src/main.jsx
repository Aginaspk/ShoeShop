import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ViewProduct from './pages/ViewProduct.jsx'
import { persistor, store } from './app/store.js'
import { Provider } from 'react-redux'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import HomeAdmin from './pages/Admin/HomeAdmin.jsx'
import AdminLogin from './pages/Admin/AdminLogin.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import AddProduct from './pages/Admin/AddProduct.jsx'
import Overview from './pages/Admin/Overview.jsx'
import ProductsView from './pages/Admin/ProductsView.jsx'
import UsersView from './pages/Admin/UsersView.jsx'
import Analytics from './pages/Admin/Analytics.jsx'
import Orders from './pages/Admin/Orders.jsx'
import OrderSuccess from './pages/OrderSuccess.jsx'
import ProtectedRoutes from '../util/ProtectedRoutes.jsx'
import { Toaster } from 'react-hot-toast'
import UserDetail from './pages/Admin/UserDetail.jsx'
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
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      },



    ]
  },
  {
    path: "/success/:sessionId",
    element: <OrderSuccess />
  },
  {
    path: '/adminLogin',
    element: <AdminLogin />
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/admin',
        element: <HomeAdmin />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: 'products',
            element: <ProductsView />
          },
          {
            path: 'users',
            element: <UsersView />,
            children: [
              {
                path: 'user/:id',
                element: <UserDetail />
              }
            ]
          },
          {
            path: 'analytics',
            element: <Analytics />
          },
          {
            path: 'orders',
            element: <Orders />
          }

        ]
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
        <Toaster
        />
      </PersistGate>
    </Provider>
  </StrictMode>
)
