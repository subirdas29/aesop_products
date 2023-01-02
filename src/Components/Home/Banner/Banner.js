import React from 'react';


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#D8C19E]">
          <div className='flex flex-col md:flex-row-reverse'>
          
        
        <div className='w-full lg:w-1/2  flex justify-end'><img className='w-full' src='https://i.ibb.co/Tg4L9Tq/Aesop-Gift-Kits-2022-23-Web-Homepage-3-Primary-50-50-Desktop-1440x1500px.jpg'/>
          </div>
          <div className=" w-full lg:w-1/2  my-auto p-20 text-center">
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