import React from 'react';
import marker from '../../../images/marker-1.png';

import './Map.css';

const Map = () => {
    return (
        <div className="conatiner">
            <div className="row">

                <h2 className="animate__animated animate__bounceInLeft text-center mt-0"><small className="fw-bold ">___Explore</small> <small className="text-secondary">the World </small><small className="text-secondary">for</small> <small className="fw-bold">Travel___</small>
                </h2>

                <div className="animate__animated animate__bounceInLeft w3-panel w3-leftbar w3-light-grey">
                    <p className="w3-xlarge w3-serif mx-5 "><i>`"The world is a book and those who do not travel read only one page.Jobs fill your pockets, <br />  adventures fill your soul. The journey of a thousand miles begins with a single step. <br /> Travel is the only thing you buy that makes you richer"`</i></p>
                    <p className="mx-5 ">______________________________Albert Fransisco</p>
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