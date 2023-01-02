import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


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
         <div className='shadow-md w-full top-0 left-0'>
      <div className='flex items-center md:justify-between bg-white py-6 md:px-10 px-7'>
        
      {/* <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        
      </div> */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[190px] ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-sm font-semibold md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <li className='flex'>
<button type="submit" title="Search" className="pl-4 text-xl">
<FaSearch className='text-[#666666]'/>
    </button>
</li> 
        
      </ul>
      <div className='font-semibold cursor-pointer hidden md:flex md:text-sm '>
      <h2 className='mx-4'>Log in</h2>
      <h2>Cart</h2>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

    
      </div>
    </div>
        </div>
    );
};

export default Navbar;
{/* <li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Skin Care</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Body & Hand</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Hair</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Fragrance</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Home</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Kits & Travel</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Gifts</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Read</a>
</li>
<li className="flex">
<a rel="noopener noreferrer" href="#" className="flex items-center px-2 -mb-1 border-b-2 dark:border-transparent text-sm">Stores</a>
</li>
<li className='flex'>
<button type="submit" title="Search" className="p-1 text-xl">
<FaSearch className='text-[#666666]'/>
    </button>
</li> */}