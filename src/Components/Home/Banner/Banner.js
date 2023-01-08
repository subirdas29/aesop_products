import React from 'react';
import img from '../../../assets/Images/aesoplogo.png'

import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className="bg-[#D8C19E] ">
          <div className='flex flex-col lg:flex-row-reverse xl:flex-row-reverse '>
          
        
        <div className='w-full h-1/2 lg:h-full xl:h-full lg:w-1/2 xl:w-1/2  flex justify-end'><img className='w-full h-1/2 lg:h-full xl:h-full relative' src='https://i.ibb.co/xsjxkb4/banner-hand-book.jpg'/>
        <img className='w-30 h-8 lg:pr-10 block absolute left-10 bottom-80 lg:hidden xl:hidden'src={img}/>
          </div>
          <div className=" w-full h-1/2 lg:h-full xl:h-full lg:w-1/2 xl:w-1/2 flex lg:px-10 lg:py-28   xl:px-10 xl:py-28">
            <img className='w-50 h-14 lg:pr-10 hidden lg:block xl:block'src={img}/>
          <div className='p-28 lg:p-0 xl:p-0'>
          <h1 className="text-3xl text-[#333333] font-medium">Down to the wire</h1>
           <p className='my-6 text-normal'>From humble gestures to more elaborate offerings, an Aesop gift can still be purchased in time for festive celebrations.</p>
          
           <button className="btn border border-zinc-400 hover:bg-black hover:text-white px-6 py-5 text-sm font-medium rounded flex items-center justify-between">Discover the Gift Finder <FaArrowRight className='ml-8 text-xs'/></button>
          </div>
          </div>
         
          
        </div>
        </div>
    
    );
};

export default Banner;