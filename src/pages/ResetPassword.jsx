import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { actualizarPassword } from '../helper/ApiLogin';
import Logo from "../assets/images/logo_mc.png"; 
import "../styles/Login.css"; 
import "../styles/resetPassword.css";

export const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmar) {
            return setMensaje({ texto: 'Las contraseñas no coinciden', tipo: 'error' });
        }

        const res = await actualizarPassword(token, password);
        
        if (res.ok) {
            setMensaje({ texto: '¡Contraseña actualizada! Redirigiendo...', tipo: 'exito' });
            setTimeout(() => navigate('/login'), 3000);
        } else {
            setMensaje({ texto: res.msg || 'Error al actualizar', tipo: 'error' });
        }
    };

    return (
        <main className="contenedor-login">
            <div className="contenido-login">
                {/* Lado izquierdo con tu logo */}
                <div className="marca-login">
                    <img src={Logo} alt="MundoClick Logo" className="logo-login" />
                    <h1>MundoClick</h1>
                    <p>Protege tu cuenta con una nueva clave</p>
                </div>

                {/* Lado derecho con el formulario estilizado */}
                <div className="contenedor-formulario-login">
                    <div className="encabezado-formulario-login">
                        <h2>Nueva Contraseña</h2>
                        <p>Ingresa los datos para restablecer tu acceso</p>
                    </div>

                    <form className="formulario-login" onSubmit={handleSubmit}>
                        {/* Input 1 con Icono */}
                        <div className="grupo-input">
                            <div className="icono-input">
                                <i className="fas fa-lock"></i>
                            </div>
                            <input 
                                type="password" 
                                placeholder="Nueva contraseña" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>

                        {/* Input 2 con Icono */}
                        <div className="grupo-input">
                            <div className="icono-input">
                                <i className="fas fa-check-double"></i>
                            </div>
                            <input 
                                type="password" 
                                placeholder="Confirmar contraseña" 
                                value={confirmar}
                                onChange={(e) => setConfirmar(e.target.value)}
                                required 
                            />
                        </div>

                        {mensaje.texto && (
                            <p className={mensaje.tipo === 'error' ? 'error-mensaje' : 'exito-mensaje'}>
                                {mensaje.texto}
                            </p>
                        )}

                        <button type="submit" className="boton-login">Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </main>
    );
};