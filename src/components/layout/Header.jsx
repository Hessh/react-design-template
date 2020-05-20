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

  /** Show/hide Burger menu on mobile */
  toggleMenu = (e) => {
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
      linkArray[i].setAttribute("class", "link");
      linkArray[0].setAttribute("class", "active-link");
    }
  };

  active = (e) => {
    // let linkArray = this.headerRight.current.childNodes;
    // let pathname = window.location.pathname;
    // for (let i = 0; i < linkArray.length; i++) {
    //   let href = linkArray[i].getAttribute("href");
    //   if (href == pathname) {
    //     linkArray[i].setAttribute("class", "link active-link");
    //   } else {
    //     linkArray[i].setAttribute("class", "link");
    //   }
    // }
    let linkArray = this.headerRight.current.childNodes;
    for (let i = 0; i < linkArray.length; i++) {
      console.log(linkArray[i]);
      linkArray[i].setAttribute("class", "link");
    }
    e.target.setAttribute("class", "link active-link");
  };

  componentDidMount() {}

  render() {
    let showMenu = this.state.showMenu;
    return (
      <header ref={this.header}>
        <div className="header-left">
          <Link className="link" onClick={this.toggleHome} to="/">
            <span>Design Template</span>
          </Link>
        </div>
        <div className="header-right" ref={this.headerRight}>
          <Link className="link" onClick={this.active} to="/">
            HOME
          </Link>
          <Link className="link" onClick={this.active} to="/colors">
            COLORS
          </Link>
          <Link className="link" onClick={this.active} to="/fonts">
            FONTS
          </Link>
          <Link className="link" onClick={this.active} to="/buttons">
            BUTTONS
          </Link>
          <Link className="link" onClick={this.active} to="/links">
            LINKS
          </Link>
          <Link className="link" onClick={this.active} to="/icons">
            ICONS
          </Link>
          <Link className="link" onClick={this.active} to="/illustrations">
            ILLUSTRATIONS
          </Link>
          <Link className="link" onClick={this.active} to="/content">
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
