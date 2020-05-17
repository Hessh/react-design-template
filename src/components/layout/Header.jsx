import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/layout/header.css";

let showMenu = false;

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "bars",
    };
    this.header = React.createRef();
    this.headerRight = React.createRef();
  }

  toggleMenu = () => {
    if (!showMenu && window.innerWidth < 1000) {
      this.headerRight.current.style.display = "flex";
      this.header.current.style.boxShadow = "none";
      this.setState({ icon: "times" });
      showMenu = true;
    } else if (showMenu && window.innerWidth < 1000) {
      this.headerRight.current.style.display = "none";
      this.header.current.style.boxShadow = "0px 0px 10px -1px #00000050";
      this.setState({ icon: "bars" });
      showMenu = false;
    }
  };

  render() {
    return (
      <header ref={this.header}>
        <div className="header-left">
          <Link to="/" className="link">
            <span>Design Template</span>
          </Link>
        </div>
        <div className="header-right" ref={this.headerRight}>
          <Link to="/layout" className="link" onClick={this.toggleMenu}>
            <span>LAYOUT</span>
          </Link>
          <Link to="/colors" className="link" onClick={this.toggleMenu}>
            <span>COLORS</span>
          </Link>
          <Link to="/fonts" className="link" onClick={this.toggleMenu}>
            <span>FONTS</span>
          </Link>
          <Link to="/icons" className="link" onClick={this.toggleMenu}>
            <span>ICONS</span>
          </Link>
          <Link to="/illustrations" className="link" onClick={this.toggleMenu}>
            <span>ILLUSTRATIONS</span>
          </Link>
          <Link to="/buttons" className="link" onClick={this.toggleMenu}>
            <span>BUTTONS</span>
          </Link>
          <Link to="/links" className="link" onClick={this.toggleMenu}>
            <span>LINKS</span>
          </Link>
          <Link to="/transitions" className="link" onClick={this.toggleMenu}>
            <span>TRANSITIONS</span>
          </Link>
          <Link to="/animations" className="link" onClick={this.toggleMenu}>
            <span>ANIMATIONS</span>
          </Link>
          <Link to="/content" className="link" onClick={this.toggleMenu}>
            <span>CONTENT</span>
          </Link>
        </div>
        <FontAwesomeIcon
          icon={this.state.icon}
          id="burger"
          onClick={this.toggleMenu}
        />
      </header>
    );
  }
}
export default Header;
