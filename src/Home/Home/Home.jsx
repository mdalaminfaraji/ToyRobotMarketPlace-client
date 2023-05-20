import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../ImageGallary/Gallary';
import Catagoriy from '../Catagories/Catagoriy';
import Products from '../Products/Products';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Catagoriy></Catagoriy>
            <Products></Products>
        </div>
    );
};

export default Home;