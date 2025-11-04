import Logo from "../assets/images/logo_mc.png";
import '../styles/Navigate.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navigate = () => {
    const { user, logout } = useAuth();
    
    const handleLogout = () => {
        logout();
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
                        <NavLink to="/aboutUsPage" className="nav-link-custom">Acerca de Nosotros</NavLink>
                        <NavLink to="/contact" className="nav-link-custom">Contacto</NavLink>
                        
                        {/* Botón Admin - Solo visible para usuarios admin */}
                        {user && user.role === 'admin' && (
                            <NavLink to="/admin" className="nav-link-custom">
                                <button className="btn btn-warning btn-sm admin-btn">
                                    Admin
                                </button>
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
                            {user ? (
                                // Usuario logueado - mostrar información y botón de cerrar sesión
                                <div className="d-flex align-items-center gap-3">
                                    <span className="user-info text-light">
                                        Hola, {user.role}
                                    </span>
                                    <button 
                                        onClick={handleLogout}
                                        className="btn-logout"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            ) : (
                                // Usuario no logueado - mostrar botones de login/register
                                <>
                                    <NavLink to="/login" className="btn-login">
                                        Iniciar Sesión
                                    </NavLink>
                                    <NavLink to="/register" className="btn-register">
                                        Registrarse
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};