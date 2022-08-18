import React from "react";

import "./businessMoto.css";

const BusinessMoto = () => {
  return (
    <>
      <article className="welcome">
        <h2>Welcome to the Wesley Pack</h2>
        <div className="motoSpacing">
          <div className="businessMoto">
            <p>
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
            <a href="./About"> Learn About us {">"}</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default BusinessMoto;
