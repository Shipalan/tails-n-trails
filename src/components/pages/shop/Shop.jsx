import React, { useEffect, useState } from "react";
import "./Shop.css";
const axios = require("axios");

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("http://localhost:4000/api/allProducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error here");
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
    console.log(products)
  }, []);
  return <div>
    {products.map((e,i) => <p key={i}>{JSON.stringify(e)}</p>)}
  </div>;
};

export default Shop;
