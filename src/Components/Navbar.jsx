import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faBagShopping, faBars, faX, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  const openSideNav = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className='overflow-x-hidden w-full fixed z-20 top-0 bg-white'>


      {/* sidebar */}
      <div className={`fixed top-0 left-0  w-100% h-screen bg-[#CF4616] z-50 xl:hidden sm-xl:hidden block transform transition-transform duration-300  ${!isSidebarOpen ? "translate-x-full" : "translate-x-0"}`}>
        <div className='flex justify-between px-2 mt-10'>
          <div className='logo text-[34px] leading-[1em] tracking-tighter font-bold text-white px-5 py-[9px]'>HiShoes</div>
          <div className='flex'>
            <div className='px-4 py-2 flex items-center'><div className='flex items-center justify-center w-8 h-8 rounded-full bg-white text-lg text-[#CF4616] font-semibold'><FontAwesomeIcon icon={faUser} /></div><h1 className='text-lg text-white px-3'>Log in</h1></div>
            <div className='px-5 py-2 text-3xl text-white' onClick={openSideNav}><FontAwesomeIcon icon={faX} /></div>
          </div>

        </div>
        <div className='w-full px-8 my-5'>
          <div className='w-full py-2 text-lg relative text-white'><input type="text" className=' bg-[#CF4616] w-[350px] h-[40px] border-white border-2 rounded-3xl pl-2 pr-10 placeholder:text-white/85 text-base' placeholder='Search Here...' /><FontAwesomeIcon className=' absolute right-5 top-[18px]' icon={faSearch} /></div>
        </div>
        <div className='text-white text-xl list-none px-5'>
          <li className='px-5 py-4'>Men</li>
          <li className='px-5 py-4'>Woman</li>
          <Link to={'/products'}><li className='px-5 py-4' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Sales</li></Link>
          <li className='px-5 py-4'>Stories</li>
        </div>

      </div>

      {/* content */}
      <div className='px-2'>
        <div className='h-10 bg-[#1A2508] w-full flex justify-center items-center border-black border-[1px]'>
          <h1 className='text-[13px] leading-[1.6em] font-normal tracking-wider text-white'>Free Shipping for orders over $50</h1>
        </div>
        <div className='w-full flex justify-between border-black border-[1px]'>

          <div className='flex'>
            <div className='logo text-[34px] leading-[1em] tracking-tighter font-bold text-[#1A2508] px-5 py-[9px]'>HiShoes</div>
            <div className='text-[16px] flex list-none'>
              <li className='px-3 py-4 xl:block hidden'>Men</li>
              <li className='px-3 py-4 xl:block hidden'>Woman</li>
              <Link to={'/products'}><li className='px-3 py-4 xl:block hidden'>Sales</li></Link>
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
      </div>



    </div>
  )
}

export default Navbar