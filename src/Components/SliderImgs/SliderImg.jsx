import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://www.ucom.am/storage/files/web-2720x1080-armjpg.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=cf0ff1a230a870d6daafad6d82872d2c",
  "https://www.ucom.am/storage/files/utravel-new-web-arm.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=5ac09575f4814b29b232a6d6e5a74fe5",
  "https://www.ucom.am/storage/files/iphone-2720x1080-arm-2.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=66d23aa67a1b1d31a5d094ef879e13c",
  "https://www.ucom.am/storage/files/smartphone-2720x1080-arm-1.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=90dd92f2aba8f90f109be1e55bd9a561",
  "https://www.ucom.am/storage/files/playstation-5-web-armjpg-1.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=8e2c14343c90e66f60d071d31f4d730f",
  "https://www.ucom.am/storage/files/nicenumber-levelup-2720x1080-am.png-2720x_-quality(75)-webp(80)-o(png).webp?token=9e4670738b9f9316160041e14e0cd86b",
];

export default function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      className="mySwiper  mx-auto"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl mt-10"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
