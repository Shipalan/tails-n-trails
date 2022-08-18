import React from "react";
import './wesleyPack.css'
import wesleyPack from "../../images/Dogs/wesleyPack.png";
import collarWesleyPack from "../../images/Products/collar-wesleyPack.png";

const WesleyPack = () => {
  return (
    <section className="wesleyPack">
      <img className="imgs" src={wesleyPack} alt="dog" />
      <div className="sampleCollar">
        <img className="imgs" src={collarWesleyPack} alt="collar" />
        <p>Sample collars</p>
      </div>
    </section>
  );
};

export default WesleyPack;
