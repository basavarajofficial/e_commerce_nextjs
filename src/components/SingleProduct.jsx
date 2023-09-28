"use client"

import React from 'react'
import {BsFillCartFill } from 'react-icons/bs'
import {AiOutlineHeart } from 'react-icons/ai'
import Image from 'next/image';
import FormattedPrice from './FormattedPrice'
import { addToCart } from '@/redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

function SingleProduct({product}) {

  const dispatch = useDispatch();

  const addCart = () => {
    try {
      dispatch(addToCart(product));
        toast.success('Product added successfully');
    } catch (error) {
        toast.error(error.message);
    }
}

  return (
      <div className="bg-slate-100 grid lg:grid-cols-2 gap-5 p-4 rounded-lg ">
        <div >
        <Image src={product.image} alt='dd' width={500} height={500} className='w-full max-h-[700px] object-cover rounded-lg' />
        </div>
        <div className='p-4 flex flex-col item-start justify-center'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-semibold'>{product.title}</h1>
            <p className='text-xl font-[600] '><FormattedPrice amount={product?.price} /></p>
          </div>
            <p className='font-lg text-slate-500 py-10'>{product.description}</p>
          <div className='text-sm text-slate-500 py-4'>
            <p className='text-base'><span className='text-black'>category : </span> {product.category}</p>
            <p className=''><span className='text-black'>SKU : </span> {product._id}</p>
          </div>
          <div className='flex items-center text-lg group cursor-pointer py-5 w-fit gap-[2px]'>
              <button onClick={() => addCart()}  className='bg-black text-slate-100 h-10 px-3 py-1'>add to cart</button>
              <p id='icon' className='bg-red-500 font-semibold text-xl h-10 flex items-center justify-center px-4 group-hover:text-blue-500'> <BsFillCartFill /> </p>
          </div>
          <div className='text-slate-500 font-semibold flex justify-start items-center gap-x-1'> 
            <button className=' text-sm '>add to wishlist </button>
            <span><AiOutlineHeart /> </span>  
          </div>
        </div>

        <Toaster />
    </div>
  )
}

export default SingleProduct