/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Container from "@/components/Container";
import OrderDetails from "@/components/OrderDetails";
import { resetOrder } from "@/redux/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function page() {
  const dispatch = useDispatch();

  const { orderData } = useSelector((state) => state.shopping);
  return (
    <Container>
        <div>
          <OrderDetails />
          <div className="w-full flex items-center justify-end gap-4">
            {orderData?.order?.length && (
            <button onClick={() => dispatch(resetOrder())}
              className="px-6 py-2 bg-red-400 hover:bg-red-500 my-5 text-center text-lg font-semibold "
            >
              clear orders
            </button>

            )}

            <Link href={"/"} className="px-6 py-2 bg-red-400 hover:bg-red-500 my-5 text-center text-lg font-semibold">
              Return to Shop
          </Link>
          </div>
        </div>
      
         
    </Container>
  );
}

export default page;
