import { useState, useEffect } from "react";
import { getCart, removeFromCart } from "../utils/cart.js";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../styles/cartDetails.css';

export const CartDetails = () => {
  const [carrito, setCarrito] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Si no hay usuario logueado, redirige al login
    if (!user) {
      navigate("/login");
      return;
    }

    setCarrito(getCart());
  }, [user, navigate]);

  useEffect(() => {
    setCarrito(getCart());

  }, []);

  const eliminarProducto = (id) => {
    removeFromCart(id);
    setCarrito(getCart()); // refresca el estado
  };

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="carrito-container">
      <h2>Tu carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div key={producto.id} className="producto-carrito">
              <img src={producto.imagen} alt={producto.nombre} width="80" />
              <div className="detalle-producto">
                <h3>{producto.nombre}</h3>
                <p>Precio unitario: ${producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p className="subtotal">
                  Subtotal: ${producto.precio * producto.cantidad}
                </p>
              </div>
              <button onClick={() => eliminarProducto(producto.id)}>
                🗑️ Eliminar
              </button>
            </div>
          ))}

          <div className="resumen-carrito">
          <h3>Total: ${total}</h3>

          {/* Envío */}
          <div className="envio">
            <h4>🚚 Envío</h4>
            <label>
              <input type="radio" name="envio" defaultChecked />
              Envío por MercadoLibre
            </label>
          </div>

          {/* Pago */}
          <div className="pago">
            <h4>💳 Datos de la tarjeta</h4>
            <input type="text" placeholder="Nombre del titular" />
            <input type="text" placeholder="Número de tarjeta" />
            <div className="fila">
              <input type="text" placeholder="MM/AA" />
              <input type="text" placeholder="CVV" />
            </div>
          </div>

          {/* Link de pago */}
          <a
            href="https://www.mercadopago.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-pagar"
          >
            Pagar con MercadoPago
          </a>
        </div>

        </>
      )}
    </div>
  );
};
