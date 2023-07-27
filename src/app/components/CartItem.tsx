import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import product1 from "@/../public/product-1.webp";
import Image from "next/image";

export default function CartItem() {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b ">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px] ">
        <Image src={product1} alt="" />
      </div>
      {/* Image End */}

      <div className="w-full flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between ">
          {/* product title */}
          <div className="text-lg md:text-2xl font-semibold text-black  ">
            Jordan Retro 6 G
          </div>

          {/* product subtitle */}
          <div className="text-sm md:text-md font-medium text-black block md:hidden  ">
            Men&apos;s Golf Shoes
          </div>

          {/* product price */}
          <div className="text-sm md:text-md font-bold text-black mt-2  ">
            MRP : Rs 1500.00
          </div>
        </div>

        {/* product subtitle */}
        <div className="text-md font-medium text-black/ hidden md:block  ">
          Men&apos;s Golf Shoes
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

            {/* Qty DropDown Start */}
            <div className="flext items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black" name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          {/* Size DropDown End */}

          {/* delete icon  */}
          <RiDeleteBin6Fill className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
}
