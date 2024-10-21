import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Product from "./components/pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/collections" element={<h1>Collections</h1>} />
        <Route path="/men" element={<h1>Men</h1>} />
        <Route path="/women" element={<h1>Women</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/account" element={<h1>Account</h1>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
