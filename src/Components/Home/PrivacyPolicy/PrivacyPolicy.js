import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className='bg-[#A6672B] py-2'>
            <p className='text-center text-[#FFFEF2] text-base'>Our privacy policy has been updated effective 31 August. 
            <Link to='/' > <span className='hover:underline'>Read privacy policy</span></Link>
            </p>
        </div>
    );
};

export default PrivacyPolicy;