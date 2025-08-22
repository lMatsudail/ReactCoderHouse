import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0 && quantity <= stock) {
      onAdd(quantity);
    }
  };

  if (stock === 0) {
    return (
      <div className="item-count">
        <p className="sin-stock">Sin stock disponible</p>
      </div>
    );
  }

  return (
    <div className="item-count">
      <div className="count-controls">
        <button 
          className="count-button" 
          onClick={decrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="count-quantity">{quantity}</span>
        <button 
          className="count-button" 
          onClick={increment}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="add-to-cart-button" 
        onClick={handleAdd}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
      <p className="stock-info">Stock disponible: {stock}</p>
    </div>
  );
};

export default ItemCount;
