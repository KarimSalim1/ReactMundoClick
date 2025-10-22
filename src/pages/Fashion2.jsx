import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Fashion2.css'
import camperaLOGOremovebgpreview from '../assets/images/ropa/camperaLOGO-removebg-preview.png';
import remeraLOGOremovebgpreview from '../assets/images/ropa/remeraLOGO-removebg-preview.png';
import jeansLOGOremovebgpreview from '../assets/images/ropa/jeansLOGO-removebg-preview.png';
import camperaITEM1 from '../assets/images/ropa/camperaITEM1.png';
import camperaITEM2removebgpreview from '../assets/images/ropa/camperaITEM2-removebg-preview.png';
import remeraNegra1removebgpreview from '../assets/images/ropa/remeraNegra1-removebg-preview.png';
import camisaRojaremovebgpreview from '../assets/images/ropa/camisaRoja-removebg-preview.png';
import mediasLOGOremovebgpreview from '../assets/images/ropa/mediasLOGO-removebg-preview.png';
import boxersLOGOremovebgpreview from '../assets/images/ropa/boxersLOGO-removebg-preview.png';
import trajedeBañoremovebgpreview from '../assets/images/ropa/trajedeBaño-removebg-preview.png';

export const Fashion2 = () => {
  return (
    <>
      {/* Sección título */}
      <section className="header_moda">
        <div className="titulo_moda">
          <h1>Moda</h1>
        </div>
      </section>

      {/* Slider */}
      <section className="slider">
        <div className="slide-container">
          <div className="slide">
            <img src={camperaLOGOremovebgpreview} alt="image1" />
          </div>
          <div className="slide">
            <img src={remeraLOGOremovebgpreview} alt="image2" />
          </div>
          <div className="slide">
            <img src={jeansLOGOremovebgpreview} alt="image3" />
          </div>
          <div className="slide">
            <img src={camperaITEM1} alt="image4" />
          </div>
          <div className="slide">
            <img src={camperaITEM2removebgpreview} alt="image5" />
          </div>
          <div className="slide">
            <img src={remeraNegra1removebgpreview} alt="image6" />
          </div>
          <div className="slide">
            <img src={camisaRojaremovebgpreview} alt="image7" />
          </div>
          <div className="slide">
            <img src={jeansLOGOremovebgpreview} alt="image8" />
          </div>

          {/* Repetimos imágenes para loop */}
          <div className="slide">
            <img src={camperaLOGOremovebgpreview} alt="image1" />
          </div>
          <div className="slide">
            <img src={remeraLOGOremovebgpreview} alt="image2" />
          </div>
          <div className="slide">
            <img src={jeansLOGOremovebgpreview} alt="image3" />
          </div>
          <div className="slide">
            <img src={camperaITEM1} alt="image4" />
          </div>
          <div className="slide">
            <img src={camperaITEM2removebgpreview} alt="image5" />
          </div>
          <div className="slide">
            <img src={remeraNegra1removebgpreview} alt="image6" />
          </div>
          <div className="slide">
            <img src={camisaRojaremovebgpreview} alt="image7" />
          </div>
          <div className="slide">
            <img src={jeansLOGOremovebgpreview} alt="image8" />
          </div>
        </div>
      </section>

      {/* Subtítulo */}
      <section className="subtitulo">
        <h2>Productos</h2>
      </section>

      {/* Productos */}
      <section className="productos">
        <div className="producto">
          {/* <Link to={}> */}
          <img src={camisaRojaremovebgpreview} alt="camisas" />
          <h3 className='producto-titulo'>Camisas</h3>
          {/* </Link> */}
        </div>

        <div className="producto">
          {/* <Link to= {} > */}
          <img src={mediasLOGOremovebgpreview} alt="medias" />
          <h3 className='producto-titulo'>Medias</h3>
          {/* </Link> */}
        </div>

        <div className="producto">
          <img src={boxersLOGOremovebgpreview} alt="boxers" />
          <h3 className='producto-titulo'>Boxers</h3>
        </div>

        <div className="producto">
          <img src={trajedeBañoremovebgpreview} alt="trajes de baño" />
          <h3 className='producto-titulo'>Trajes de Baño</h3>
        </div>
      </section>

      {/* Paginación */}
      <nav className="paginacion">
        <button><Link to="/fashion1">« Anterior</Link></button>
        <button><Link to="/fashion2">1</Link></button>
        <button><Link to="/technology1">2</Link></button>
        <button><Link to="/technology2">Siguiente »</Link></button>
      </nav>
      
      {/* Botón categorías */}
      <section className="mov_categorias">
        <button><Link to="/technology1">IR A "TECNOLOGÍA"</Link></button>
      </section>
    </>
  )
}
