import React from 'react';
import marker from '../../../images/marker-1.png';

import './Map.css';

const Map = () => {
    return (
        <div className="conatiner">
            <div className="row container">
                <div className="col-lg-10 container">
                    <div className="animate__animated animate__bounceInLeft about-h2 ">
                        <h2 className="text-start mx-5 py-2"><small className="fw-bold ">Explore</small> <small className="text-secondary">the World </small> <br /> <small className="fw-bold">for Travel</small>
                        </h2>
                    </div>

                    <div className="animate__animated animate__bounceInLeft w3-panel w3-leftbar w3-light-grey">
                        <p className="w3-xlarge w3-serif mx-5 text-start"><i>"The world is a book and those who do not travel read only one page.Jobs fill your pockets, adventures fill your soul.The journey of a thousand miles begins with a single step.Travel is the only thing you buy that makes you richer"</i></p>
                        <p className="mx-5  text-start">______________________________Albert Fransisco</p>
                    </div>
                </div>
            </div>
            <div className="map-inner container my-5">
                <div className="d-flex justify-content-around">
                    <div className="col-lg-3 m-5 p-3">
                        <img className="m-5" src={marker} alt="" />
                    </div>
                    <div className="col-lg-3 m-2 p-4">
                        <img src={marker} alt="" />
                    </div>
                </div>
                <div class="photo-detail-2">
                    <p className="w3-xlarge w3-serif mx-5 p-3 text-center"><i>"We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time."</i></p>
                </div>



            </div>
        </div>
    );
};

export default Map;