import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    console.log(user);
    if (loading) {
        return <p>Loading......</p>;
    }
    if (user && user.uid) {
        return children;
    }
    else {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
    }
};

export default PrivetRoute;