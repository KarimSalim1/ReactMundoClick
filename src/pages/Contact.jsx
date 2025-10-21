import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          alert("✅ Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Error al enviar el mensaje:", error);
          alert("Error al enviar el mensaje, por favor intente nuevamente.");
        }
      );
  };

  return (
    <main id="contact-page">
      <section id="contact-section">
        <h2 id="contact-title">Contacto</h2>

        <form ref={form} onSubmit={sendEmail} id="contact-form">
          <div className="contact-field">
            <label htmlFor="contact-name">Nombre completo</label>
            <input
              type="text"
              id="contact-name"
              name="user_name"
              placeholder="Tu nombre y apellido"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Asunto</label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              placeholder="Motivo del mensaje"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-product">Tipo de producto</label>
            <select id="contact-product" name="product_type" required>
              <option value="">Selecciona un tipo</option>
              <option value="ropa">Ropa</option>
              <option value="accesorios">Accesorios</option>
              <option value="tecnologia">Tecnología</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Descripción</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button type="submit" id="contact-submit">
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
};
