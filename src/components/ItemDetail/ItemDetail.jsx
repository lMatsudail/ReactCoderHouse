import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/useCart';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  return (
    <div className="detalle-producto">
      <div className={`detalle-imagen ${!product.imgUrl || !product.imgUrl.trim() ? 'empty' : ''}`}>
        {product.imgUrl && product.imgUrl.trim() && <img src={product.imgUrl} alt={product.tittle} />}
      </div>
      
      <div className="detalle-info">
        <h2>{product.tittle}</h2>
        <p className="descripcion">{product.description}</p>
        <p className="precio">Precio: ${product.price.toLocaleString()}</p>
        <p className="stock">Stock disponible: {product.stock}</p>
        
        {quantityAdded > 0 ? (
          <div className="added-to-cart">
            <p>✅ {quantityAdded} productos agregados al carrito</p>
            <Link to="/cart" className="go-to-cart">
              Ir al carrito
            </Link>
            <Link to="/" className="continue-shopping">
              Seguir comprando
            </Link>
          </div>
        ) : (
          <ItemCount 
            stock={product.stock} 
            initial={1} 
            onAdd={handleOnAdd} 
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
