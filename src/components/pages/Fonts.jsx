import React, { Component } from "react";

import "../../css/pages/fonts.css";

export class Fonts extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <h1>Lorem ipsum dolor</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p className="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            itaque natus nostrum quae, qui quam dolore temporibus expedita
            tempore minima!
          </p>
          <p className="semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            itaque natus nostrum quae, qui quam dolore temporibus expedita
            tempore minima!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            itaque natus nostrum quae, qui quam dolore temporibus expedita
            tempore minima!
          </p>
          <p className="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            itaque natus nostrum quae, qui quam dolore temporibus expedita
            tempore minima!
          </p>
        </div>
      </div>
    );
  }
}

export default Fonts;
