import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { ErrorPage } from './pages/ErrorPage'
import { HomePage } from './pages/HomePage'
import { Contact } from './pages/Contact'
import { Moda1 } from './pages/Moda1'
import { Moda2 } from './pages/Moda2'
import { Tecnologia1 } from './pages/Tecnologia1'
import { Tecnologia2 } from './pages/Tecnologia2'
import { AboutUsPage } from './pages/AboutUsPage.jsx'
import { CartDetails } from './pages/CartDetails.jsx'
import { ProductDetails } from './pages/ProductDetails.jsx'
import { ProductDetails2 } from './pages/ProductDetails2.jsx'
import { DetalleProducto3 } from './pages/DetalleProducto3'
import { ChatMundo } from './pages/ChatMundo.jsx'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Navigate } from './components/Navigate'
import { Footer } from './components/Footer'
import botIcono from "./assets/images/bot.png";
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/moda1' element={<Moda1 />} />
        <Route path='/moda2' element={<Moda2 />} />
        <Route path='/tecnologia1' element={<Tecnologia1 />} />
        <Route path='/tecnologia2' element={<Tecnologia2 />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/cartDetails" element={<CartDetails/>} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ProductDetails2" element={<ProductDetails2 />} />
        <Route path='/detalleproducto3' element={<DetalleProducto3 />} />
        <Route path="/chat" element={<ChatMundo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Link to="/chat" className="boton-chat-ia">
        <img src={botIcono} alt="Chat IA MundoClick" />
      </Link>
      <Footer />
    </BrowserRouter>
  )
}

export default App
