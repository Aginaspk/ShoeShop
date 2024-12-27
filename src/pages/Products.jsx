import React, { useState, useEffect } from 'react'
import ProductCard from '../Components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { setFilterShoe } from '../features/products/ProductSlice';

function Products() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)


    const filterProduct = useSelector(state => state.products.filterProduct);
    const displayProducts = products.filter(product => {
        if (filterProduct === 'all') return product;
        else if (filterProduct === 'Women') {
            return product.gender === "Women";
        }
        else if (filterProduct === "Men") {
            return product.gender === 'Men'
        }
        else if(filterProduct === "Sale"){
            return product.sale > 0;
        }
    })


    const [type, setType] = useState(true);
    const [size, setSize] = useState(false);
    const [selectFilter, setSelectFilter] = useState(false);
    const [filter, setFilter] = useState('Recommended')
    const [filterNavOpen, setFilterNavOpen] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const browseShoes = (value) => {
        dispatch(setFilterShoe(value));
    }


    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;
    return (
        <div className='p-2 z-0 px-2 xl:mt-[140px] mt-[98px] xl:mb-[500px] '>
            <div className={` fixed top-0 left-0  w-[100%] h-screen bg-white z-50 xl:hidden sm-xl:hidden block transform transition-transform duration-300  ${!filterNavOpen ? "translate-x-full" : "translate-x-0"}`}>
                <div className='flex justify-between  border-b-2 border-black/30 items-center px-2 py-3'>
                    <div className=' text-xl text-black px-5 py-[9px]'>Filter & Sort</div>
                    <div className='px-5 py-2 text-lg text-black' onClick={() => setFilterNavOpen(!filterNavOpen)}><FontAwesomeIcon icon={faX} /></div>
                </div>




                <div className='py-3 mx-5 border-b-[1px] border-black/20 '>
                    <div className='flex items-center justify-between  py- text-xl3' >
                        <h1>Sort by:</h1>
                        <FontAwesomeIcon className='text-black/40' icon={faPlus} onClick={() => setSelectFilter(!selectFilter)} />
                    </div>
                    <div className={`list-none overflow-hidden transition-all duration-300 ease-in-out text-[16px]  ${!selectFilter ? "max-h-0" : "max-h-[154px]"}`}>
                        <div className='flex'><input className='mr-2' type="radio" name="" id="" /><li>Recommended</li></div>
                        <div className='flex'><input className='mr-2' type="radio" name="" id="" /><li>Newest</li></div>
                        <div className='flex'><input className='mr-2' type="radio" name="" id="" /><li>Price (low to high)</li></div>
                        <div className='flex'><input className='mr-2' type="radio" name="" id="" /><li>Price (high to low)</li></div>
                        <div className='flex'><input className='mr-2' type="radio" name="" id="" /><li>Name A - Z</li></div>
                        <div className='flex'><input className='mr-2' type="radio" name="" id="" /><li>Name Z - A</li></div>

                    </div>
                </div>




                <div className='py-3 mx-5 border-b-[1px] border-black/20 '>
                    <div className='flex items-center justify-between  py- text-xl3' >
                        <h1>Product Type</h1>
                        <FontAwesomeIcon className='text-black/40' icon={faPlus} onClick={() => setType(!type)} />
                    </div>
                    <div className={`list-none overflow-hidden transition-all duration-300 ease-in-out text-[16px]  ${!type ? "max-h-0" : "max-h-[102px]"}`}>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>Men</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>Woman</li></div>
                        <div className='flex'><input className='mr-2' type="checkbox" name="" id="" /><li>Sale</li></div>

                    </div>
                </div>





                <div className='py-3 mx-5 border-b-[1px] border-black/20 '>
                    <div className='flex items-center justify-between py-3 text-xl'>
                        <h1>Price</h1>
                        <FontAwesomeIcon className='text-black/40' icon={faPlus} />
                    </div>

                </div>



                <div className='py-3 mx-5 border-b-[1px] border-black/20 '>
                    <div className='flex items-center justify-between py-3 text-xl'>
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




            <div className='w-full xl:flex '>
                <div className='xl:w-[20%] hidden xl:block pl-5 '>
                    <h1 className='text-xl py-3 border-b-[1px] border-black/50 w-[75%]'>Browse By</h1>
                    <div className=' list-none pt-3 pb-5'>
                        <li className={`py-1 cursor-pointer pb-[1px] ${filterProduct === `all` && "underline"}`} onClick={() => browseShoes(`all`)}>All Products</li>
                        <li className={`py-1 cursor-pointer pb-[1px] ${filterProduct === `Men` && "underline"}`} onClick={() => browseShoes(`Men`)}>Men</li>
                        <li className={`py-1 cursor-pointer pb-[1px] ${filterProduct === `Women` && "underline"}`} onClick={() => browseShoes(`Women`)}>Women</li>
                        <li className={`py-1 cursor-pointer pb-[1px] ${filterProduct === `Sale` && "underline"}`} onClick={() => browseShoes(`Sale`)}>Sale</li>
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

                <div className='xl:w-[80%] flex flex-col items-end mt-10 xl:mt-0 '>
                    <div className=' relative  w-[250px] text-center xl:block hidden '>
                        <h1 className='text-xl py-3 pr-2' onClick={() => setSelectFilter(!selectFilter)}>Sort by:{filter}</h1>
                        <div className={`absolute w-full z-20 list-none text-left text-sm shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] overflow-hidden transition-all duration-300 ease-in-out px-3 ${!selectFilter ? "max-h-0" : "max-h-[192px]"}`}>
                            <li className={`pb-1 px-2 ${filter === "Recommended" ? "bg-[#e1e2df]" : "bg-white"}`} onClick={() => { setFilter("Recommended"); setSelectFilter(!selectFilter) }}>Recommended</li>
                            <li className={`pb-1 px-2 ${filter === "Newest" ? "bg-[#e1e2df]" : "bg-white"}`} onClick={() => { setFilter("Newest"); setSelectFilter(!selectFilter) }}>Newest</li>
                            <li className={`pb-1 px-2 ${filter === "Price (Low to High)" ? "bg-[#e1e2df]" : "bg-white"}`} onClick={() => { setFilter("Price (Low to High)"); setSelectFilter(!selectFilter) }}>Price (Low to High)</li>
                            <li className={`pb-1 px-2 ${filter === "Price (High to Low)" ? "bg-[#e1e2df]" : "bg-white"}`} onClick={() => { setFilter("Price (High to Low)"); setSelectFilter(!selectFilter) }}>Price (High to Low)</li>
                            <li className={`pb-1 px-2 ${filter === "A-Z" ? "bg-[#e1e2df]" : "bg-white"}`} onClick={() => { setFilter("A-Z"); setSelectFilter(!selectFilter) }}>A-Z</li>
                            <li className={`pb-1 px-2 ${filter === "Z-A" ? "bg-[#e1e2df]" : "bg-white"}`} onClick={() => { setFilter("Z-A"); setSelectFilter(!selectFilter) }}>Z-A</li>
                        </div>
                    </div>



                    <div>
                        <h1 className='text-xl py-3 pr-2 xl:hidden block underline' onClick={() => setFilterNavOpen(!filterNavOpen)}>Filter & Sort</h1>

                    </div>
                    <div className='w-full grid xl:grid-cols-3 grid-cols-1 xl:border-0 border-y-2 mr-[1px] '>

                        {displayProducts.map((item, index) => {
                            return (
                                <ProductCard key={index} item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products