import { CheckCircle2, CircleCheckBigIcon, CircleX, LucideClipboardSignature, User2Icon, UserCircle2, UserCircleIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserId, getUsers } from '../../features/admin/userSlice';
import Loader from '../../Components/Loader';
import { getOrderById } from '../../features/admin/adminOrderSlice';

function UserDetail() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { user, loading, error } = useSelector(state => state.user);
    const { orderById, idLoading, idError } = useSelector(state => state.adminOrders)
    console.log(orderById);


    console.log(user)

    useEffect(() => {
        dispatch(getUserId(id))
    }, [])
    useEffect(() => {
        dispatch(getOrderById(id))
    }, [])

    if (loading) return <Loader />
    if (error) return <Loader />
    return (
        <div className='flex'>
            <div className='w-[35%] px-5 pb-2'>
                <div className="w-full mt-1 h-[85vh] border p-3 bg-gray-50 rounded-lg flex flex-col items-center gap-5 justify-center">
                    <div className='w-full h-[300px]  flex justify-center items-center'>
                        <UserCircleIcon size={300} className='text-gray-500' />
                    </div>
                    <h1 className='font-bold text-2xl'>{user?.user?.name}</h1>
                    <h1>{user?.user?.email}</h1>
                    <div> joined in dec 31 2024</div>
                    <div className='flex'>
                        {user?.user?.isBlocked ? <span className="text-red-500 flex"><CircleX />blocked</span> : <><CircleCheckBigIcon />active</>}
                        {/* <CircleCheckBigIcon />active */}
                    </div>
                </div>
            </div>
            <div className='w-[75%]'>
                <div className="flex w-full px-1 justify-between py-5 items-center">
                    <h1 className='font-bold'>Orders</h1>
                </div>
                <div className="w-full px-1">
                    <table className="w-full ">
                        <tr className="text-sm text-black/70 ">
                            <td className="pb-2">Products</td>
                            <td className="pb-2">Payment</td>
                            <td className="pb-2">Shippment</td>
                            <td className="pb-2">Amount</td>
                        </tr>
                        {orderById?.data?.map((item, index) => {
                            return (
                                <tr className="border-b border-black/20">
                                    <td className='py-[10px] flex flex-col gap-1'>
                                        {item?.products?.map((val, index) => {
                                            return (
                                                <div className='flex'><img src={val?.productId?.images[0]} className='w-10 h-10' alt="" />{val?.productId?.name} x {val?.quantity}</div>
                                            )
                                        })}
                                    </td>
                                    <td className='py-[10px]'><div className='flex'><CheckCircle2 />{item?.paymentStatus}</div></td>
                                    <td className='py-[10px]'><div className='flex'><LucideClipboardSignature />{item?.shippingStatus}</div></td>
                                    <td className='py-[10px]'>${item?.totalAmount}.00</td>
                                </tr>
                            )
                        })}

                    </table>
                    {orderById?.data?.length === 0 && <p className='text-lg py-10 text-center'>No Orders</p>}

                </div>
            </div>
        </div>
    )
}

export default UserDetail