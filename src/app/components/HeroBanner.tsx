'use client'
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../../../public/slide-1.png";
import slide2 from "../../../public/slide-2.png";
import slide3 from "../../../public/slide-3.png";

export default function HeroBanner() {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto ">
      <Carousel  showThumbs={false} autoPlay={true} >
        <div>
          <Image
            src={slide1}
            alt=""
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className=" px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 ">
            Shop now
          </div>
        </div>
        <div>
          <Image
            src={slide2}
            alt=""
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className=" px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 ">
            Shop now
          </div>
        </div>
        <div>
          <Image
            src={slide3}
            alt=""
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className=" px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90 ">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
}
