import React from 'react';
import Logo from "../assets/images/logo_mc.png";
import '../styles/Navigate.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext.jsx'; // Importamos useAuth

// La exportación de este componente es nombrada
export const Navigate = () => {
    const { currentUser, isAdmin, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Navbar expand="lg" className="custom-navbar" fixed="top">
            <Container>
                <Navbar.Brand href="/" className="navbar-brand-custom">
                    <img src={Logo} alt="MundoClick" className="logo-img" />
                    <span className="brand-text">MundoClick</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link-custom">Inicio</NavLink>
                        <NavLink to="/category" className="nav-link-custom">Categorías</NavLink>
                        <NavLink to="/aboutUsPage" className="nav-link-custom">Acerca de Nosotros</NavLink>
                        <NavLink to="/contact" className="nav-link-custom">Contacto</NavLink>

                        {currentUser && isAdmin && (
                            <NavLink to="/admin" className="nav-link-custom admin-link">
                                Agregar Stock
                            </NavLink>
                        )}
                    </Nav>
                    <div className="nav-right-section">
                        <div className="nav-icons-container">
                            <NavLink to="/cartDetails" className="cart-icon">
                                <i className="fas fa-shopping-cart">🛒</i>
                            </NavLink>
                        </div>

                        <div className="auth-buttons">
                            {currentUser ? (
                                <button
                                    onClick={handleLogout}
                                    className="btn-register" // CLASE APLICADA
                                    style={{ border: 'none' }} // Estilo adicional para asegurar que se vea como botón
                                >
                                    Cerrar Sesión
                                </button>
                            ) : (
                                <>
                                    <NavLink to="/login" className="btn-login">Iniciar Sesión</NavLink>
                                    <NavLink to="/register" className="btn-register">Registrarse</NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};