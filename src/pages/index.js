import Image from "next/image";
import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/Home.module.css";
// custom components
import Test from "@/components/test/test";
// image
import photo from "@/assets/img/pexels.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Test text="hello world" /> */}
      <Test>
        <p>Test</p>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </Test>
      {/* image */}
      <Image src={photo} width={200} height={200} />
      {/* swiper */}
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
