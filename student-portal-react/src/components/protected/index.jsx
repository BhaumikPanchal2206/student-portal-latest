import React, { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('auth');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!token) {
            navigate('/log-in');
        }
    }, [token])

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute