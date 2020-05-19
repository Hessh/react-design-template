import React from "react";
/** Routing */
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

/** Layout */
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/** Pages */
import Colors from "./components/pages/Colors";
import Fonts from "./components/pages/Fonts";
import Icons from "./components/pages/Icons";
import Illustrations from "./components/pages/Illustrations";
import Buttons from "./components/pages/Buttons";
import Links from "./components/pages/Links";
import Content from "./components/pages/Content";

/** CSS */
import "./css/pages/style.css";
import "./css/pages/home.css";

/** Font Awesome Icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes, faLaptop, faSave, faEdit, faUserCircle } from "@fortawesome/free-solid-svg-icons";

/** Font Awesome Icon Library */
library.add(faBars, faTimes, faLaptop, faSave, faEdit, faUserCircle);

/** Main component with layout and routing */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Route exact path="/">
            <div className="container">
              <h4>Design categories</h4>
              <div className="cat-container">
                <Link className="cat-wrapper" to="/colors">
                  <div className="cat-box box-1">C</div>
                  <p className="cat-label">Colors</p>
                </Link>
                <Link className="cat-wrapper" to="/fonts">
                  <div className="cat-box box-2">F</div>
                  <p className="cat-label">Fonts</p>
                </Link>
                <Link className="cat-wrapper" to="/buttons">
                  <div className="cat-box box-3">B</div>
                  <p className="cat-label">Buttons</p>
                </Link>
                <Link className="cat-wrapper" to="/links">
                  <div className="cat-box box-4">L</div>
                  <p className="cat-label">Links</p>
                </Link>
                <Link className="cat-wrapper" to="/icons">
                  <div className="cat-box box-1">I</div>
                  <p className="cat-label">Icons</p>
                </Link>
                <Link className="cat-wrapper" to="/illustrations">
                  <div className="cat-box box-2">I</div>
                  <p className="cat-label">Illustrations</p>
                </Link>
                <Link className="cat-wrapper" to="/content">
                  <div className="cat-box box-3">C</div>
                  <p className="cat-label">Content</p>
                </Link>
              </div>
            </div>
          </Route>
          <Route path="/colors" component={Colors} />
          <Route path="/fonts" component={Fonts} />
          <Route path="/icons" component={Icons} />
          <Route path="/illustrations" component={Illustrations} />
          <Route path="/buttons" component={Buttons} />
          <Route path="/links" component={Links} />
          <Route path="/content" component={Content} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
