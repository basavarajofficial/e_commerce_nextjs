
"use client";

import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { FaSquareXTwitter, FaYoutube, FaSquareFacebook, FaSquareGithub, FaSquareReddit } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import payment from "@/images/payment.png"

function Footer() {
  return (
    <div className='footer bg-slate-900 text-slate-200'>
      <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
        <div className='flex flex-col items-start gap-y-6'>
        <Logo className="w-fit" />
        <div className="icons flex gap-x-4 text-xl bg-slate-700 px-4 py-2 rounded-md cursor-pointer">
          <FaSquareGithub />
          <FaSquareFacebook />
          <FaSquareXTwitter />
          <FaYoutube />
          <FaSquareReddit />
        </div>
        </div>

        <div className='text-slate-300 uppercase text-sm font-extralight flex flex-col gap-y-1 items-start'>
          <h1 className='text-slate-400 text-base underline '>Latest Brands</h1>
          <p>french</p>
          <p>luios witton</p>
          <p>tredition</p>
          <p>festival</p>
        </div>

        <div className='text-slate-300 uppercase text-sm font-extralight flex flex-col gap-y-1 items-start '>
          <h1 className='text-slate-400 text-base underline '>Links</h1>
          <Link href={"/"} >
          <p>home</p>
          </Link>
          <Link href={"/cart"} >
          <p>cart</p>
          </Link>
          <p>about</p>
          <p>news letter</p>
          <p>contact</p>
        </div>

        <div className='flex flex-col items-start gap-y-2'>
          <span>we have secure payment options</span>
          <Image src={payment} alt='payment' className='w-full h-10 object-cover' />
        </div>
      </Container>
    </div>
  )
}

export default Footer