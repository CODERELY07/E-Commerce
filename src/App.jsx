import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Navbar from "./components/NavBar";


function App() {
 return (
  <BrowserRouter>
     
      <Navbar/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
 );
}

export default App
