import {
  ArrowUpRightFromSquare,
  BlocksIcon,
  ChartNoAxesCombinedIcon,
  EllipsisVertical,
  LucideBell,
  LucideBox,
  Search,
  ShoppingCart,
  ShoppingCartIcon,
  UserCircle2,
  Users,
} from "lucide-react";
import React from "react";

function HomeAdmin() {
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
          <h1 className="flex items-center gap-3 py-5 px-2 rounded-md bg-slate-100">
            <BlocksIcon className="text-black/40" />
            Overview
          </h1>
          <h1 className="flex items-center gap-3 py-5 px-2 rounded-md">
            <ChartNoAxesCombinedIcon className="text-black/40" />
            Analytics
          </h1>
          <h1 className="flex items-center gap-3 py-5 px-2 rounded-md">
            <LucideBox className="text-black/40" />
            Products
          </h1>
          <h1 className="flex items-center gap-3 py-5 px-2 rounded-md">
            <Users className="text-black/40" />
            Users
          </h1>
          <h1 className="flex items-center gap-3 py-5 px-2 rounded-md">
            <ShoppingCartIcon className="text-black/40" />
            Orders
          </h1>
        </div>
      </div>

      <div className="w-[80%] px-5">
        <div className="w-full h-[100px] border-b-2 border-black/20 flex justify-between items-center">
          <div className="text-3xl">Overview</div>
          <div className="flex gap-12">
            <div>
              <LucideBell />
            </div>
            <div className="flex">
              <UserCircle2 />
              Aginas pk
            </div>
            <div>
              <EllipsisVertical />
            </div>
          </div>
        </div>



        <div className="w-full">
            <div className="grid grid-cols-4 gap-10 mt-5">
                <div className="h-[180px] border bg-gradient-to-r from-[#4328EB] from-[14%] to-[#F5F4FF] to-[92%]"></div>
                <div className="h-[180px] border"></div>
                <div className="h-[180px] border"></div>
                <div className="h-[180px] border"></div>
            </div>
        </div>




      </div>
    </div>
  );
}

export default HomeAdmin;
