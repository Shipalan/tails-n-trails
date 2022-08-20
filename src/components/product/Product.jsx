import React from "react";
import "./product.css"
import shwayzeCollar from "../../images/Products/shwayzeCollar.jpg";

const Product = () => {
  return (
    <div className="productScroll">
      <img className="productImgs" src={shwayzeCollar} />
      <div className="productInfo">
        <h4>Shwayze Collar</h4>
        <p>$25</p>
      </div>
      <a href="shop">Shop Item</a>
    </div>
  );
};

export default Product;


{
  /* <div className="productScroll">
  <img className="productImgs" src={shwayzeCollar} />
  <div className="productInfo">
    <h4>Shwayze Collar</h4>
    <p>$25</p>
  </div>
  <a href="shop">Shop Item</a>
</div>
<div className="productScroll">
  <img className="productImgs" src={shwayzeCollar} />
  <div className="productInfo">
    <h4>Shwayze Collar</h4>
    <p>$25</p>
  </div>
  <a href="shop">Shop Item</a>
</div>
<div className="productScroll">
  <img className="productImgs" src={shwayzeCollar} />
  <div className="productInfo">
    <h4>Shwayze Collar</h4>
    <p>$25</p>
  </div>
  <a href="shop">Shop Item</a>
</div>
<div className="productScroll">
  <img className="productImgs" src={shwayzeCollar} />
  <div className="productInfo">
    <h4>Shwayze Collar</h4>
    <p>$25</p>
  </div>
  <a href="shop">Shop Item</a>
</div> */
}
