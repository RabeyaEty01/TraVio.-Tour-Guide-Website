import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addService', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div className="add-section">
            <div className="add-div shadow my-5">
                <h2 className="m-3 p-2">Please Add A Package</h2>
                <div>
                    <form className="add-form " onSubmit={handleSubmit(onSubmit)}>

                        <input required className="rounded p-2 m-2 " placeholder="Name" {...register("name")} />

                        <input required  className="rounded p-2 m-2 " placeholder="Duration" {...register("duration")} />

                        <input required className="rounded p-2 m-2" placeholder="Price" type="number"{...register("price", { required: true })} />

                        <textarea required  className="rounded p-2 m-2" placeholder="Description" {...register("description")} />

                        <input required  className="rounded p-2 m-2" placeholder="Image Url" {...register("img")} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="btn btn-danger mt-3 mb-5" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;