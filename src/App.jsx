import { react } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NewCollections from "./Components/NewCollections";
import ProductView from "./Components/ProductView";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TrendyShoes from "./Components/TrendyShoes";
import AboutUs from "./Components/AboutUs";
import { CartProvider } from "./Components/CartContext";
import ShoppingCart from "./Components/ShoppingCart";
import Checkout from "./Components/Checkout";
import ConfirmationPage from "./Components/ConfirmationPage";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-collections" element={<NewCollections />} />
            <Route path="/trendy-shoes" element={<TrendyShoes />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/product-list" element={<ProductList />} />

            <Route path="/product/:id" element={<ProductView />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<ConfirmationPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
