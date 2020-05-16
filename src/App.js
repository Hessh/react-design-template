import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Layout from "./components/pages/Layout";
import Colors from "./components/pages/Colors";
import Fonts from "./components/pages/Fonts";
import Icons from "./components/pages/Icons";
import Illustrations from "./components/pages/Illustrations";
import Buttons from "./components/pages/Buttons";
import Links from "./components/pages/Links";
import Transitions from "./components/pages/Transitions";
import Animations from "./components/pages/Animations";
import Content from "./components/pages/Content";

import "./css/pages/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" />
        <Route path="/layout" component={Layout} />
        <Route path="/colors" component={Colors} />
        <Route path="/fonts" component={Fonts} />
        <Route path="/icons" component={Icons} />
        <Route path="/illustrations" component={Illustrations} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/links" component={Links} />
        <Route path="/transitions" component={Transitions} />
        <Route path="/animations" component={Animations} />
        <Route path="/content" component={Content} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
