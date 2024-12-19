import React from 'react'

function ViewProduct() {
    return (
        <div className='2xl:mt-[165px] px-[75px] mb-[65px] flex'>
            <div className='flex w-[866px] justify-between'>
                <div className='w-[113px] h-[113px]'>
                    <img src="https://iili.io/2hNY5fn.jpg" alt="" className='h-full w-full object-cover opacity-30' />
                </div>
                <div className='w-[728px] h-[628px]'>
                    <img src="https://iili.io/2hNY5fn.jpg" alt="" className='h-full w-full object-cover' />

                </div>
            </div>
            <div className='w-[437px] ml-[70px]'>
                <div>
                    <h1>Nike Air Jordan</h1>
                    <h1>$65.00</h1>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ViewProduct