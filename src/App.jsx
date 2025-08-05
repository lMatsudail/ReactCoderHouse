import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Layout/NavBar/NavBar';
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Layout/Footer/footer';
import CartPage from './components/Pages/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer bienvenida="¡Bienvenido a FullMordisco - Tu hambre, nuestra especialidad!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<h2 style={{textAlign: 'center', margin: '4rem 0'}}>404 - Página no encontrada</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
