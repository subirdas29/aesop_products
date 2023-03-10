import React, { useState } from 'react';
import { FaSearch,FaEquals } from 'react-icons/fa';
import img from '../../../assets/Images/aesoplogo.png'


const Navbar = () => {
  
    let Links =[
        {name:"Skin Care",link:"/"},
        {name:"Body & Hand",link:"/"},
        {name:"Hair",link:"/"},
        {name:"Fragrance",link:"/"},
        {name:"Home",link:"/"},
        {name:"Kits & Travel",link:"/"},
        {name:"Gifts",link:"/"},
        {name:"Read",link:"/"},
        {name:"Stores",link:"/"},
      ];
      let [open,setOpen]=useState(false);
    
    return (
        <div>
         <div className=' w-full top-0 left-0 relative z-50'>
      <div className='flex items-center md:justify-between
      sm:bg-transparent  md:bg-white lg:bg-white xl:bg-white py-6 md:px-10 px-7 '>
        
      {/* <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        
      </div> */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-6000 ease-in ${open ? 'top-[80px] ':'top-[-900px]'} `}>
        {
          Links.map((link)=>(
            <li key={link.name} className=' md:border-0 md:ml-7 text-sm font-medium md:my-0 my-7  sm:block md:hidden lg:block xl:block'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
       <li className=' hidden md:block lg:hidden xl:hidden'>
       <a href='#' className='text-gray-800 hover:text-gray-400 duration-500'>Shop</a>
       </li>
       <li className='mx-7 hidden md:block lg:hidden xl:hidden'>
       <a href='#' className='text-gray-800 hover:text-gray-400 duration-500'>Read</a>
       </li>
       <li className='hidden md:block lg:hidden xl:hidden'>
       <a href='#' className='text-gray-800 hover:text-gray-400 duration-500'>Stores</a>
       </li>
        <li className='flex'>
<button type="submit" title="Search" className="pl-4 text-xl hidden md:block lg:block xl:block ">
<FaSearch className='text-[#666666] '/>
    </button>
</li> 
        
      </ul>
      <div className='font-medium cursor-pointer hidden md:flex md:text-sm '>
      <h2 className='mx-4 '>Log in</h2>
      <h2>Cart</h2>
      </div>
      
      <div  className='text-3xl cursor-pointer md:hidden w-full flex justify-between items-center'>
        <div>
          <img className='w-20 h-8' src={img}/>
        </div>
    
<div className='flex'>
{/* <button type="submit" title="Search" className="pl-4 text-xl"> */}
<FaSearch className='text-[#666666] pl-4 text-3xl'/>
    {/* </button> */}


       <a href='#' className='text-gray-800 hover:text-gray-400 text-lg duration-500 block md:hidden lg:hidden xl:hidden mx-6'>Cart</a>
    
     
      <div onClick={()=>setOpen(!open)}>
    
        {
          open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        }


      </div>
</div>
      </div>

      
      </div>
    </div>
        </div>
    );
};

export default Navbar;
