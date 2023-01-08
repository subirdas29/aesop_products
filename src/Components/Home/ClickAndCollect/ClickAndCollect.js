import React from 'react';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ClickAndCollect = () => {
    return (
        <div className='bg-[#252525] py-3 flex justify-center items-center lg:hover:underline  text-[#FFFEF2] '>
            
            <Link to='/' className='mr-3  lg:hover:underline ml-4 text-sm '> Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on orders over HK$400</Link>
            <Link to='/' className='text-underline mr-4'><FaPlus className='w-2 h-2 lg:w-2.5 lg:h-2.5 xl:w-2.5 xl:h-2.5 text-underline'/>
            </Link>
        </div>
    );
};

export default ClickAndCollect;