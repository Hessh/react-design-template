import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/layout/header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
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
    e.target.style.color = "#2BA358";
    e.target.style.textDecoration = "underline";

    /** Burger menu */
    let showMenu = this.state.showMenu;
    if (!showMenu && window.innerWidth < 1000) {
      this.headerRight.current.style.display = "flex";
      this.header.current.style.boxShadow = "none";
      this.setState({ showMenu: true });
    } else if (showMenu && window.innerWidth < 1000) {
      this.headerRight.current.style.display = "none";
      this.header.current.style.boxShadow = "0px 0px 10px -1px #00000050";
      this.setState({ showMenu: false });
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
    let showMenu = this.state.showMenu;
    return (
      <header ref={this.header}>
        <div className="header-left">
          <Link to="/" className="link" onClick={this.toggleHome}>
            <span>Design Template</span>
          </Link>
        </div>
        <div className="header-right" ref={this.headerRight}>
          <Link className="link" onClick={this.toggleMenu} to="/colors">
            COLORS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/fonts">
            FONTS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/buttons">
            BUTTONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/links">
            LINKS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/icons">
            ICONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/illustrations">
            ILLUSTRATIONS
          </Link>
          <Link className="link" onClick={this.toggleMenu} to="/content">
            CONTENT
          </Link>
        </div>
        <FontAwesomeIcon
          icon={showMenu ? "times" : "bars"}
          id="burger"
          onClick={this.toggleMenu}
        />
      </header>
    );
  }
}
export default Header;
