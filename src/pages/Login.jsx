import React, { useState } from 'react';
import Logo from "../assets/images/logo_mc.png";
import logog from "../assets/images/google-icon.svg";
import logof from "../assets/images/facebook-icon.svg";
import "../styles/Login.css";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de login:', formData);
    // Aquí iría la lógica de autenticación
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="login-container">
      <div className="login-content">
        <div className="login-brand">
          <img src={Logo} alt="Logo de MundoClick" className="login-logo" />
          <h1>MundoClick</h1>
          <p>Conecta con el mundo digital</p>
        </div>
        
        <div className="login-form-container">
          <div className="login-form-header">
            <h2>Bienvenido de nuevo</h2>
            <p>Ingresa tus credenciales para continuar</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-user"></i>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Usuario o Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-lock"></i>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span 
                className={`toggle-password ${showPassword ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </span>
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Recordarme</label>
              </div>
              <div className="forgot">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            
            <button type="submit" className="login-btn">Iniciar Sesión</button>
            
            <div className="separator">
              <span>o continúa con</span>
            </div>
            
            <div className="social-buttons">
              <button type="button" className="btn-social google-btn">
                <img src={logog} width="20" alt="Google icon" />
                Continuar con Google
              </button>
              <button type="button" className="btn-social facebook-btn">
                <img src={logof} width="20" alt="Facebook icon" />
                Continuar con Facebook
              </button>
            </div>
            
            <div className="extra-links">
              <p className="textodecuenta">
                ¿No tenés cuenta? <a href="/register">Crear una cuenta</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <div className="login-decoration">
        <div className="decoration-item"></div>
        <div className="decoration-item"></div>
        <div className="decoration-item"></div>
      </div>
    </main>
  );
};