import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({item,index}) { 
       
    return (
        <Link to={`/products/${index + 1}`}><div className='h-[500px] overflow-hidden flex flex-col shadow-[0_0_0_1px_black]'>
            <img src={item} alt="" className='h-[400px] w-full object-cover' />
            <div className='w-full bg-white h-full px-6 text-lg py-5'>
                <h1>Air Jordan</h1>
                <h1>$75.00</h1>
            </div>
        </div></Link>
    )
}

export default ProductCard