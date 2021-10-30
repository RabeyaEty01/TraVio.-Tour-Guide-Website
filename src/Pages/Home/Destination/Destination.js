import React from 'react';
import logo from "../../../images/logo2.png"
import './Destination.css';


const Destination = () => {
    return (
        <div className="my-5 container">
            <div className="row container">
                <div className="col-lg-8">
                    <div className="animate__animated animate__bounceInLeft about-h2 ">
                        <h2 className="text-start  mx-5 py-2"><small className="fw-bold ">Amazing</small> <small className="text-secondary">Tours And Fun </small><small className="text-secondary"> Adventures</small> <small className="fw-bold">Waiting For You</small>
                        </h2>
                    </div>

                    <div className="animate__animated animate__bounceInLeft w3-panel w3-leftbar w3-light-grey">
                        <p className="w3-xlarge w3-serif mx-5  w-50 text-start"><i>"When you take your belief for granted,failure takes you for rides.If you are going to have an adventure around the world, it really helps if you can get it by working for international employers"</i></p>
                        <p className="mx-5  w-50 text-start">___________________Albert Fransisco</p>
                    </div>
                </div>
                <div className="col-lg-4 animate__animated animate__bounceInRight">
                    <img className="img-fluid h-100" src={logo} alt="" />
                </div>
            </div>

            <div class="animate__animated animate__bounceInRight row mt-5">
                <h2 className="animate__animated animate__bounceInLeft my-5 text-center  mx-5 py-2"><small className="fw-bold ">___Our</small> <small className="text-secondary">Popular </small><small className="fw-bold">Destinations___</small>
                </h2>
                <div class="col-3">
                    <div class="photo-frame row mb-3">
                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/D9spmsZ/1.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>Beijing</h3>
                        </div>
                    </div>
                    <div class="photo-frame row">
                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/rQxf17z/2.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>New York</h3>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="photo-frame row mb-3">

                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/s2nqZJN/4.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>South Korea</h3>
                        </div>

                    </div>
                    <div class="photo-frame row mb-3">
                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/ccbqt5R/5.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>New York</h3>
                        </div>

                    </div>
                </div>
                <div class="col-3">
                    <div class="photo-frame row mb-3">
                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/YZzRqFy/9.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>China</h3>
                        </div>
                    </div>
                    <div class="photo-frame row">
                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/qD0S7dC/7.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>Canada</h3>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="photo-frame row mb-3">
                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/TmMD1HP/8.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>Newzealand</h3>
                        </div>
                    </div>
                    <div class="photo-frame row mb-1">
                        <div className="photo">
                            <img className="img-fluid h-100" src="https://i.ibb.co/194f2Ck/10.jpg" alt="" />
                        </div>
                        <div class="photo-detail">
                            <h3>Pakistan</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;