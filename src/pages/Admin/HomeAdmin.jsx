import {
  ArrowUpRightFromSquare,
  BlocksIcon,
  ChartNoAxesCombinedIcon,
  EllipsisVertical,
  LogOut,
  LucideBell,
  LucideBox,
  Search,
  ShoppingCartIcon,
  UserCircle2,
  Users,
} from "lucide-react";
import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../features/authSlice";
import toast from "react-hot-toast";

function HomeAdmin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [navSelect, setNavSelect] = useState('Overview')

  const logoutAdminPage = async () => {
    try {
      const response = await dispatch(logoutAdmin()).unwrap();
      toast.success("logou succesfully")
      navigate('/')
    } catch (error) {
      toast.success(error)
    }
  }
  return (
    <div className="flex">
      <div className="w-[20%] h-[100vh] border-r border-black/20 px-10">
        <h1 className=" text-[50px] line-through py-5 px-2">as</h1>
        <div className="w-full my-10 relative">
          <Search className="absolute text-black/25 top-[6px] left-2" />
          <input
            type="text"
            placeholder="Search...."
            className="w-full border-black/20 pl-9"
          />
        </div>
        <div className="w-full flex justify-between px-1 pb-5 border-b border-black/25">
          <h1>View Live Site</h1>
          <ArrowUpRightFromSquare className="text-black/40" />
        </div>
        <div className="px-1 my-5">
          <h1 onClick={() => { setNavSelect('Overview'); navigate('/admin'); }} className={`flex items-center gap-3 py-5 px-2 rounded-md cursor-pointer ${navSelect === 'Overview' && "bg-slate-100"}`}>
            <BlocksIcon className="text-black/40" />
            Overview
          </h1>
          <h1 onClick={() => { setNavSelect('Analytics'); navigate('analytics'); }} className={`flex items-center gap-3 py-5 px-2 rounded-md cursor-pointer ${navSelect === 'Analytics' && "bg-slate-100"}`}>
            <ChartNoAxesCombinedIcon className="text-black/40" />
            Analytics
          </h1>
          <h1 onClick={() => { setNavSelect('Products'); navigate('products'); }} className={`flex items-center gap-3 py-5 px-2 rounded-md cursor-pointer ${navSelect === 'Products' && "bg-slate-100"}`}>
            <LucideBox className="text-black/40" />
            Products
          </h1>
          <h1 onClick={() => { setNavSelect('Users'); navigate('users'); }} className={`flex items-center gap-3 py-5 px-2 rounded-md cursor-pointer ${navSelect === 'Users' && "bg-slate-100"}`}>
            <Users className="text-black/40" />
            Users
          </h1>
          <h1 onClick={() => { setNavSelect('Orders'); navigate('orders'); }} className={`flex items-center gap-3 py-5 px-2 rounded-md cursor-pointer ${navSelect === 'Orders' && "bg-slate-100"}`}>
            <ShoppingCartIcon className="text-black/40" />
            Orders
          </h1>
        </div>
      </div>

      <div className="w-[80%] px-5">
        <div className="w-full h-[100px] border-b-2 border-black/20 flex justify-between items-center">
          <div className="text-3xl">{navSelect}</div>
          <div className="flex gap-12">
            <div>
              <LucideBell />
            </div>
            <div className="flex">
              <UserCircle2 />
              Aginas pk
            </div>
            <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="cursor-pointer">
                  <EllipsisVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li onClick={logoutAdminPage}>
                    <a className="text-red-500">
                      <LogOut />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Outlet />



      </div>
    </div>
  );
}

export default HomeAdmin;
