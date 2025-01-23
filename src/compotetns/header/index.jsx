import "./index.css";

function Header() {
  return (
    <>
      <div className="h-bg">
      <div className="container">
        <div className="hero">
          <div className="logo-title">
            <a href="./app.jsx">SHAPEVOICE</a>
          </div>

          <nav className="navbar">
            <ul className="nav-list">
              <li>
                <a href="#">Product</a>
                <img src="/images/svg/array-bottom.svg" alt="Error" />
              </li>
              <li>
                <a href="#">Template</a>
                <img src="/images/svg/array-bottom.svg" alt="Error" />
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>

            <div className="buttons">
              <button className="signBtn">Sign In</button>
              <button className="startBtn">Start Free</button>
            </div>
          </nav>
        </div>
        <div className="header">
          <div className="header-title">
            <h1>Managing business payments has never been easier</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything.
            </p>
            <div className="buttons">
              <button className="process">Our Process</button>
              <div className="see-btn">
                <img src="./images/png/pause-btn.png" alt="Error" />
                <a href="#">See How It Works</a>
              </div>
            </div>
          </div>

          <form className="form">
            <p>Get Started for Free</p>
            <div className="email">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="password">
              <input type="password" placeholder="Password" />
            </div>
            <button className="getStarted">Get Started</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;
