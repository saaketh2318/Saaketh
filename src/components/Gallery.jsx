import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/gallery/IMG_4351.jpg",
  "/gallery/IMG_3867.jpg",
  "/gallery/IMG_5396.jpg",
  "/gallery/IMG_7115.jpg",
  "/gallery/IMG_7117.jpg",
  "/gallery/IMG_7119.jpg",
  "/gallery/IMG_7120.jpg",
  "/gallery/IMG_9289.heic",
  "/gallery/IMG_6952.heic",
  
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-900 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">Gallery</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className="rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[500px] object-contain rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
