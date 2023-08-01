"use client";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Image from "next/image";
import { CartPayload, cartActions } from "@/store/slice/cartSlice";
import { urlForImage } from "../../../sanity/lib/image";

import { useAppSelector, useAppDispatch } from "@/store/hooks/counterHooks";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { counterActions } from "@/store/slice/counterSlice";
import { toast } from "react-hot-toast";
import { stat } from "fs";

export default function CartItem({ item }: { item: CartPayload }) {
  const { id, name, price, quantity, category, productImage } = item;

  const counterValue = useAppSelector((state) => {
    let productQty = state.cartSlice.items.find(x => x.id === id);
    if (productQty !== undefined) {
      return productQty.quantity;
    }
    return state.counterSlice.value;
  });
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(cartActions.AddToCart({ id, name, price, category, productImage, quantity: 1 }))
  };
  const decrement = () => {
    counterValue > 1 ? dispatch(cartActions.RemoveFromCart({ id, name, price, category, productImage, quantity: 1 })) : toast.error("Quantity can't be negative")
  };

  const deleteFromCart = () => {
    dispatch(cartActions.DeleteProductFromCart({ id }));
    toast.success("Product Removed From Cart!!");
  }

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b ">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px] ">
        <Image priority={false} src={urlForImage(productImage).url()} width={400} height={400} alt={name} quality={100} />
      </div>
      {/* Image End */}

      <div className="w-full flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between ">
          {/* product title */}
          <div className="text-lg md:text-2xl font-semibold text-black  ">
            {name}
          </div>

          {/* product subtitle */}
          <div className="text-sm md:text-md font-medium text-black block md:hidden  ">
            {category}
          </div>

          {/* product price */}
          <div className="text-sm md:text-md font-bold text-black mt-2  ">
            MRP : $ {price.toFixed(2)}
          </div>
        </div>

        {/* product subtitle */}
        <div className="text-md font-medium text-black/ hidden md:block  ">
          {category}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[1] text-start md:text-md ">

            {/* Size DropDown Start */}
            <div className="flext items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black" name="" id="">
                <option value="1">UK 6</option>
                <option value="2">UK 7</option>
                <option value="3">UK 8</option>
              </select>
            </div>
            {/* Size DropDown End */}

            {/* quantity button start */}
            <div className="my-5 flex gap-5">
              <div className="font-semibold">Quantity:</div>
              <div className="items-center flex">
                <button className="bg-gray-400/[0.5]  rounded-tr-none rounded-br-none p-1 rounded-lg hover:scale-105 ease-in-out hover:bg-gray-400 hover:text-gray-200 " id="dec" onClick={decrement}>
                  <HiOutlineMinusCircle />
                </button>
                <h1 className="h-[16px] w-1/2 px-5  font-bold outline outline-offset-2 outline-gray-300  text-center">{counterValue}</h1>
                <button className="bg-gray-400/[0.5] rounded-tl-none rounded-bl-none p-1 rounded-lg hover:scale-105 ease-in-out hover:bg-gray-400 hover:text-gray-200 " id="inc" onClick={increment}>
                  <AiOutlinePlusCircle />
                </button>
              </div>
            </div>
            {/* quantity button end */}

            {/* delete icon  */}
            <RiDeleteBin6Fill className="cursor-pointer  text-black/[0.5] hover:text-black hover:scale-125 hover:ease-in-out hover:transition-transform  first-line: text-[16px] md:text-[20px]" onClick={deleteFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
