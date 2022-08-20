import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Shop from "./components/pages/shop/Shop";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Cart from "./components/pages/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'https://fonts.googleapis.com/css?family=Roboto+Mono:regular'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
