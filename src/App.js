import "./App.css";
import Shop from "./components/pages/shop/Shop";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Cart from "./components/pages/cart/Cart";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";

export const cartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  // console.log(cart);

  // function storage(cart) {
  //   if (cart.length > 0) {
  //     let db = cart.map((e) => {
  //       let data = {
  //         img: e.product_img,
  //         price: e.product_price,
  //         desc: e.product_description,
  //       };
  //       return data;
  //     });
  //     db = [...db];
  //     console.log(db)
  //     sessionStorage.setItem("cart", JSON.stringify(db));
  //   } else {
  //     return null;
  //   }
  // }

  // useEffect(() => {
  //   storage(cart);
  // }, [cart]);

  // useEffect(() => {
  //   let data = sessionStorage.getItem("cart");
  //   // console.log(data);

  //   const item = JSON.parse(data);
  //   console.log(item);

  //    setCart(item)
  // }, []);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Layout>
    </cartContext.Provider>
  );
}

export default App;
