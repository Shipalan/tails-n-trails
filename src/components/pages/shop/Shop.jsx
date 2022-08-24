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
        console.log(products)
        console.log(res.data)
      })
      .catch((err) => {
        console.log("ID-10-t error");
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log()

  return (
    <div>
      {products.length > 0 &&
      products.map((p, i) => {
        return (
          <div className="productCard" key={i}>
            <img src={p.product_img} alt="Product" className="productImg mobileProductImg"/>
            <p className="productPrice">{`$${p.product_price}`}</p>
            <p>{p.product_description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
