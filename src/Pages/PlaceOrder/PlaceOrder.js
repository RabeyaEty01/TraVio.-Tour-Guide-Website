import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const PlaceOrder = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    //Place Order
    const onSubmit = (data) => {
        data.status = "pending";
        data.serviceDetails = service;
        
        axios.post('http://localhost:5000/placeOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed Successfully');
                    reset();
                }
            })
    };

    return (
        <div className="container">
            <div className="row no-gutters">
                <div className="m-3 my-4 p-2 col-lg-5">
                    <div className=" mb-3">
                        <div className="row g-0">
                            <img src={service.img} className="img-fluid h-100 placeorder-img" alt="..." />
                            <div className="text-start card-body">
                                <h5 className="card-title">{service?.name}</h5>
                                <p className="card-text  text-secondary">Availability : {service?.duration}</p>
                                <p className="card-text  text-secondary">{service?.description}</p>
                                <p className="card-text text-secondary">Seat: {service?.seat}</p>
                                <h3 className="card-text fw-bold"> ${service?.price}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2 className="m-3 p-2">Order Page</h2>
                    <form className="add-form" onSubmit={handleSubmit(onSubmit)}>

                        <input readOnly className="rounded p-2 m-2 " defaultValue={user.displayName} {...register("name")} />

                        <input readOnly className="rounded p-2 m-2 " defaultValue={user.email} {...register("email")} />

                        <input required className="rounded p-2 m-2 " placeholder="Address" {...register("address")} />

                        <input required className="rounded p-2 m-2" placeholder="Phone" type="phone"{...register("phone", { required: true })} />

                        <textarea required className="rounded p-2 m-2" placeholder="Additional Note" {...register("note")} />

                        <input readOnly className="rounded p-2 m-2" defaultValue={service?.price} {...register("price")} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="btn btn-danger mt-3 mb-5" type="submit" value="Place Order" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;