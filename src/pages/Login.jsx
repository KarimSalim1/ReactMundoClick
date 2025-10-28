import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/images/logo_mc.png";
import "../styles/Login.css";
import { useAuth } from '../pages/AuthContext.jsx';

export const Login = () => {
  const navigate = useNavigate();
  // Importa la función 'login' del contexto
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Usar la función 'login' del contexto para autenticar y actualizar el estado
    const success = login(formData.email, formData.password);

    if (success) {

      navigate('/admin');
    } else {
      setError('Su correo electrónico y contraseña no coinciden. Inténtelo de nuevo.");');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="contenedor-login">
      <div className="contenido-login">
        <div className="marca-login">
          <img src={Logo} alt="Logo de MundoClick" className="logo-login" />
          <h1>MundoClick</h1>
          <p>Conecta con el mundo digital</p>
        </div>

        <div className="contenedor-formulario-login">
          <div className="encabezado-formulario-login">
            <h2>Bienvenido de nuevo</h2>
            <p>Ingresa tus credenciales para continuar</p>
          </div>

          <form className="formulario-login" onSubmit={handleSubmit}>
            <div className="grupo-input">
              <div className="icono-input">
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

            <div className="grupo-input">
              <div className="icono-input">
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
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </span>
            </div>

            {error && <p className="error-login">{error}</p>}

            <button type="submit" className="boton-login">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </main>
  );
};