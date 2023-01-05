import React from 'react';
import Banner from '../Banner/Banner';
import ClickAndCollect from '../ClickAndCollect/ClickAndCollect';
import CorporateGifts from '../CorporateGifts/CorporateGifts';
import FirstCardSection from '../FirstCardSection/FirstCardSection';
import FirstSliderSection from '../FirstSliderSection/FirstSliderSection';
import GiftFinderSection from '../GiftFinderSection/GiftFinderSection';
import Navbar from '../Navbar/Navbar';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import SecondCardSection from '../SecondCardSection/SecondCardSection';
import StoreLocator from '../StoreLocator/StoreLocator';

const Home = () => {
    return (
        <div>
            <PrivacyPolicy></PrivacyPolicy>
            <ClickAndCollect></ClickAndCollect>
            <Navbar></Navbar>
            <Banner></Banner>
            <FirstCardSection></FirstCardSection>
            <GiftFinderSection></GiftFinderSection>
            <SecondCardSection></SecondCardSection>
            <CorporateGifts></CorporateGifts>
            <FirstSliderSection></FirstSliderSection>
            <StoreLocator></StoreLocator>
        </div>
    );
};

export default Home;