import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryGrid.css';

const categories = [
  {
    name: "Pizzas",
    description: "Deliciosas pizzas artesanales",
    image: "",
    count: 10
  },
  {
    name: "Hamburguesas", 
    description: "Hamburguesas caseras jugosas",
    image: "",
    count: 3
  },
  {
    name: "Perros",
    description: "Perros calientes gourmet",
    image: "",
    count: 2
  },
  {
    name: "Platos Especiales",
    description: "Especialidades de la casa", 
    image: "",
    count: 2
  },
  {
    name: "Arepas Rellenas",
    description: "Arepas con rellenos variados",
    image: "", 
    count: 3
  },
  {
    name: "Salchipapa",
    description: "La clásica salchipapa",
    image: "",
    count: 1
  },
  {
    name: "Adicionales",
    description: "Complementa tu pedido",
    image: "",
    count: 5
  }
];

const CategoryGrid = () => {
  return (
    <div className="category-grid-container">
      <h2 className="grid-title">Nuestros Productos</h2>
      <p className="grid-subtitle">¿Qué te gustaría comer hoy!?</p>
      <div className="category-grid">
        {categories.map(category => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
