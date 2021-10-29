import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div className="container">
        <h2 className="fw-bold text-primary text-center">Manage All Bookings</h2>
        <div>
            <table class="table table-striped table-bordered table-hover">
                <thead>
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
                        orders.map(order =>  <tr>
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
                            <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>

                             )
                    }
                </tbody>

            </table>

        </div>
    </div>
    );
};

export default ManageAllOrders;