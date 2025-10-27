// src/components/Notification.jsx
import React, { useEffect } from "react";
import "../styles/Notification.css";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000); // Desaparece en 2 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
