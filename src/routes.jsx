import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Gifts from "./pages/Gifts";
import Contact from "./pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
