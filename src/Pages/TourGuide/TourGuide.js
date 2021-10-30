import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const TourGuide = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-crag-16250.herokuapp.com/employees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);
    return (
        <>
            <div className="container">

                <h2 className="animate__animated animate__bounceInLeft text-center mt-0"><small className="fw-bold ">___Our</small> <small className="text-secondary">Tour </small><small>Guides___</small>
                </h2>


                {employees.length === 0 ?

                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                        {
                            employees.map((employee, index) =>
                                <div class="col">
                                    <div className="choose-card card shadow rounded h-100 p-4 border-0">
                                        <div className="photo-frame">
                                            <div className="photo">
                                                <img className="img-fluid" src={employee?.img} alt="" />
                                            </div>
                                        </div>

                                        <div className="my-3">
                                            <h5 className="card-title fw-bold text-start">{employee?.name}</h5>
                                            <p className="card-text fw-bold text-secondary text-start">{employee?.category}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>}
            </div>

            <Footer></Footer>
        </>
    );
};

export default TourGuide;