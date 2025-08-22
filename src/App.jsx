import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Layout/NavBar/NavBar';
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Layout/Footer/Footer';
import CartPage from './components/Pages/CartPage/CartPage';
import Checkout from './components/Pages/Checkout/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer bienvenida="¡Bienvenido a FullMordisco!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2 style={{textAlign: 'center', margin: '4rem 0'}}>404 - Página no encontrada</h2>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
