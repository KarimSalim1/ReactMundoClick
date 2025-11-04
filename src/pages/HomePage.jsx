import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../styles/HomePage.css';
import cap1 from "../assets/images/cap1.png";
import cap2 from "../assets/images/cap2.png";
import cap3 from "../assets/images/cap3.png";
import moda from "../assets/images/moda.png";
import tecnologia from "../assets/images/tecnologia.png";
import hogar from "../assets/images/hogar.png";
import producto1 from "../assets/images/producto1.png";
import producto2 from "../assets/images/iphone12-removebg-preview.png";
import producto3 from "../assets/images/producto3.png";
import producto4 from "../assets/images/producto4.png";

export const HomePage = () => {
  // 🔎 Estado del buscador
  const [busqueda, setBusqueda] = useState("");
  // 🔹 Estado para productos (ahora cargados desde localStorage)
  const [productos, setProductos] = useState([]);

  // Cargar productos desde localStorage al iniciar
  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    
    if (savedProducts) {
      // Si hay productos en localStorage, usarlos
      const productsFromStorage = JSON.parse(savedProducts);
      
      // Mapear los productos del localStorage al formato que necesita tu HomePage
      const formattedProducts = productsFromStorage.map(product => ({
        id: product.id,
        nombre: product.nombre,
        imagen: product.imagen,
        link: product.link || "/ProductDetails" // Valor por defecto si no tiene link
      }));
      
      setProductos(formattedProducts);
    } else {
      // Si no hay productos en localStorage, usar los productos por defecto
      const defaultProducts = [
        { id: 1, nombre: "Auriculares Gamer", imagen: producto1, link: "/ProductDetails2" },
        { id: 2, nombre: "Apple iPhone 14", imagen: producto2, link: "/ProductDetails" },
        { id: 3, nombre: "Teclado Inalámbrico", imagen: producto3, link: "/productDetails3" },
        { id: 4, nombre: "Micrófono Gamer", imagen: producto4, link: "/ProductDetails" },
      ];
      
      setProductos(defaultProducts);
      
      // Guardar los productos por defecto en localStorage para futuras visitas
      const productsForStorage = defaultProducts.map(product => ({
        id: product.id,
        nombre: product.nombre,
        imagen: product.imagen,
        link: product.link // ¡Agregar el link aquí también!
      }));
      
      localStorage.setItem('products', JSON.stringify(productsForStorage));
    }
  }, []);

  // 🔍 Filtrado dinámico
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <main className="bg-principal text-white" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100" tabIndex="0">
        {/* ---------- SLIDER ---------- */}
        <section id="slider" className="container py-3">
          <div id="carouselPromo" className="carousel slide custom-carousel carousel-fade rounded overflow-hidden shadow-lg" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselPromo" data-bs-slide-to="0" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselPromo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselPromo" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cap1} className="d-block w-100 img-animada" alt="Promo 1" />
              </div>
              <div className="carousel-item">
                <img src={cap2} className="d-block w-100 img-animada" alt="Promo 2" />
              </div>
              <div className="carousel-item">
                <img src={cap3} className="d-block w-100 img-animada" alt="Promo 3" />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselPromo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselPromo" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>

        {/* ---------- BUSCADOR ---------- */}
        <section className="buscador-section container text-center my-5">
          <h2 className="seccion-titulo">Buscá tu producto</h2>
          <input
            type="text"
            className="buscador-input form-control mx-auto mt-3"
            placeholder="Ej: iPhone, auriculares, teclado..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </section>

        {/* ---------- DESTACADOS ---------- */}
        <section id="destacados" className="container py-5">
          <h2 className="seccion-titulo text-center mb-5">Destacados de la semana</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((p) => (
                <div key={p.id} className="col">
                  <div className="tarjeta-producto card text-dark h-100 shadow-lg">
                    <img 
                      src={p.imagen} 
                      className="card-img-top" 
                      alt={p.nombre}
                      style={{ 
                        height: '200px', 
                        objectFit: 'cover',
                        backgroundColor: '#f8f9fa'
                      }}
                      onError={(e) => {
                        // Si la imagen no carga, mostrar un placeholder bonito
                        e.target.src = 'https://via.placeholder.com/300x200/6c757d/ffffff?text=Imagen+no+disponible';
                        e.target.alt = 'Imagen no disponible';
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{p.nombre}</h5>
                      <NavLink to={p.link} className="btn btn-outline-primary w-100">
                        Ver detalle
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No se encontraron productos</p>
            )}
          </div>
        </section>

        {/* ---------- CATEGORÍAS ---------- */}
        <section id="categorias" className="container py-5">
          <h2 className="seccion-titulo text-center mb-5">Categorías</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="tarjeta-categoria card text-dark h-100 shadow-sm">
                <img src={moda} className="card-img-top" alt="Moda" />
                <div className="card-body">
                  <h5 className="card-title">Moda</h5>
                  <p className="card-text">La mejor vestimenta para mujeres y para hombres.</p>
                  <NavLink to="/Fashion1" className="btn btn-outline-primary w-100">Explorar</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tarjeta-categoria card text-dark h-100 shadow-sm">
                <img src={tecnologia} className="card-img-top" alt="Tecnología" />
                <div className="card-body">
                  <h5 className="card-title">Tecnología</h5>
                  <p className="card-text">Accesorios, notebooks y más.</p>
                  <NavLink to="/technology1" className="btn btn-outline-primary w-100">Explorar</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tarjeta-categoria card text-dark h-100 shadow-sm">
                <img src={hogar} className="card-img-top" alt="Hogar" />
                <div className="card-body">
                  <h5 className="card-title">Hogar y muebles</h5>
                  <p className="card-text">Todo para tu casa en un solo lugar.</p>
                  <NavLink to="/error" className="btn btn-outline-primary w-100">Explorar</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PUBLICIDAD ---------- */}
        <section className="container d-none d-md-block">
          <div className="publicidad p-3 rounded text-center">
            <h3>🔥 SUPER SALE - HASTA 50% OFF 🔥</h3>
            <p>Promoción válida hasta fin de mes en productos seleccionados.</p>
          </div>
        </section>
      </main>
    </div>
  );
};