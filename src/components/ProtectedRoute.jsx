import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext.jsx';


const ProtectedRoute = ({ children }) => {
    const { currentUser, isAdmin } = useAuth();

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }


    if (!isAdmin) {
        console.error("Su correo electrónico y contraseña no coinciden. Inténtelo de nuevo.");
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;