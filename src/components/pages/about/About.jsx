import React from "react";
import rey from "../../../images/Dogs/rey.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="aboutLayout">
      <article className="aboutArticle">
        <h3 className="aboutTitle">A Little About Us</h3>
        <p className="aboutCollar">
          Everyone who has been a part of this company are dog people. We all
          love our furry friends and we wanted to spoil them. So we decided to
          create Tails & Trails. The idea is to make our pups look good with
          custom collars and leashes. There are many designs and colors to
          choose from, like the one our cute model Rey here is wearing.
        </p>
        <p className="aboutTreats">
          The other part of this company is making dog treats that are all
          organic and healthy. Most of the treats have pumpkin in them which has
          been proven to help dogs with sensitive stomachs.
        </p>
      </article>
      <img className="reyImg" src={rey} alt="Rey" />
    </div>
  );
};

export default About;
