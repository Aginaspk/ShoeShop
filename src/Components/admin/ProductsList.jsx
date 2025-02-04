import {
  EllipsisVertical,
  Pen,
  PenBoxIcon,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import React from "react";

function ProductsList({features}) {


  return (
    <div className="w-full">
      <div className="flex w-full px-1 justify-between py-5 items-center">
        <h1>Products</h1>
        <div className="flex gap-5">
        {features && <div className="bg-black w-[100px] h-[41.6px] text-white flex gap-2 items-center justify-center rounded-sm"><Plus/>Add</div>}
        <div className="w-[200px] relative">
          <Search className=" absolute text-black/30 top-2 left-1" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-sm border-black/20 pl-8"
          />
        </div>
        </div>
      </div>
      <div className="w-full px-1">
        <table className="w-full ">
          <tr className="text-sm text-black/70 ">
            <td className="pb-2">Name</td>
            <td className="pb-2">Date Added</td>
            <td className="pb-2">Sizes</td>
            <td className="pb-2">Price</td>
            <td className="pb-2">Purchses</td>
            <td className="pb-2"></td>
          </tr>


          <tr className="border-b border-black/20">
            <td className="py-[10px] flex gap-2 items-center">
              <img
                src="https://iili.io/2efvzRR.jpg"
                alt=""
                className="w-10 h-10"
              />
              Urysn Skateboarding
            </td>
            <td>Dec 19,2024</td>
            <td className="py-[10px]">6,7,8</td>
            <td className="py-[10px]">$120</td>
            <td className="py-[10px]">450</td>
            <td className="py-[10px]">
              <div className="dropdown dropdown-left">
                <div tabIndex={0} className="cursor-pointer">
                  <EllipsisVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li>
                    <a>
                      <PenBoxIcon />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a>
                      <Trash2 />
                      Delete
                    </a>
                  </li>
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
              Urysn Skateboarding
            </td>
            <td>Dec 19,2024</td>
            <td className="py-[10px]">6,7,8</td>
            <td className="py-[10px]">$120</td>
            <td className="py-[10px]">450</td>
            <td className="py-[10px]">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="cursor-pointer">
                  <EllipsisVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li>
                    <a>
                      <PenBoxIcon />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a>
                      <Trash2 />
                      Delete
                    </a>
                  </li>
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
              Urysn Skateboarding
            </td>
            <td>Dec 19,2024</td>
            <td className="py-[10px]">6,7,8</td>
            <td className="py-[10px]">$120</td>
            <td className="py-[10px]">450</td>
            <td className="py-[10px]">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="cursor-pointer">
                  <EllipsisVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li>
                    <a>
                      <PenBoxIcon />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a>
                      <Trash2 />
                      Delete
                    </a>
                  </li>
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
              Urysn Skateboarding
            </td>
            <td>Dec 19,2024</td>
            <td className="py-[10px]">6,7,8</td>
            <td className="py-[10px]">$120</td>
            <td className="py-[10px]">450</td>
            <td className="py-[10px]">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="cursor-pointer">
                  <EllipsisVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li>
                    <a>
                      <PenBoxIcon />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a>
                      <Trash2 />
                      Delete
                    </a>
                  </li>
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
              Urysn Skateboarding
            </td>
            <td>Dec 19,2024</td>
            <td className="py-[10px]">6,7,8</td>
            <td className="py-[10px]">$120</td>
            <td className="py-[10px]">450</td>
            <td className="py-[10px]">
              <div className="dropdown dropdown-left">
                <div tabIndex={0} className="cursor-pointer">
                  <EllipsisVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                >
                  <li>
                    <a>
                      <PenBoxIcon />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a>
                      <Trash2 />
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
