import React, { useState, useEffect } from 'react'
import Marquee1 from '../Components/Marquee'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { mostSellingProducts, getNewProducts } from '../features/productSlice'



function Home() {

    const dispatch = useDispatch();
    const [topPickId, setTopPickId] = useState(null)

    const { mostSoldProducts, newProduct } = useSelector(state => state.pro)

    useEffect(() => {
        dispatch(mostSellingProducts())
        dispatch(getNewProducts())
    }, [dispatch])

    console.log(newProduct.data);
    


    useEffect(() => {
        AOS.init({ duration: 800 });
        AOS.refresh();
    }, []);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const topPickHover = (id) => {
        setTopPickId(id)
    }



    return (
        <div className='z-0 xl:mt-[101px] mt-[98px]'>



            <div data-aos="fade-up">


                <div className='w-full h-[600px] relative  mb-10 '>
                    <img className='w-full h-full object-cover ' src="https://static.wixstatic.com/media/84770f_e79251bac8554e33b08eb677c53a8e87~mv2.jpg/v1/fill/w_1519,h_800,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_e79251bac8554e33b08eb677c53a8e87~mv2.jpg" alt="" />
                    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className='absolute top-0 right-0 left-0 bottom-0  flex flex-col  justify-center items-center'>
                        <h1 className='logos text-white xl:text-[320px] text-[200px]  line-through'>as</h1>
                        <h1 className='logos xl:text-[50px] text-white mt-36'>AWESOME SNEAKERS</h1>
                        <Link to={'/products'}><div className='w-[205px] h-[45px] bg-white logos flex justify-center items-center text-xl mt-10 hover:bg-black hover:text-white cursor-pointer'>SHOP NOW</div></Link>
                    </div>
                </div>
            </div>


            <div className='mb-10 mt-20 xl:mx-[1px]'>
                <div className='flex xl:flex-row flex-col justify-between  xl:mb-10 mb-3'>
                    <h1 className='text-lg xl:mb-0 mb-5 px-1'>New Picks</h1>
                </div>
                <div className='w-full px-2 grid xl:grid-cols-3 xl:gap-3 grid-cols-1 xl:border-0 border-y-2 mr-[1px] '>
                    {(newProduct.data || []).map((item, index) => {
                        if (index >= 3)
                            return;
                        return (
                            <Link key={index} to={`/products/${item._id}`}><div className='h-[500px] overflow-hidden relative flex flex-col ' >
                                <h1 className=' absolute left-3 top-3 px-2 rounded-full bg-[#1A2508] text-white text-sm'>NEW</h1>
                                <img src={item.images[0]} alt="" className='h-[400px] w-full object-cover' />
                                <div className='w-full bg-white h-full px-3 text-lg py-5'>
                                    <h1>{item.name}</h1>
                                    <div className={`text-base flex gap-3 `}>
                                        <h1 className={`${item.sale > 0 && "line-through"}`}>${item.price}</h1>
                                        <h1 className={`${item.sale <= 0 && "hidden"} text-[#CF4616]`}>${item.sale}.00</h1>
                                    </div>
                                </div>
                            </div></Link>
                        )
                    })}
                </div>
            </div>


            <div className='mb-10'>
                <div className='flex xl:flex-row flex-col justify-between  xl:mb-10 mb-3'>
                    <h1 className='text-lg xl:mb-0 mb-5 px-1'>Top Picks</h1>
                    <h1 className='xl:text-lg text-base px-1'>Trusted by Adventurers</h1>
                </div>
                <div className='grid xl:grid-cols-2 grid-cols-1  gap-[2px] '>
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

                <div className='mb-10 mx-2 mt-20 xl:mx-[1px]'>
                    <div className='flex xl:flex-row flex-col justify-between  xl:mb-10 mb-3'>
                        <h1 className='text-lg xl:mb-0 mb-5 px-1'>Most Selling</h1>
                    </div>
                    <div className='w-full px-2 grid xl:grid-cols-4 xl:gap-2 grid-cols-1 xl:border-0 border-y-2 mr-[1px] '>
                        {(mostSoldProducts.data || []).map((item, index) => {
                            if (index >= 4)
                                return;
                            return (
                                <Link key={index} to={`/products/${item._id}`}><div className='h-[500px] overflow-hidden flex flex-col ' >
                                    <img src={item.images[0]} alt="" className='h-[400px] w-full object-cover' />
                                    <div className='w-full bg-white h-full px-3 text-lg py-5'>
                                        <h1>{item.name}</h1>
                                        <h1>${item.price}.00</h1>
                                    </div>
                                </div></Link>
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
                <div className='xl:h-[500px] h-[450px] w-full  '>
                    <Marquee1 />
                </div>
            </div>


        </div>
    )
}

export default Home