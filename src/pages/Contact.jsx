import React, { useState } from 'react';
import "../styles/Contact.css"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. ¡Escríbenos!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Dirección</h3>
                <p>Laprida 999</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Teléfono</h3>
                <p>+54 111 1111</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>mundoclick@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Horario</h3>
                <p>Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

