import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/Images/ThirdSliderImages/Aesop(1).png';
import img2 from '../../../assets/Images/ThirdSliderImages/Aesop(2).png';
import img3 from '../../../assets/Images/ThirdSliderImages/Aesop(3).png';
import img4 from '../../../assets/Images/ThirdSliderImages/Aesop(4).png';
import img5 from '../../../assets/Images/ThirdSliderImages/Aesop(5).png';
import img6 from '../../../assets/Images/ThirdSliderImages/Aesop(6).png';




// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import firstsliderstyle from "./FirstSliderSection.module.css";
// import './styles.css'

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";

export default function ASuperlativeSelection() {
  return (
    <>
    
     <Swiper className="my-24 "
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
          280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          100: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          
        }}
        scrollbar={true}
        navigation={true}
      
        modules={[Keyboard, Scrollbar, Navigation]}
     
      >
        <SwiperSlide>
          <img src={img1}/>
          <p className="text-sm">
          Congruous
          </p>
          <p className="text-sm">
For fragrant, soft skin from neck to toe 
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}  />
          <p>
          Geranium Leaf Body Cleanser
          </p>
          <p>
         A gentle,invigorating gel cleanser
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <p>
          Geranium Leaf Body Balm
          </p>
          <p>
          Refreshingly aromatic, fresh and green
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <p>
          Shampoo
          </p>
          <p>
          For soft,shiny,fragrant hair
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <p>
         Conditioner
          </p>
          <p>
          For soft,nourish hair
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6}/>
          <p>
         Resurrection Duet
          </p>
          <p>
          A generous pairing for hands
          </p>
        </SwiperSlide>
       
      
      </Swiper>
    </>
  );
}
