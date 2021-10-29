import React from 'react';
import banner1 from '../../../images/banner/1.jpg'
import banner2 from '../../../images/banner/2.jpg'
import banner3 from '../../../images/banner/3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src={banner1} class="d-block w-100" alt="..." />

                    <div class="carousel-caption d-none d-md-block mx-3">
                        <h1 className="p-3 mx-3 ">Travel With Us</h1>
                        <p className="p-4 mx-5 ">
                            Travel With Us
                            For The Best Deal.
                            We are here to make you happier.
                        </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={banner2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block mx-3">
                        <h1 className="p-3 mx-3 ">We have 10 years of experience in this field.</h1>
                        <p className="p-4 mx-5 ">With more than 1000 employees across the world.
                            We are happy to make you happier
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={banner3} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block mx-3">
                        <h1 className="p-3 mx-3 ">
                            We're an award
                            Winning Agent.</h1>
                        <p className="p-4 mx-5 ">With more than 1000 employees across the world.
                      We are happy to make you happier
                        </p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;