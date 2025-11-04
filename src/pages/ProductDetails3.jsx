import React, { useState } from 'react'
import { Link } from "react-router-dom";
import CarouselAction from "../components/CarouselApp";
import { productosRecomendados, productosSimilares } from "../data/carousel";
import tecladoymouse from '../assets/images/Kit-TecMouse-RD.png';
import tecladoymouse2 from '../assets/images/Tecladoymouse2-removebg-preview.png';
import tecladoymouse3 from '../assets/images/Tecladoymouse3-removebg-preview.png';
import tecladoymouse4 from '../assets/images/tecladoymouse4-removebg-preview.png';
import { addToCart } from '../utils/cart.js';
import Notification from "../components/Notification.jsx";
import '../styles/ProductDetails3.css';

export const ProductDetails3 = () => {
  const [showNotification, setShowNotification] = useState(false);
  
          const handleAddToCart = (producto) => {
              addToCart(producto);
              setShowNotification(true);
          };
  // Estados
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState("");

  // Handlers
  const handleCommentSubmit = () => {
    if (comentario.trim() === "") {
      alert("Por favor escribe un comentario antes de enviar.");
      return;
    }
    console.log("Comentario enviado:", comentario, "Rating:", rating);
    alert(`Gracias por tu comentario!\nRating: ${rating}\nComentario: ${comentario}`);
    setComentario(""); // limpiar después de enviar
    setRating(0);
  };

  return (
    <>
    {showNotification && (
                <Notification
                message="✅ Producto añadido al carrito"
                onClose={() => setShowNotification(false)}
                />
            )}
      <div className="product-container">
        {/* Título del Producto */}
        <h2 className="product-title">
          Kit Redragon Teclado Y Mouse K617rgb Sp+m724 Negro S143
        </h2>

        <div className="product-details">
          {/* Carrusel controlado por radios */}
          <div className="carousel-container-single">
            {/* Radios */}
            <input type="radio" name="carousel" id="img1" defaultChecked />
            <input type="radio" name="carousel" id="img2" />
            <input type="radio" name="carousel" id="img3" />
            <input type="radio" name="carousel" id="img4" />

            {/* Imágenes principales */}
            <div className="carousel-images">
              <a href="#modal1">
                <img src={tecladoymouse} alt="Producto 1" className="carousel-img img1" />
              </a>
              <a href="#modal2">
                <img src={tecladoymouse2} alt="Producto 2" className="carousel-img img2" />
              </a>
              <a href="#modal3">
                <img src={tecladoymouse3} alt="Producto 3" className="carousel-img img3" />
              </a>
              <a href="#modal4">
                <img src={tecladoymouse4} alt="Producto 4" className="carousel-img img4" />
              </a>
            </div>

            {/* Flechas */}
            <div className="carousel-arrows">
              <label htmlFor="img4" className="prev img1"></label>
              <label htmlFor="img1" className="prev img2"></label>
              <label htmlFor="img2" className="prev img3"></label>
              <label htmlFor="img3" className="prev img4"></label>

              <label htmlFor="img2" className="next img1"></label>
              <label htmlFor="img3" className="next img2"></label>
              <label htmlFor="img4" className="next img3"></label>
              <label htmlFor="img1" className="next img4"></label>
            </div>
          </div>

          {/* Información: precio, stock y favorito */}
          <div className="price-info">
            <div className="price">
              $64.400
              <span className="favorite-container">
                <input type="checkbox" id="fav" />
                <label htmlFor="fav" className="favorite-btn">
                  &#10084;
                </label>
              </span>
            </div>
            <div className="original-price">$69.900</div>
            <div className="discount-price">Desc: $5.500</div>

            <p className="stock-info">Stock disponible: 15 unidades</p>
            <div className="button-container">
              <button className="buy-now">Comprar Ahora</button>
            <button
                                    className="add-cart"
                                    onClick={() =>
                                        handleAddToCart({
                                        id: 3,
                                        nombre: "Audífonos Gamer Razer Blackshark V2 X RZ0403240100R3M1 Classic Black",
                                        precio: 699000,
                                        imagen: tecladoymouse,
                                        })
                                    }
                                    >
                                    Agregar al Carrito
                                </button>
            </div>
          </div>
        </div>

        {/* Carrusel: Productos Similares */}
        <div>
          <h3 className="carousel-title">Productos Similares</h3>
          <CarouselAction items={productosSimilares} />
        </div>

        {/* Carrusel: Productos Recomendados */}
        <div>
          <h3 className="carousel-title">Productos Recomendados</h3>
          <CarouselAction items={productosRecomendados} />
        </div>

        {/* Sección de Comentarios */}
        <div className="comments-section">
          <h2>Dejá tu Comentario</h2>

          {/* Calificación interactiva */}
          <div className="comment-rating">
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={rating === star}
                  onChange={() => setRating(star)}
                />
                <span style={{ cursor: "pointer", color: rating >= star ? "gold" : "gray" }}>
                  &#9733;
                </span>
              </label>
            ))}
          </div>

          <textarea rows="5" placeholder="Escribe aquí tu comentario..." value={comentario} onChange={(e) => setComentario(e.target.value)} />
          <button onClick={handleCommentSubmit}>Enviar Comentario</button>
        </div>
      </div>
    </>
  )
}