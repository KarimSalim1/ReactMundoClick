import React from 'react'
import '../styles/CartDetails.css'
import gamerChear from '../assets/images/gamerChear.jpg'
import placa from '../assets/images/placa.jpg'
import placa2 from '../assets/images/placa2.jpg'

import { Link } from 'react-router-dom';
// Asegúrate de importar tus imágenes aquí:
// import gamerChear from '...'; 
// import placa from '...';
// import placa2 from '...';

export const CartDetails = () => {
    // Definimos los productos para evitar repetir código en la tabla y la vista móvil
    const products = [
        {
            img: gamerChear,
            alt: "Silla Gamer",
            name: "Silla Gamer Hygenx",
            price: "$387.846",
            quantity: 1,
            subtotal: "$387.846",
            delay: "",
        },
        {
            img: placa,
            alt: "Mother ASUS",
            name: "Mother ASUS ROG STRIX",
            price: "$570.400",
            quantity: 1,
            subtotal: "$570.400",
            delay: " delay-1",
        },
        {
            img: placa2,
            alt: "RTX 4070",
            name: "Placa de Video RTX 4070",
            price: "$899.000",
            quantity: 1,
            subtotal: "$899.000",
            delay: " delay-2",
        },
    ];

    const total = "$1.857.246";

    const renderProductsTable = () => (
        <table className="tabla-productos">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p, index) => (
                    // Asegúrate de usar un ID único real como 'key' en producción, no el índice
                    <tr key={index} className={`fade-in${p.delay}`}>
                        <td><img src={p.img} alt={p.alt} /></td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>{p.subtotal}</td>
                        {/* CORRECCIÓN: Usamos <span> en lugar de <a> para el ícono de eliminar */}
                        <td><span className="icono">🗑</span></td> 
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4" className="total-label">💳 Total a Pagar</td>
                    <td colSpan="2" className="total-precio">{total}</td>
                </tr>
            </tfoot>
        </table>
    );

    const renderProductsMobile = () => (
        <div className="carrito-movil">
            {products.map((p, index) => (
                <div key={index} className={`producto-movil fade-in${p.delay}`}>
                    <div className="producto-header">
                        <img src={p.img} alt={p.alt} />
                        <h4 className="producto-nombre">{p.name}</h4>
                        {/* CORRECCIÓN: Usamos <span> en lugar de <a> para el ícono de eliminar */}
                        <span className="icono-movil">🗑</span>
                    </div>
                    <div className="producto-detalle">
                        <p><strong>Precio:</strong> <span>{p.price}</span></p>
                        <p><strong>Cantidad:</strong> <span>{p.quantity}</span></p>
                        <p><strong>Subtotal:</strong> <span className="subtotal-movil">{p.subtotal}</span></p>
                    </div>
                </div>
            ))}
            <div className="total-movil">
                <span className="total-label">💳 Total a Pagar</span>
                <span className="total-precio">{total}</span>
            </div>
        </div>
    );

    return (
        <>
            <main className="contenedorcarrito">
                <h1 className="titulo-principal">🛒 Carrito de Compras</h1>
                <section className="carrito">
                    
                    {renderProductsTable()}
                    {renderProductsMobile()}

                    <div className="card-envio">
                        <h3>🚚 Envío</h3>
                        <div className="envio-input">
                            <input type="text" placeholder="9410" />
                            <span className="icon-truck">📦</span>
                        </div>
                        <p className="sub-text">Ingresá tu código postal para calcular el costo de envío</p>

                        <div className="opciones-envio">
                            <div className="opcion activa">» OCA <br /> Domicilio <br /> <span>$52.143</span></div>
                            <div className="opcion activa">» OCA <br /> Sucursal <br /> <span>$55.294</span></div>
                            <div className="opcion deshabilitada">Correo Arg <br /> Domicilio <br /> <span>—</span></div>
                            <div className="opcion deshabilitada">Pickit <br /> Sucursal <br /> <span>—</span></div>
                        </div>

                        <p className="agregar-envio">
                            Agregar otro método desde <a href="#">aquí</a>.
                        </p>
                    </div>

                    <div className="botones-container">
                        {/* ✅ CORRECCIÓN CLAVE: El Link recibe las clases btn y seguir/comprar */}
                        
                        {/* Botón Seguir Comprando */}
                        <Link to="/" className="btn seguir">
                            « Seguir comprando
                        </Link>
                        
                        {/* Botón Comprar Ahora */}
                        <Link to="*" className="btn comprar">
                            Comprar ahora →
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}