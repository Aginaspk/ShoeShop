import React, { useEffect } from "react";
import CountUp from "./CountUp";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../../features/admin/overviewSlice";
import { getUsers } from "../../features/admin/userSlice";
import { getAllProducts } from "../../features/admin/productSlice";
import Loader from "../Loader";

function Summary() {

const dispatch = useDispatch();
  const {status,loading,error} = useSelector(state=>state.orderStatus);
  console.log(status);
  

  useEffect(()=>{
    dispatch(getStatus());
  },[])

  if (loading) return <Loader/>
  if (error) return <Loader/>

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-10 mt-5">
        <div className="h-[180px] bg-[linear-gradient(90deg,_#4328EB_14%,_#F5F4FF_100%)] rounded-lg">
          <div className="h-1/2 w-full text-white text-5xl flex items-end px-4 pb-1">
            <CountUp
              from={0}
              to={status?.data?.noOfUsers}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </div>
          <div className="h-1/2 w-full text-white text-lg flex items-end px-5 pb-5">
            Users
          </div>
        </div>
        <div className="h-[180px] bg-[linear-gradient(90deg,_#0085FF_27%,_#E3F1FF_100%)] rounded-lg">
          <div className="h-1/2 w-full text-white text-5xl flex items-end px-4 pb-1">
          <CountUp
              from={0}
              to={status?.data?.toatalSales}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </div>
          <div className="h-1/2 w-full text-white text-lg flex items-end px-5 pb-5">
            Orders
          </div>
        </div>
        <div className="h-[180px] bg-[linear-gradient(90deg,_#EB4028_14%,_#FDEAE7_100%)] rounded-lg">
          <div className="h-1/2 w-full text-white text-5xl flex items-end px-4 pb-1">
          <CountUp
              from={0}
              to={status?.data?.noOfProducts}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </div>
          <div className="h-1/2 w-full text-white text-lg flex items-end px-5 pb-5">
            Products
          </div>
        </div>
        <div className="h-[180px] bg-[linear-gradient(90deg,_#EB2891_14%,_#FDE7F3_100%)] rounded-lg">
          <div className="h-1/2 w-full text-white text-5xl flex items-end px-4 pb-1">
          <CountUp
              from={0}
              to={status?.data?.totalRevenue}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </div>
          <div className="h-1/2 w-full text-white text-lg flex items-end px-5 pb-5">
            Revenue
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
