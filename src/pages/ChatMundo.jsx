import React, { useState } from "react";
import "../styles/ChatMundo.css"; // si querés darle estilo aparte
import { mundoclick } from "../helper/configIa";

export const ChatMundo = () => {
  const [input, setInput] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);

  const enviarMensaje = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const nuevoMensajeUsuario = { emisor: "usuario", texto: input };
    setMensajes((prev) => [...prev, nuevoMensajeUsuario]);
    setInput("");
    setCargando(true);

    try {
      const respuestaIA = await mundoclick(input);
      const nuevoMensajeIA = { emisor: "ia", texto: respuestaIA };
      setMensajes((prev) => [...prev, nuevoMensajeIA]);
    } catch (error) {
      console.error("Error al consultar Gemini:", error);
      setMensajes((prev) => [
        ...prev,
        { emisor: "ia", texto: "Ocurrió un error al obtener respuesta 😔" },
      ]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <main>
      <div className="chat-container">
        <h2 className="titulo-chat">Chat MundoClick 🤖</h2>

        <div className="chat-mensajes">
          {mensajes.map((msg, i) => (
            <div
              key={i}
              className={`mensaje ${msg.emisor === "usuario" ? "usuario" : "ia"}`}
            >
              {msg.texto}
            </div>
          ))}
          {cargando && <p className="cargando">Pensando...</p>}
        </div>

        <form onSubmit={enviarMensaje} className="chat-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Preguntá lo que quieras sobre productos..."
            className="chat-input"
          />
          <button type="submit" className="chat-boton">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};
