import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { useCart } from '../../../context/useCart'

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/cart" className="widget-carrito">
      <FaShoppingCart className="icono-carrito"/>
      {totalQuantity > 0 && <span className="contador-carrito">{totalQuantity}</span>}
    </Link>
  )
}

export default CartWidget
