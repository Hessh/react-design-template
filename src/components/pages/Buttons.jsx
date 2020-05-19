import React, { Component } from "react";

import "../../css/pages/buttons.css";

export class Buttons extends Component {
  render() {
    return (
      <div className="container btn-main-container">
        <div className="btn-container">
          <h4>Square flat buttons</h4>
          <h5>CTA</h5>
          <div className="btn-wrapper">
            <button className="square-flat cta-button green">
              Placeholder
            </button>
            <button className="square-flat cta-button strong-green">
              Placeholder
            </button>
          </div>
          <h5>Filter</h5>
          <div className="btn-wrapper">
            <button className="square-flat filter-button">Placeholder</button>
            <button className="square-flat filter-button">Placeholder</button>
          </div>
        </div>
        <div className="btn-container">
          <h4>Square shadow buttons</h4>
          <h5>CTA</h5>
          <div className="btn-wrapper">
            <button className="square-shadow cta-button green">
              Placeholder
            </button>
            <button className="square-shadow cta-button strong-green">
              Placeholder
            </button>
          </div>
          <h5>Filter</h5>
          <div className="btn-wrapper">
            <button className="square-shadow filter-button">Placeholder</button>
            <button className="square-shadow filter-button">Placeholder</button>
          </div>
        </div>
        <div className="btn-container">
          <h4>Rounded flat buttons</h4>
          <h5>CTA</h5>
          <div className="btn-wrapper">
            <button className="rounded-flat cta-button green">
              Placeholder
            </button>
            <button className="rounded-flat cta-button strong-green">
              Placeholder
            </button>
          </div>
          <h5>Filter</h5>
          <div className="btn-wrapper">
            <button className="rounded-flat filter-button">Placeholder</button>
            <button className="rounded-flat filter-button">Placeholder</button>
          </div>
        </div>
        <div className="btn-container">
          <h4>Rounded shadow buttons</h4>
          <h5>CTA</h5>
          <div className="btn-wrapper">
            <button className="rounded-shadow cta-button green">
              Placeholder
            </button>
            <button className="rounded-shadow cta-button strong-green">
              Placeholder
            </button>
          </div>
          <h5>Filter</h5>
          <div className="btn-wrapper">
            <button className="rounded-shadow filter-button">
              Placeholder
            </button>
            <button className="rounded-shadow filter-button">
              Placeholder
            </button>
          </div>
        </div>
        <div className="btn-container btn-hover-container">
          <h4>Hover effects</h4>
          <h5>Size</h5>
          <div className="btn-wrapper">
            <button className="square-flat cta-button green hover-size">
              Placeholder
            </button>
            <button className="square-flat cta-button strong-green hover-size">
              Placeholder
            </button>
          </div>
          <h5>Shadow</h5>
          <div className="btn-wrapper">
            <button className="square-shadow cta-button green hover-shadow">
              Placeholder
            </button>
            <button className="square-shadow cta-button strong-green hover-shadow">
              Placeholder
            </button>
          </div>
          <h5>Color</h5>
          <div className="btn-wrapper">
            <button className="square-flat cta-button green hover-color-green">
              Placeholder
            </button>
            <button className="square-flat cta-button strong-green hover-color-strong-green">
              Placeholder
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
