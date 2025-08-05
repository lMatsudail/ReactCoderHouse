import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsmock } from '../../../ProductsMock';
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = ({ bienvenida }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(productsmock.filter(p => p.category === categoryId));
        } else {
          resolve(productsmock);
        }
      }, 1000);
    }).then(data => setProducts(data));
  }, [categoryId]);

  return (
    <div className="contenedor-lista-items">
      <div className="contenedor">
        <h2 className="mensaje-bienvenida">{bienvenida ? bienvenida : (categoryId ? `Categoría: ${categoryId}` : 'Catálogo de productos')}</h2>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
