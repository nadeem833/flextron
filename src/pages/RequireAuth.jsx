import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function RequireAuth() {
    const location = useLocation();
    const  isAuthenticated = true
    return (
        isAuthenticated
            ? <Outlet />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth