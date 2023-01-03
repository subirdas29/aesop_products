import React from 'react';


const Banner = () => {
    return (
        <div className="bg-[#D8C19E]">
          <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row-reverse'>
          
        
        <div className='w-full xl:w-1/2  flex justify-end md:h-[633px] lg:h-[633px] xl:h-full'><img className='w-full' src='https://i.ibb.co/xsjxkb4/banner-hand-book.jpg'/>
          </div>
          <div className=" w-full xl:w-1/2  my-auto p-20 text-center">
           <h1 className="mb-5 text-7xl text-[#F44344] font-bold">Buy Your</h1>
           <h1 className="mb-5 text-7xl font-bold">Best Books</h1>
           <h1 className="mb-5 text-7xl font-bold">From <span className='text-[#F44344]' >Here</span></h1>
          

            <button className="bg-black px-12 mt-5 rounded-full text-white py-5 hover:bg-[#F44344]" >Explore More 
           
            </button></div>
         
          
        </div>
        </div>
    
    );
};

export default Banner;