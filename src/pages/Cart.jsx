import { Delete, Lock } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, getUserCart } from '../features/cartSlice';
import Loader from '../Components/Loader';
import { stripeOrder } from '../features/orderSlice';
import toast from 'react-hot-toast';

function Cart() {

    const dispatch = useDispatch();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(getUserCart())
    }, [dispatch])

    const { cart, loading, error } = useSelector(state => state.cart)
    console.log(cart)


    const removeCartItem = async (id) => {
        try {
            const response = await dispatch(deleteCartItem(id)).unwrap();
            return response;
        } catch (error) {
            toast.error(error)
        }
    }

    const orderItems = async () => {
        try {
            const res = await dispatch(stripeOrder()).unwrap();
            toast.success("order complete")
        } catch (error) {
            toast.error(error)
        }
    }

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <Loader />
    }

    return (
        <div className='w-full z-0 xl:my-[150px] mt-[98px] px-16 flex justify-between'>

            <div className='w-[70%] '>
                <h1 className='text-xl py-5'>My cart</h1>
                <div className='border-t border-black/15'>
                    {cart?.products?.map((item, index) => {
                        return (
                            <div key={index} className='w-full flex justify-between border-b border-black/15 py-5'>
                                <div className='flex gap-5 '>
                                    <div className='w-[100px] h-[89px]'><img src={item?.productId?.images[0]} className='w-full h-full object-cover' alt="" /></div>
                                    <div className=''>
                                        <h1>{item?.productId?.name}</h1>
                                        <h1>${item?.productId?.price}.00</h1>
                                        <h1>size : {item?.size}</h1>
                                    </div>
                                </div>
                                <div className='flex gap-14'>
                                    <div>- {item?.quantity} +</div>
                                    <div>$ {item?.totalPrice}.00</div>
                                    <div onClick={() => removeCartItem(item._id)} className='cursor-pointer'><Delete /></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>



            <div className='w-[25%] px-10 py-7 flex flex-col gap-2'>
                <div className='w-full text-xl border-b border-black/15 py-5'>
                    <h1>Order summary</h1>
                </div>
                <div className='w-full flex flex-col gap-2 border-b border-black/15 py-5'>
                    <div className='w-full flex justify-between '>
                        <h1>Toatl items</h1>
                        <h1>{cart?.products?.length}</h1>
                    </div>
                    <div className='w-full flex justify-between '>
                        <h1>subtotal</h1>
                        <h1>${cart?.totalPrice}.00</h1>
                    </div>
                    <h1 className='text-sm underline'>Estimate Delivery</h1>
                </div>
                <div className='w-full flex flex-col gap-5 py-5'>
                    <div className='flex justify-between text-xl'>
                        <h1>Total</h1>
                        <h1>${cart?.totalPrice}.00</h1>
                    </div>
                    <button className='bg-[#CF4616] w-full h-10 text-sm text-white' onClick={orderItems}>Checkout</button>
                    <div className='w-full flex text-xs justify-center'><Lock className='h-[14px]' /> Secure Checkout</div>
                </div>
            </div>

        </div>
    )
}

export default Cart