import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/AboutUsPage.css'
import avatarIvo from '../assets/images/avatarIvo.png'
import avatarKarim from '../assets/images/avatarKarim.png'
import avatarAgus from '../assets/images/avatarAgus.jpg'
import arrowIcon from '../assets/images/arrowIcon.png'
import toolIcon from '../assets/images/toolIcon.png'
import puzleIcon from '../assets/images/puzleIcon.png'

export const AboutUsPage = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true)
        }, 100)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <main className={`page-container ${isVisible ? 'fade-in' : ''}`}>
            <section className="acercaNosotros">
                <h1>Conoce a nuestro equipo</h1>
                <hr />
                <p className="descripcion">
                    Somos un equipo de estudiantes apasionados por la tecnología. <br />
                    Nos enorgullece trabajar juntos para construir productos que marquen la diferencia.
                </p>

                <section className="galeria">
                    <div className="galeria__miembro">
                        <img className="galeria__imagen" src={avatarIvo} alt="Ivo Rossi" />
                        <p>Ivo Rossi</p>
                        <p id="cargo">Desarrollador Full Stack</p>
                    </div>
                    <div className="galeria__miembro">
                        <img className="galeria__imagen" src={avatarKarim} alt="Karim Salim" />
                        <p>Karim Salim</p>
                        <p id="cargo">Desarrollador Full Stack</p>
                    </div>
                    <div className="galeria__miembro">
                        <img className="galeria__imagen" src={avatarAgus} alt="Agustina García" />
                        <p>Agustina García</p>
                        <p id="cargo">Desarrolladora Full Stack</p>
                    </div>
                </section>
            </section>

            <h2 className="titulo">¿Qué ofrecemos?</h2>

            <section className="equipo">
                <div className="bloques">
                    <div className="bloque">
                        <img className="bloque__imagen" src={puzleIcon} alt="soluciones" />
                        <h3 className="bloque__titulo">Soluciones Personalizadas</h3>
                        <p>Desarrollamos software a medida para resolver problemas específicos de tu negocio.</p>
                    </div>

                    <div className="bloque">
                        <img className="bloque__imagen" src={toolIcon} alt="soporte" />
                        <h3 className="bloque__titulo">Soporte Técnico Especializado</h3>
                        <p>
                            Nuestro equipo de soporte técnico está aquí para ayudarte en cada paso, ofreciendo asistencia rápida y eficaz.
                        </p>
                    </div>

                    <div className="bloque">
                        <img className="bloque__imagen" src={arrowIcon} alt="exp" />
                        <h3 className="bloque__titulo">Experiencia y Trayectoria</h3>
                        <p>Contamos con 2 años de experiencia desarrollando software de calidad para empresas como la tuya.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutUsPage
