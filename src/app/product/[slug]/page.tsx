'use client';

import ProductDetailsCarousal from "@/app/components/ProductDetailsCarousal";
import Wrapper from "@/app/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import { client } from "../../../../sanity/lib/client";
import { IProduct } from "@/app/Interface/IProduct";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { HiOutlineMinusCircle } from 'react-icons/hi'
import { getSingleProductQuery } from "../../../../sanity/lib/query";

import { useAppSelector, useAppDispatch } from "@/store/hooks/counterHooks";
import { counterActions } from "@/store/slice/counterSlice";
import { toast } from "react-hot-toast";

const ProductDetail = ({ params }: { params: { slug: string } }) => {

  const counterValue = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(counterActions.increment())
  };
  const decrement = () => {
    counterValue > 1 ? dispatch(counterActions.decrement()) : toast.error("Quantity can't be negative")
  };

  // const [counter, setCounter] = useState<number>(1);
  const [product, setProduct] = useState<IProduct>();
  const slug = params.slug;

  // const quantityCounter = (e: React.MouseEvent<HTMLButtonElement>) => {

  //   const { id } = e.currentTarget;

  //   if (id === "inc") {
  //     setCounter(counter + 1);
  //   } else if (id === "dec" && counter > 1) {

  //     setCounter(counter - 1);
  //   } else {
  //     setCounter(1);
  //   }
  // }

  useEffect(() => {
    async function getProduct() {
      const data: IProduct[] = await client.fetch(getSingleProductQuery);
      const productObj = data.find((x) => x.slug === slug)

      setProduct(productObj);
    }
    getProduct();
  }, [slug])

  return (
    <div className="w-full md:py-20 ">
      <Wrapper className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">
        {/* left column start */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
          {product && <ProductDetailsCarousal _image={product?.productimage} />}
        </div>
        {/* left column end */}

        {/* right column start */}
        <div className="flex-[1] py-3 ">
          {/* product title */}
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            {product?.productname}
          </div>
          {/* Product Subtitle */}
          <div className="text-lg font-semibold mb-5 ">
            {product?.category.categoryname}
          </div>
          {/* Product Price  */}
          <div className="text-lg mr-2 font-semibold">MRP : $ {product?.price}.00</div>
          {/* Product Price  */}

          <div className="text-md font-medium text-black ">
            incl. of taxes
          </div>
          <div className="text-md font-medium text-black mb-8 ">
            {"(Also includes all applicable duties)"}
          </div>

          {/* quantity button start */}
          <div className="my-5 flex gap-5 text-2xl">
            <div className="text-lg font-semibold">Quantity:</div>
            <div className="items-center flex">
              <button className="bg-gray-400/[0.5]  rounded-tr-none rounded-br-none p-1 rounded-lg hover:scale-105 ease-in-out hover:bg-gray-400 hover:text-gray-200 " id="dec" onClick={decrement}>
                <HiOutlineMinusCircle />
              </button>
              {/* <input
                type="number" value={counterValue}
                id="productquantity"
                onChange={()=>{}}
                readOnly
                className="h-6 w-1/4 outline outline-offset-2 outline-gray-300  text-center text-lg"
              /> */}
              <h1 className="h-6 w-1/2 px-5 font-bold outline outline-offset-2 outline-gray-300  text-center text-lg">{counterValue}</h1>
              <button className="bg-gray-400/[0.5] rounded-tl-none rounded-bl-none p-1 rounded-lg hover:scale-105 ease-in-out hover:bg-gray-400 hover:text-gray-200 " id="inc" onClick={increment}>
                <AiOutlinePlusCircle />
              </button>
            </div>
          </div>

          {/* quantity button end */}

          {/* project size range start */}
          <div className="mb-10">
            {/* heading start */}
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold ">Select Size</div>
              <div className="text-md font-medium text-black cursor-pointer ">
                Select Guide
              </div>
            </div>
            {/* heading end */}

            {/* size start */}
            <div className="grid grid-cols-3 gap-2 ">
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                UK 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50 ">
                UK 6
              </div>
            </div>
            {/* size end */}

            {/* Error Message  */}
            <div className="text-red-600 mt-1 ">Size Selection is Required</div>
            {/* Error Message  */}
          </div>
          {/* project size range end */}

          {/* add to cart button start */}
          <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ">
            Add to Cart
          </button>
          {/* add to cart button end */}
          {/* wishlist button start */}
          <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10 ">
            Wishlist
            <IoMdHeartEmpty size={20} />
          </button>
          {/* wishlist button end */}

          <div>
            <div className="text-lg font-bold mb-5 ">Product Details</div>
            <div className="text-md mb-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              nihil labore facere maxime, aperiam iste odio fuga voluptas quia
              nemo eum asperiores? In aliquam sed esse, harum delectus quis
              tempora.
            </div>
          </div>
        </div>
        {/* right column end */}
      </Wrapper>
    </div>
  );
};

export default ProductDetail;