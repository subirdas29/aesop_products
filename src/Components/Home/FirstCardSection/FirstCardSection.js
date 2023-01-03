import React from 'react';
import video1 from '../../../assets/Videos/FirstCardSectionVideos/Aesop_Gift_Kits_vidoes.mp4';
import video2 from '../../../assets/Videos/FirstCardSectionVideos/Aesop_Gift_Nose_product_videos.mp4'

const FirstCardSection = () => {
    return (
        <div className='flex justify-center flex-col md:flex-row mx-10 md:gap-6 md:mx-20 my-32'>
            <div className="w-full text-black">
            <video muted autoPlay loop>
  <source src={video1} type="video/mp4"/>
  Your browser does not support the video tag.
</video>

	<div className="flex flex-col w-full justify-between py-6 space-y-8 ">
		<div className="space-y-2">
			<h2 className="text-lg font-semibold tracking-wide hover:underline cursor-pointer text-left">The Poetry of Place</h2>
			<p className="dark:text-black text-sm text-left">A new collection of gift kits inspired by Aesop’s heritage of design—drawing on the architecture and neighbourhood atmosphere of four key stores from around the world.</p>
		</div>
        
		
	</div>
</div>
<div className="w-full text-black">
<video muted autoPlay loop>
  <source src={video2} type="video/mp4"/>
  Your browser does not support the video tag.
</video>
	<div className="flex flex-col w-full justify-between py-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-lg font-semibold tracking-wide hover:underline cursor-pointer">Fragrance</h2>
			<p className="dark:text-black text-sm">Hwyl, Tacit, Marrakech Intense and Rōzu—modern compositions with timeless relevance, ranging from the woody to the floral and equally suited to day and night</p>
		</div>
	</div>
</div>

        </div>
    );
};

export default FirstCardSection;