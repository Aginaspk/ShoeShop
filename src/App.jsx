import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useDispatch } from 'react-redux'
import { setProducts, setStatus, setError } from './features/products/ProductSlice'
import axios from 'axios'



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setStatus('pending'));
      try {
        const response = await axios.get('http://localhost:4000/shoes');
        console.log(response.data);

        dispatch(setProducts(response.data));
      } catch (error) {
        dispatch(setError('Failed to fetch products'));
      }
    };

    fetchProducts();


    


  }, [dispatch]);



  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
