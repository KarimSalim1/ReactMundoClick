import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Technology2.css';
import auriculares from '../assets/images/Auricularesfb-removebg-preview.png';
import computadoras from '../assets/images/compufb-removebg-preview.png';
import teclados from '../assets/images/Teclado1fb-removebg-preview.png';
import iphoneAzul from '../assets/images/iphoneAZUL-removebg-preview.png';
import iphone12 from '../assets/images/Iphone12-removebg-preview.png';
import s24ultra from '../assets/images/s24Ultra-removebg-preview.png';
import aurijJBL from '../assets/images/auriJBL.png';
import aurijJBLRojo from '../assets/images/aurisJBL_ROJO-removebg-preview.png';
import auriSONY from '../assets/images/aurisSONY-removebg-preview.png';
import televisores from '../assets/images/TVfb-removebg-preview.png';
import heladeras from '../assets/images/heladerafb-removebg-preview.png';
import cafeteras from '../assets/images/cafeterafb-removebg-preview.png';


export const Tecnologia2 = () => {
  return (
    <>
      {/* Sección título */}
      <section className="header_tec">
        <div className="titulo_tec">
          <h1 className="titulo_h1">Tecnologia</h1>
        </div>
      </section>

      {/* Slider */}
      <section className="slider">
        <div className="slide-container">
          <div className="slide">
            <img src={auriculares} alt="image1" />
          </div>
          <div className="slide">
            <img src={auriSONY} alt="image2" />
          </div>
          <div className="slide">
            <img src={s24ultra} alt="image3" />
          </div>
          <div className="slide">
            <img src={computadoras} alt="image4" />
          </div>
          <div className="slide">
            <img src={teclados} alt="image5" />
          </div>
          <div className="slide">
            <img src={heladeras} alt="image6" />
          </div>
          <div className="slide">
            <img src={iphoneAzul} alt="image7" />
          </div>
          <div className="slide">
            <img src={aurijJBLRojo} alt="image8" />
          </div>

          {/* Repetimos imágenes para loop */}
          <div className="slide">
            <img src={iphone12} alt="image1" />
          </div>
          <div className="slide">
            <img src={aurijJBL} alt="image2" />
          </div>
          <div className="slide">
            <img src={s24ultra} alt="image3" />
          </div>
          <div className="slide">
            <img src={cafeteras} alt="image4" />
          </div>
          <div className="slide">
            <img src={televisores} alt="image5" />
          </div>
          <div className="slide">
            <img src={teclados} alt="image6" />
          </div>
          <div className="slide">
            <img src={auriSONY} alt="image7" />
          </div>
          <div className="slide">
            <img src={computadoras} alt="image8" />
          </div>
        </div>
      </section>

      {/* Subtítulo */}
      <section className="subtitulo">
        <h2 className="subtitulo_h2">Productos</h2>
      </section>

      {/* Productos */}
      <section className="productos">
        <div className="producto">
          {/* <Link to={}> */}
          <img src={cafeteras} alt="Cafeteras" />
          <h3 className='producto-titulo'>Cafeteras</h3>
          {/* </Link> */}
        </div>

        <div className="producto">
          {/* <Link to= {} > */}
          <img src={heladeras} alt="Heladeras" />
          <h3 className='producto-titulo'>Heladeras</h3>
          {/* </Link> */}
        </div>

        <div className="producto">
          <img src={televisores} alt="Televisores" />
          <h3 className='producto-titulo'>Televisores</h3>
        </div>

        <div className="producto">
          <img src={teclados} alt="teclados" />
          <h3 className='producto-titulo'>Teclados</h3>
        </div>
      </section>

      {/* Paginación */}
      <nav className="paginacion">
        <button><Link to="/technology1">« Anterior</Link></button>
        <button><Link to="/technology1">1</Link></button>
        <button><Link to="/technology2">2</Link></button>
        <button><Link to="/technology2">Siguiente »</Link></button>
      </nav>

      {/* Botón categorías */}
      <section className="mov_categorias">
        <button><Link to="/fashion1">IR A "MODA"</Link></button>
      </section>
    </>
  )
}
