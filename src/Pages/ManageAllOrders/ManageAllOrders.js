import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
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




    return (
        <div className="container my-5">
            <h2 className="fw-bold text-primary text-center">Manage All Bookings</h2>
            {orders.length === 0 ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <div>
                    <table class="table table-responsive table-responsive-sm table-responsive-md shadow table-striped table-bordered table-hover">
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
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <button className="btn btn-success">Approval</button>
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
    );
};

export default ManageAllOrders;