import React, { useState } from "react";
import "../styles/Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    setSending(true);
    setSent(false);

    // Simula envío
    setTimeout(() => {
      console.log("Datos enviados:", formData);
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }, 2000);
  };

  return (
    <div className="pagina-contacto">
      <div className="contenedorprinc">
        <div className="header-contacto">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. ¡Escríbenos!</p>
        </div>

        <div className="contenedorsec">
          <div className="infocontacto">
            <div className="info-item">
              <div className="info-icono">📍</div>
              <div className="info-contenido">
                <h3>Dirección</h3>
                <p>Laprida 999</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icono">✉️</div>
              <div className="info-contenido">
                <h3>Email</h3>
                <p>mundoclick@gmail.com</p>
              </div>
            </div>

              <div className="info-item">
              <div className="info-icono">📞</div>
              <div className="info-contenido">
                <h3>Teléfono</h3>
                <p>+54 111 1111</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icono">🕒</div>
              <div className="info-contenido">
                <h3>Horario</h3>
                <p>Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <form className="formulario" onSubmit={handleSubmit}>
            <div className="grupo-formulario">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupo-formulario">
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupo-formulario">
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="grupo-formulario">
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`boton ${sending ? "enviando" : ""}`}
              disabled={sending}
            >
              {sending ? <span className="loader"></span> : "Enviar Mensaje"}
            </button>

            {sent && (
              <p className="mensaje-exito">
                ✅ ¡Mensaje enviado! Te contactaremos pronto.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
