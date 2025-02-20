// import { Image } from 'lucide-react';
// import React from 'react'


// function AddProduct() {
//     const formData = new FormData();
//     return (
//         <>
//             <div className='flex w-[100%]'>
//                 <div className='w-[65%] px-5 pb-2 flex flex-col gap-2'>
//                     <div className='w-full border p-5 bg-gray-50 rounded-lg'>
//                         <h1 className='mb-3 font-semibold'>Genaral Information</h1>
//                         <div className='flex flex-col'>
//                             <label htmlFor="">Name Product</label>
//                             <input className='add' type="text" placeholder='Air Jordan...' />
//                         </div>
//                         <div className='flex flex-col'>
//                             <label htmlFor="" className='flex items-center'>Description <p className='text-xs'>(not required)</p></label>
//                             <textarea className='add' name="" id="" placeholder='this is product description...'></textarea>
//                         </div>
//                         <div className='flex flex-col'>
//                             <label htmlFor="">Brand</label>
//                             <input className='add' type="text" name="" id="" placeholder='Brand...' />
//                         </div>
//                         <div className='flex' >
//                             <div className='flex flex-col'>
//                                 <label htmlFor="">Sizes</label>
//                                 <input className='add' type="text" placeholder='eg-7,8,9' />
//                             </div>
//                             <div className='flex flex-col'>
//                                 <label htmlFor="" className='pl-5'>Gender</label>
//                                 <div className='flex items-center gap-4 h-[40px] pl-5'>
//                                     <input className='add' type="radio" name="gender" value="Men" id="" />
//                                     <label htmlFor="">Men</label>

//                                     <input className='add' type="radio" name="gender" value="Woman" id="" />
//                                     <label htmlFor="">Woman</label>


//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-full border p-5 bg-gray-50 rounded-lg'>
//                         <h1 className='mb-3 font-semibold'>Pricing and Sale</h1>

//                         <div className='flex flex-col'>
//                             <label htmlFor="">Base Price</label>
//                             <input className='add' type="text" name="" id="" placeholder='$00.00' />
//                         </div>

//                         <div className='flex'>
//                             <div>
//                                 <label htmlFor="">Offer Price</label>
//                                 <input className='add' type="text" name="" id="" placeholder='$00.00'/>
//                             </div>
//                             <div>
//                                 <label htmlFor="">Total Sold</label>
//                                 <input className='add' type="text" name="" id="" placeholder='00' />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className='w-[35%] px-5 pb-2'>
//                     <div className='w-full border p-3 bg-gray-50 rounded-lg'>
//                         <h1 className='mb-3 font-semibold'>Upload Images</h1>
//                         <div className='w-full h-[300px] bg-gray-100 flex justify-center items-center'>
//                             <Image className='text-gray-300 ' size={200}/>
//                         </div>
//                         <div className='flex justify-between my-3'>
//                             <div className='h-[70px] w-[70px] bg-gray-100 flex justify-center items-center'><Image className='text-gray-300' size={40}/></div>
//                             <div className='h-[70px] w-[70px] bg-gray-100 flex justify-center items-center'><Image className='text-gray-300' size={40}/></div>
//                             <div className='h-[70px] w-[70px] bg-gray-100 flex justify-center items-center'><Image className='text-gray-300' size={40}/></div>
//                             <div className='h-[70px] w-[70px] bg-gray-100 flex justify-center items-center'>
//                                 {/* drag and drop here */}
//                             </div>

//                         </div>
//                     </div>

//                     <button>Add new Product</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AddProduct



import { Image, Plus } from "lucide-react";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useDispatch } from "react-redux";
import { newProduct } from "../../features/admin/productSlice";
import toast from "react-hot-toast";

function AddProduct({closeTab}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    sizes: "",
    gender: "",
    price: "",
    sale: "",
    sold: "",
  });

  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (images.length + acceptedFiles.length > 4) return; 
      setImages([...images, ...acceptedFiles]);
      setPreviewImages([...previewImages, ...acceptedFiles.map((file) => URL.createObjectURL(file))]);
    },
    [images, previewImages]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }
    images.forEach((image) => form.append("images", image));

    try {
      const response = await dispatch(newProduct(form)).unwrap();
      toast.success("Product created succesfully");
      closeTab();
    } catch (err) {
      console.error(err);
      toast.success("Error creating product");
    }
  };

  return (
    <div className="flex w-[100%]">
      <div className="w-[65%] px-5 pb-2 flex flex-col gap-2">
        {/* General Information */}
        <div className="w-full border p-5 bg-gray-50 rounded-lg">
          <h1 className="mb-3 font-semibold">General Information</h1>
          <div className="flex flex-col">
            <label>Name Product</label>
            <input className="add" type="text" name="name" placeholder="Air Jordan..." onChange={handleChange} required />
          </div>
          <div className="flex flex-col">
            <label>Description <span className="text-xs">(not required)</span></label>
            <textarea className="add" name="description" placeholder="Product description..." onChange={handleChange}></textarea>
          </div>
          <div className="flex flex-col">
            <label>Brand</label>
            <input className="add" type="text" name="brand" placeholder="Brand..." onChange={handleChange} required />
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <label>Sizes</label>
              <input className="add" type="text" name="sizes" placeholder="e.g., 7,8,9" onChange={handleChange} required />
            </div>
            <div className="flex flex-col w-1/2 pl-5">
              <label>Gender</label>
              <div className="flex items-center gap-4">
                <input type="radio" name="gender" value="Men" onChange={handleChange} /> <label>Men</label>
                <input type="radio" name="gender" value="Women" onChange={handleChange} /> <label>Women</label>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="w-full border p-5 bg-gray-50 rounded-lg">
          <h1 className="mb-3 font-semibold">Pricing and Sale</h1>
          <div className="flex flex-col">
            <label>Base Price</label>
            <input className="add" type="text" name="price" placeholder="$00.00" onChange={handleChange} required />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <label>Offer Price</label>
              <input className="add" type="text" name="sale" placeholder="$00.00" onChange={handleChange} />
            </div>
            <div className="w-1/2 pl-5">
              <label>Total Sold</label>
              <input className="add" type="text" name="sold" placeholder="00" onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="w-[35%] px-5 pb-2">
        <div className="w-full border p-3 bg-gray-50 rounded-lg">
          <h1 className="mb-3 font-semibold">Upload Images</h1>

          {/* First Uploaded Image in the Big Div */}
          <div className="w-full h-[300px] bg-gray-100 flex justify-center items-center border">
            {previewImages.length > 0 ? (
              <img src={previewImages[0]} alt="Main Preview" className="w-full h-full object-cover rounded-md" />
            ) : (
              <Image className="text-gray-300" size={200} />
            )}
          </div>

          {/* Image Previews in Your Layout */}
          <div className="flex justify-between my-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="h-[70px] w-[70px] bg-gray-100 flex justify-center items-center">
                {previewImages[index + 1] ? (
                  <img src={previewImages[index + 1]} alt="Preview" className="w-full h-full object-cover rounded-md" />
                ) : (
                  <Image className="text-gray-300" size={40} />
                )}
              </div>
            ))}

            {/* Drag & Drop in Last Div */}
            <div {...getRootProps()} className="h-[70px] w-[70px] bg-gray-100 flex justify-center items-center border-2 border-dashed cursor-pointer">
              <input {...getInputProps()} />
              <Image className="text-gray-300" size={40} />
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full flex justify-center h-[50px] mt-5 bg-gray-100 text-black p-3 rounded-lg">
          <Plus/>Add New Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
