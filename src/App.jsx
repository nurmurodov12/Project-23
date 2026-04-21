import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Asosiy from "./components/mainContainer/asosiy";
import Products from "./components/products/products";
import Basket from "./components/basket/basket";
import About from "./components/about/about";
import Product from "./components/products/product";
import { useState } from "react";
import Contact from "./components/contact/contact";

function App() {
  const [basket, setBasket] = useState([]);

  function addToCart(product) {
    setBasket([...basket, product]);
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Asosiy addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart}/>} />
          <Route path="/basket" element={<Basket arra={basket} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
