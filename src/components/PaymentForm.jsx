"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormattedPrice from './FormattedPrice';
import { signIn, useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import { reset, saveOrder } from '@/redux/cartSlice';


function PaymentForm() {

    const dispatch = useDispatch();
    
  const [totalAmt , setAmt] = useState(0);

  const { productData, userInfo } = useSelector(state => state.shopping);

  
  useEffect(() => {
   let amt = 0;
   productData.map((item) => {
    amt += item.price * item.quantity;
    return amt.toFixed(2);
   })
   setAmt(amt);
  }, [productData]);



  // stripe payment section ================================
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const { data : session} = useSession();
  let handleCheckout = async() =>{

        const stripe = await stripePromise;

        let response = await fetch("http://localhost:3000/api/checkout" , {
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({
                items: productData,
                email : session?.user?.email,
            }),
        });
        const data = await response.json();

        if(response.ok){
           dispatch(saveOrder({
            order : productData,
            id : data.id
           }))

           stripe?.redirectToCheckout({sessionId: data.id});
           //reset cart
           dispatch(reset());
        }else{
            throw new Error("Failed to make a payment");
        }
  };



  return (
    <div className='w-full bg-white p-4'>
        <h1 className='text-2xl py-4'>Cart Total</h1>

        <div className='border-b-[1px] py-2'>
            <div className='max-w-lg flex items-center justify-between'>
                <span className='uppercase font-medium'>subtotal</span>
                <span> <FormattedPrice amount={totalAmt} /> </span>
            </div>
        </div>

        <div className='border-b-[1px] py-2'>
            <div className='max-w-lg flex items-center justify-between'>
                <span className='uppercase font-medium'>shipping</span>
                <span> <FormattedPrice amount={20} /> </span>
            </div>
        </div>

        <div className='border-b-[1px] py-2'>
            <div className='max-w-lg flex items-center justify-between'>
                <span className='uppercase text-lg font-semibold'>total</span>
                <span className='uppercase text-lg font-semibold'> <FormattedPrice amount={totalAmt + 20} /> </span>
            </div>
        </div>

        <div className='w-full py-4'>

        {userInfo ? 
                <button onClick={handleCheckout}
                className='bg-red-400 hover:bg-red-600 px-5 py-2 text-slate-900 rounded-md text-lg  font-medium duration-200'> checkout </button> : 

                <div className='flex flex-col max-w-lg'>
                    <button disabled  className='bg-red-400 hover:bg-red-600 px-5 py-2 text-slate-900 rounded-md text-lg duration-200  font-medium cursor-not-allowed'> checkout </button>
                    <div className='flex max-w-lg items-center justify-center my-5 animate-bounce '>
                        <button onClick={() => signIn()} className='text-sky-600 underline px-2'>Please click here to login for Checkout</button>
                    <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute  inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    </div>
                </div>
                    
        }
        </div>
        
    </div>
  )
}

export default PaymentForm