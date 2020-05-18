import React, { Component } from "react";

import "../../css/pages/colors.css";

export class Colors extends Component {
  render() {
    return (
      <div className="container">
        {/* Palett nr 1 */}
        <div className="palette-row palette-row-1">
          <h4>Primary: Green</h4>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-3"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4"></div>
              <p className="color-label">#</p>
            </div>
          </div>
        </div>
        {/* Palett nr 2 */}
        <div className="palette-row palette-row-2">
          <h4>Primary: Blue</h4>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-3"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4"></div>
              <p className="color-label">#</p>
            </div>
          </div>
        </div>
        {/* Palett nr 3 */}
        <div className="palette-row palette-row-2">
          <h4>Primary: Orange</h4>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-3"></div>
              <p className="color-label">#</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4"></div>
              <p className="color-label">#</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;
