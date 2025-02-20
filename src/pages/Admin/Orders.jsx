import { CheckCircle2, LucideClipboardSignature, Search } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../features/admin/adminOrderSlice';
import Loader from '../../Components/Loader';

function Orders() {

  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(state => state.adminOrders)
  console.log(orders);


  useEffect(() => {
    dispatch(getOrders());
  }, [])
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Loader />
  }
  return (
    <div className='w-full'>
      <div className="flex w-full px-1 justify-between py-5 items-center">
        <h1>Orders</h1>
        <div className="w-[200px] relative">
          <Search className=" absolute text-black/30 top-2 left-1" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-sm border-black/20 pl-8"
          />
        </div>
      </div>
      <div className="w-full px-1">
        <table className="w-full ">
          <tr className="text-sm text-black/70 ">
            <td className="pb-2">Ordered By</td>
            <td className="pb-2">Products</td>
            <td className="pb-2">Payment</td>
            <td className="pb-2">Shippment</td>
            <td className="pb-2">Date</td>
            <td className="pb-2">Amount</td>
          </tr>

          {orders?.data?.map((Item, index) => {
            return (
              <tr className="border-b border-black/20">
                <td className='py-[10px]'>
                  <p>{Item?.userId?.name}</p>
                  <p>{Item?.userId?.email}</p>
                </td>
                <td className='py-[10px] flex flex-col gap-1'>
                  {Item?.products?.map((val, index) => {
                    return (
                      <div className='flex'><img src={val?.productId?.images[0]} className='w-10 h-10' alt="" />{val?.productId?.name} x {val?.quantity}</div>
                    )
                  })}
                </td>
                <td className='py-[10px]'><div className='flex'><CheckCircle2 />{Item?.paymentStatus}</div></td>
                <td className='py-[10px]'><div className='flex'><LucideClipboardSignature />{Item?.shippingStatus}</div></td>
                <td className='py-[10px]'>{Item?.purchaseDate.slice(0,10)}</td>
                <td className='py-[10px]'>${Item?.totalAmount}.00</td>
              </tr>
            )
          })}
        </table>
      </div>


    </div>
  )
}

export default Orders