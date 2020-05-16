import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/layout/header.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-left">
          <Link to="/" className="link">
            <span>Design Template</span>
          </Link>
        </div>
        <div className="header-right">
          <Link to="/layout" className="link">
            <span>LAYOUT</span>
          </Link>
          <Link to="/colors" className="link">
            <span>COLORS</span>
          </Link>
          <Link to="/fonts" className="link">
            <span>FONTS</span>
          </Link>
          <Link to="/icons" className="link">
            <span>ICONS</span>
          </Link>
          <Link to="/illustrations" className="link">
            <span>ILLUSTRATIONS</span>
          </Link>
          <Link to="/buttons" className="link">
            <span>BUTTONS</span>
          </Link>
          <Link to="/links" className="link">
            <span>LINKS</span>
          </Link>
          <Link to="/transitions" className="link">
            <span>TRANSITIONS</span>
          </Link>
          <Link to="/animations" className="link">
            <span>ANIMATIONS</span>
          </Link>
          <Link to="/content" className="link">
            <span>CONTENT</span>
          </Link>
          <div id="burger"></div>
        </div>
      </header>
    );
  }
}

export default Header;
