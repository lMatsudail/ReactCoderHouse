import { FaHome, FaPizzaSlice, FaDotCircle, FaPlus } from 'react-icons/fa';
import { GiHamburger, GiHotDog, GiFrenchFries } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import CartWidget from '../../Common/CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="barra-navegacion">
      <div className="contenedor-nav">
        <div className="logo-nav">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>FullMordisco</h1>
          </Link>
        </div>
        <ul className="menu-nav">
          <li>
            <Link to="/" className="enlace-nav"><FaHome /> Inicio</Link>
          </li>
          <li>
            <Link to="/category/Hamburguesas" className="enlace-nav"><GiHamburger /> Hamburguesas</Link>
          </li>
          <li>
            <Link to="/category/Pizzas" className="enlace-nav"><FaPizzaSlice /> Pizzas</Link>
          </li>
          <li>
            <Link to="/category/Perros" className="enlace-nav"><GiHotDog /> Perros</Link>
          </li>
          <li>
            <Link to="/category/Arepas Rellenas" className="enlace-nav"><FaDotCircle /> Arepas Rellenas</Link>
          </li>
          <li>
            <Link to="/category/Salchipapa" className="enlace-nav"><GiFrenchFries /> Salchipapa</Link>
          </li>
          <li>
            <Link to="/category/Adicionales" className="enlace-nav"><FaPlus /> Adicionales</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
