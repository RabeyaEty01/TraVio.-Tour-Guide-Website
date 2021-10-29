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
            <h1>Our Tour Packages</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                    {
                        services.map(service =>
                            <div class="col">
                            <div className="choose-card card shadow rounded h-100 p-4 border-0">
                                <img  className="img-fluid" src={service?.img} alt="" />
                                <div className="my-3">
                                    <h5 className="card-title fw-bold">{service?.name}</h5>
                                    <div className="d-flex justify-content-around">
                                    </div>
                                    <p class="card-text text-center text-secondary">{service?.description}</p>
                                    <h3 class="card-text fw-bold"> ${service?.price}</h3>
                                 <Link to={`/services/booking/${service._id}`}>
                                 <button className="bt btn-danger">Book Now</button>
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