import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name}`} className="category-card">
      <div className={`category-image ${!category.image ? 'empty' : ''}`}>
        {category.image && category.image.trim() && <img src={category.image} alt={category.name} />}
      </div>
      <div className="category-info">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <span className="category-count">{category.count} productos</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
