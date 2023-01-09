
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/Images/SecondSliderImages/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.png';
import img2 from '../../../assets/Images/SecondSliderImages/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg';
import img3 from '../../../assets/Images/SecondSliderImages/Aesop_Harbour_City_II_Hero_Bleed_Desktop_2880x1620px.png';

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import styles from "./StoreLocator.module.css";

// import required modules
import { Navigation, Scrollbar } from "swiper";

import { FaArrowRight } from 'react-icons/fa';
import './styles.css'

const StoreLocator = () => {
    return (
        <section className=" dark:text-black">
        <div className="flex flex-col justify-center py-6  mx-auto sm:py-12 lg:py-24 lg:flex-row xl:flex-row lg:justify-between">
            
            <div className="flex flex-col justify-top py-6 pl-20 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <p>Tokens of appreciation</p>
                <h1 className="text-3xl font-bold leading-none sm:text-2xl my-4">Corporate gifts
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    
                    <button className="btn border border-slate-300 hover:bg-black hover:text-white px-6 py-5 text-sm font-medium rounded flex items-center justify-between">Learn more about this service <FaArrowRight className='ml-8 text-xs'/></button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0 ml-10 lg:w-7/12 ">
            <Swiper
        slidesPerView={1}
        // centeredSlides={false}
        slidesPerGroupSkip={1}
        speed={700}
     
        scrollbar={true}
        navigation={true}
        
       
        modules={[ Scrollbar, Navigation,]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1}/>
          <p >Aesop New Town Plaza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <p>Aesop ifc mall</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <p>Aesop Harbour City</p>
        </SwiperSlide>       
      </Swiper>
            </div>
        </div>
    </section>
    );
};

export default StoreLocator;