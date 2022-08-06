
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Login from './buttons/Login';
import Register from './buttons/Register';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
