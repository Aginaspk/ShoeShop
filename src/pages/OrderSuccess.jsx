import { ArrowRight, XCircle } from 'lucide-react'
import fulfillment from '../assets/fulfillment.gif'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { verifyPayment } from '../features/orderSlice';

function OrderSuccess() {

  const {sessionId} = useParams();
  const dispatch = useDispatch()


  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(verifyPayment(sessionId));
  })
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-300'>
        <div className='w-[60%] h-[65vh] bg-white backdrop-blur-xl p-5 border border-white rounded-3xl'>
            {/* <CircleCheckIcon size={200} className='text-green-950'/> */}
            <div className='w-full flex justify-end '><XCircle onClick={()=>navigate('/')} size={40} className='text-green-900'/></div>
           <div className='w-full flex justify-center '> <img className='w-[200px]' src={fulfillment} alt="" /></div>
           <div className='flex justify-center py-5'><h1 className='text-green-900 font-extrabold text-3xl'>Order Placed Successfully</h1></div>
           <div className='flex justify-center'><p className='w-[350px] text-center text-green-900/50 font-semibold '>Sit back and relax as your awesome sheos on the way</p></div>
        </div>
    </div>
  )
}

export default OrderSuccess