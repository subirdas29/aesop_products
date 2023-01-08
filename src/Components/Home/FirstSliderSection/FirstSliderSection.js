import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/Images/FirstSliderImages/product-1.png';
import img2 from '../../../assets/Images/FirstSliderImages/product-2.png';
import img3 from '../../../assets/Images/FirstSliderImages/product-3.png';
import img4 from '../../../assets/Images/FirstSliderImages/product-4.png';
import img5 from '../../../assets/Images/FirstSliderImages/product-5.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import firstsliderstyle from "./FirstSliderSection.module.css";

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";

export default function FirstSliderSection() {
  return (
    <>
    
     <Swiper
        slidesPerView={3.25}
        centeredSlides={false}
        spaceBetween={10}
        slidesPerGroupSkip={1}
        speed={600}
        
        
        breakpoints={{
            1000:
            {
                slidesPerView: 3.20,
                slidesPerGroup: 3.20, 
            },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          484: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          
        }}
        scrollbar={true}
        navigation={true}
      
        modules={[Keyboard, Scrollbar, Navigation]}
        className={firstsliderstyle}
      >
        <SwiperSlide>
          <img src={img1}/>
          <p className="text-sm">
          Geranium Leaf Duet
          </p>
          <p className="text-sm">
          A gentle cleanser and aromatic balm
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <p>
          Resurrection Duet
          </p>
          <p>
          Cleanse and nourish the hands
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <p>
          Resurrection Duet
          </p>
          <p>
          A sumptuous pairing for hands
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <p>
          Resurrection Hand Purifying Duet
          </p>
          <p>
          A citrus,woody,herbaceous duo
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5}/>
          <p>
          You & Your Dog Duo
          </p>
          <p>
          A pair of aromatic gel cleansers
          </p>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
