import { cartContext } from "../../../App";
import "./Cart.css";
import React, { useContext } from "react";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  // console.log(cart)
  const HandleClick = (item) => {
    let newCart = [...cart];
    newCart.splice(newCart.indexOf(item), 1);
    setCart(newCart);
  };

  return (
    <div>
      <h4 className="cartTitle">Items in your cart</h4>
      <section className="cartContainer">
        {cart.length > 0 &&
          cart.map((p, i) => {
            return (
              <div className="productCardCart" key={i}>
                <div className="imgContainer">
                  <img
                    src={p.product_img}
                    alt="Product"
                    className="productImg mobileProductImg"
                  />
                </div>
                <article className="productInfo">
                  <p className="productPrice productPriceCart">{`$${p.product_price}`}</p>
                  <p className="desc desc-cart">{p.product_description}</p>
                  <button
                    onClick={() => HandleClick(p)}
                    className="removeFromCart"
                  >
                    X
                  </button>
                </article>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Cart;
