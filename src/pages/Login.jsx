
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
   /*  Aquí iría la lógica de autenticación */
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
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </span>
            </div>
            
            <div className="opciones-formulario">
              <div className="recordarme">
                <input type="checkbox" id="recordar" />
                <label htmlFor="recordar">Recordarme</label>
              </div>
              <div className="olvido">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            
            <button type="submit" className="boton-login">Iniciar Sesión</button>
            
            <div className="separador">
              <span>o continúa con</span>
            </div>
            
            <div className="botones-sociales">
              <button type="button" className="btn-social btn-google">
                <img src={logog} width="20" alt="Google icon" />
                Continuar con Google
              </button>
              <button type="button" className="btn-social btn-facebook">
                <img src={logof} width="20" alt="Facebook icon" />
                Continuar con Facebook
              </button>
            </div>
            
            <div className="enlaces-extra">
              <p className="texto-cuenta">
                ¿No tenés cuenta? <a href="/register">Crear una cuenta</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <div className="decoracion-login">
        <div className="item-decoracion"></div>
        <div className="item-decoracion"></div>
        <div className="item-decoracion"></div>
      </div>
    </main>
  );
};