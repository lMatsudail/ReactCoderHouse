import { FaHome, FaTshirt, FaCoffee, FaMousePointer, FaPhone } from 'react-icons/fa'
import { FaBottleWater } from "react-icons/fa6"
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="barra-navegacion">
      <div className="contenedor-nav">
        <div className="logo-nav">
          <h1>InKnnovation</h1>
          <span className="subtitulo-logo">Sublimación & DTF Personalizada</span>
        </div>
        <ul className="menu-nav">
          <li>
            <a href="#" className="enlace-nav"><FaHome /> Inicio</a>
          </li>
          <li>
            <a href="#" className="enlace-nav"><FaTshirt /> Camisetas</a>
          </li>
          <li>
            <a href="#" className="enlace-nav"><FaCoffee /> Vasos & Tazas</a>
          </li>
          <li>
            <a href="#" className="enlace-nav"><FaMousePointer /> Pad Mouse</a>
          </li>
          <li>
            <a href="#" className="enlace-nav"><FaBottleWater /> Termos</a>
          </li>
          <li>
            <a href="#" className="enlace-nav"><FaPhone /> Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
