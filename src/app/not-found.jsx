"use client";

import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'

function PageNotFound() {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <div className='max-w-2xl min-h-[360px] flex flex-col items-center justify-center gap-y-5'>
        <h2 className='text-3xl font-semibold'>
        Your pages not Found!
        </h2>
        <p className='text-base text-center'>Oops! The page you are looking for does not exist. 
          It might have been moved or deleted.
        </p>

        <Link href={"/"} className='btn' >
          <BsArrowBarLeft />
          Back to Home</Link>
      </div>
    </Container>
  )
}

export default PageNotFound