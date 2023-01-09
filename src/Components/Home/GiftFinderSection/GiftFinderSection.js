import React from 'react';
import video1 from '../../../assets/Videos/GiftFinderSectionVideos/Aesop - Formulations for Skin, Hair & Body - Aesop Hong Kong SAR.mp4';
import { FaArrowRight } from 'react-icons/fa';

const GiftFinderSection = () => {
    return (
        <section className=" dark:text-black">
        <div className="flex flex-col justify-center py-6  mx-auto sm:py-12 lg:py-24 lg:flex-row xl:flex-row lg:justify-between">
            <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 mr-10 ">
            <video muted autoPlay loop>
  <source src={video1} type="video/mp4"/>
  Your browser does not support the video tag.
</video>
            </div>
            <div className="flex flex-col justify-top p-8 text-center rounded-sm  lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-3xl font-bold leading-none sm:text-2xl">The Gift Finder
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">For greater ease of navigation, the Gift Finder provides an opportunity to browse formulations by recipient, function and price.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    
                    <button className="btn border border-slate-300 hover:bg-black hover:text-white px-6 py-5 text-sm font-medium rounded flex items-center justify-between">Discover the Gift Finder <FaArrowRight className='ml-8 text-xs'/></button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default GiftFinderSection;