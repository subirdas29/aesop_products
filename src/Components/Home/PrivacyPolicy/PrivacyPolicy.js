import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className='bg-[#A6672B] py-3'>
            <p className='md:text-center text-[#FFFEF2]  text-sm mx-4'>Our privacy policy has been updated effective 31 August. 
            <Link to='/' > <span className=' lg:hover:underline xl:hover:underline '>Read privacy policy</span></Link>
            </p>
        </div>
    );
};

export default PrivacyPolicy;