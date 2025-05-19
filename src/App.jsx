import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import Jewellery from "./pages/Jewellery";
import Products from "./components/Products";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;