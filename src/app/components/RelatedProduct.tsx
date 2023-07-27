'use client';
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

export default function RelatedProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0 ">
      <div className="text-2xl font-bold mb-5 ">You Might Also Like</div>
      <Carousel
        showThumbs={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // Set to true for server-side rendering
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Add your related product items here */}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
        <div>Related Product 1</div>
        <div>Related Product 2</div>
        <div>Related Product 3</div>
        <div>Related Product 4</div>
        <div>Related Product 5</div>
      </Carousel>
    </div>
  );
}
