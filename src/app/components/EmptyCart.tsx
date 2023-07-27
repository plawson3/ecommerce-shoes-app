import Image from "next/image";
import React from "react";
import EmptyCartImg from "@/../public/empty-cart.jpg";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex=[2] flex flex-col items-center pb-[50x] md:mt-14  ">
      <Image className="w-[300px] md:w-[400px] " src={EmptyCartImg} alt="" />
      <span className="text-xl font-bold ">Your Cart is Empty</span>
      <span className="text-center mt-4">
        Looks like you have not added anything in your cart.
        <br />
        Go AHead and explore top categories.
      </span>
      <Link
        href={"/"}
        className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8 "
      >
        Continue Shopping
      </Link>
    </div>
  );
}
