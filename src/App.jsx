// TODO: THis will ned wishlist and search functionality
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import { AboutPage } from "./pages/About";
import SearchPage from "./pages/SearchPage";
function App() {
 return (
  <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
 );
}

export default App
