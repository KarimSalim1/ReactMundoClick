// utils/cart.js

const CART_KEY = "carrito";

export const getCart = () => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

// ✅ Agregar producto (suma cantidad si ya existe)
export const addToCart = (producto) => {
  let carrito = getCart();
  const existente = carrito.find((item) => item.id === producto.id);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(carrito));
};

// ✅ Eliminar producto completamente
export const removeFromCart = (id) => {
  let carrito = getCart();
  carrito = carrito.filter((item) => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(carrito));
};

// ✅ Vaciar todo el carrito
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
