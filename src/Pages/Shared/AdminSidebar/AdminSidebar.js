import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './AdminSidebar.css';

const AdminSidebar = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link as={HashLink} to="/adminDashboard#adminDashboard" className="mt-5 text-warning fw-bold">
                        <span className="icon">
                            <i class="fas fa-user-shield"></i>
                        </span>
                        <span className="title "><h4>DashBoard</h4></span>
                    </Link>
                </li>

                <li>
                    <Link as={HashLink} to="/myOrders#myOrders" className="mt-5">
                        <span className="icon">
                            <i className="fa fa-shopping-cart"></i>
                        </span>
                        <span className="title"><h5>My Orders</h5></span>
                    </Link>
                </li>
                <li>
                    <Link as={HashLink} to="/addService#addService" className="my-2">
                        <span className="icon">
                            <i class="fas fa-plus-square"></i>
                        </span>
                        <span className="title"><h5>Add New Package</h5></span>
                    </Link>
                </li>
                <li>
                    <Link as={HashLink} to="/addEmployee#addEmployee" className="my-2">
                        <span className="icon">
                            <i class="fas fa-user-plus"></i>
                        </span>
                        <span className="title"><h5>Add New Employee</h5></span>
                    </Link>
                </li>
                <li>
                    <Link as={HashLink} to="/manageOrders#manageOrders" className="my-2">
                        <span className="icon">
                            <i class="fas fa-tasks"></i>
                        </span>
                        <span className="title"><h5>Manage All Orders</h5></span>
                    </Link>
                </li>
                <li>
                    <Link as={HashLink} to="/manageEmployee#manageEmployee" className="my-2">
                        <span className="icon">
                            <i class="fas fa-tasks"></i>
                        </span>
                        <span className="title"><h5>Manage All Employee</h5></span>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default AdminSidebar;