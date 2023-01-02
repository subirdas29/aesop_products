import React from 'react';
import ClickAndCollect from '../ClickAndCollect/ClickAndCollect';
import Navbar from '../Navbar/Navbar';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Home = () => {
    return (
        <div>
            <PrivacyPolicy></PrivacyPolicy>
            <ClickAndCollect></ClickAndCollect>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;