const ItemDetail = ({ product }) => (
  <div className="detalle-producto">
    <h2>{product.tittle}</h2>
    <p>{product.description}</p>
    <p>Precio: ${product.price}</p>
    <p>Stock: {product.stock}</p>
    {/* Aquí puedes agregar el componente ItemCount para el carrito */}
  </div>
);

export default ItemDetail;
