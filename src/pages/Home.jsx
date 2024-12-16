import React from 'react'

function Home() {
    return (
        <div className='z-0 px-2 2xl:mt-[101px] mt-[98px] '>


            {/* side shop button */}
            <div className='bg-[#CF4616] w-[126px] h-[40px] flex justify-center items-center text-white text-xl fixed -right-10 z-40 top-1/3 -rotate-90 '>
                Shop Now
            </div>


            <div className='w-full 2xl:h-[600px] h-[600px] relative'>
                <img src="https://images.pexels.com/photos/949147/pexels-photo-949147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-full object-cover object-[-100px] 2xl:object-center border-black border-2  ' />
                <div className='absolute   font-semibold bottom-0 2xl:px-10 2xl:py-10 px-5 text-white'>
                    <h1 className='py-5 text-3xl 2xl:text-5xl tracking-widest'>Explore Beyond Boundaries</h1>
                    <h1 className='py-5 text-2xl 2xl:text-3xl w-[300px] 2xl:w-[500px] tracking-widest'>Premium, versatile shoes for every adventure</h1>
                    <h1 className='text-xl py-5 tracking-widest underline'>Shop Now</h1>
                </div>
            </div>
            <div className='2xl:flex  my-20  h-auto '>
                <div className='2xl:w-[30%] '>
                    <div className='h-[200px] flex flex-col justify-between '>
                        <h1 className='text-3xl tracking-widest'>Go lighter. Go further.</h1>
                        <h1 className='w-[250px] text-xl tracking-widest'>Experience the freedom of movement with our featherlight gear</h1>
                        <h1 className='text-2xl tracking-widest underline'>Shop Now</h1>
                    </div>
                </div>
                <div className='2xl:h-[500px] h-[400px] 2xl:w-[70%] w-full'>
                    <img src="https://images.pexels.com/photos/2385247/pexels-photo-2385247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-full w-full object-cover 2xl:my-0 my-10 border-black border-[1px]' />
                </div>
            </div>

            <div className='mb-20'>
                <div className='flex 2xl:flex-row flex-col justify-between 2xl:mb-16 mb-10'>
                    <h1 className='text-2xl mb-5'>Top Picks</h1>
                    <h1 className='2xl:text-2xl text-lg'>Trusted by Adventurers</h1>
                </div>
                <div className='grid 2xl:grid-cols-2 grid-cols-1  gap-[2px] bg-black border-[1px] border-black'>
                    <div className='bg-white h-[615px]'><img src="https://iili.io/2hGj5ru.jpg" alt="" className='w-full h-full object-cover' /></div>
                    <div className='bg-white h-[615px]'><img src="https://iili.io/2hGjlmQ.jpg" alt="" className='w-full h-full object-cover' /></div>
                    <div className='bg-white h-[615px]'><img src="https://iili.io/2hGjj2a.jpg" alt="" className='w-full h-full object-cover' /></div>
                    <div className='bg-white h-[615px]'><img src="https://iili.io/2hGjkIp.jpg" alt="" className='w-full h-full object-cover' /></div>
                </div>
            </div>


        </div>
    )
}

export default Home