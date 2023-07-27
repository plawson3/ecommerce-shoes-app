import NextImage from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Image } from "sanity";

export default function ProductDetailsCarousal({_image}:{_image:Image}) {
  
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <NextImage src={urlForImage(_image).url()} width={600} height={600} className="" alt="" />
      {/* <Carousel className="productCarousel" showThumbs={false}>
        <Image src={p5} alt="" />
        <Image src={p6} alt="" />
        <Image src={p7} alt="" />
      </Carousel> */}
      {/* <RelatedProduct /> */}
    </div>
  );
}