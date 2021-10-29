import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { id } = useParams();
    const [service, setService]=useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data =>setService(data))
    }, [])

    return (
        <div>
            <h1>PLace Order</h1>
            <p>{id}</p>
            <p>{service.name}</p>
            <img src={service.img} alt="" />
        </div>
    );
};

export default PlaceOrder;