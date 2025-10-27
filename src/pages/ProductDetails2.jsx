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


export const ProductDetails2 = () => {
    const [showNotification, setShowNotification] = useState(false);
    
            const handleAddToCart = (producto) => {
                addToCart(producto);
                setShowNotification(true);
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
                    {/* Título */}
                    <h2 className="product-title">
                        Audífonos Gamer Razer Blackshark V2 X RZ0403240100R3M1 Classic Black
                    </h2>

                    {/* Sección principal */}
                    <div className="product-details">
                        {/* Modales */}
                        <div id="modal1" className="modal">
                            <a href="#" className="close-modal">
                                &times;
                            </a>
                            <img src={aurisNegros} alt="Producto Ampliado 1" />
                        </div>
                        <div id="modal2" className="modal">
                            <a href="#" className="close-modal">
                                &times;
                            </a>
                            <img src={aurisNegros2} alt="Producto Ampliado 2" />
                        </div>
                        <div id="modal3" className="modal">
                            <a href="#" className="close-modal">
                                &times;
                            </a>
                            <img src={aurisNegros3} alt="Producto Ampliado 3" />
                        </div>
                        <div id="modal4" className="modal">
                            <a href="#" className="close-modal">
                                &times;
                            </a>
                            <img src={aurisNegros4} alt="Producto Ampliado 4" />
                        </div>

                        {/* Carrusel */}
                        <div className="carousel-container-single">
                            {/* Inputs */}
                            <input type="radio" name="carousel" id="img1" defaultChecked />
                            <input type="radio" name="carousel" id="img2" />
                            <input type="radio" name="carousel" id="img3" />
                            <input type="radio" name="carousel" id="img4" />

                            {/* Imágenes */}
                            <div className="carousel-images">
                                <a href="#modal1">
                                    <img src={aurisNegros} alt="Producto 1" className="carousel-img img1" />
                                </a>
                                <a href="#modal2">
                                    <img src={aurisNegros2} alt="Producto 2" className="carousel-img img2" />
                                </a>
                                <a href="#modal3">
                                    <img src={aurisNegros3} alt="Producto 3" className="carousel-img img3" />
                                </a>
                                <a href="#modal4">
                                    <img src={aurisNegros4} alt="Producto 4" className="carousel-img img4" />
                                </a>
                            </div>

                            {/* Flechas */}
                            <div className="carousel-arrows">
                                {/* Slide 1 */}
                                <label htmlFor="img4" className="prev img1"></label>
                                <label htmlFor="img2" className="next img1"></label>

                                {/* Slide 2 */}
                                <label htmlFor="img1" className="prev img2"></label>
                                <label htmlFor="img3" className="next img2"></label>

                                {/* Slide 3 */}
                                <label htmlFor="img2" className="prev img3"></label>
                                <label htmlFor="img4" className="next img3"></label>

                                {/* Slide 4 */}
                                <label htmlFor="img3" className="prev img4"></label>
                                <label htmlFor="img1" className="next img4"></label>
                            </div>
                        </div>


                        {/* Precio, favorito y botones */}
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
                                <a href="/pages/error404.html">
                                    <button className="buy-now">Comprar Ahora</button>
                                </a>
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

                    {/* Descripción */}
                    <div className="product-description">
                        <h3>Descripción del Producto</h3>
                        <p>
                            AURICULAR RAZER BLACKSHARK V2 X
                            <br />
                            EL SONIDO DE LOS ESPORTS
                            Haz frente a la competencia con unos cascos para Esports ligeros que se crecen ante la presión. Los Razer BlackShark V2 X son una amenaza triple por su sonido increíble, nitidez del micrófono superior y un aislamiento acústico inmejorable acreditado por profesionales.
                            <br />
                            DIAFRAGMAS DE 50 MM RAZER TRIFORCE
                            Nuestro diseño patentado permite a nuestros ingenieros ajustar cada diafragma de forma personalizada, lo cual hace que las réplicas individuales de frecuencias de audio altas, medias y bajas ofrezcan un sonido más claro, agudos más intensos y graves más potentes.
                            <br />
                            MICRÓFONO CARDIOIDE RAZER HYPERCLEAR
                            El micrófono flexible, que ofrece captación de voz y cancelación de ruido, tiene una cubierta optimizada que adopta un diseño más abierto para obstrucción mínima, lo que mejora la nitidez para una recreación más aproximada a tu voz real.
                            <br />
                            CANCELACIÓN PASIVA DE RUIDO AVANZADA
                            Ya sea el clamor de la multitud o el zumbido de tu equipo, podrás aislarte del ruido y disfrutar de una concentración sin interrupciones con los auriculares especialmente cerrados que cubren por completo las orejas, gracias a las almohadillas afelpadas que forman un sellado más hermético para mayor aislamiento del sonido.
                            <br />
                            LIGEREZA Y COMODIDAD
                            Con tan solo 240 gramos, casi ni te acordarás de que los llevas puestos en tus maratones de juego. Los auriculares son más cómodos gracias al relleno acolchado más grueso y a las almohadillas de espuma viscoelástica envueltas en una combinación de tejido transpirable y piel sintética afelpada.
                            <br />
                            SONIDO ENVOLVENTE 7.1
                            Aumenta tu nivel de concentración y no dejes que nada se escape a tus oídos con el audio posicional exacto, que te permite localizar intuitivamente de dónde viene cada sonido.
                            <br />
                            COMPATIBILIDAD MULTIPLATAFORMA
                            Estos auriculares ligeros para Esports usan un conector de 3,5 mm y son compatibles con las plataformas más populares, lo que te permite competir en PC, Mac, PS4, Xbox One, Nintendo Switch y dispositivos móviles.
                            <br />
                            ESPECIFICACIONES TÉCNICAS
                            <br />
                            A simple vista
                            <br />
                            - Diafragmas de 50 mm Razer TriForce para un rendimiento de audio de alta calidad
                            <br />
                            - Micrófono cardioide Razer HyperClear para una captura de voz mejorada
                            <br />
                            - Cancelación pasiva de ruido avanzada para una concentración ininterrumpida
                            <br />
                            - Diseño ligero de 240 gramos con almohadillas de espuma viscoelástica transpirable para una comodidad duradera
                            <br />
                            - Sonido envolvente 7.1 para una experiencia de audio posicional exacta
                            <br />
                            Auriculares
                            <br />
                            - Frecuencia de respuesta: 12 Hz–28 kHz
                            <br />
                            - Sensibilidad (a 1 KHz): 100 dBSPL/mW, 1 KHz
                            <br />
                            - Diafragmas: Diafragma personalizado dinámico de 50 mm
                            <br />
                            - Diámetro interno de la almohadilla: 63 mm x 43 mm / 2,48" x 1,69"
                            <br />
                            - Tipo de conexión: Analógica 3,5 mm
                            <br />
                            - Longitud del cable: 1,3 m/4,27 ft
                            <br />
                            - Peso aproximado: 240 g/0,53 lb.
                            <br />
                            - Almohadillas ovaladas: Almohadillas de espuma viscoelástica transpirables
                            <br />
                            Micrófono
                            <br />
                            - Frecuencia de respuesta: 100 Hz–10 kHz
                            <br />
                            - Relación señal/ruido: 60 dB
                            <br />
                            - Sensibilidad (a 1 kHz): -42 dB V/Pa, 1 KHz
                            <br />
                            - Patrón de captación: Unidireccional
                            <br />
                            Control en el auricular
                            <br />
                            - Aumento/disminución del volumen
                            <br />
                            - Conmutador de activación/desactivación del silencio del micrófono
                            <br />
                            Uso de audio
                            <br />
                            - Uso de audio: Dispositivos con conector de audio de 3,5 mm
                            <br />
                            - Sonido envolvente: *Solo disponible para Windows 10 de 64 bits
                            <br />
                        </p>
                        {/* Lista de detalles */}
                        <ul className="product-details-list">
                            <li>Es inalambrico: No</li>
                            <li>Es resistente al agua: No</li>
                            <li>Con luz led: No</li>
                            <li>Con cancelacion de ruido: Si</li>
                            <li>Con microfono: Si</li>
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

                        {/* Comentarios */}
                        <div className="comments-section">
                            <h2>Deja tu Comentario</h2>
                            <div className="comment-rating">
                                <input type="radio" id="star5-comment" name="rating" value="5" />
                                <label htmlFor="star5-comment" title="5 estrellas">
                                    &#9733;
                                </label>
                                <input type="radio" id="star4-comment" name="rating" value="4" />
                                <label htmlFor="star4-comment" title="4 estrellas">
                                    &#9733;
                                </label>
                                <input type="radio" id="star3-comment" name="rating" value="3" />
                                <label htmlFor="star3-comment" title="3 estrellas">
                                    &#9733;
                                </label>
                                <input type="radio" id="star2-comment" name="rating" value="2" />
                                <label htmlFor="star2-comment" title="2 estrellas">
                                    &#9733;
                                </label>
                                <input type="radio" id="star1-comment" name="rating" value="1" />
                                <label htmlFor="star1-comment" title="1 estrella">
                                    &#9733;
                                </label>
                            </div>
                            <textarea rows="5" placeholder="Escribe aquí tu comentario..."></textarea>
                            <a href="/pages/error404.html">
                                <button>Enviar Comentario</button>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    )
}