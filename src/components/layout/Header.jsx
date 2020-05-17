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

  toggleMenu = (e) => {
    /** Desktop styling */
    let linkArray = this.headerRight.current.childNodes;
    for (let i = 0; i < linkArray.length; i++) {
      linkArray[i].style.color = "#888";
      linkArray[i].style.textDecoration = "none";
    }
    e.target.style.color = "#333";
    e.target.style.textDecoration = "underline";

    /** Burger menu */
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

  toggleHome = () => {
    let linkArray = this.headerRight.current.childNodes;
    for (let i = 0; i < linkArray.length; i++) {
      linkArray[i].style.color = "#888";
      linkArray[i].style.textDecoration = "none";
    }
  };

  render() {
    return (
      <header ref={this.header}>
        <div className="header-left">
          <Link to="/" className="link" onClick={this.toggleHome}>
            <span>Design Template</span>
          </Link>
        </div>
        <div className="header-right" ref={this.headerRight}>
          <Link className="link" onClick={this.toggleMenu} to="/layout">
            LAYOUT
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/colors">
            COLORS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/fonts">
            FONTS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/icons">
            ICONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/illustrations">
            ILLUSTRATIONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/buttons">
            BUTTONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/links">
            LINKS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/transitions">
            TRANSITIONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/animations">
            ANIMATIONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/content">
            CONTENT
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
