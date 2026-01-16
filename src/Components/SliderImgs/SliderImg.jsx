import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://www.ucom.am/storage/files/unity-eternia-2400x1000-arm-07.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=3a85f32a4e28ff3de3b78a1e1617bbf3",
  "https://www.ucom.am/storage/files/5g-sc-2-web-2.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=a648c506519f8f3c453ac0cc55f77c1f",
  "https://www.ucom.am/storage/files/iphone-2720x1080-arm-2.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=66d23aa67a1b1d31a5d094ef879e13c8",
  "https://www.ucom.am/storage/files/smartphone-2720x1080-arm-1.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=90dd92f2aba8f90f109be1e55bd9a561",
  "https://www.ucom.am/storage/files/levelup-india-russia.png-2720x_-quality(75)-webp(80)-o(png).webp?token=624e9282626d227efcc208b3ba9bfa9c",
  "https://www.ucom.am/storage/files/mobile-id-web-01-1.png-2720x_-quality(75)-webp(80)-o(png).webp?token=53b41d44cb1aa1121c55965174a7cd0c",
  "https://www.ucom.am/storage/files/utravel-2720x1080-arm.jpg-2720x_-quality(75)-webp(80)-o(jpg).webp?token=713349e5b28ffb3d365c958ce0d62b56"
];

export default function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="mySwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`slide-${index}`}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "12px",
              marginTop:'50px'
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
