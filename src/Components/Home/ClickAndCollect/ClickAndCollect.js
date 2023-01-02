import React from 'react';
import { FaPlus } from "react-icons/fa";

const ClickAndCollect = () => {
    return (
        <div className='bg-[#252525] py-2 flex justify-center items-center hover:underline text-[#FFFEF2] '>
            
            <a href='#' className='mr-3'> Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on orders over HK$400</a>
            <div><FaPlus /></div>
        </div>
    );
};

export default ClickAndCollect;