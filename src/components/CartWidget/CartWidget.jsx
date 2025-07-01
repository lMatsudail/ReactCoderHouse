import{ FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="widget-carrito">
      <FaShoppingCart className="icono-carrito"/>
      <span className="contador-carrito">3</span>
    </div>
  )
}

export default CartWidget
