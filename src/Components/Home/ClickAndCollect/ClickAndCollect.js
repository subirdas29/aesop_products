import React from 'react';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ClickAndCollect = () => {
    return (
        <div className='bg-[#252525] py-2 flex justify-center items-center  text-[#FFFEF2] '>
            
            <Link to='/' className='mr-3 hover:underline'> Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on orders over HK$400</Link>
            <div className='text-xs text-underline'><FaPlus/></div>
        </div>
    );
};

export default ClickAndCollect;