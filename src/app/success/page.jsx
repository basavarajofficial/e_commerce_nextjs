import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'

function page() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <div className='max-w-2xl min-h-[360px] flex flex-col items-center justify-center gap-y-5'>
        <h2 className='text-3xl font-semibold text-green-700'>
        Payment Successful!!
        </h2>
        <p className='text-base font-semibold text-slate-500 text-center'>Thank you for shopping with us!</p>

        <Link href={"/order"} className='btn' > View Order</Link>

        <Link href={"/"} className='animate-bounce bg-red-600 btn' >
          <BsArrowBarLeft />
          Back to Shop</Link>
      </div>
    </Container>
  )
}

export default page