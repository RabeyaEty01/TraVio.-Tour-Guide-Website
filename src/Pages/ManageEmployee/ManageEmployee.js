import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import AdminSidebar from '../Shared/AdminSidebar/AdminSidebar';

const ManageEmployee = () => {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    // //DELETE Booked Order
    // const handleDeleteBookedOrder = id => {
    //     const proceed = window.confirm('Are you sure , you want to delete?');
    //     if (proceed) {
    //         const url = `https://fathomless-crag-16250.herokuapp.com/orders/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('Deleted successfully');

    //                     const remainingOrders = orders.filter(order => order._id !== id);
    //                     setOrders(remainingOrders);
    //                 }
    //             })
    //     }
    // }



    return (
        <>
            <div className="dashboard-container">
                <AdminSidebar></AdminSidebar>
            </div>

            <div className="container my-5">
                <h1 className="fw-bold text-primary text-center my-5">Manage All Employee</h1>
                {employees.length === 0 ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <div>
                        <table class="table table-responsive table-responsive-sm table-responsive-md shadow table-striped table-bordered table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Employee ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Starting Date</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    employees.map(employee => <tr>
                                        <td>{employee._id}</td>
                                        <td><img height="49px" width="49px" className="img-fluid" src={employee.img} alt="" /></td>
                                        <td>{employee.name}</td>
                                        <td>{employee.category}</td>
                                        <td>{employee.startDate}</td>
                                        <td>{employee.contact}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.status}</td>
                                        {/* <td>
                                        <button onClick={() => handleDeleteBookedOrder(order._id)} className="btn btn-danger">Delete</button>
                                    </td> */}
                                    </tr>

                                    )
                                }
                            </tbody>

                        </table>

                    </div>}
            </div>
        </>
    );
};

export default ManageEmployee;