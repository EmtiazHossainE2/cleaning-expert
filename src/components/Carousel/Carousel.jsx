import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Carousel = () => {
  const [carousel,setCarousel] = useState([])

  useEffect(() =>{
    fetch('urbanExpertCleaning-common.json')
    .then(res => res.json())
    .then(data => setCarousel(data))
  },[])

  // console.log(carousel[0]?.carousel);

  return (
    <div className='pt-12 container mx-auto lg:px-12'>
      <h2 className='text-center text-2xl font-[600]' style={{ fontFamily: 'Montserrat' }}>Our Professionals Work </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        loop={true}
        navigation={true} 
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination, Navigation]}


        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
      >
        {carousel[0]?.carousel.map((caro) => (
            <SwiperSlide>
              <div className="pt-4">
                <img className="h-60 lg:h-40 w-full" src={caro} alt="" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;