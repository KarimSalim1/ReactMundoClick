import '../styles/CartDetails.css';
import { useState, useEffect } from "react";
import { getCart, removeFromCart } from "../utils/cart.js";
import { NavLink } from "react-router-dom";

export const CartDetails = () => {
  const [carrito, setCarrito] = useState([]);

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
            <NavLink to="*" className="boton-pagar">
              💳 Pagar
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};
