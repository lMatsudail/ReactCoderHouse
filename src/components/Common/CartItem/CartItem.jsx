import './CartItem.css';
import { useCart } from '../../../context/useCart';

const CartItem = ({ product }) => {
  const { removeItem } = useCart();

  const handleRemove = () => {
    removeItem(product.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.imgUrl} alt={product.tittle} />
      </div>
      
      <div className="cart-item-info">
        <h3 className="cart-item-title">{product.tittle}</h3>
        <p className="cart-item-description">{product.description}</p>
        <div className="cart-item-details">
          <span className="cart-item-price">Precio: ${product.price.toLocaleString()}</span>
          <span className="cart-item-quantity">Cantidad: {product.quantity}</span>
          <span className="cart-item-subtotal">
            Subtotal: ${(product.price * product.quantity).toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="cart-item-actions">
        <button 
          className="remove-button"
          onClick={handleRemove}
          title="Eliminar producto"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
