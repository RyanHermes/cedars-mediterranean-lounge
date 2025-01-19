"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      autoplay={{
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false, // Keep autoplay after interaction
      }}
      spaceBetween={30}
      slidesPerView={1}
      className="w-full max-w-4xl"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>
      ))}

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev custom-swiper-arrow"></div>
      <div className="swiper-button-next custom-swiper-arrow"></div>

      {/* Custom Pagination */}
      <div className="swiper-pagination custom-swiper-dots"></div>
    </Swiper>
  );
}
