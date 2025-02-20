import React from 'react'
import UsersList from '../../Components/admin/UsersList'
import { Outlet, useLocation } from 'react-router-dom'

function UsersView() {

  const location = useLocation()

  return (
    <>
      {location.pathname.startsWith('/admin/users/user') ? <Outlet /> : <UsersList />}

    </>
  )
}

export default UsersView