import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faBagShopping, faBars, faX, faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  const openSideNav = () =>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div>


      {/* sidebar */}
      <div className={`absolute w-full h-screen bg-[#CF4616] z-50 2xl:hidden block transform transition-transform duration-300  ${!isSidebarOpen ? "translate-x-full" : "translate-x-0"}`}>
        <div className='flex justify-between px-2 mt-10'>
          <div className='logo text-[34px] leading-[1em] tracking-tighter font-bold text-white px-5 py-[9px]'>HiShoes</div>
          <div className='flex'>
            <div className='px-4 py-2 flex items-center'><div className='flex items-center justify-center w-8 h-8 rounded-full bg-white text-xl text-[#CF4616] font-semibold'><FontAwesomeIcon icon={faUser} /></div><h1 className='text-lg text-white px-3'>Log in</h1></div>
            <div className='px-5 py-2 text-3xl text-white' onClick={openSideNav}><FontAwesomeIcon icon={faX} /></div>
          </div>

        </div>
        <div className='w-full px-8 my-5'>
          <div className='w-full py-2 text-lg relative text-white'><input type="text" className=' bg-[#CF4616] w-[350px] h-[40px] border-white border-2 rounded-3xl pl-2 pr-10 placeholder:text-white/85' placeholder='Search Here...' /><FontAwesomeIcon className=' absolute right-5 top-[18px]' icon={faSearch} /></div>
        </div>
        <div className='text-white text-2xl list-none px-8'>
          <li className='px-5 py-4'>Men</li>
          <li className='px-5 py-4'>Woman</li>
          <li className='px-5 py-4'>Sales</li>
          <li className='px-5 py-4'>Stories</li>
        </div>

      </div>

      {/* content */}

      <div className='h-10 bg-[#1A2508] w-full flex justify-center items-center'>
        <h1 className='text-[16px] leading-[1.6em] font-normal tracking-wider text-white 2xl:block hidden'>Free Shipping for orders over $50</h1>
      </div>
      <div className='w-full flex justify-between '>

        <div className='flex'>
          <div className='logo text-[34px] leading-[1em] tracking-tighter font-bold text-[#1A2508] px-5 py-[9px]'>HiShoes</div>
          <div className='text-lg flex list-none'>
            <li className='px-5 py-4 2xl:block hidden'>Men</li>
            <li className='px-5 py-4 2xl:block hidden'>Woman</li>
            <li className='px-5 py-4 2xl:block hidden'>Sales</li>
            <li className='px-5 py-4 2xl:block hidden'>Stories</li>
          </div>
        </div>
        <div className='flex'>
          <div className='px-4 py-2 2xl:block hidden'><div className='flex items-center justify-center w-10 h-10 rounded-full bg-[#1A2508] text-xl text-white font-semibold'>A</div></div>
          <div className='px-4 py-2 text-lg relative 2xl:block hidden'><input type="text" className='w-[200px] h-[40px] border-[#1A2508] border-2 rounded-3xl pl-2 pr-6' /><FontAwesomeIcon className=' absolute right-6 top-[18px]' icon={faSearch} /></div>
          <div className='px-4 py-2 text-4xl text-[#1A2508] relative'><FontAwesomeIcon icon={faHeart} /><p className='text-sm text-white absolute right-[30px] top-4'>0</p></div>
          <div className='px-4 py-[6px] text-4xl text-[#1A2508] relative'><FontAwesomeIcon icon={faBagShopping} /><p className='text-sm text-white absolute right-7 top-5'>0</p></div>
          <div className=' 2xl:hidden px-4 py-2 text-4xl text-[#1A2508]' onClick={openSideNav}><FontAwesomeIcon icon={faBars} /></div>
        </div>

      </div>

    </div>
  )
}

export default Navbar