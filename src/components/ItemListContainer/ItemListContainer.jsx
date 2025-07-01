import './ItemListContainer.css'

const ItemListContainer = ({ bienvenida }) => {
  return (
    <div className="contenedor-lista-items">
      <div className="contenedor">
        <h2 className="mensaje-bienvenida">{bienvenida}</h2>
        <div className="seccion-hero">
          <p className="descripcion-hero">
            En InKnnovation transformamos tus ideas en productos únicos. 
            Especialistas en sublimación profesional con materiales de primera calidad 
            y acabados perfectos. ¡Tu creatividad, nuestra experiencia!
          </p>
          <div className="categorias-productos">
            <div className="tarjeta-categoria">
              <h3>👕 Camisetas</h3>
              <p>Sublimación en algodón y poliéster de alta calidad</p>
            </div>
            <div className="tarjeta-categoria">
              <h3>☕ Vasos & Tazas</h3>
              <p>Cerámica y vidrio especial para sublimación</p>
            </div>
            <div className="tarjeta-categoria">
              <h3>🖱️ Pad Mouse</h3>
              <p>Base antideslizante con superficie lisa</p>
            </div>
            <div className="tarjeta-categoria">
              <h3>🌡️ Termos</h3>
              <p>Acero inoxidable con aislamiento térmico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
