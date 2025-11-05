import { productosSimilares, productosRecomendados } from '../data/carousel.js'
import CarouselAction from '../components/CarouselApp.jsx'
import '../styles/ProductDetails.css'
import aurisNegros from "../assets/images/aurineg1.png"
import aurisNegros2 from "../assets/images/aurineg2.png"
import aurisNegros3 from "../assets/images/aurineg3.png"
import aurisNegros4 from "../assets/images/aurineg4.png"
import { addToCart } from '../utils/cart.js';
import React, { useState } from "react";
import Notification from "../components/Notification.jsx";
import { useNavigate } from "react-router-dom";

export const ProductDetails2 = () => {
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = (producto) => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("⚠️ Debes iniciar sesión para agregar productos al carrito.");
            navigate("/login");
            return;
        }

        addToCart(producto);
        setShowNotification(true);
    };

    const handleBuyNow = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("⚠️ Debes iniciar sesión antes de comprar.");
            navigate("/login");
            return;
        }

        // Si está logueado, lo mandamos a la página de compra (puedes cambiar la ruta)
        navigate("/checkout");
    };

    // Estados de comentarios
    const [rating, setRating] = useState(0);
    const [comentario, setComentario] = useState("");

    const handleCommentSubmit = () => {
        if (comentario.trim() === "") {
            alert("Por favor escribe un comentario antes de enviar.");
            return;
        }
        console.log("Comentario enviado:", comentario, "Rating:", rating);
        alert(`Gracias por tu comentario!\nRating: ${rating}\nComentario: ${comentario}`);
        setComentario("");
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
                <h2 className="product-title">Audífonos Gamer Razer Blackshark V2</h2>

                <div className="product-details">
                    <div className="carousel-container-single">
                        <input type="radio" name="carousel" id="img1" defaultChecked />
                        <input type="radio" name="carousel" id="img2" />
                        <input type="radio" name="carousel" id="img3" />
                        <input type="radio" name="carousel" id="img4" />

                        <div className="carousel-images">
                            <img src={aurisNegros} alt="Producto 1" className="carousel-img img1" />
                            <img src={aurisNegros2} alt="Producto 2" className="carousel-img img2" />
                            <img src={aurisNegros3} alt="Producto 3" className="carousel-img img3" />
                            <img src={aurisNegros4} alt="Producto 4" className="carousel-img img4" />
                        </div>
                    </div>

                    <div className="price-info">
                        <div className="price">
                            $81.000
                            <span className="favorite-container">
                                <input type="checkbox" id="fav" />
                                <label htmlFor="fav" className="favorite-btn">
                                    &#10084;
                                </label>
                            </span>
                        </div>
                        <div className="original-price">$90.000</div>
                        <div className="discount-price">Desc: $9.000</div>

                        <div className="product-rating">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9734;</span>
                            <span className="rating-text">4.5/5</span>
                        </div>

                        <p className="stock-info">Stock disponible: 15 unidades</p>
                        <div className="button-container">
                            <button className="buy-now" onClick={handleBuyNow}>
                                Comprar Ahora
                            </button>
                            <button
                                className="add-cart"
                                onClick={() =>
                                    handleAddToCart({
                                        id: 2,
                                        nombre: "Audífonos Gamer Razer Blackshark V2 X RZ0403240100R3M1 Classic Black",
                                        precio: 90000,
                                        imagen: aurisNegros,
                                    })
                                }
                            >
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>

                <div className="product-description">
                    <h3>Descripción del Producto</h3>
                    <p>
                        AURICULAR RAZER BLACKSHARK V2 X <br />
                        EL SONIDO DE LOS ESPORTS...
                    </p>

                    <ul className="product-details-list">
                        <li>Es inalambrico: No</li>
                        <li>Es resistente al agua: No</li>
                        <li>Con luz led: No</li>
                        <li>Con cancelación de ruido: Sí</li>
                        <li>Con micrófono: Sí</li>
                    </ul>

                    <div>
                        <h3 className="carousel-title">Productos Similares</h3>
                        <CarouselAction items={productosSimilares} />
                    </div>

                    <div>
                        <h3 className="carousel-title">Productos Recomendados</h3>
                        <CarouselAction items={productosRecomendados} />
                    </div>

                    <div className="comments-section">
                        <h2>Dejá tu Comentario</h2>
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
                        <textarea
                            rows="5"
                            placeholder="Escribe aquí tu comentario..."
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                        />
                        <button onClick={handleCommentSubmit}>Enviar Comentario</button>
                    </div>
                </div>
            </div>
        </>
    );
};
