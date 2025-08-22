import './Footer.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="contenedor-footer">
        <div className="seccion-footer">
          <h3>FullMordisco</h3>
          <p>Comida rápida casera. Hamburguesas, pizzas y más.</p>
        </div>
        <div className="seccion-footer">
          <h4>Contacto</h4>
          <div className="info-contacto">
            <p><FaPhone /> +57 314 460 7465</p>
            <p><FaEnvelope /> fullmordisco@gmail.com</p>
            <p><FaMapMarkerAlt /> Bogotá, Colombia</p>
          </div>
        </div>
        <div className="seccion-footer">
          <h4>Enlaces</h4>
          <ul className="enlaces-footer">
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#preguntas">Preguntas Frecuentes</a></li>
            <li><a href="#politicas">Políticas</a></li>
          </ul>
        </div>
        <div className="seccion-footer">
          <h4>Síguenos</h4>
          <div className="redes-sociales">
            <a href="#" className="red-social"><FaInstagram /></a>
            <a href="#" className="red-social"><FaFacebook /></a>
            <a href="#" className="red-social"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 FullMordisco. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer