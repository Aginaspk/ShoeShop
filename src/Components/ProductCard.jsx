import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ item, index }) {


    return (
        <Link to={`/products/${item._id}`} key={index}><div className='h-[500px] overflow-hidden flex flex-col shadow-[0_0_0_1px_black]'>
            <img src={item.images[0]} alt="" className='h-[400px] w-full object-cover' />
            <div className='w-full bg-white h-full px-3  py-5'>
                <h1 className='text-base my-1'>{item.name}</h1>
                <div className={`text-base flex gap-3 `}>
                <h1 className={`${item.sale > 0 && "line-through"}`}>${item.price}</h1>
                <h1 className={`${item.sale <= 0 && "hidden"} text-[#CF4616]`}>${item.sale}.00</h1>
                </div>
            </div>
        </div></Link>
    )
}

export default ProductCard