import { cartContext } from "../../../App";
import React, { useEffect, useState, useContext } from "react";
import "./Shop.css";
const axios = require("axios");

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(cartContext);
  console.log(cart)
  const getProducts = () => {
    axios
      .get("/api/allProducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("ID-10-t error");
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const HandleClick = (item) => {
    let id = new Date().getTime();
    item.id = id;
    setCart([...cart, item]);
  };

  return (
    <div className="productCardContainer">
      {products.length > 0 &&
        products.map((p, i) => {
          return (
            <div className="productCard" key={i}>
              {/* {console.log(p)} */}
              <div className="imgContainer">
                <img
                  src={p.product_img}
                  alt="Product"
                  className="productImg mobileProductImg"
                />
              </div>
              <p className="productPrice">{`$${p.product_price}`}</p>
              <p className="desc">{p.product_description}</p>
              <button onClick={() => HandleClick(p)} className="addToCart">
                Add to Cart
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Shop;
