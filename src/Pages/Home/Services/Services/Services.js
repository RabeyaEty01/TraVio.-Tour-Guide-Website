import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container">
            <h1 className="animate__animated animate__bounceInLeft my-5">Our Tour Packages</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                    {
                        services.map((service,index) =>
                            <div class="col">
                            <div className="choose-card card shadow rounded h-100 p-4 border-0">
                                <img  className="img-fluid" src={service?.img} alt="" />
                                <div className="my-3">
                                    <h5 className="card-title fw-bold text-start">{service?.name}</h5>
                                    <div className="d-flex justify-content-around">
                                    </div>
                                    <p class="card-text text-start text-secondary"><small className="text-primary fw-bold"> <i class="fab fa-avianex text-success"></i> Availability :  {service?.duration}</small></p>
                                    <p class="card-text text-start text-secondary"><i class="fas fa-info-circle text-success"></i> {service?.description}</p>
                                    <p class="card-text text-start text-secondary"><i class="fas fa-chair text-success"></i> Available Seat: {service?.seat}</p>
                                    <h4 class="card-text fw-bold text-start"><i class="fas fa-dollar-sign text-success"></i> {service?.price}</h4>
                                 <Link to={`/services/booking/${service._id}`}>
                                 <button className="btn btn-danger"> <i className="fas fa-shopping-cart"></i> Book Now</button>
                                 </Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
        </div>
    );
};

export default Services;