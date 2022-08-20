import React from "react";
import HeroSection from "./heroSection/HeroSection";
import BusinessMoto from "./businessMoto/BusinessMoto";
import WesleyPack from "./wesleyPack/WesleyPack";

const Home = () => {
  return (
    <>
      <div className="container">
        <HeroSection />
        <BusinessMoto />
        <WesleyPack />
      </div>
      <section className="home-product"></section>
    </>
  );
};

export default Home;
