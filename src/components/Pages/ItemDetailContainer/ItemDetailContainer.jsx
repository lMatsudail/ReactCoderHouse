import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsmock } from '../../../ProductsMock';
import ItemDetail from '../../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsmock.find(p => p.id === itemId));
      }, 1000);
    }).then(data => setProduct(data));
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
