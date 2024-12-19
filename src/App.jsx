
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbayr'
import Home from './pages/Home'
import Products from './pages/Products'
import ViewProduct from './pages/ViewProduct'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
