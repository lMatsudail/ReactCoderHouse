import { useParams } from 'react-router-dom';
import { useProduct } from '../../../hooks/useFirestore';
import ItemDetail from '../../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { product, loading, error } = useProduct(itemId);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h3>Cargando producto...</h3>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h3>❌ Error al cargar el producto</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h3>📦 Producto no encontrado</h3>
        <p>El producto que buscas no existe.</p>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
