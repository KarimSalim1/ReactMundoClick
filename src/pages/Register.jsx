import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { crearUsuario } from '../helper/usuariosApi';
import Logo from "../assets/images/logo_mc.png";
import logog from "../assets/images/google-icon.svg";
import logof from "../assets/images/facebook-icon.svg";
import "../styles/Register.css";

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Estado inicial con todos los campos necesarios
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validaciones básicas de cliente
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!formData.acceptTerms) {
      setError("Debes aceptar los términos y condiciones");
      return;
    }

    // MAPEO DE VARIABLES PARA TU BACKEND
    const datosParaBackend = {
      nombre: formData.name,
      apellido: formData.lastName,
      correo: formData.email,
      password: formData.password,
      rol: "Usuario" // Coincide exactamente con tu MongoDB
    };

    try {
      const respuesta = await crearUsuario(datosParaBackend);

      // Si el backend responde con el objeto usuario creado
      if (respuesta && respuesta.usuario) {
        alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
        navigate('/login'); 
      } else {
        // Captura errores de validación del backend (ej: correo duplicado)
        const msgError = respuesta.errors ? respuesta.errors[0].msg : respuesta.msg;
        setError(msgError || "Error al registrarse");
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar con el servidor");
    }
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
            
            {/* Campo Nombre */}
            <div className="grupo-input">
              <div className="icono-input"><i className="fas fa-user"></i></div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Campo Apellido */}
            <div className="grupo-input">
              <div className="icono-input"><i className="fas fa-user"></i></div>
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Campo Correo */}
            <div className="grupo-input">
              <div className="icono-input"><i className="fas fa-envelope"></i></div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Campo Contraseña */}
            <div className="grupo-input">
              <div className="icono-input"><i className="fas fa-lock"></i></div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-password" onClick={() => togglePasswordVisibility('password')}>
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </span>
            </div>
            
            {/* Confirmar Contraseña */}
            <div className="grupo-input">
              <div className="icono-input"><i className="fas fa-lock"></i></div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="toggle-password" onClick={() => togglePasswordVisibility('confirmPassword')}>
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
                  Acepto los <a href="#">términos y condiciones</a>
                </label>
              </div>
            </div>
            
            {/* Mostrar error si existe */}
            {error && (
              <p style={{ 
                color: '#ff4d4d', 
                backgroundColor: '#ffe6e6', 
                padding: '10px', 
                borderRadius: '5px', 
                fontSize: '0.8rem',
                textAlign: 'center',
                marginBottom: '15px',
                border: '1px solid #ffcccc'
              }}>
                {error}
              </p>
            )}

            <button type="submit" className="btn-registro">Crear Cuenta</button>
            
            <div className="separador"><span>o regístrate con</span></div>
            
            <div className="botones-sociales">
              <button type="button" className="btn-social btn-google">
                <img src={logog} width="20" alt="Google icon" /> Continuar con Google
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
    </main>
  );
};