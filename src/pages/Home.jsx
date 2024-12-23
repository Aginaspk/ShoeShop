import React, { useState, useEffect } from 'react'
import Marquee1 from '../Components/Marquee'
import CarouselSlide from '../Components/CarouselSlide'
import Marquee from 'react-fast-marquee'

function Home() {
    const [topPickId, setTopPickId] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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


    const topPickHover = (id) => {
        setTopPickId(id)
    }

    return (
        <div className='z-0 px-2 xl:mt-[101px] mt-[98px]'>


            {/* side shop button */}
            <div className='bg-[#CF4616] w-[126px] h-[40px] flex justify-center items-center text-white text-base fixed -right-10 z-40 top-1/3 -rotate-90 '>
                Shop Now
            </div>

            {/* slideShowBanner */}

            <CarouselSlide />


            
            <div className='xl:flex  mb-10 mt-16  h-auto  '>

                <div className=' xl:h-[600px] h-[450px]   w-full relative '>
                    <img src="https://iili.io/2hGj5ru.jpg" alt="" className='h-full w-full object-cover  xl:my-0 my-10 border-black border-[2px]' />
                    <div className='z-10 2xl:top-40 top-[190px] w-full absolute '>
                        <h1 className='xl:text-9xl text-4xl xl:font-light font-medium text-center  '>UP TO 40% OFF</h1>
                        <h1 className='xl:text-lg font-light text-center'>Plus Free Shipping over $50</h1>
                    </div>
                    <div className='w-full bg-white/30 absolute bottom-0'>
                        <Marquee style={{overflow: "hidden"}}>
                            <h1 className='xl:text-7xl text-3xl'>SALE IS ON / SALE IS ON / SALE IS ON / SALE IS ON /</h1>
                        </Marquee>
                    </div>
                </div>
            </div>


            <div className='mb-10 mt-20 xl:mx-[1px]'>
                <div className='flex xl:flex-row flex-col justify-between  xl:mb-10 mb-3'>
                    <h1 className='text-lg xl:mb-0 mb-5 px-1'>New Picks</h1>
                </div>
                <div className='w-full grid xl:grid-cols-3 xl:gap-3 grid-cols-1 xl:border-0 border-y-2 mr-[1px] '>
                    {img.map((item, index) => {
                        if (index >= 3)
                            return;
                        return (
                            <div className='h-[500px] overflow-hidden relative flex flex-col shadow-[0_0_0_1px_black]' key={index}>
                                <h1 className=' absolute left-3 top-3 px-2 rounded-full bg-[#1A2508] text-white text-sm'>NEW</h1>
                                <img src={item} alt="" className='h-[400px] w-full object-cover' />
                                <div className='w-full bg-white h-full px-6 text-lg py-5'>
                                    <h1>Air Jordan</h1>
                                    <h1>$75.00</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='mb-10'>
                <div className='flex xl:flex-row flex-col justify-between  xl:mb-10 mb-3'>
                    <h1 className='text-lg xl:mb-0 mb-5 px-1'>Top Picks</h1>
                    <h1 className='xl:text-lg text-base px-1'>Trusted by Adventurers</h1>
                </div>
                <div className='grid xl:grid-cols-2 grid-cols-1  gap-[2px] bg-black border-[1px] border-black'>
                    <div className='bg-white xl:h-[615px] h-[345px] ' onMouseEnter={() => topPickHover("one")} onMouseLeave={() => topPickHover("")}>


                        <img src={topPickId === "one" ? "https://iili.io/2hNY5fn.jpg" : "https://iili.io/2hGj5ru.jpg"} alt="" className='w-full h-full object-cover transition-all duration-300' />
                    </div>
                    <div className='bg-white xl:h-[615px] h-[345px] ' onMouseEnter={() => topPickHover("two")} onMouseLeave={() => topPickHover("")}>
                        <img src={topPickId === "two" ? "https://iili.io/2hN7cZP.jpg" : "https://iili.io/2hGjlmQ.jpg"} alt="" className='w-full h-full object-cover transition-all duration-300' />

                    </div>
                    <div className='bg-white xl:h-[615px] h-[345px] ' onMouseEnter={() => topPickHover("three")} onMouseLeave={() => topPickHover("")}>
                        <img src={topPickId === "three" ? "https://iili.io/2hNYpqX.jpg" : "https://iili.io/2hGjj2a.jpg"} alt="" className='w-full h-full object-cover transition-all duration-300' />


                    </div>
                    <div className='bg-white xl:h-[615px] h-[345px] ' onMouseEnter={() => topPickHover("four")} onMouseLeave={() => topPickHover("")}>
                        <img src={topPickId === "four" ? "https://iili.io/2hNaoru.jpg" : "https://iili.io/2hGjkIp.jpg"} alt="" className='w-full h-full object-cover transition-all duration-300' />
                    </div>
                </div>

                <div className='mb-10 mt-20 xl:mx-[1px]'>
                    <div className='flex xl:flex-row flex-col justify-between  xl:mb-10 mb-3'>
                        <h1 className='text-lg xl:mb-0 mb-5 px-1'>Most Selling</h1>
                    </div>
                    <div className='w-full grid xl:grid-cols-4 xl:gap-2 grid-cols-1 xl:border-0 border-y-2 mr-[1px] '>
                        {img.map((item, index) => {
                            if (index >= 4)
                                return;
                            return (
                                <div className='h-[500px] overflow-hidden flex flex-col shadow-[0_0_0_1px_black]' key={index}>
                                    <img src={item} alt="" className='h-[400px] w-full object-cover' />
                                    <div className='w-full bg-white h-full px-6 text-lg py-5'>
                                        <h1>Air Jordan</h1>
                                        <h1>$75.00</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>




            </div>
            <div className='mb-10'>
                <div className='flex xl:flex-row flex-col justify-between  xl:mb-10 mb-3'>
                    <h1 className='text-lg xl:mb-0 mb-5 px-1'>#Travelgram</h1>
                    <h1 className='xl:text-xl text-md px-1 underline cursor-pointer'>View All</h1>
                </div>
                <div className='xl:h-[500px] h-[450px] w-full  border-[1px] border-black '>
                    <Marquee1 />
                </div>
            </div>


        </div>
    )
}

export default Home