import React from 'react'

function Footer() {
    return (
        <div>
            <div className='w-full 2xl:flex'>
                <div className='2xl:w-[25%] w-full bg-[#CF4616] h-[500px] text-white flex flex-col justify-between px-8'>
                    <div className='text-3xl pt-10'>Newsletter</div>
                    <div className='text-xl w-[160px] text-left'>Sign up to receive updates on new products and special offers</div>
                    <div className='text-xl flex flex-col'>
                        <p>Subscribe to our newsletter</p>
                        <p className='my-5'>Email *</p>
                        <input className='mb-5 outline-none border-b-2 bg-transparent w-full' type="email" name="" id="" />
                        <button className='w-full h-[45px] bg-white my-5 text-[#CF4616]'>Submit</button>
                    </div>
                </div>
                <div className='2xl:w-[75%]  bg-[#E8EBED]'>
                    <div className='grid 2xl:grid-cols-4 grid-cols-2 gap-0 2xl:h-[364px]'>
                        <div className='px-12'>
                            <div className='text-2xl my-10'>Shop</div>
                            <div className='list-none text-lg'>
                                <li>Men</li>
                                <li>Woman</li>
                                <li>Sale</li>
                                <li>Stories</li>
                            </div>
                        </div>
                        <div className='px-12'>
                            <div className='text-2xl my-10'>Follow</div>
                            <div className='list-none text-lg'>
                                <li>Instagram</li>
                                <li>Facebook</li>

                            </div>
                        </div>
                        <div className='px-12 col-span-2'>
                            <div className='text-2xl my-10'>Policy</div>
                            <div className='list-none text-lg'>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Shipping Policy</li>
                                <li>Refund Policy</li>
                                <li>Accessibility Statement</li>
                                <li>FAQ</li>
                            </div>
                        </div>
                        <div className='px-12 col-span-2'>
                            <div className='text-2xl my-10'>Store</div>
                            <div className='list-none text-lg'>
                                <li>Bridgeon Manjeri</li>
                                <li>Manjeri 679331</li>
                                <li>9:00 - 5:00</li>
                                <li>hiShoes@gmail.com</li>
                                <li>790-741-2136</li>
                            </div>
                        </div>
                    </div>
                    <div className='2xl:pl-16 pl-12 flex items-end h-[137px] pb-10 py-10'>
                        <h1 className='2xl:w-full w-[200px]'>© 2024 by Aginas pk. Built in from Bridgeon Solutions</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer