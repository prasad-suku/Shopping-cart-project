import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

export const cartContext = createContext();
const App = () => {
  const [cart, setcart] = useState([]);
  return (
    <cartContext.Provider value={{ cart, setcart }}>
      <BrowserRouter>
        <Header></Header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  );
};

export default App;
