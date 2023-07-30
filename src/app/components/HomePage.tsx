'use client';

import {useState,useEffect} from 'react'
import { client } from "../../../sanity/lib/client";
import { getAllProducts } from "../../../sanity/lib/query";
import { IProduct } from "../Interface/IProduct";
import HeroBanner from './HeroBanner';
import Wrapper from './Wrapper';
import ProductCard from './ProductCard';


export default function HomePage() {

  const [allProducts, setAllProducts] = useState<IProduct[]>();

  useEffect(() => {
    async function getProducts() {
      const res: IProduct[] = await client.fetch(getAllProducts);
      setAllProducts(res);
    }
    getProducts()
  }, [])

  return (
    <>
      <div className="">
        <HeroBanner />
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] ">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
              Just Do It!!!
            </div>
            <div className="text-md md:text-xl ">
              Our purpose is to move the world forward through the power of
              sport. Worldwide, we’re leveling the playing field, doing our part
              to protect our collective playground, and expanding access to
              sport for everyone.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {allProducts !== undefined && allProducts !== null ? allProducts.map((product: IProduct) => (
              <ProductCard key={product._id} product={product} />
            )) : ""}
          </div>
        </Wrapper>
      </div>
    </>
  );
}