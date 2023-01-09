import React from 'react';
import img1 from '../../../assets/Images/CorporateGiftsImage.jpg'
import { FaArrowRight } from 'react-icons/fa';

const CorporateGifts = () => {
    return (
        <section className=" dark:text-black">
        <div className="flex flex-col justify-center py-6   sm:py-12  lg:py-16 lg:flex-row xl:flex-row lg:justify-between">
            
            <div className="flex flex-col justify-top py-6 lg:pl-20 px-8 text-center rounded-sm w-full lg:max-w-md xl:max-w-lg lg:text-left">
                <p>Tokens of appreciation</p>
                <h1 className="text-3xl font-bold leading-none sm:text-2xl my-4">Corporate gifts
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    
                    <button className="btn border border-slate-300 hover:bg-black hover:text-white px-6 py-5 text-sm font-medium rounded flex items-center justify-between">Learn more about this service <FaArrowRight className='ml-8 text-xs'/></button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0 ml-10 lg:w-11/12 ">
            <img src={img1}/>
            </div>
        </div>
    </section>
    );
};

export default CorporateGifts;