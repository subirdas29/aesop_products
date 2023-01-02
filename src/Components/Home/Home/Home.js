import React from 'react';
import Banner from '../Banner/Banner';
import ClickAndCollect from '../ClickAndCollect/ClickAndCollect';
import Navbar from '../Navbar/Navbar';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Home = () => {
    return (
        <div>
            <PrivacyPolicy></PrivacyPolicy>
            <ClickAndCollect></ClickAndCollect>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;