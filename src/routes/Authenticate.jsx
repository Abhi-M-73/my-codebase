import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import UserDashboard from '../screen/user/UserDashboard';
import DashboardMain from '../layout/DashboardMain';
import AdminDashboard from '../screen/admin/AdminDashboard';
import { useSelector } from 'react-redux';

const Authenticate = () => {
    const { role } = useSelector((state) => state.auth);

    return (
        <Routes>
            {role === "user" && (
                <Route
                    path="/dashboard"
                    element={
                        <DashboardMain inner={<UserDashboard />} name="User Dashboard" />
                    }
                />
            )}

            {role === "admin" && (
                <Route
                    path="/admin/dashboard"
                    element={
                        <DashboardMain inner={<AdminDashboard />} name="Admin Dashboard" />
                    }
                />
            )}

            <Route
                path="*"
                element={
                    role === "admin"
                        ? <Navigate to="/admin/dashboard" />
                        : <Navigate to="/dashboard" />
                }
            />
        </Routes>
    );
};

export default Authenticate;
