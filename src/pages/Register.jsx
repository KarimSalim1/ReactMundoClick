
import React, { useState } from 'react';
import Logo from "../assets/images/logo_mc.png";
import logog from "../assets/images/google-icon.svg";
import logof from "../assets/images/facebook-icon.svg";
import "../styles/Register.css";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    console.log('Datos de registro:', formData);
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <main className="contenedor-registro">
      <div className="contenido-registro">
        <div className="marca-registro">
          <img src={Logo} alt="Logo de MundoClick" className="logo-registro" />
          <h1>MundoClick</h1>
          <p>Únete a nuestra comunidad</p>
        </div>
        
        <div className="contenedor-formulario-registro">
          <div className="encabezado-formulario-registro">
            <h2>Crear una cuenta</h2>
            <p>Completa tus datos para registrarte</p>
          </div>
          
          <form className="formulario-registro" onSubmit={handleSubmit}>
            <div className="grupo-input">
              <div className="icono-input">
                <i className="fas fa-user"></i>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grupo-input">
              <div className="icono-input">
                <i className="fas fa-envelope"></i>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
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
                onClick={() => togglePasswordVisibility('password')}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </span>
            </div>
            
            <div className="grupo-input">
              <div className="icono-input">
                <i className="fas fa-lock"></i>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span 
                className={`toggle-password ${showConfirmPassword ? 'visible' : ''}`}
                onClick={() => togglePasswordVisibility('confirmPassword')}
              >
                {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
              </span>
            </div>
            
            <div className="opciones-formulario">
              <div className="terminos">
                <input 
                  type="checkbox" 
                  id="aceptarTerminos" 
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <label htmlFor="aceptarTerminos">
                  Acepto los <a href="#">términos y condiciones</a> y la <a href="#">política de privacidad</a>
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn-registro">Crear Cuenta</button>
            
            <div className="separador">
              <span>o regístrate con</span>
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
                ¿Ya tenés cuenta? <a href="/login">Iniciar Sesión</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <div className="decoracion-registro">
        <div className="item-decoracion"></div>
        <div className="item-decoracion"></div>
        <div className="item-decoracion"></div>
      </div>
    </main>
  );
};