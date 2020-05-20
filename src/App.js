import React from "react";
/** Routing */
import { BrowserRouter as Router, Route } from "react-router-dom";

/** Layout */
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/** Pages */
import Home from "./components/pages/Home";
import Colors from "./components/pages/Colors";
import Fonts from "./components/pages/Fonts";
import Icons from "./components/pages/Icons";
import Illustrations from "./components/pages/Illustrations";
import Buttons from "./components/pages/Buttons";
import Links from "./components/pages/Links";
import Content from "./components/pages/Content";

/** CSS */
import "./css/pages/style.css";

/** Font Awesome Icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faLaptop,
  faSave,
  faEdit,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

/** Font Awesome Icon Library */
library.add(faBars, faTimes, faLaptop, faSave, faEdit, faUserCircle);

/** Main component with layout and routing */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Route exact path="/" component={Home} />
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
