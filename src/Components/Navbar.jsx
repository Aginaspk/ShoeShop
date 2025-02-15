import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, LucideShoppingBag, MenuIcon, Search, UserCircle2, X } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterShoe } from '../features/products/ProductSlice'
import { setSearchInput, setIsLoginOpen } from '../features/others/navbarSlice'
import Login from '../pages/Login'
import { listProducts } from '../features/productSlice'




function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const dispatch = useDispatch();
  const ref = useRef();
  const navigate = useNavigate()

  

  const {products} = useSelector(state=>state.pro)

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  const user = useSelector(state=>state.auth.isAuth)
  const { searchInput } = useSelector(state => state.navbar)
  const { isLoginOpen } = useSelector((state) => state.navbar)


  const openSideNav = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navToProduct = (val) => {
    dispatch(setFilterShoe(val))
  }

  const getSearchInput = (e) => {
    dispatch(setSearchInput(e.target.value))

  }
  const filteredProducts = (products?.data || []).filter(product =>
    product.name.toLowerCase().includes(searchInput.trim().toLowerCase())

  );
  const navTo = () => {
    if (user) {
        navigate('/profile')

    } else {
      dispatch(setIsLoginOpen(!isLoginOpen))
    }

  }




  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={`overflow-x-hidden w-full fixed z-20 top-0 bg-white`}>

      <Login />


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
                <div className={` fixed max-h-[300px] overflow-y-scroll  w-auto ${filteredProducts.length <= 0 ? "border-[1px] border-black/15" : "border-0"} `}>
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
              <Link to={'/products'}><h1 onClick={() => navToProduct('sale')}>Sale</h1></Link>
              <h1 onClick={scrollToFooter} className=' cursor-pointer'>Contact</h1>
              <h1 onClick={scrollToFooter} className=' cursor-pointer'>About</h1>

            </div>
            <div className='flex xl:w-[200px] justify-between xl:px-5 gap-5'>
              <h1 className='xl:flex cursor-pointer hidden' onClick={navTo}><UserCircle2 /><p>{user ? "" : "Login"}</p></h1>
              <Link to={'/wishlist'}><h1><Heart /></h1></Link>
              <Link to={'/cart'}><h1><LucideShoppingBag /></h1></Link>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default Navbar