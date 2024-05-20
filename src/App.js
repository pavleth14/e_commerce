import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Navigation from './components/navigation';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">      
    <ShopContextProvider>
      <Router>
      <Navigation />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
