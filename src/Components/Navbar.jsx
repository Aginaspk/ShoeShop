import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, LucideShoppingBag, MenuIcon, Search, UserCircle2, X } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterShoe } from '../features/products/ProductSlice'
import { setSearchInput,setIsLoginOpen } from '../features/others/navbarSlice'
import Login from '../pages/Login'




function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const dispatch = useDispatch();
  const ref = useRef();

  const { searchInput } = useSelector(state => state.navbar)
  const { products, status } = useSelector(state => state.products)
  const {isLoginOpen} = useSelector((state)=>state.navbar)

  const openSideNav = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navToProduct = (val) => {
    dispatch(setFilterShoe(val))
  }

  const getSearchInput = (e) => {
    dispatch(setSearchInput(e.target.value))
    console.log(searchInput);

  }
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchInput.trim().toLowerCase())

  );
  console.log(filteredProducts);



  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };
  if (status === 'loading') { return <div>Loading...</div> }
  if (status === 'failed') { return <div>{error}</div> }
  return (
    <div className='overflow-x-hidden w-full fixed z-20 top-0 bg-white'>

      <Login/>


      {/* sidebar */}
      <div className={`fixed top-0 left-0  w-[100%] h-screen bg-[#CF4616] z-50 xl:hidden sm-xl:hidden block transform transition-transform duration-300  ${!isSidebarOpen ? "translate-x-full" : "translate-x-0"}`}>
        <div className='flex justify-between text-white w-full my-5 px-5'>
          <div className='flex items-center logos'>
            <h1 className=' text-[50px] line-through xl:text-center xl:px-0 pl-2'>as</h1>
            <h1 className='pt-[5px]'>awesome sneakers</h1>
          </div>
          <div onClick={openSideNav}>
            <X size={40} className='pt-[6px]' />
          </div>

        </div>
        <div className='flex flex-col items-center text-2xl mt-5 w-full  text-white '>
          <h1 className='py-5'>Men</h1>
          <h1 className='py-5'>Woman</h1>
          <h1 className='py-5'>Sale</h1>
          <h1 className='py-5'>Contact</h1>
          <h1 className='py-5'>About</h1>

        </div>
        <div className='flex w-full justify-center mt-5'>
          <h1 className='text-white text-xl flex gap-2'><UserCircle2 size={25} />Log in</h1>
        </div>

      </div>





      <div className=' '>
        <div className='border-b-2 border-black'>
          <div className='h-10 bg-[#1A2508] w-full flex justify-center items-center'>
            <h1 className='text-[13px] leading-[1.6em] font-normal tracking-wider text-white'>Free Shipping for orders over $50</h1>
          </div>
          <div className='w-full flex justify-between xl:block '>
          <Link to={'/'}><h1 className='logos text-[50px] line-through xl:text-center xl:px-0 pl-2'>as</h1></Link>
            <h1 className='xl:hidden lg:hidden block' onClick={openSideNav}><MenuIcon size={40} /></h1>
          </div>



          <div className='flex justify-between py-3 items-center px-2 z-20 '>
            <div className='xl:flex relative'>
              <h1 className=' absolute left-0 top-[10px] z-30'><Search size={20} /></h1>

              <div className='relative '>
                <input
                  onChange={getSearchInput}
                  className='logos pl-7 xl:w-[250px] w-[150px] border-transparent focus:border-b-black/15  focus:border-transparent focus:ring-0 '
                  placeholder='SEARCH...'
                  type="text"
                  name=""
                  id=""
                  ref={ref}
                  spellCheck='false' />
                <div className=' fixed w-auto border-[1px] border-black/15'>
                  {filteredProducts.length <= 0 && <div className='h-[75px] w-[150px] xl:w-[250px] px-5 bg-white flex justify-center items-center'>No Item Found..</div>}
                  {searchInput.trim() !== '' && filteredProducts.length > 0 && filteredProducts.map((item, index) => {
                    return (
                      <Link onClick={() => { dispatch(setSearchInput('')); ref.current.value = '' }} key={index} to={`/products/${item.id}`}>
                        <div className={`flex h-[75px] bg-white items-center px-3 py-[10px] `}>
                          <img className='w-[73px] h-[55px] object-contain' src={item.images[0]} alt="" />
                          <h1 className='text-[10px] text-ellipsis whitespace-nowrap text-left'>{item.name}</h1>
                        </div>
                      </Link>
                    )
                  })}

                </div>
              </div>

            </div>



            <div className='xl:flex gap-10 hidden '>
              <Link to={'/products'}><h1 onClick={() => navToProduct('Men')}>Men</h1></Link>
              <Link to={'/products'}><h1 onClick={() => navToProduct('Women')}>Women</h1></Link>
              <Link to={'/products'}><h1 onClick={() => navToProduct('Sale')}>Sale</h1></Link>
              <h1 onClick={scrollToFooter} className=' cursor-pointer'>Contact</h1>
              <h1 onClick={scrollToFooter} className=' cursor-pointer'>About</h1>

            </div>
            <div className='flex gap-8'>
              <h1 className='xl:flex cursor-pointer hidden' onClick={()=>dispatch(setIsLoginOpen(!isLoginOpen))}><UserCircle2 /><p>Log in</p></h1>
              <h1><Heart /></h1>
              <h1><LucideShoppingBag /></h1>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      {/* <div className='px-2 hidden'>
        <div className='h-10 bg-[#1A2508] w-full flex justify-center items-center border-black border-[1px]'>
          <h1 className='text-[13px] leading-[1.6em] font-normal tracking-wider text-white'>Free Shipping for orders over $50</h1>
        </div>
        <div className='w-full flex justify-between border-black border-[1px]'>

          <div className='flex'>
            <div className='logo text-[34px] leading-[1em] tracking-tighter font-bold text-[#1A2508] px-5 py-[9px]'>HiShoes</div>
            <div className='text-[16px] flex list-none'>
              <li className='px-3 py-4 xl:block hidden'>Men</li>
              <li className='px-3 py-4 xl:block hidden'>Woman</li>
              <li className='px-3 py-4 xl:block hidden'>Sales</li>
              <li className='px-3 py-4 xl:block hidden'>Stories</li>
            </div>
          </div>
          <div className='flex'>
            <div className='xl:px-4 md:px-4 px-2 py-2 text-lg relative xl:block sm-xl:block hidden'>
              <input type="text" className='w-[200px] h-[40px] border-[#1A2508] border-2 rounded-3xl pl-2 pr-6' />
              <FontAwesomeIcon className=' absolute right-6 top-[18px]' icon={faSearch} />
            </div>
            <div className='xl:px-4 md:px-4 px-2 py-2 text-4xl text-[#1A2508] relative'><FontAwesomeIcon icon={faHeart} /><p className='text-sm text-white absolute right-[21px]  xl:right-[28px] top-[18px] md:right-[28px] '>0</p></div>
            <div className='xl:px-4 md:px-4 px-2 py-[6px] text-4xl text-[#1A2508] relative'><FontAwesomeIcon icon={faBagShopping} /><p className='text-sm text-white absolute right-[19px] xl:right-[26px] top-[22px] md:right-[26px]  '>0</p></div>
            <div className=' xl:hidden md:hidden xl:px-4 md:px-4 px-2 py-2 text-4xl text-[#1A2508]' onClick={openSideNav}><FontAwesomeIcon icon={faBars} /></div>
            <div className='px-4 py-2 xl:block md:block hidden'><div className='flex items-center justify-center w-10 h-10 rounded-full bg-[#1A2508] text-xl text-white font-semibold'><FontAwesomeIcon icon={faUser} /></div></div>

          </div>

        </div>
      </div> */}



    </div>
  )
}

export default Navbar