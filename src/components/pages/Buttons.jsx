import React, { Component } from "react";

import "../../css/pages/buttons.css";

export class Buttons extends Component {
  render() {
    return (
      <div className="container">
        <div className="btn-container">
          <h4>Default button</h4>
          <div className="btn-wrapper">
            <button className="default-button">Default</button>
          </div>
        </div>
        <div className="btn-container">
          <h4>CTA buttons</h4>
          <div className="btn-wrapper">
            <button className="cta-button">Kom igang nå</button>
          </div>
        </div>
        <div className="btn-container">
          <h4>Continue buttons</h4>
          <div className="btn-wrapper">
            <button className="continue-button">Fortsett</button>
          </div>
          <div className="btn-wrapper">
            <button className="continue-button">Videre</button>
          </div>
        </div>
        <div className="btn-container">
          <h4>Finish buttons</h4>
          <div className="btn-wrapper">
            <button className="finish-button">Fullfør</button>
          </div>
        </div>
        <div className="btn-container">
          <h4>Log in/out -buttons</h4>
          <div className="btn-wrapper">
            <button className="login-button">Fullfør</button>
          </div>
          <div className="btn-wrapper">
            <button className="logout-button">Fullfør</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
