import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import addserviceimg from '../../images/addService.jpg';
import AdminSidebar from '../Shared/AdminSidebar/AdminSidebar';


const AddTourGuide = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addEmployee', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Employee Added Successfully');
                    reset();
                }
            })
    };

    return (
        <>
            <div className="dashboard-container">
                <AdminSidebar></AdminSidebar>
            </div>
            
            <div className="add-section">
                <div className="add-div container shadow my-5">

                    <div className="d-flex">
                        <div className="col-lg-5">
                            <img className="img-fluid h-100 w-100" src={addserviceimg} alt="" />
                        </div>
                        <div className="col-lg-7 px-5 pt-5 text-start">
                            <h2 className="m-3 p-2">Please Add A New Tour Guide</h2>
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
            </div>
        </>
    );
};

export default AddTourGuide;

