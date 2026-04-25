import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === product.size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.size === product.size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, cartId: `${product.id}-${product.size}` }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => item.cartId === cartId ? { ...item, quantity: newQuantity } : item));
  };

  const removeItem = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home onQuickAdd={(product) => addToCart({ ...product, size: product.sizes?.[0] || 8 })} />} />
              <Route path="/shop" element={<ProductListing onQuickAdd={(product) => addToCart({ ...product, size: product.sizes?.[0] || 8 })} />} />
              <Route path="/shop/:category" element={<ProductListing onQuickAdd={(product) => addToCart({ ...product, size: product.sizes?.[0] || 8 })} />} />
              <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
