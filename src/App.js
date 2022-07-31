import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart'
import Home from './Components/Home'
import { useState,useEffect } from 'react';


function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} setCart={setCart} />
        <Routes>
          <Route index path='/' element={<Home cart={cart} setCart={setCart} />} />
          <Route path='Cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;