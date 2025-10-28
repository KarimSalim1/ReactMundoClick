import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Fashion1.css'
import camperaLOGOremovebgpreview from '../assets/images/ropa/camperaLOGO-removebg-preview.png';
import remeraLOGOremovebgpreview from '../assets/images/ropa/remeraLOGO-removebg-preview.png';
import jeansLOGOremovebgpreview from '../assets/images/ropa/jeansLOGO-removebg-preview.png';
import camperaITEM1 from '../assets/images/ropa/camperaITEM1.png';
import camperaITEM2removebgpreview from '../assets/images/ropa/camperaITEM2-removebg-preview.png';
import remeraNegra1removebgpreview from '../assets/images/ropa/remeraNegra1-removebg-preview.png';
import camisaRojaremovebgpreview from '../assets/images/ropa/camisaRoja-removebg-preview.png';
import lentesLOGOremovebgpreview from '../assets/images/ropa/lentesLOGO-removebg-preview.png';
import zapatosLOGOremovebgpreview from '../assets/images/ropa/zapatosLOGO-removebg-preview.png';
import zapatillasremovebgpreview from '../assets/images/ropa/zapatillas-removebg-preview.png';

export const Fashion1 = () => {
  return (
    <>
      {/* Sección título */}
      <section className="fashion-hero">
        <div className="fashion-hero__title-box">
          <h1>Moda</h1>
        </div>
      </section>

      {/* Slider */}
      <section className="image-slider">
        <div className="image-slider__track">
          <div className="image-slider__item">
            <img src={camperaLOGOremovebgpreview} alt="image1" />
          </div>
          <div className="image-slider__item">
            <img src={remeraLOGOremovebgpreview} alt="image2" />
          </div>
          <div className="image-slider__item">
            <img src={jeansLOGOremovebgpreview} alt="image3" />
          </div>
          <div className="image-slider__item">
            <img src={camperaITEM1} alt="image4" />
          </div>
          <div className="image-slider__item">
            <img src={camperaITEM2removebgpreview} alt="image5" />
          </div>
          <div className="image-slider__item">
            <img src={remeraNegra1removebgpreview} alt="image6" />
          </div>
          <div className="image-slider__item">
            <img src={camisaRojaremovebgpreview} alt="image7" />
          </div>
          <div className="image-slider__item">
            <img src={jeansLOGOremovebgpreview} alt="image8" />
          </div>

          {/* Repetimos imágenes para loop */}
          <div className="image-slider__item">
            <img src={camperaLOGOremovebgpreview} alt="image1" />
          </div>
          <div className="image-slider__item">
            <img src={remeraLOGOremovebgpreview} alt="image2" />
          </div>
          <div className="image-slider__item">
            <img src={jeansLOGOremovebgpreview} alt="image3" />
          </div>
          <div className="image-slider__item">
            <img src={camperaITEM1} alt="image4" />
          </div>
          <div className="image-slider__item">
            <img src={camperaITEM2removebgpreview} alt="image5" />
          </div>
          <div className="image-slider__item">
            <img src={remeraNegra1removebgpreview} alt="image6" />
          </div>
          <div className="image-slider__item">
            <img src={camisaRojaremovebgpreview} alt="image7" />
          </div>
          <div className="image-slider__item">
            <img src={jeansLOGOremovebgpreview} alt="image8" />
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
            <img src={remeraLOGOremovebgpreview} alt="remeras" />
            <h3 className='product-card__title'>Remeras</h3>
          {/* </Link> */}
        </div>

        <div className="product-card">
          {/* <Link to= {} > */}
            <img src={camperaLOGOremovebgpreview} alt="camperas" />
            <h3 className='product-card__title'>Camperas</h3>
          {/* </Link> */}
        </div>

        <div className="product-card">
          <img src={jeansLOGOremovebgpreview} alt="jeans" />
          <h3 className='product-card__title'>Jeans</h3>
        </div>

        <div className="product-card">
          <img src={lentesLOGOremovebgpreview} alt="lentes" />
          <h3 className='product-card__title'>Lentes</h3>
        </div>

        <div className="product-card">
          <img src={zapatosLOGOremovebgpreview} alt="zapatos" />
          <h3 className='product-card__title'>Zapatos</h3>
        </div>

        <div className="product-card">
          <img src={zapatillasremovebgpreview} alt="zapatillas" />
          <h3 className='product-card__title'>Zapatillas</h3>
        </div>
      </section>
      
      {/* Paginación */}
      <nav className="paginacion">
        <button><Link to="/fashion1">« Anterior</Link></button>
        <button><Link to="/fashion1">1</Link></button>
        <button><Link to="/fashion2">2</Link></button>
        <button><Link to="/fashion2">Siguiente »</Link></button>
      </nav>

      {/* Botón categorías */}
      <section className="mov_categorias">
        <button><Link to="/technology1">IR A "TECNOLOGÍA"</Link></button>
      </section>
    </>
  )
}
