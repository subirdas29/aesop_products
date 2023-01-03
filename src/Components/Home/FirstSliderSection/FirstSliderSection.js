import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function FirstSliderSection() {
  return (
    <>
      <Swiper
      spaceBetween={50}
        slidesPerView={3}
        centeredSlides={false}
        // slidesPerGroupSkip={1}
        grabCursor={true}
        // keyboard={{
        //   enabled: true,
        // }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mx-4 ">
          <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" className="h-[300px]"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" className="h-[300px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
