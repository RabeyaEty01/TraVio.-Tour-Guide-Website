import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



const AddTourGuide = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fathomless-crag-16250.herokuapp.com/addEmployee', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Employee Added Successfully');
                    reset();
                }
            })
    };

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

                                    <div className="container col-lg-8 col-sm-12">
                                        <div>
                                            <h1 className="m-3 p-2">Please Add New Employee</h1>
                                            <form className="add-form " onSubmit={handleSubmit(onSubmit)}>

                                                <input required className="rounded p-2 m-2 " placeholder="Name" {...register("name")} />

                                                <input required className="rounded p-2 m-2 " placeholder="Employee Category" {...register("category")} />

                                                <input required className="rounded p-2 m-2 " type="date" placeholder="Start Date" {...register("startDate")} />

                                                <input required className="rounded p-2 m-2" placeholder="status" {...register("status", { required: true })} />

                                                <textarea required className="rounded p-2 m-2" placeholder="Contact Number" {...register("contact")} />

                                                <textarea required className="rounded p-2 m-2" placeholder="Address" {...register("address")} />

                                                <input required className="rounded p-2 m-2" placeholder="Image Url" {...register("img")} />

                                                {errors.exampleRequired && <span>This field is required</span>}

                                                <input className="btn btn-danger mt-3 mb-5" type="submit" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                    </main>
                </div>
            </div>


        </>
    );
};

export default AddTourGuide;

