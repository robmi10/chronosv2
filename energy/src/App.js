import './App.css';
import Home from './pages';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import { ContextProvider } from './components/Context/Context';
import { Product } from './components/Shop/Products/product';
import Cart from './components/Cart/Cart';
import Data from './components/Data';
import Checkout from './components/Checkout/CheckoutForm/Checkout';

function App() {
  return (
    <ContextProvider>
        <Router>
      
            <Data/>
            <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cart" element={<Cart />}/>
            <Route exact path="/checkout" element={<Checkout />}/>
            </Routes>
         
        </Router>

    </ContextProvider>
  );
}

export default App;
