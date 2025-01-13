import { LogOutIcon } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/Loging/loginSlice'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logoutUser =()=>{
        dispatch(logout())
        navigate('/')

    }
    return (
        <div className='z-0 xl:my-[150px] mt-[98px] px-16 flex gap-10'>
            <div className='xl:w-[20%] h-[390px] shadow-[rgba(0,0,0,0.16)_0px_1px_4px] bg-gray-100 px-10 py-5 mb-5'>
                <div className=''>
                    <div className='flex text-sm flex-col gap-8 justify-center pb-10 border-b'>
                        <h1>User Profile</h1>
                        <h1>Orders</h1>
                        <h1>Address</h1>
                        <h1>Payment</h1>
                        <h1>Wishlist</h1>
                    </div>
                    <div className='flex gap-2 text-red-500 pt-10 pb-5 cursor-pointer' onClick={logoutUser}>
                        <LogOutIcon />
                        <h1>Logout</h1>
                    </div>
                </div>

            </div>
            <div className='w-[80%] pl-1 pr-10'>
                <h1 className='text-2xl font-bold'>Your Profile</h1>
                <h1>Manage your details View your tier status and change your password</h1>
                <div className=' my-5 flex gap-5'>
                    <div className='w-[20%] h-[215px] rounded-lg border border-dotted border-black/30'></div>
                    <div className='h-[215px] w-[80%] rounded-lg border border-dotted border-black/30'></div>
                </div>
                <div className='h-[215px] w-[100%] rounded-lg border border-dotted border-black/30'>

                </div>
            </div>
        </div>
    )
}

export default Profile