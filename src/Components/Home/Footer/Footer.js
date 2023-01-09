import React from 'react';
import { FaArrowRight,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="  bg-[#252525] dark:text-gray-100">
	<div className="flex flex-col justify-between  py-10 lg:mx-auto  lg:flex-row lg:space-y-0">
		<div className="lg:w-2/5 mx-6">
			<div className='flex items-center relative border border-1 mb-4 '>
            <input className="bg-transparent py-2 px-4 text-xl w-full placeholder:text-white placeholder:text-xl focus:placeholder:opacity-0" placeholder="Email address"/><FaArrowRight className='absolute right-2 hover:cursor-pointer' type='submit'/>
            </div>
				<div className='flex items-start'>
                <input type="checkbox"  className=" checked:accent-transparent border border-1 flex  mt-1 accent-transparent" />
                <span className="text-sm ml-3 font-normal leading-6 sm:d-none">
Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <span className='inline flex items-center'>
<a href='' className='underline'>privacy policy </a><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</span>
	
	 </span>
                </div>

                <div className='mt-[138px] hidden lg:block xl:block space-y-3'>
                 <p className=''>Sustainability</p>
                 <div className='border border-1 '></div>
                 <p className=' leading-6'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
			
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-3/5 sm:grid-cols-3 sm:mt-16 lg:mt-10 mx-6">
			<div className="space-y-3 lg:pl-2 lg:pr-4 sm:pl-6">
				<h3 className="dark:text-gray-50">Orders and support</h3>
				<div className='border border-1 '></div>
				<ul className="space-y-1">
					<li className='pt-2'>
						<a rel="noopener noreferrer" href="#">Contact us</a>
					</li>
					<li className='py-2 flex items-center' >
						<a rel="noopener noreferrer" href="#" className='mr-1' >FAQs 
</a>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
					</li>
					<li className='pb-2 flex items-center' >
						<a rel="noopener noreferrer" href="#" className='mr-1' >Shipping 
</a>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
					</li>
					<li className='pb-2 flex items-center' >
						<a rel="noopener noreferrer" href="#" className='mr-1' >Returns
</a>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
				</li>
					<li className='pb-2'>
						<a rel="noopener noreferrer" href="#">Order history</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms and conditions</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3 lg:pl-2 lg:pr-4 sm:pl-6">
				<h3 className=" dark:text-gray-50 ">Services</h3>
				<div className='border border-1 '></div>
				<ul className="space-y-1">
					<li className='pt-2'>
						<a rel="noopener noreferrer" href="#">Live assistance</a>
					</li>
					<li className='py-2' >
						<a rel="noopener noreferrer" href="#">Corporate gifts</a>
					</li>
					<li className='pb-2' >
						<a rel="noopener noreferrer" href="#">Facial appointments</a>
					</li>
					<li className='pb-2' >
						<a rel="noopener noreferrer" href="#">Click and Collect</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Video consultation</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3 lg:pl-2 lg:pr-6 sm:pl-6 sm:pr-6">
				<h3 className="dark:text-gray-50 ">Location preferences</h3>
				<div className='border border-1 '></div>
				<ul className="space-y-1">
					<li className='pt-2'>
						<a rel="noopener noreferrer" href="#">Shipping:</a>
					</li>
					<li className='py-2 underline'>
						<a rel="noopener noreferrer" href="#">Hong Kong SAR, China</a>
					</li>
					<li className='pt-4 pb-2'>
						<a rel="noopener noreferrer" href="#">Language:</a>
					</li>
					<li className='underline'>
						<a rel="noopener noreferrer" href="#">English</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">繁體中文</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">简体中文</a>
					</li>
				</ul>
			</div>
			<div className='sm:block lg:hidden space-y-3 lg:pl-2 lg:pr-4 sm:pl-6'>
                 <p className=''>Sustainability</p>
                 <div className='border border-1 '></div>
                 <p className=' leading-6 pt-2'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
			<div className="space-y-3 lg:pl-2 lg:pr-4 sm:pl-6">
				<h3 className="dark:text-gray-50">About</h3>
				<div className='border border-1 '></div>
				<ul className="space-y-1">
				<li className='pt-2'>
						<a rel="noopener noreferrer" href="#">Our story</a>
					</li>
					<li className='py-2' >
						<a rel="noopener noreferrer" href="#">Foundation</a>
					</li>
					<li className='pb-2' >
						<a rel="noopener noreferrer" href="#">Careers</a>
					</li>
					<li className='pb-2' >
						<a rel="noopener noreferrer" href="#">Privacy policy</a>
					</li>
					<li className='pb-2'>
						<a rel="noopener noreferrer" href="#">Accessibility</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Cookie Policy</a>
					</li>
				</ul>





			</div>
			<div className="space-y-3 lg:pl-2 lg:pr-4 sm:pl-6 hidden lg:block xl:block">
				<h3 className="dark:text-gray-50 ">Social media</h3>
				<div className='border border-1 '></div>
				<ul className="space-y-1">
				<li className='pt-2 flex items-center'>
						<a rel="noopener noreferrer" href="#" className='mr-1'>Instagram </a>
					
					<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</li>
				<li className='pt-2 flex items-center'>
						<a rel="noopener noreferrer" href="#" className='mr-1'>Twitter</a>
					
					<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</li>
				<li className='pt-2 flex items-center'>
						<a rel="noopener noreferrer" href="#" className='mr-1'>LinkedIn</a>
					
					<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</li>
				<li className='pt-2 flex items-center'>
						<a rel="noopener noreferrer" href="#" className='mr-1'>WeChat</a>
					
					<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</li>
				<li className='pt-2 flex items-center'>
						<a rel="noopener noreferrer" href="#" className='mr-1'>Weibo</a>
					
					<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</li>
			
				
					
				</ul>
			</div>
			{/* <div className="space-y-3">
				<div className="uppercase dark:text-gray-50">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
							<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						</svg>
					</a>
				</div>
			</div> */}
		</div>
	</div>
	<div className='border border-1 '></div>
	<div className='flex justify-between items-center ml-6 pr-6'>
	<div className="py-6 text-lg text-center ">© Aesop</div>
	<div className='flex lg:hidden'>
		<FaInstagram className='w-6 h-6'/>
		<FaTwitter className='mx-10 w-6 h-6'/>
		<FaLinkedin className='w-6 h-6'/>
	</div>
	</div>
</footer>
        </div>
    );
};

export default Footer;