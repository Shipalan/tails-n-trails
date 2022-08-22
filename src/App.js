import "./App.css";
import Shop from "./components/pages/shop/Shop";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Cart from "./components/pages/cart/Cart";
import Home from "./components/pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <Layout>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;

