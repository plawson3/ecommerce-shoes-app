'use client'
import ProductCard from "@/app/components/ProductCard";
import Wrapper from "@/app/components/Wrapper";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import { client } from "../../../../sanity/lib/client";
import { categoryQuery, getCategoryProductQuery } from "../../../../sanity/lib/query";
import { useEffect, useState } from 'react'
import { ICategory } from "@/app/Interface/IProduct";




export default function Category({ params }: { params: Params }) {
  const category = params.name.toLowerCase().trim();
  const [productCategory, setProductCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    const getProductCategory = async () => {
      const res: ICategory[] = await client.fetch(getCategoryProductQuery);
      const filteredProducts = res.filter((product) => {
        return product.categoryslug.toString().trim().toLowerCase().includes(category);
      });

      setProductCategory(filteredProducts)
    }

    getProductCategory();

  }, [category])
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className=" text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
            {category.replace('-', ' ').toUpperCase()}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {productCategory && productCategory.map((product: ICategory) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
