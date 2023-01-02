import React from 'react';
import ClickAndCollect from '../ClickAndCollect/ClickAndCollect';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Home = () => {
    return (
        <div>
            <PrivacyPolicy></PrivacyPolicy>
            <ClickAndCollect></ClickAndCollect>
        </div>
    );
};

export default Home;