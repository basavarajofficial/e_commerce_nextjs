"use client";
import React from "react";
import { useSelector } from "react-redux";
import FormattedPrice from "./FormattedPrice";
import Image from "next/image";
import Container from "./Container";

function OrderDetails() {
  const { orderData } = useSelector((state) => state.shopping);

  console.log(orderData);

  return (
    <div>
      {orderData?.order?.length > 0 ? (
        <Container>
          <div className="grid grid-cols-7 text-sm uppercase font-medium py-2 border-b-[2px] border-b-gray-300">
            <p className="col-span-4">item</p>
            <p className="flex items-center justify-center">quantity</p>
            <p className="flex items-center justify-center">unit price</p>
            <p className="flex items-center justify-center">Amount</p>
          </div>

          <div className="flex flex-col py-2 justify-center gap-2 ">
            {orderData?.order?.map((item) => (
              <div
                key={item?._id}
                className="grid grid-cols-7 text-sm  font-medium py-2 border-b-[2px] border-b-gray-300"
              >
                <div className="col-span-4 flex gap-2 items-start">
                  <Image
                    src={item?.image}
                    width={500}
                    height={500}
                    alt="order"
                    className="w-16 h-14 object-cover "
                  />

                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      {item?.title}
                    </h3>
                    <p className="text-sm font-light">{item?.description}</p>
                  </div>
                </div>

                <p className="flex items-center justify-center">
                  {item?.quantity}
                </p>
                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price} />
                </p>
                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price * item?.quantity} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div className="w-full h-[10rem] bg-slate-200 py-5 px-2 flex justify-center items-center">
          <p className="text-lg font-semibold text-gray-600 animate-bounce">Nothing to show</p>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
