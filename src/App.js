import "./App.css";
import shwayzeCollar from "./images/Products/shwayzeCollar.jpg";
import NavBar from "./components/navigation/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import BusinessMoto from "./components/businessMoto/BusinessMoto";
import WesleyPack from "./components/wesleyPack/WesleyPack";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
      </div>
      <main>
        <div className="container">
          <HeroSection />
          <BusinessMoto />
          <WesleyPack />
        </div>
        <section className="home-product">
          <Product />
        </section>
      </main>
      <footer className="footerElement">

      </footer>
    </>
  );
}

export default App;

{/* <div className="productScroll">
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
</div> */}