import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Heart from "react-animated-heart";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import 'aos/dist/aos.css'
import { getProductById } from '../features/productSlice';
import api from '../../api/api';

function ViewProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();


  const { productById, loadingById, errorById } = useSelector(state => state.pro);
  useEffect(() => {
    dispatch(getProductById(id));

  }, [dispatch, id])



  const [isSizeBarOpen, setIsSizeBarOpen] = useState(false);
  const [size, setSize] = useState('Select');
  const [quantity, setQuantity] = useState(1);
  const [isInformatiosBarOpen, setIsInformatiosBarOpen] = useState(true);
  const [whichInfo, setWhichInfo] = useState('PRODUCT INFO');
  const [isClick, setClick] = useState(false);
  const [indexOfImage, setIndexOfImage] = useState(0)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = async () =>{
    if(size === 'Select'){
      alert("select a size");
      return;
    }
    try{
      const product = await api.post('/user/cart',{productId:id,size,quantity});
      alert('added to cart')
    }catch(error){
      alert("Item not added to cart")
    }
  }


  const changeImage = (val) => {
    setIndexOfImage(val)
  }


  if (loadingById) {
    return <Loader />
  }
  if (errorById) {
    return <div>Error...</div>
  }

  return (
    <div className='xl:mt-[165px] mt-[100px] xl:px-[75px] mb-[65px] xl:flex px-2'>
      <div className='flex xl:w-[866px] justify-between'>
        {/* Thumbnails */}
        <div className='hidden xl:grid grid-cols-1 h-[500px]'>
          {productById?.data?.images?.map((item, index) => (
            <div
              key={index}
              className='w-[113px] h-[113px]'
              onClick={() => changeImage(index)}
            >
              <img
                src={item}
                alt=""
                className={`h-full w-full object-cover ${indexOfImage === index && "opacity-30"}`}
              />
            </div>
          ))}
        </div>
        {/* Main image */}
        <div className='xl:w-[728px] xl:h-[680px] w-full h-[400px] overflow-hidden'>
          <img
            src={productById?.data?.images[indexOfImage]}
            alt=""
            className='xl:h-full w-full object-cover'
          />
        </div>
      </div>
      <div className='xl:w-[437px] w-full xl:ml-[55px] mt-10 xl:mt-0 '>
        <div>
          <h1 className='text-lg my-3'>{productById?.data?.name}</h1>
          <div className='flex gap-2'>
            <h1 className={`text-xl my-3 ${productById?.data?.sale > 0 && "line-through"}`}>
              ${productById?.data?.price}.00
            </h1>
            <h1 className={`text-xl my-3 ${productById?.data?.sale <= 0 && "hidden"} text-[#CF4616]`}>
              ${productById?.data?.sale}.00
            </h1>
          </div>
          <h1 className='text-sm my-3'>
            I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions
          </h1>
        </div>
        <div className='w-full my-3'>
          <h1 className='mb-1'>Size</h1>
          <div className='relative'>
            <div
              onClick={() => setIsSizeBarOpen(!isSizeBarOpen)}
              className='h-[40px] w-full border-[1px] border-black flex items-center justify-between px-3'
            >
              <p className={`${size === "Select" ? "text-black/30" : "text-black"}`}>
                {size}
              </p>
              <FontAwesomeIcon className='text-black' icon={faAngleDown} />
            </div>
            <div
              className={`bg-white w-full border-[1px] border-black/20 border-t-0 absolute overflow-hidden ${isSizeBarOpen ? "max-h-[150px]" : "max-h-0"} transition-all duration-300 ease-in-out`}
            >
              {productById?.data?.sizes?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => { setIsSizeBarOpen(!isSizeBarOpen); setSize(item) }}
                  className='h-[30px] flex items-center pl-3'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full my-3'>
          <h1 className='mb-1'>Quantity</h1>
          <div className='w-[120px] h-[40px] border-[1px] border-black flex items-center'>
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
              className={`w-1/3 text-center ${quantity > 1 ? "text-black" : "text-black/30"}`}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <p className='w-1/3 text-center text-sm'>{quantity}</p>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className='w-1/3 text-center'
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <div className='w-full justify-between xl:flex'>
          <button onClick={addToCart} className='mb-3 xl:mb-0 w-full xl:w-[185px] h-[46px] bg-[#CF4616] flex justify-center items-center text-white'>
            Add to Cart
          </button>
          <button className='mb-3 xl:mb-0 w-full xl:w-[185px] h-[46px] bg-[#1A2508] text-white flex justify-center items-center'>
            Buy Now
          </button>
          <div className='xl:block hidden w-full h-[46px] xl:w-[49px] border-[1px] border-black relative'>
            <Heart
              isClick={isClick}
              onClick={() => setClick(!isClick)}
              styles={{ position: "absolute", top: "-27px", right: "-25px" }}
            />
          </div>
          <div className='xl:hidden mb-3 xl:mb-0 w-full h-[46px] xl:w-[49px] border-[1px] border-black relative'>
            <Heart
              isClick={isClick}
              onClick={() => setClick(!isClick)}
              styles={{ position: "absolute", top: "-27px", right: "37%" }}
            />
          </div>
        </div>

        <div className='w-full'>
          <div className='border-b-[1px] border-black/10 py-2'>
            <div
              onClick={() => { setIsInformatiosBarOpen(!isInformatiosBarOpen); setWhichInfo('PRODUCT INFO') }}
              className='h-[40px] w-full flex items-center justify-between pr-3'
            >
              <p className='text-[13px]'>PRODUCT INFO</p>
              <FontAwesomeIcon className='text-black' icon={faAngleDown} />
            </div>
            <div
              className={`bg-white w-full overflow-hidden ${isInformatiosBarOpen && whichInfo === 'PRODUCT INFO' ? "max-h-[96px]" : "max-h-0"} transition-all duration-300 ease-in-out xl:px-0 px-2`}
            >
              <p className='text-[13px] leading-4'>
                I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='border-b-[1px] border-black/10 py-2'>
            <div
              onClick={() => { setIsInformatiosBarOpen(!isInformatiosBarOpen); setWhichInfo('RETURN & REFUND POLICY') }}
              className='h-[40px] w-full flex items-center justify-between pr-3'
            >
              <p className='text-[13px]'>RETURN & REFUND POLICY</p>
              <FontAwesomeIcon className='text-black' icon={faAngleDown} />
            </div>
            <div
              className={`bg-white w-full overflow-hidden ${isInformatiosBarOpen && whichInfo === 'RETURN & REFUND POLICY' ? "max-h-[96px]" : "max-h-0"} transition-all duration-300 ease-in-out xl:px-0 px-2`}
            >
              <p className='text-[13px] leading-4'>
                I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='border-b-[1px] border-black/10 py-2'>
            <div
              onClick={() => { setIsInformatiosBarOpen(!isInformatiosBarOpen); setWhichInfo('SHIPPING INFO') }}
              className='h-[40px] w-full flex items-center justify-between pr-3'
            >
              <p className='text-[13px]'>SHIPPING INFO</p>
              <FontAwesomeIcon className='text-black' icon={faAngleDown} />
            </div>
            <div
              className={`bg-white w-full overflow-hidden ${isInformatiosBarOpen && whichInfo === 'SHIPPING INFO' ? "max-h-[96px]" : "max-h-0"} transition-all duration-300 ease-in-out xl:px-0 px-2`}
            >
              <p className='text-[13px] leading-4'>
                I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct;
