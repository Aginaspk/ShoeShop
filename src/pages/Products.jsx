import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faPlus } from '@fortawesome/free-solid-svg-icons'

function Products() {
    const [type, setType] = useState(true);
    const [size,setSize] = useState(false);
    const [selectFilter,setSelectFilter] = useState(false);
    const [filter,setFilter] = useState('Recommended')

    const img = [
        "https://iili.io/2hNY5fn.jpg",
        "https://iili.io/2hN7cZP.jpg",
        "https://iili.io/2hNYpqX.jpg",
        "https://iili.io/2hNaoru.jpg",
        "https://iili.io/2hGj5ru.jpg",
        "https://iili.io/2hGjlmQ.jpg",
        "https://iili.io/2hGjj2a.jpg",
        "https://iili.io/2hGjkIp.jpg"
    ]
    return (
        <div className='p-2 z-0 px-2 2xl:mt-[140px] mt-[98px]'>
            <div className='w-full 2xl:flex'>
                <div className='2xl:w-[20%] hidden 2xl:block pl-5'>
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
                                <FontAwesomeIcon className='text-black/40' icon={faPlus} onClick={()=>setSize(!size)}/>
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
                <div className='2xl:w-[80%] flex flex-col items-end'>
                    <div className=' relative pr-5 '>
                        <h1 className='text-xl py-3' onClick={()=>setSelectFilter(!selectFilter)}>Sort by:{filter}</h1>
                        <div className={`absolute z-20 list-none text-lg shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] overflow-hidden transition-all duration-300 ease-in-out ${!selectFilter ? "max-h-0" : "max-h-[192px] py-1 px-2"}`}>
                            <li className={`pb-1 ${filter === "Recommended" ? "bg-[#e1e2df]" : "bg-white" }`} onClick={()=>{setFilter("Recommended");setSelectFilter(!selectFilter)}}>Recommended</li>
                            <li className={`pb-1 ${filter === "Newest" ? "bg-[#e1e2df]" : "bg-white" }`} onClick={()=>{setFilter("Newest");setSelectFilter(!selectFilter)}}>Newest</li>
                            <li className={`pb-1 ${filter === "Price (Low to High)" ? "bg-[#e1e2df]" : "bg-white" }`} onClick={()=>{setFilter("Price (Low to High)");setSelectFilter(!selectFilter)}}>Price (Low to High)</li>
                            <li className={`pb-1 ${filter === "Price (High to Low)" ? "bg-[#e1e2df]" : "bg-white" }`} onClick={()=>{setFilter("Price (High to Low)");setSelectFilter(!selectFilter)}}>Price (High to Low)</li>
                            <li className={`pb-1 ${filter === "A-Z" ? "bg-[#e1e2df]" : "bg-white" }`} onClick={()=>{setFilter("A-Z");setSelectFilter(!selectFilter)}}>A-Z</li>
                            <li className={`pb-1 ${filter === "Z-A" ? "bg-[#e1e2df]" : "bg-white" }`} onClick={()=>{setFilter("Z-A");setSelectFilter(!selectFilter)}}>Z-A</li>
                        </div>
                    </div>
                    <div className='w-full grid 2xl:grid-cols-3 grid-cols-1 2xl:border-0 border-y-2 '>
                        {img.map((item,index)=>{
                            return (
                                <div className='h-[500px] overflow-hidden flex flex-col border-black border-x-2 border-b-2' key={index}>
                                    <img src={item} alt="" className='h-[400px] w-full object-cover' />
                                    <div className='w-full bg-white'>
                                        <h1>Air Jordan</h1>
                                        <h1>$75.00</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products