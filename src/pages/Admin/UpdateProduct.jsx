import { Image, Save } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, updateProduct } from "../../features/admin/productSlice";
import Loader from "../../Components/Loader";

function UpdateProduct({ closeTab, productId }) {
  const dispatch = useDispatch();
  console.log(productId)

  const { productById, loading, error } = useSelector(state => state.adminProduct);
  console.log(productById)
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

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch,productId])

  useEffect(() => {

    if (productById) {
      setFormData({
        name: productById?.data?.name || "",
        description: productById?.data?.description || "",
        brand: productById?.data?.brand || "",
        sizes: productById?.data?.sizes?.join(",") || "",
        gender: productById?.data?.gender || "",
        price: productById?.data?.price || "",
        sale: productById?.data?.sale || "",
        sold: productById?.data?.sold || "",
      });

      setPreviewImages(productById?.data?.images || []);
    }

  }, [productById]);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }
    images.forEach((image) => form.append("images", image));

    try {
      await dispatch(updateProduct({ id: productId, formData: form })).unwrap();
      alert("Product updated successfully");
      closeTab();
    } catch (err) {
      console.error(err);
      alert("Error updating product");
    }
  };

  if (loading) return <Loader />
  if (error) return console.log(error)
  return (
    <div className="flex w-[100%]">
      <div className="w-[65%] px-5 pb-2 flex flex-col gap-2">
        {/* General Information */}
        <div className="w-full border p-5 bg-gray-50 rounded-lg">
          <h1 className="mb-3 font-semibold">Update Product</h1>
          <div className="flex flex-col">
            <label>Name Product</label>
            <input className="add" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="flex flex-col">
            <label>Description <span className="text-xs">(not required)</span></label>
            <textarea className="add" name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="flex flex-col">
            <label>Brand</label>
            <input className="add" type="text" name="brand" value={formData.brand} onChange={handleChange} required />
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <label>Sizes</label>
              <input className="add" type="text" name="sizes" value={formData.sizes} onChange={handleChange} required />
            </div>
            <div className="flex flex-col w-1/2 pl-5">
              <label>Gender</label>
              <div className="flex items-center gap-4">
                <input type="radio" name="gender" value="Men" checked={formData.gender === "Men"} onChange={handleChange} /> <label>Men</label>
                <input type="radio" name="gender" value="Women" checked={formData.gender === "Women"} onChange={handleChange} /> <label>Women</label>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="w-full border p-5 bg-gray-50 rounded-lg">
          <h1 className="mb-3 font-semibold">Pricing and Sale</h1>
          <div className="flex flex-col">
            <label>Base Price</label>
            <input className="add" type="text" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <label>Offer Price</label>
              <input className="add" type="text" name="sale" value={formData.sale} onChange={handleChange} />
            </div>
            <div className="w-1/2 pl-5">
              <label>Total Sold</label>
              <input className="add" type="text" name="sold" value={formData.sold} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="w-[35%] px-5 pb-2">
        <div className="w-full border p-3 bg-gray-50 rounded-lg">
          <h1 className="mb-3 font-semibold">Update Images</h1>

          {/* First Uploaded Image in the Big Div */}
          <div className="w-full h-[300px] bg-gray-100 flex justify-center items-center border">
            {previewImages.length > 0 ? (
              <img src={previewImages[0]} alt="Main Preview" className="w-full h-full object-cover rounded-md" />
            ) : (
              <Image className="text-gray-300" size={200} />
            )}
          </div>

          {/* Image Previews */}
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

            {/* Drag & Drop for New Images */}
            <div {...getRootProps()} className="h-[70px] w-[70px] bg-gray-100 flex justify-center items-center border-2 border-dashed cursor-pointer">
              <input {...getInputProps()} />
              <Image className="text-gray-300" size={40} />
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} className="w-full flex justify-center h-[50px] bg-gray-100 text-black p-3 rounded-lg mt-3">
          <Save /> Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
