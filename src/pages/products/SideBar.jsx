import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function SideBar() {
    const [type, setType] = useState(true);
    const [size, setSize] = useState(false);
    return (
        <div className='2xl:w-[20%] hidden 2xl:block pl-5 '>
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
                        <FontAwesomeIcon className='text-black/40' icon={faPlus} onClick={() => setType(!type)} />
                    </div>
                    <div className={`list-none overflow-hidden transition-all duration-300 ease-in-out  ${!type ? "max-h-0" : "max-h-[102px]"}`}>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>Men</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>Woman</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>Sale</li></div>

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
                        <FontAwesomeIcon className='text-black/40' icon={faPlus} onClick={() => setSize(!size)} />
                    </div>
                    <div className={`list-none overflow-hidden transition-all duration-300 ease-in-out  ${!size ? "max-h-0" : "max-h-[179px]"}`}>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>7</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>8</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>9</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>10</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>11</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>All</li></div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SideBar