import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../ImageGallary/Gallary';
import Catagoriy from '../Catagories/Catagoriy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Catagoriy></Catagoriy>
        </div>
    );
};

export default Home;