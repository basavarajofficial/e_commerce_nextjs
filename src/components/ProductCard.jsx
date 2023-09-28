"use client";


import { percentageOff } from '@/helpers';
import Image from 'next/image';
import React from 'react'
import FormattedPrice from './FormattedPrice';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';

function ProductCard({product}) {

    const reducer = useDispatch();

    //add tp cart
    const addCart = () => {
        try {
            reducer(addToCart(product));
            toast.success('Product added successfully');
        } catch (error) {
            toast.error(error.message);
        }
    }



    
    const starArray = Array.from({length : product.rating}, (_, index) => (
        <span key={index} className='text-yellow-600'> <AiFillStar /> </span>
    ))


  return (

    <div className='w-full h-full rounded-lg overflow-hidden group shadow-lg bg-slate-100'>
        <Link href={{pathname:"/product", query:{_id:product?._id}}}>
        {/* <Link href={`/product/_id:${product?._id}`}> */}
        
        <div className='h-96 w-full relative overflow-hidden' >
        <Image src={product?.image}  alt='items' width={500} height={500} className='w-full h-full object-cover group-hover:scale-110 duration-200' /> 

        {product?.isNew && <span className='absolute z-10 bg-red-600 top-5 right-5 text-slate-100 text-sm p-1 px-3 rounded-lg' > New </span> }
        </div>
        <div className='flex flex-col bg-slate-100 p-2 px-4 gap-y-2'>
            <h1 className='font-mono'>{product.title}</h1>
            <div className='flex justify-between'>
                <span className='bg-slate-200 border-[1px] border-red-400 text-xs flex items-center rounded-full px-3 py-1'>
                    {percentageOff(product?.price, product?.oldPrice)}% off
                </span>
                    <div className='flex gap-2 items-center'>
                        <span className='text-slate-500 text-md line-through font-mono'> <FormattedPrice amount={product?.oldPrice} /> </span>
                        <span className='text-slate-700 text-lg font-mono font-semibold'><FormattedPrice amount={product?.price} /></span>
                    </div>
            </div>
        </div>
        </Link>
            <div className='flex items-center justify-between px-3 py-2'>
                <button onClick={() => addCart(product)} 
                className='bg-red-500 text-slate-100 border-[1px] border-red-400 text-sm flex items-center rounded-full px-5 py-2 w-fit hover:bg-red-700'>add to cart</button>
                
                <p className='flex items-center gap-x-1'>{starArray}</p>
            </div>

            <Toaster />
       
    </div>
  )
}

export default ProductCard;