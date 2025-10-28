import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { ErrorPage } from './pages/ErrorPage'
import { HomePage } from './pages/HomePage'
import { Contact } from './pages/Contact'
import { Fashion1 } from './pages/Fashion1.jsx'
import { Fashion2 } from './pages/Fashion2.jsx'
import { Technology1 } from './pages/Technology1.jsx'
import { Technology2 } from './pages/Technology2.jsx'
import { AboutUsPage } from './pages/AboutUsPage.jsx'
import { CartDetails } from './pages/CartDetails.jsx'
import { ProductDetails } from './pages/ProductDetails.jsx'
import { ProductDetails2 } from './pages/ProductDetails2.jsx'
import { ProductDetails3 }  from './pages/ProductDetails3.jsx'
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
        <Route path='/fashion1' element={<Fashion1 />} />
        <Route path='/fashion2' element={<Fashion2 />} />
        <Route path='/technology1' element={<Technology1 />} />
        <Route path='/technology2' element={<Technology2 />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/cartDetails" element={<CartDetails/>} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ProductDetails2" element={<ProductDetails2 />} />
        <Route path='/productDetails3' element={<ProductDetails3 />} />
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
