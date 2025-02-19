import React from 'react'
import ProductsList from '../../Components/admin/ProductsList'
import Summary from '../../Components/admin/Summary'
import { Search } from 'lucide-react'

function Overview() {
  return (
    <>
      <Summary />
      <div className="flex w-full px-1 justify-between py-5 items-center">
        <h1>Products</h1>
        <div className="flex gap-5">
          <div className="w-[200px] relative">
            <Search className=" absolute text-black/30 top-2 left-1" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-sm border-black/20 pl-8"
            />
          </div>
        </div>
      </div>
      <ProductsList />
    </>
  )
}

export default Overview