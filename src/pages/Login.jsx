import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Importamos ambas funciones desde tu helper actualizado
import { authLogin, recuperarPassword } from '../helper/ApiLogin'; 
import Logo from "../assets/images/logo_mc.png";
import "../styles/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMensajeExito('');

    const datosParaBackend = {
      correo: formData.email,
      password: formData.password
    };

    try {
      const respuesta = await authLogin(datosParaBackend);
      if (respuesta && respuesta.token) {
        login(respuesta.usuario, respuesta.token); 
        navigate('/'); 
      } else {
        setError(respuesta.msg || 'Error al iniciar sesión');
      }
    } catch (err) {
      console.error(err);
      setError('No se pudo conectar con el servidor');
    }
  };

  // ✅ FUNCIÓN CONECTADA AL BACKEND
  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError('Por favor, ingresa tu correo electrónico primero para recuperarla.');
      return;
    }
    
    setError('');
    setMensajeExito('Procesando...'); // Feedback inmediato

    try {
      // Llamamos a la función del helper que creamos anteriormente
      const res = await recuperarPassword(formData.email);
      
      if (res) {
        setMensajeExito(res.msg); // "Si el correo existe, se ha enviado..."
        setError('');
      }
    } catch (err) {
      setError('Error al conectar con el servicio de recuperación.');
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
                className={`toggle-password ${showPassword ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </span>
            </div>

            <div className="olvide-password-container" style={{ textAlign: 'right', marginBottom: '15px' }}>
              <button 
                type="button" 
                onClick={handleForgotPassword}
                style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {error && <p className="error-login" style={{ color: 'red', fontSize: '0.9rem', marginBottom: '10px' }}>{error}</p>}
            {mensajeExito && <p className="exito-login" style={{ color: 'green', fontSize: '0.9rem', marginBottom: '10px' }}>{mensajeExito}</p>}

            <button type="submit" className="boton-login">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </main>
  );
};