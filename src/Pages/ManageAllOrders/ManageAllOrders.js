import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-crag-16250.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
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

                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    //UPDATE STATUS
    const handleUpdateStatus = (id) => {
        const url = `https://fathomless-crag-16250.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successfully.')

                }
            })
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
                            <div className="container my-5">
                                <h1 className="fw-bold text-primary text-center my-5">Manage All Bookings</h1>
                                {orders.length === 0 ?
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    :
                                    <div>
                                        <table class="table table-responsive table-responsive-sm table-responsive-md shadow table-striped table-bordered table-hover mx-5">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Package Name</th>
                                                    <th scope="col">UserName</th>
                                                    <th scope="col">UserEmail</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    orders.map(order => <tr>
                                                        <td>{order._id}</td>
                                                        <td>{order.serviceDetails.name}</td>
                                                        <td>{order.name}</td>
                                                        <td>{order.email}</td>
                                                        <td>{order.phone}</td>
                                                        <td>{order?.serviceDetails.price}</td>
                                                        <td>{order.status}</td>
                                                        <td>
                                                            <button onClick={() => handleUpdateStatus(order._id)} className="btn btn-success">Approval</button>
                                                        </td>
                                                        <td>
                                                            <button onClick={() => handleDeleteBookedOrder(order._id)} className="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>

                                                    )
                                                }
                                            </tbody>

                                        </table>

                                    </div>}
                            </div>

                        </div>

                    </main>
                </div>
            </div>


        </>
    );
};

export default ManageAllOrders;