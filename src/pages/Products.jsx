import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Products() {
    return (
        <div className='p-2 z-0 px-2 2xl:mt-[101px] mt-[98px]'>
            <div className='w-full'>
                <div className='w-[20%] pl-5'>
                    <h1 className='text-xl py-3 border-b-[1px] border-black/50 w-[75%]'>Browse By</h1>
                    <div className=' list-none pt-3 pb-5'>
                        <li className='py-1'>All Products</li>
                        <li className='py-1'>Men</li>
                        <li className='py-1'>Women</li>
                        <li className='py-1'>Sale</li>
                    </div>

                    <h1 className='text-xl py-3 border-b-[1px] border-black/50 w-[75%]'>Filtered By</h1>
                    <div className=''>
                        <div className='py-3 border-b-[1px] border-black/20 w-[75%]'>
                            <div className='flex items-center justify-between' >
                                <h1>Product Type</h1>
                                <FontAwesomeIcon className='text-black/40' icon={faPlus} />
                            </div>
                            <div className='list-none h-0 overflow-hidden'>
                                <div className='flex'><input type="checkbox" name="" id="" /><li>Men</li></div>
                                <div className='flex'><input type="checkbox" name="" id="" /><li>Woman</li></div>
                                <div className='flex'><input type="checkbox" name="" id="" /><li>Sale</li></div>

                            </div>
                        </div>
                        <div className='py-3 border-b-[1px] border-black/20 w-[75%]'>
                            <div className='flex items-center justify-between'>
                                <h1>Price</h1>
                                <FontAwesomeIcon className='text-black/40' icon={faPlus} />
                            </div>
                        </div>
                        <div className='py-3 border-b-[1px] border-black/20 w-[75%]'>
                            <div className='flex items-center justify-between'>
                                <h1>Size</h1>
                                <FontAwesomeIcon className='text-black/40' icon={faPlus} />
                            </div>
                        </div>
                    </div>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Products