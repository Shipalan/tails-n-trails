import "./App.css";
import dogPic from "./images/Dogs/dog-collar.png";
import wesleyPack from "./images/Dogs/wesleyPack.png";
import collarWesleyPack from "./images/Products/collar-wesleyPack.png";
import shwayzeCollar from "./images/Products/shwayzeCollar.jpg";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h3>Tails & Trails</h3>
        <nav className="navBarLinks">
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </nav>
        <p>Cart</p>
      </header>
      <main>
        <section className="heroTitle">
          <article className="sellingPoint">
            <h6>The collar everyone's talking about</h6>
          </article>
          <article className="h1Title">
            <h1>Custom collars & treats in St. George Utah</h1>
          </article>
        </section>
        <div className="heroPic">
          <img src={dogPic} alt="Dog" />
        </div>
        <article className="welcome">
          <h2>Welcome to the Wesley Pack</h2>
          <div className="businessMoto">
            <p>
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
            <a href="./About"> Learn About us {">"}</a>
          </div>
        </article>
        <section className="wesleyPack">
          <img className="imgs" src={wesleyPack} alt="dog" height="900px" />
          <div className="sampleCollar">
            <img
              className="imgs"
              src={collarWesleyPack}
              alt="collar"
              width="400px"
            />
            <p>Sample collars</p>
          </div>
        </section>
        <section className="home-product">
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
          </div>
          <div className="productScroll">
            <img className="productImgs" src={shwayzeCollar} />
            <div className="productInfo">
            <h4>Shwayze Collar</h4>
            <p>$25</p>
            </div>
            <a href="shop">Shop Item</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
