import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Map from '../Map/Map';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Destination></Destination>
            <Map></Map>
            <Footer></Footer>
        </div>
    );
};

export default Home;