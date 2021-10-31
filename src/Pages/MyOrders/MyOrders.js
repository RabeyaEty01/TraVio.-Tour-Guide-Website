import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import AdminSidebar from '../Shared/AdminSidebar/AdminSidebar';

const MyOrders = () => {
    const { user } = useAuth();
    const email = `${user.email}`;
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://fathomless-crag-16250.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);



    //DELETE Booked Order
    const handleDeleteBookedOrder = id => {
        const proceed = window.confirm('Are you sure , you want to delete?');
        if (proceed) {
            const url = `https://fathomless-crag-16250.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');

                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <>

            <div class="container-fluid">
                <div class="row min-vh-100 flex-column flex-md-row">
                    <aside class="col-12 col-md-3 col-xl-2 p-0 bg-dark ">
                        <nav class="navbar navbar-expand-lg navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top " id="sidebar">
                            <div class="text-center p-3">
                                <Link href="#" class="navbar-brand mx-0 fw-bold  text-nowrap" >Admin <small className="text-danger fw-bold">Panel</small></Link>
                            </div>
                            <button type="button" class="navbar-toggler border-0  border-1" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse order-last" id="nav">
                                <ul class="navbar-nav flex-column w-100 justify-content-center">
                                    <li class="nav-item">
                                        <Link as={HashLink} to="/adminDashboard#adminDashboard" class="nav-link active mt-5 text-warning fw-bold d-flex">
                                            <span className="icon">
                                                <i class="fas fa-user-shield"></i>
                                            </span>
                                            <span className="title "><h4 className="ms-3">DashBoard</h4></span>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link as={HashLink} to="/myOrders#myOrders" class="nav-link  mt-5 d-flex ">
                                            <span className="icon">
                                                <i className="fa fa-shopping-cart"></i>
                                            </span>
                                            <span className="title"><h5 className="ms-3">My Orders</h5></span>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link as={HashLink} to="/addService#addService" class="nav-link  mt-5 d-flex ">
                                            <span className="icon">
                                                <i class="fas fa-plus-square"></i>
                                            </span>
                                            <span className="title"><h5 className="ms-3">Add New Package</h5></span>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link as={HashLink} to="/addEmployee#addEmployee" class="nav-link  mt-5 d-flex">
                                            <span className="icon">
                                                <i class="fas fa-user-plus"></i>
                                            </span>
                                            <span className="title"><h5 className="ms-3">Add New Employee</h5></span>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link as={HashLink} to="/manageOrders#manageOrders" class="nav-link  mt-5 d-flex">
                                            <span className="icon">
                                                <i class="fas fa-tasks"></i>
                                            </span>
                                            <span className="title"><h5 className="ms-3">Manage All Orders</h5></span>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link as={HashLink} to="/manageEmployee#manageEmployee" class="nav-link  mt-5 d-flex ">
                                            <span className="icon">
                                                <i class="fas fa-tasks"></i>
                                            </span>
                                            <span className="title"><h5 className="ms-3">Manage All Employee</h5></span>
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </nav>
                    </aside>

                    <main className="col px-0 flex-grow-1">
                        <div className="container py-3">
                            <div className="main-section mt-0">
                                <div className="container">
                                    <h1 className="my-3">Welcome, {user.displayName}</h1>
                                    <h3>Your Total Order: {myOrders.length}</h3>
                                    {myOrders.length === 0 ?
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>

                                        :

                                        <div className="d-flex justify-content-between">
                                            <div className="col-lg-11">
                                                <div class="row row-cols-1 row-cols-md-1 row-cols-lg-1 g-4 ps-2 ms-2 my-3">
                                                    {
                                                        myOrders.map((order, index) =>
                                                            <div>
                                                                <div class="row g-0">
                                                                    <div class="col-md-5 my-3">
                                                                        <img src={order.serviceDetails.img} className="img-fluid h-75 w-100" alt="..." />
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div className="text-start card-body">
                                                                            <h5 className="card-title">{order.serviceDetails.name}</h5>
                                                                            <p className="card-text  text-secondary">Availability : {order.serviceDetails.duration}</p>
                                                                            <p className="card-text  text-secondary">{order.serviceDetails.description}</p>
                                                                            <p className="card-text text-secondary">Seat: {order.serviceDetails.seat}</p>
                                                                            <div className="d-flex justify-content-between">
                                                                                <h5 className="card-text fw-bold"> ${order.serviceDetails.price}</h5>
                                                                                <h4 className="card-text text-success">Status: {order.status}</h4>
                                                                            </div>

                                                                            <button onClick={() => handleDeleteBookedOrder(order._id)} className="btn btn-danger">Cancel Order</button>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        )
                                                    }

                                                </div>
                                            </div>

                                        </div>}
                                </div>

                            </div>



                        </div>

                    </main>
                </div>
            </div>








        </>
    );
};

export default MyOrders;