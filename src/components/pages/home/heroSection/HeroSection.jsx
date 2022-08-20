import React from "react";
import "./heroSection.css";
import dogPic from "../../../../images/Dogs/dog-collar.png";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <article className="sellingPoint">
        <h6>The collar everyone's talking about</h6>
      </article>
      <article className="h1Title">
        <h1>Custom collars & treats in St. George Utah</h1>
      </article>
      <div>
        <img src={dogPic} alt="Dog" className="heroPic" />
      </div>
    </section>
  );
};

export default HeroSection;
