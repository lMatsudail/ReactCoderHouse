import { Link } from 'react-router-dom';
import { useCart } from '../../../context/useCart';
import CartItem from '../../Common/CartItem/CartItem';
import './CartPage.css';

const CartPage = () => {
  const { cart, clear, getTotal, getTotalQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="empty-cart">
          <h2>🛒 Tu carrito está vacío</h2>
          <p>¡Agrega algunos productos deliciosos de FullMordisco!</p>
          <Link to="/" className="continue-shopping-btn">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clear();
    }
  };

  return (
    <div className="cart-page-container">
      <div className="cart-header">
        <h2 className="cart-page-title">Carrito de compras</h2>
        <button 
          className="clear-cart-btn"
          onClick={handleClearCart}
        >
          🗑️ Vaciar carrito
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Resumen del pedido</h3>
            <div className="summary-line">
              <span>Productos ({getTotalQuantity()})</span>
              <span>${getTotal().toLocaleString()}</span>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <span>${getTotal().toLocaleString()}</span>
            </div>
            <Link to="/checkout" className="checkout-btn">
              Proceder al pago
            </Link>
            <Link to="/" className="continue-shopping-link">
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
