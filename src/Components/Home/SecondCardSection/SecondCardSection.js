import React from 'react';
import img1 from '../../../assets/Images/Gift Bundles.jpg';
import img2 from '../../../assets/Images/Gifts For the Home.jpg';

const SecondCardSection = () => {
    return (
        <div className='flex justify-center flex-col md:flex-row mx-10 md:gap-6 md:mx-20 my-32'>
            <div className="w-full text-black">
            <img src={img1}/>

	<div className="flex flex-col w-full justify-between py-6 space-y-8 ">
		<div className="space-y-2">
			<h2 className="text-lg font-semibold tracking-wide hover:underline cursor-pointer text-left">Gifts for the home—Incense</h2>
			<p className="dark:text-black text-sm text-left">Slender and delicately fragranced, for striking a note of serenity in the home—or the home-away-from-home.</p>
		</div>
        
		
	</div>
</div>
<div className="w-full text-black">
<img src={img2}/>
	<div className="flex flex-col w-full justify-between py-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-lg font-semibold tracking-wide hover:underline cursor-pointer">Gift Bundles</h2>
			<p className="dark:text-black text-sm">Classic pairings and assortments of a complementary character, informed by the wisdom of our in-store consultants and product experts.</p>
		</div>
	</div>
</div>

        </div>
    );
};

export default SecondCardSection;