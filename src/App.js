import "./App.css";
import dogPic from "./images/Dogs/dog-collar.png";

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
            <h2>The collar everyone's talking about</h2>
          </article>
          <article className="h1Title">
            <h1>Custom collars & treats in St. George Utah</h1>
          </article>
        </section>
        <div className="heroPic">
          <img src={dogPic} alt="Dog" />
        </div>
      </main>
    </div>
  );
}

export default App;
