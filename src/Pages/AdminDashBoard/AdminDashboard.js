import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../Shared/AdminSidebar/AdminSidebar';
import useAuth from '../../Hooks/useAuth';
import './AdminDashBoard.css';

const AdminDashboard = () => {
    const { user } = useAuth();
    return (
        <div className="dashboard-container">
            <AdminSidebar></AdminSidebar>
            <div className="main-section">
                
            </div>
            <h2 className="text-center text-success">Admin Dashboard</h2>
           <h3>Welcome, {user.displayName}</h3>
        </div>

    );
};

export default AdminDashboard;