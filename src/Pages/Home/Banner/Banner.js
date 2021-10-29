import React from 'react';
import banner1 from '../../../images/banner/1.jpg'
import banner2 from '../../../images/banner/2.jpg'
import banner3 from '../../../images/banner/3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-carousel">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img  className="w-100 img-fluid" src={banner1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img className="w-100 img-fluid" src={banner2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img className="w-100 img-fluid" src={banner3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;