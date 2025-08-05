import { Link } from 'react-router-dom';

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
          <div className="categorias-productos">
            {items.map(product => (
              <div className="tarjeta-categoria" key={product.id}>
                <h3>{product.tittle}</h3>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                <Link to={`/item/${product.id}`}>Ver detalle</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
