import React from 'react';
import img1 from '../../../images/About/1.jpg';
import img2 from '../../../images/About/2.jpg';
import img3 from '../../../images/About/3.jpg';
import img4 from '../../../images/About/4.jpg';
import logo1 from '../../../images/About/logo1.jpg';
import logo2 from '../../../images/About/logo2.jpg';
import logo3 from '../../../images/About/logo3.jpg';
import logo4 from '../../../images/About/logo4.jpg';

const About = () => {
    return (
        <div className="container">
            <div className="my-5 text-center  mx-5 py-2">
                <p className="animate__animated animate__bounceInLeft">TRAVIO SPECIALS</p>
                <h2 className="animate__animated animate__bounceInLeft "><small className="fw-bold ">___Why</small> <small className="text-secondary">Travel </small><small className="text-secondary"> With</small> <small className="fw-bold">Us?___</small>
                </h2>
            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card choose-card shadow h-75">
                        <img src={img1} class="img-fluid h-50 card-img-top" alt="..." />
                        <div class="card-body">
                            <div>
                                <img height="69px" width="69px" className="img-fluid rounded-circle" src={logo1} alt="" />
                            </div>
                            <h3 class="card-title fw-bold">2000+ Our Worldwide Guide</h3>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card choose-card shadow h-75">
                        <img src={img2} class="img-fluid h-50 card-img-top" alt="..." />
                        <div class="card-body">
                            <div>
                                <img height="79px" width="79px" className="img-fluid rounded-circle" src={logo2} alt="" />
                            </div>
                            <h3 class="card-title fw-bold">100% Trusted Tour Agency</h3>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card choose-card shadow h-75">
                        <img src={img3} class="img-fluid h-50 card-img-top" alt="..." />
                        <div class="card-body">
                            <div>
                                <img height="69px" width="69px" className="img-fluid rounded-circle" src={logo3} alt="" />
                            </div>
                            <h3 class="card-title fw-bold">12+ Years of Travel Experience</h3>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card choose-card shadow h-75">
                        <img src={img4} class="img-fluid h-50 card-img-top" alt="..." />
                        <div class="card-body">
                            <div>
                                <img height="69px" width="69px" className="img-fluid rounded-circle" src={logo4} alt="" />
                            </div>
                            <h3 class="card-title fw-bold">98% of Our Clients are Happy</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default About;