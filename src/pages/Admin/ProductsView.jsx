import React, { useState } from "react";
import ProductsList from "../../Components/admin/ProductsList";
import { Box, Plus, Search, X } from "lucide-react";
import AddProduct from "./AddProduct";

function ProductsView() {

  const [features, setFetures] = useState(true)
  const [productUpdate, setProductUpdate] = useState("products")
  const closeTab = ()=>{
    setProductUpdate("products")
  }
  return (
    <>
      {productUpdate === "products" ? (<><div className="flex w-full px-1 justify-between py-5 items-center">
        <h1>Products</h1>
        <div className="flex gap-5">
          <div onClick={() => setProductUpdate('addProduct')} className="bg-black w-[100px] h-[41.6px] text-white flex gap-2 items-center justify-center rounded-sm"><Plus />Add</div>
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
        <ProductsList /></>) :
        <>
          <div className='flex justify-between px-5 pt-3 pb-1'>
            <div className="flex text-lg"><Box/>Add product</div>
            <div className="text-lg cursor-pointer" onClick={()=>setProductUpdate("products")}><X /></div>
          </div>
          <AddProduct closeTab={closeTab}/>
        </>}
    </>
  );
}

export default ProductsView;
