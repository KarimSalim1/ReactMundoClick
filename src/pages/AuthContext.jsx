import React, { createContext, useContext, useState, useEffect } from 'react';
import { users } from "../data/users";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    // ... (currentUser y lógica de useEffect sin cambios)

    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem('usuarioLogueado');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('usuarioLogueado', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('usuarioLogueado');
        }
    }, [currentUser]);

    // Función de LOGIN real
    const login = (email, password) => {
        const user = users.find(u => u.email === email && u.password === password);

        // Solo permite el login si el usuario existe Y es administrador.
        if (user && user.role === "admin") {
            // Guarda el objeto completo del usuario, incluyendo el role
            setCurrentUser(user);
            return true; // Login exitoso
        }

        return false; // Falla si no se encuentra o si el rol no es admin
    };


    const logout = () => {
        setCurrentUser(null);
        // La limpieza del localStorage ocurre en el useEffect
    };

    const isAdmin = currentUser && currentUser.role === "admin";

    const value = {
        currentUser,
        login,
        logout,
        isAdmin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};