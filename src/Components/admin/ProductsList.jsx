import {
  EllipsisVertical,
  Pen,
  PenBoxIcon,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../../features/admin/productSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProductsList({ openUpdate }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [del,setDel] = useState(true)

  const { products, loading, error } = useSelector(state => state.adminProduct)
  console.log(products)
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch,del]);


  const productDelete = async(id)=>{
    try {
      const response = await dispatch(deleteProduct(id)).unwrap();
      setDel(!del)
      toast.success("Deleted")
    } catch (error) {
      toast.error(error);
      
    }
  }


  return (
    <div className="w-full">
      {/* <div className="flex w-full px-1 justify-between py-5 items-center">
        <h1>Products</h1>
        <div className="flex gap-5">
          {features && <div onClick={()=>navigate('/addProduct')} className="bg-black w-[100px] h-[41.6px] text-white flex gap-2 items-center justify-center rounded-sm"><Plus />Add</div>}
          <div className="w-[200px] relative">
            <Search className=" absolute text-black/30 top-2 left-1" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-sm border-black/20 pl-8"
            />
          </div>
        </div>
      </div> */}
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



          {products?.data?.map((item, index) => {
            return (
              <tr className={`border-b border-black/20 ${item.isDeleted && "bg-red-300"}`}>
                <td className="py-[10px] flex gap-2 items-center">
                  <img
                    src={item.images[0]}
                    alt=""
                    className="w-10 h-10"
                  />
                  {item.name}
                </td>
                <td>Dec 19,2024</td>
                <td className="py-[10px]">{item.sizes.join(',')}</td>
                <td className="py-[10px]">${item.price}</td>
                <td className="py-[10px]">{item.sold}</td>
                <td className="py-[10px]">
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="cursor-pointer">
                      <EllipsisVertical />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
                    >
                      <li onClick={()=>openUpdate(item._id)}>
                        <a>
                          <PenBoxIcon />
                          Edit
                        </a>
                      </li>
                      <li onClick={()=>productDelete(item._id)} className={`${item.isDeleted && "hidden"}`}>
                        <a>
                          <Trash2 />
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            )
          })}
          
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
