// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { users as defaultUsers } from "../data/users"; // mantiene el admin por defecto

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // 🔹 Login (admin o cliente)
  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const allUsers = [...defaultUsers, ...storedUsers]; // combina admin + clientes registrados

    const foundUser = allUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userData = { email: foundUser.email, role: foundUser.role || "user" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true, user: userData };
    }

    return { success: false, error: "Credenciales incorrectas" };
  };

  // 🔹 Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // 🔹 Registro de clientes
  const register = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Evita duplicados
    if (storedUsers.some((u) => u.email === email)) {
      return { success: false, error: "El usuario ya existe" };
    }

    const newUser = { email, password, role: "user" };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true };
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
