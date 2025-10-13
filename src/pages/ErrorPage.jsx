import "../styles/ErrorPage.css"
import error404 from "../assets/images/404.jpg";


export const ErrorPage = () => {

  return (

    <main class="contenido-404">
        <img src= {error404} alt="Página no encontrada" className="error-img"/>
    </main>
  )
}
