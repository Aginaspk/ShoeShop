import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {

    const {isAuth,isAdmin} = useSelector(state=>state.auth)
  return isAuth && isAdmin ? <Outlet/> : <Navigate to={'/'}/>;
}

export default ProtectedRoutes