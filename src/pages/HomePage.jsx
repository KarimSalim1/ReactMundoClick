import '../styles/HomePage.css' 
import cap1 from "../assets/images/cap1.png";
import cap2 from "../assets/images/cap2.png";
import cap3 from "../assets/images/cap3.png";
import moda from "../assets/images/moda.png";
import tecnologia from "../assets/images/tecnologia.png";
import hogar from "../assets/images/hogar.png";
import producto1 from "../assets/images/producto1.png";
import producto2 from "../assets/images/producto2.png";
import producto3 from "../assets/images/producto3.png";
import producto4 from "../assets/images/producto4.png";
import { NavLink, Link } from 'react-router-dom';


export const HomePage = () => (
  <div>
    <main className="bg-principal text-white" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="100" tabindex="0">
      <section id="slider" className="container py-3">
        <div id="carouselPromo" className="carousel slide custom-carousel carousel-fade rounded overflow-hidden shadow-lg" data-bs-ride="carousel">


          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselPromo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselPromo" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselPromo" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselPromo" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>




      <section id="categorias" className="container py-5">
        <h2 className="seccion-titulo text-center mb-5">Categorías</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="tarjeta-categoria card text-dark h-100 shadow-sm">
              <img src={moda} className="card-img-top" alt="Moda" />
              <div className="card-body">
                <h5 className="card-title">Moda</h5>
                <p className="card-text">La mejor vestimenta para mujeres y para hombres.</p>
                
                <NavLink to= "/moda1" className="btn btn-outline-primary w-100">Explorar</NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tarjeta-categoria card text-dark h-100 shadow-sm">
              <img src={tecnologia} className="card-img-top" alt="Tecnología" />
              <div className="card-body">
                <h5 className="card-title">Tecnología</h5>
                <p className="card-text">Accesorios, notebooks y más.</p>
                <NavLink to= "/tecnologia1" className="btn btn-outline-primary w-100">Explorar</NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tarjeta-categoria card text-dark h-100 shadow-sm">
              <img src={hogar} className="card-img-top" alt="Hogar" />
              <div className="card-body">
                <h5 className="card-title">Hogar y muebles</h5>
                <p className="card-text">Todo para tu casa en un solo lugar.</p>
                <NavLink to= "/error" className="btn btn-outline-primary w-100">Explorar</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="destacados" className="container py-5">
        <h2 className="seccion-titulo text-center mb-5">Destacados de la semana</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="tarjeta-producto card text-dark h-100 shadow-lg">
              <img src={producto1} className="card-img-top" alt="Producto 1" />
              <div className="card-body text-center">
                <h5 className="card-title">Auriculares Gamer</h5>
                {/* aca iría el navlink con el detalle de producto1 */}
                <a href="pages/detalleproducto2.html" className="btn btn-outline-light mt-2 w-100">Ver detalle</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="tarjeta-producto card text-dark h-100 shadow-lg">
              <img src={producto2} className="card-img-top" alt="Producto 2" />
              <div className="card-body text-center">
                <h5 className="card-title">Apple iPhone 14</h5>
                {/* aca iría el navlink con el detalle de producto */}
                <a href="pages/detalleproducto.html" className="btn btn-outline-light mt-2 w-100">Ver detalle</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="tarjeta-producto card text-dark h-100 shadow-lg">
              <img src={producto3} className="card-img-top" alt="Producto 3" />
              <div className="card-body text-center">
                <h5 className="card-title">Teclado Inalámbrico</h5>
                <NavLink to= "/detalleproducto3" className="btn btn-outline-light mt-2 w-100">Ver detalle</NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="tarjeta-producto card text-dark h-100 shadow-lg">
              <img src={producto4} className="card-img-top" alt="Producto 4" />
              <div className="card-body text-center">
                <h5 className="card-title">Micrófono Gamer</h5>
                <NavLink to= "/*" className="btn btn-outline-light mt-2 w-100">Ver detalle</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container d-none d-md-block">
        <div className="publicidad p-3 rounded text-center">
          <h3>🔥 SUPER SALE - HASTA 50% OFF 🔥</h3>
          <p>Promoción válida hasta fin de mes en productos seleccionados.</p>
        </div>
      </section>

    </main>
  </div>
)

