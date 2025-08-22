import { Link } from 'react-router-dom';
import './ItemList.css';

const groupByCategory = (items) => {
  return items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});
};

const ItemList = ({ products }) => {
  const grouped = groupByCategory(products);
  return (
    <div>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{marginBottom: '2.5rem'}}>
          <h2 style={{color: '#d7263d', marginBottom: '1.5rem', textAlign: 'left'}}>{category}</h2>
          <div className="productos-grid">
            {items.map(product => (
              <Link to={`/item/${product.id}`} key={product.id} className="producto-card">
                <div className={`producto-imagen ${!product.imgUrl || !product.imgUrl.trim() ? 'empty' : ''}`}>
                  {product.imgUrl && product.imgUrl.trim() && <img src={product.imgUrl} alt={product.tittle} />}
                </div>
                <div className="producto-info">
                  <h3>{product.tittle}</h3>
                  <p className="producto-description">{product.description}</p>
                  <p className="producto-precio">${product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
