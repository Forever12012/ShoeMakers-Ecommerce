import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Import images
import sleekSneakers from "../assets/swiper1image/pexels-allan-mas-5369006.jpg";
import stylishHighTop from "../assets/swiper1image/pexels-rafa-de-21730-345415.jpg";
import elegantDressShoes from "../assets/swiper1image/pexels-timegrocery-2421374.jpg";

export default function Swiper1() {
  return (
    <div className="relative h-[70vh] bg-gray-900 text-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {/* Slide 1: Sleek Sneakers */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={sleekSneakers}
              className="block w-full h-full object-cover object-bottom opacity-70"
              alt="Sleek Sneakers"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-black">
              <h2 className="text-4xl font-extrabold mb-4 text-center animate-fadeInUp">
                Step Up Your Game
              </h2>
              <p className="text-lg font-light mb-6 text-center">
                Discover the latest in sneaker fashion.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Stylish High-Top Sneakers */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={stylishHighTop}
              className="block w-full h-full object-cover object-top opacity-70"
              alt="Stylish High-Top Sneakers"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-black">
              <h2 className="text-4xl font-extrabold mb-4 text-center animate-fadeInUp">
                Elevate Your Style
              </h2>
              <p className="text-lg font-light mb-6 text-center">
                Trendy high-tops for the fashion-forward.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Elegant Dress Shoes */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={elegantDressShoes}
              className="block w-full h-full object-cover object-center opacity-70"
              alt="Elegant Dress Shoes"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-black">
              <h2 className="text-4xl font-extrabold mb-4 text-center animate-fadeInUp">
                Timeless Elegance
              </h2>
              <p className="text-lg font-light mb-6 text-center">
                Perfect for every formal occasion.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev text-white opacity-70 hover:opacity-100"></div>
      <div className="swiper-button-next text-white opacity-70 hover:opacity-100"></div>
    </div>
  );
}
