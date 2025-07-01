import './Footer.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="contenedor-footer">
        <div className="seccion-footer">
          <h3>InKnovation</h3>
          <p>Especialistas en sublimación profesional. Transformamos tus ideas en productos únicos de alta calidad.</p>
        </div>
        <div className="seccion-footer">
          <h4>Contacto</h4>
          <div className="info-contacto">
            <p><FaPhone /> +57 310 886 30 20</p>
            <p><FaEnvelope /> Inknnovation@hotmail.com</p>
            <p><FaMapMarkerAlt /> Bogota-Colombia</p>
          </div>
        </div>
        <div className="seccion-footer">
          <h4>Enlaces</h4>
          <ul className="enlaces-footer">
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
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
        <p>&copy; 2025 InKnovation. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer