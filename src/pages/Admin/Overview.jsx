import React from 'react'
import ProductsList from '../../Components/admin/ProductsList'
import Summary from '../../Components/admin/Summary'

function Overview() {
  return (
    <>
    <Summary/>
    <ProductsList features={false}/>
    </>
  )
}

export default Overview