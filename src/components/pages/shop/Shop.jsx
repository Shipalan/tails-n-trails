import React, { useEffect, useState } from "react";
import "./Shop.css";
const pic = "../../../images/Products"
const axios = require("axios");

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("http://localhost:4000/api/allProducts")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log("ID-10-t error");
        console.log(err);
      });
    };
    
    useEffect(() => {
      getProducts();
      console.log(products)
  }, []);
 

  return (
    <div>
      {products.length > 0 &&
      products.map((p, i) => {
        return (
          <div key={i}>
            <img src={`${pic}/${p.product_img}`} alt="Product" />
            <p>{p.product_price}</p>
            <p>{p.product_description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
