import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import Footer from "./components/Footer";
function App() {
 return (
  <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
 );
}

export default App
