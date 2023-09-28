"use client"

import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { BsBookmark, BsSearch } from 'react-icons/bs'
import { BiUserCircle, BiSolidCartAlt } from 'react-icons/bi';
import { AiOutlineLogout } from 'react-icons/ai';

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FormattedPrice from "./FormattedPrice";
import { addUser, deleteUser } from "@/redux/cartSlice";

function Header() {

  const [totalAmt , setAmt] = useState(0);

    const { data : session } = useSession();

    const dispatch = useDispatch();
    
    useEffect(() => {
      if(session){
        dispatch(addUser({
          name : session?.user?.name,
          email : session?.user?.email,
          image : session?.user?.image
        }))
      }else{
        dispatch(deleteUser());
      }
    }, [session, dispatch])

    const {productData : cartProds, orderData} = useSelector(state => state.shopping);

    
    useEffect(() => {
     let amt = 0;
     cartProds.map((item) => {
      amt += item.price * item.quantity;
      return amt.toFixed(2);
     })
     setAmt(amt);
    }, [cartProds]);

    

  return (
    <div className="bg-slate-200 h-20 top-0 sticky z-50">
      <Container className=" flex h-full items-center md:gap-x-5 justify-between md:justify-start ">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="group w-full bg-white rounded-full px-4 py-1.5 hidden md:flex items-center gap-x-1  border-2 focus-within:border-lime-300 caret-pink-500">
            <BsSearch className="text-gray-300 group-focus-within:text-gray-600 duration-200" />
          <input
            type="text"
            className="flex-1 p-1 placeholder:text-sm border-none outline-none"
            placeholder="Search your product"
          />
        </div>


        {!session && 
            <div onClick={() => signIn()} className="flex items-center px-2 py-2 md:px-4 md:py-3 gap-x-2 bg-slate-100 hover:bg-slate- duration-200 rounded-full">
            <BiUserCircle className="text-xl" />
            <button  className="text-sm font-semibold">Login/Register</button>
            </div>
        }


        <Link href={"/cart"} className="cartDiv ">
            <BiSolidCartAlt className="text-xl" />
           <p className=" ml-2 text-slate-100">
            <FormattedPrice amount={totalAmt ? totalAmt : 0 } />
           </p>
           <span className="bg-red-500 h-6 w-6 rounded-full absolute -right-2 -top-1 text-sm flex justify-center items-center ">{cartProds.length}</span>
        </Link>

        
        {session && <Image src={session?.user?.image} alt='user' width={40} height={40} className="rounded-full" /> }

        {orderData?.order?.length > 0 && session && (

          <Link href={'/order'} className=" cartDiv"  >
            <BsBookmark />
            <p className="text-sm font-semibold">Orders</p>
          </Link>
        )}

       {session && 
         <div   className="btn">
        <button onClick={() => signOut()}  className="text-sm font-semibold">Logout</button>
        <AiOutlineLogout className="text-xl" />
        </div>
       }
        

      </Container>
    </div>
  );
}

export default Header;
