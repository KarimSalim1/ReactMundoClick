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


export const Technology2 = () => {
  return (
    <>
      {/* Sección título */}
      <section className="fashion-hero">
        <div className="fashion-hero__title-box"> 
          <h1>Tecnologia</h1>
        </div>
      </section>

      {/* Slider */}
      <section className="image-slider"> 
        <div className="image-slider__track">
          <div className="image-slider__item">
            <img src={auriculares} alt="image1" />
          </div>
          <div className="image-slider__item">
            <img src={auriSONY} alt="image2" />
          </div>
          <div className="image-slider__item">
            <img src={s24ultra} alt="image3" />
          </div>
          <div className="image-slider__item">
            <img src={computadoras} alt="image4" />
          </div>
          <div className="image-slider__item">
            <img src={teclados} alt="image5" />
          </div>
          <div className="image-slider__item">
            <img src={heladeras} alt="image6" />
          </div>
          <div className="image-slider__item">
            <img src={iphoneAzul} alt="image7" />
          </div>
          <div className="image-slider__item">
            <img src={aurijJBLRojo} alt="image8" />
          </div>

          {/* Repetimos imágenes para loop */}
          <div className="image-slider__item">
            <img src={iphone12} alt="image1" />
          </div>
          <div className="image-slider__item">
            <img src={aurijJBL} alt="image2" />
          </div>
          <div className="image-slider__item">
            <img src={s24ultra} alt="image3" />
          </div>
          <div className="image-slider__item">
            <img src={cafeteras} alt="image4" />
          </div>
          <div className="image-slider__item">
            <img src={televisores} alt="image5" />
          </div>
          <div className="image-slider__item">
            <img src={teclados} alt="image6" />
          </div>
          <div className="image-slider__item">
            <img src={auriSONY} alt="image7" />
          </div>
          <div className="image-slider__item">
            <img src={computadoras} alt="image8" />
          </div>
        </div>
      </section>

      {/* Subtítulo */}
      <section className="section-divider"> 
        <h2>Productos</h2>
      </section>

      {/* Productos */}
      <section className="product-grid">
        <div className="product-card">
          {/* <Link to={}> */}
          <img src={cafeteras} alt="Cafeteras" />
          <h3 className='product-card__title'>Cafeteras</h3>
          {/* </Link> */}
        </div>

        <div className="product-card">
          {/* <Link to= {} > */}
          <img src={heladeras} alt="Heladeras" />
          <h3 className='product-card__title'>Heladeras</h3>
          {/* </Link> */}
        </div>

        <div className="product-card">
          <img src={televisores} alt="Televisores" />
          <h3 className='product-card__title'>Televisores</h3>
        </div>

        <div className="product-card">
          <img src={teclados} alt="teclados" />
          <h3 className='product-card__title'>Teclados</h3>
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