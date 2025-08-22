import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { useProductsByCategory } from '../../../hooks/useFirestore';
import ItemList from '../../ItemList/ItemList';
import CategoryGrid from '../../Common/CategoryGrid/CategoryGrid';

const ItemListContainer = ({ bienvenida }) => {
  const { categoryId } = useParams();
  const { products, loading, error } = useProductsByCategory(categoryId);

  // Si no hay categoryId, mostramos las categorías (home page)
  if (!categoryId) {
    return (
      <div className="contenedor-lista-items">
        <CategoryGrid />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="contenedor-lista-items">
        <div className="contenedor">
          <div className="loader">
            <h3>Cargando productos...</h3>
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="contenedor-lista-items">
        <div className="contenedor">
          <div className="error">
            <h3>❌ Error al cargar productos</h3>
            <p>{error}</p>
            <p>Revisa la conexión.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contenedor-lista-items">
      <div className="contenedor">
        <h2 className="mensaje-bienvenida">
          {bienvenida ? bienvenida : `Categoría: ${categoryId}`}
        </h2>
        
        {products.length === 0 && !loading ? (
          <div className="no-products">
            <h3>📦 No hay productos en esta categoría</h3>
            <p>Intenta más tarde.</p>
          </div>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
