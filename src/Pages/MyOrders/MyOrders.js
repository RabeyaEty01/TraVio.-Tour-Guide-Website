import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

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
    );
};

export default MyOrders;