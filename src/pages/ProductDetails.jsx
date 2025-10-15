import {productosSimilares, productosRecomendados} from "../data/carousel.js";
import CarouselAction from '../components/CarouselApp.jsx'
import '../styles/ProductDetails.css'
import iphone12 from "../assets/images/Iphone12-removebg-preview.png";
import iphone from "../assets/images/iphone14frente.png";
import iphoneAzul from "../assets/images/iphoneazul.png";



export const ProductDetails = () => {
    return (
        <>
                <div className="product-container">
                    {/* Título del Producto */}
                    <h2 className="product-title">Apple iPhone 14 (128 GB) - Blanco - Azul Cielo</h2>

                    {/* Sección principal: Imagen y Datos del Producto */}
                    <div className="product-details">
                        {/* Modales */}
                        <div id="modal1" className="modal">
                            <a href="#" className="close-modal">&times;</a>
                            <img src={iphone12} alt="Producto Ampliado 1" />
                        </div>
                        <div id="modal2" className="modal">
                            <a href="#" className="close-modal">&times;</a>
                            <img src={iphone} alt="Producto Ampliado 2" />
                        </div>
                        <div id="modal3" className="modal">
                            <a href="#" className="close-modal">&times;</a>
                            <img src={iphoneAzul} alt="Producto Ampliado 3" />
                        </div>
                        <div id="modal4" className="modal">
                            <a href="#" className="close-modal">&times;</a>
                            <img src={iphone} alt="Producto Ampliado 4" />
                        </div>

                        {/* Carrusel controlado por radios */}
                        <div className="carousel-container-single">
                            <input type="radio" name="carousel" id="img1" defaultChecked />
                            <input type="radio" name="carousel" id="img2" />
                            <input type="radio" name="carousel" id="img3" />
                            <input type="radio" name="carousel" id="img4" />

                            <div className="carousel-images">
                                <a href="#modal1">
                                    <img src={iphone12} alt="Producto 1" className="carousel-img img1" />
                                </a>
                                <a href="#modal2">
                                    <img src={iphone} alt="Producto 2" className="carousel-img img2" />
                                </a>
                                <a href="#modal3">
                                    <img src={iphoneAzul} alt="Producto 3" className="carousel-img img3" />
                                </a>
                                <a href="#modal4">
                                    <img src={iphone} alt="Producto 4" className="carousel-img img4" />
                                </a>
                            </div>

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

                        {/* Info Precio, Stock y Botones */}
                        <div className="price-info">
                            <div className="price">
                                $1.500.000
                                <span className="favorite-container">
                                    <input type="checkbox" id="fav" />
                                    <label htmlFor="fav" className="favorite-btn">&#10084;</label>
                                </span>
                            </div>
                            <div className="original-price">$1.521.000</div>
                            <div className="discount-price">Desc: $21.000</div>

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
                                <a href="/pages/error404.html">
                                    <button className="buy-now">Comprar Ahora</button>
                                </a>
                                <a href="/pages/detallecarrito.html">
                                    <button className="add-cart">Agregar al Carrito</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Descripción */}
                    <div className="product-description">
                        <h3>Descripción del Producto</h3>
                        <p>
                            Pantalla Super Retina XDR de 6.1 pulgadas. Sistema avanzado de cámaras para tomar mejores fotos en cualquier condición de luz.
                            Modo Cine ahora en 4K Dolby Vision de hasta 30cps. Modo Acción para lograr videos estables, aún con cámara en mano.
                            Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando tú no puedes.
                            Batería para todo el día y hasta 26 horas de reproducción de vídeo. A15 Bionic, con GPU e 5 núcleos para un rendimiento fuera de serie. Red 5G ultrarrápida.
                            Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria.
                            iOS 16 ofrece aún más opciones de personalización y más formas de comunicarse y compartir.
                        </p>
                    </div>

                    {/* Lista detalles */}
                    <ul className="product-details-list">
                        <li>Memoria interna: 128 GB</li>
                        <li>Cámara trasera principal: 12 Mpx</li>
                        <li>Con NFC: Sí</li>
                        <li>Cámara frontal principal: 12 Mpx</li>
                        <li>Desbloqueo: Reconocimiento facial</li>
                    </ul>
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
                        <h2>Deja tu Comentario</h2>

                        <div className="comment-rating">
                            <input type="radio" id="star5-comment" name="rating" value="5" />
                            <label htmlFor="star5-comment" title="5 estrellas">&#9733;</label>

                            <input type="radio" id="star4-comment" name="rating" value="4" />
                            <label htmlFor="star4-comment" title="4 estrellas">&#9733;</label>

                            <input type="radio" id="star3-comment" name="rating" value="3" />
                            <label htmlFor="star3-comment" title="3 estrellas">&#9733;</label>

                            <input type="radio" id="star2-comment" name="rating" value="2" />
                            <label htmlFor="star2-comment" title="2 estrellas">&#9733;</label>

                            <input type="radio" id="star1-comment" name="rating" value="1" />
                            <label htmlFor="star1-comment" title="1 estrella">&#9733;</label>
                        </div>

                        <textarea rows="5" placeholder="Escribe aquí tu comentario..."></textarea>
                        <a href="/pages/error404.html">
                            <button>Enviar Comentario</button>
                        </a>
                    </div>
                </div>
        </>
    )
}