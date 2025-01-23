import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Male from "./pages/male";
import Female from "./pages/female";
import Sports from "./pages/sports";
import Release from "./pages/release";
import Childrens from "./pages/childrens";
import Offers from "./pages/offers";
import Footer from "./components/Footer";
import News from "./components/news";
import Product from "./pages/product";

const App = () => {
  return (
    <Router>
      <News />
      <Header />
      <Routes>
        <Route path="/release" element={<Release />} />
        <Route path="/home" element={<Home />} />
        <Route path="/male" element={<Male />} />
        <Route path="/female" element={<Female />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/childrens" element={<Childrens />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/product-details" element={<Product />} />
      </Routes>
      <div></div>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
