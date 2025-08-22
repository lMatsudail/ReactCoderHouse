import { useState } from 'react';
import { useCart } from '../../../context/useCart';
import { createOrder } from '../../../services/firestore';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart, clear, getTotal, getTotalQuantity } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Ingresa tu nombre';
    if (!formData.phone.trim()) newErrors.phone = 'Ingresa tu teléfono';
    if (!formData.email.trim()) {
      newErrors.email = 'Ingresa tu email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.address.trim()) newErrors.address = 'Ingresa tu dirección';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando escribes
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const order = {
        buyer: formData,
        items: cart.map(item => ({
          id: item.id,
          title: item.tittle,
          price: item.price,
          quantity: item.quantity
        })),
        total: getTotal(),
        totalQuantity: getTotalQuantity(),
        date: new Date()
      };

      const orderIdGenerated = await createOrder(order);
      setOrderId(orderIdGenerated);
      clear();
    } catch (error) {
      console.error('Error:', error);
      alert('Error al crear el pedido');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <h2>🎉 ¡Pedido confirmado!</h2>
          <div className="order-details">
            <p><strong>Número de pedido:</strong> {orderId}</p>
            <p>Guarda este número.</p>
            <p>Te llamaremos pronto para confirmar.</p>
          </div>
          <Link to="/" className="back-home-btn">
            Seguir comprando
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-cart">
          <h2>🛒 Tu carrito está vacío</h2>
          <p>Agrega productos antes de hacer el checkout</p>
          <Link to="/" className="continue-shopping-btn">
            Ir a comprar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar Compra</h2>
      
      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Datos de entrega</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
                placeholder="Ingresa tu nombre completo"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'error' : ''}
                placeholder="Ej: 3101234567"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                placeholder="ejemplo@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Dirección de entrega *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? 'error' : ''}
                placeholder="Ingresa tu dirección completa con referencias"
                rows="3"
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <button 
              type="submit" 
              className="submit-order-btn"
              disabled={loading}
            >
              {loading ? 'Procesando...' : `Realizar pedido - $${getTotal().toLocaleString()}`}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Resumen del pedido</h3>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <span className="item-name">{item.tittle}</span>
                <span className="item-quantity">x{item.quantity}</span>
                <span className="item-price">${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <div className="total-line">
              <span>Total de productos:</span>
              <span>{getTotalQuantity()}</span>
            </div>
            <div className="total-line final">
              <span>TOTAL A PAGAR:</span>
              <span>${getTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
