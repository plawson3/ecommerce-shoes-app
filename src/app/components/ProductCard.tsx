import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { IProduct } from "../Interface/IProduct";

export const  CalculateDiscountedPrice = (price: number, discount: number) => {
  const value = (price * discount) / 100;
  return price - value;
};

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  const { productname, productimage, price, discount, slug } = product;
  const discountedPrice = CalculateDiscountedPrice(price, discount).toFixed(2);

  return (
    <Link href={`/product/${slug}`} className="transform p-5  bg-white duration-200 hover:scale-105 cursor-pointer">
      <Image priority={false} src={productimage && urlForImage(productimage).url()} width={400} height={400} alt={productname} quality={100} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{productname}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">${discountedPrice}</p>
          <p className="text-base font-medium line-through">${price}.00</p>
          <p className="ml-auto text-base font-medium text-green-500">{discount}% off</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
