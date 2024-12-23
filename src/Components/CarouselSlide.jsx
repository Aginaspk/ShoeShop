import React from 'react'
import { Carousel } from 'flowbite-react'

function CarouselSlide() {
    return (
        <div>
            <Carousel leftControl={<></>} rightControl={<></>}
                theme={{
                    scrollContainer: {
                        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
                        "snap": "snap-x"
                    },
                }}>

                <div className='w-full h-[600px] relative'>
                    <img src="https://iili.io/2whjtIt.jpg" alt="" className='w-full h-full object-cover object-left xl:object-center border-black border-2  ' />
                    <div className='absolute   font-semibold  text-white  text-center xl:top-[15%] top-[30%] -right-1 xl:right-[10%]  '>
                        <h1 className=' text-6xl xl:text-9xl tracking-widest text-white logo mb-10 pl-2 '>HiShoes</h1>
                        <h1 className='text-base xl:text-xl'>UNIQUE DESIGNS FOR DISTINCTIVE SPACES</h1>
                        <div className='w-[200px] h-[50px] flex items-center justify-center rounded-full bg-[#1A2508] text-white ml-[6rem] xl:ml-[12rem] mt-12 xl:mt-16'>Shop Now</div>
                    </div>
                </div>
                <div className='w-full h-[600px] relative'>
                    <img src="https://iili.io/2whjtIt.jpg" alt="" className='w-full h-full object-cover object-left xl:object-center border-black border-2  ' />
                    <div className='absolute   font-semibold  text-white  text-center xl:top-[15%] top-[30%] -right-1 xl:right-[10%]  '>
                        <h1 className=' text-6xl xl:text-9xl tracking-widest text-white logo mb-10 pl-2 '>HiShoes</h1>
                        <h1 className='text-base xl:text-xl'>UNIQUE DESIGNS FOR DISTINCTIVE SPACES</h1>
                        <div className='w-[200px] h-[50px] flex items-center justify-center rounded-full bg-[#1A2508] text-white ml-[6rem] xl:ml-[12rem] mt-12 xl:mt-16'>Shop Now</div>
                    </div>
                </div>
                <div className='w-full h-[600px] relative'>
                    <img src="https://iili.io/2whjtIt.jpg" alt="" className='w-full h-full object-cover object-left xl:object-center border-black border-2  ' />
                    <div className='absolute   font-semibold  text-white  text-center xl:top-[15%] top-[30%] -right-1 xl:right-[10%]  '>
                        <h1 className=' text-6xl xl:text-9xl tracking-widest text-white logo mb-10 pl-2 '>HiShoes</h1>
                        <h1 className='text-base xl:text-xl'>UNIQUE DESIGNS FOR DISTINCTIVE SPACES</h1>
                        <div className='w-[200px] h-[50px] flex items-center justify-center rounded-full bg-[#1A2508] text-white ml-[6rem] xl:ml-[12rem] mt-12 xl:mt-16'>Shop Now</div>
                    </div>
                </div>
                <div className='w-full h-[600px] relative'>
                    <img src="https://iili.io/2whjtIt.jpg" alt="" className='w-full h-full object-cover object-left xl:object-center border-black border-2  ' />
                    <div className='absolute   font-semibold  text-white  text-center xl:top-[15%] top-[30%] -right-1 xl:right-[10%]  '>
                        <h1 className=' text-6xl xl:text-9xl tracking-widest text-white logo mb-10 pl-2 '>HiShoes</h1>
                        <h1 className='text-base xl:text-xl'>UNIQUE DESIGNS FOR DISTINCTIVE SPACES</h1>
                        <div className='w-[200px] h-[50px] flex items-center justify-center rounded-full bg-[#1A2508] text-white ml-[6rem] xl:ml-[12rem] mt-12 xl:mt-16'>Shop Now</div>
                    </div>
                </div>
                <div className='w-full h-[600px] relative'>
                    <img src="https://iili.io/2whjtIt.jpg" alt="" className='w-full h-full object-cover object-left xl:object-center border-black border-2  ' />
                    <div className='absolute   font-semibold  text-white  text-center xl:top-[15%] top-[30%] -right-1 xl:right-[10%]  '>
                        <h1 className=' text-6xl xl:text-9xl tracking-widest text-white logo mb-10 pl-2 '>HiShoes</h1>
                        <h1 className='text-base xl:text-xl'>UNIQUE DESIGNS FOR DISTINCTIVE SPACES</h1>
                        <div className='w-[200px] h-[50px] flex items-center justify-center rounded-full bg-[#1A2508] text-white ml-[6rem] xl:ml-[12rem] mt-12 xl:mt-16'>Shop Now</div>
                    </div>
                </div>
            </Carousel>

        </div >
    )
}

export default CarouselSlide