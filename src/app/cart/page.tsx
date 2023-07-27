import React from "react";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";

export default function Cart() {
  return (
    <div className="w-full md:py-20 ">
      <Wrapper>
        {/* // Heading and Paragraph Start */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
            Shopping Cart
          </div>
        </div>
        {/* // Heading and Paragraph End */}
        {/* cart context start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10 ">
          {/* cart items start */}
          <div className="flex-[2]">
            <div className="text-xl font-extrabold ">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* cart items end */}

          {/* cart summary start */}
          <div className="flex-[1]">
            <div className="text-xl font-extrabold ">Summary</div>
            <div className="p-5 my-5 bg-black/[0.1] rounded-xl">
              <div className="flex justify-between ">
                <div className="uppercase text-md md:text-lg font-medium text-black ">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black ">
                  Rs 1500.00
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                provident dolorem natus tenetur nostrum culpa maiores rerum, ea
                incidunt quidem repudiandae voluptatem facere cum distinctio
                fuga soluta accusamus porro atque.
              </div>
            </div>

            {/* button start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ">
              CheckOut
            </button>
            {/* button end */}
          </div>
          {/* cart summary end */}
        </div>
        {/* cart context end */}

        {/* empty cart page start */}
        {/* <EmptyCart /> */}
        {/* empty cart page end */}
      </Wrapper>
    </div>
  );
}
