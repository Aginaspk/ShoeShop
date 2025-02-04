import { CircleCheckBigIcon, CircleX, EllipsisVertical, Search } from "lucide-react";
import React from "react";

function UsersList() {

  return (
    <div className="w-full">
      <div className="flex w-full px-1 justify-between py-5 items-center">
        <h1>Users</h1>
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
            <td className="pb-2">Name</td>
            <td className="pb-2">E-mail</td>
            <td className="pb-2">Role</td>
            <td className="pb-2">Joined</td>
            <td className="pb-2">Status</td>
            <td className="pb-2"></td>
          </tr>



          <tr className="border-b border-black/20">
            <td className="py-[10px] flex gap-2 items-center">
              <img
                src="https://iili.io/2efvzRR.jpg"
                alt=""
                className="w-10 h-10"
              />
              Aginas pk
            </td>
            <td>aginaspk6@gmail.com</td>
            <td className="py-[10px]">Admin</td>
            <td className="py-[10px]">Dec 21,2024</td>
            <td className="py-[10px] flex gap-1 text-green-500"><CircleCheckBigIcon />active</td>
            <td className="py-[10px]">
            <div className="dropdown dropdown-left">
                <div tabIndex={0}><EllipsisVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
                  <li><a className="text-red-500"><CircleX />Block</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-b border-black/20">
            <td className="py-[10px] flex gap-2 items-center">
              <img
                src="https://iili.io/2efvzRR.jpg"
                alt=""
                className="w-10 h-10"
              />
              Aginas pk
            </td>
            <td>aginaspk6@gmail.com</td>
            <td className="py-[10px]">User</td>
            <td className="py-[10px]">Dec 21,2024</td>
            <td className="py-[10px] flex gap-1 text-green-500"><CircleCheckBigIcon />active</td>
            <td className="py-[10px]">
              <div className="dropdown dropdown-left">
                <div tabIndex={0}><EllipsisVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
                  <li><a className="text-red-500"><CircleX />Block</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-b border-black/20">
            <td className="py-[10px] flex gap-2 items-center">
              <img
                src="https://iili.io/2efvzRR.jpg"
                alt=""
                className="w-10 h-10"
              />
              Aginas pk
            </td>
            <td>aginaspk6@gmail.com</td>
            <td className="py-[10px]">User</td>
            <td className="py-[10px]">Dec 21,2024</td>
            <td className="py-[10px] flex gap-1 text-green-500"><CircleCheckBigIcon />active</td>
            <td className="py-[10px]">
            <div className="dropdown dropdown-left">
                <div tabIndex={0}><EllipsisVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
                  <li><a className="text-red-500"><CircleX />Block</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-b border-black/20">
            <td className="py-[10px] flex gap-2 items-center">
              <img
                src="https://iili.io/2efvzRR.jpg"
                alt=""
                className="w-10 h-10"
              />
              Aginas pk
            </td>
            <td>aginaspk6@gmail.com</td>
            <td className="py-[10px]">User</td>
            <td className="py-[10px]">Dec 21,2024</td>
            <td className="py-[10px] flex gap-1 text-red-500"><CircleX />blocked</td>
            <td className="py-[10px]">
            <div className="dropdown dropdown-left">
                <div tabIndex={0}><EllipsisVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
                  <li><a className="text-green-500"><CircleCheckBigIcon/>UnBlock</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="border-b border-black/20">
            <td className="py-[10px] flex gap-2 items-center">
              <img
                src="https://iili.io/2efvzRR.jpg"
                alt=""
                className="w-10 h-10"
              />
              Aginas pk
            </td>
            <td>aginaspk6@gmail.com</td>
            <td className="py-[10px]">User</td>
            <td className="py-[10px]">Dec 21,2024</td>
            <td className="py-[10px] flex gap-1 text-green-500"><CircleCheckBigIcon />active</td>
            <td className="py-[10px]">
            <div className="dropdown dropdown-left">
                <div tabIndex={0}><EllipsisVertical /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
                  <li><a className="text-red-500"><CircleX />Block</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
