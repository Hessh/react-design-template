import React, { Component } from "react";

import "../../css/pages/colors.css";

export class Colors extends Component {
  render() {
    return (
      <div className="container">
        {/* Palett nr 1 */}
        <div className="palette-row palette-row-1">
          <h4>Primary: Miljøfarger 1</h4>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1"></div>
              <p className="color-label">#086E5E</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2"></div>
              <p className="color-label">#3FC7B2</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-3"></div>
              <p className="color-label">#A0FAEC</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4"></div>
              <p className="color-label">#C0D6D1</p>
            </div>
          </div>
        </div>
        {/* Palett nr 2 */}
        <div className="palette-row palette-row-2">
          <h4>Primary: Blå classy</h4>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1"></div>
              <p className="color-label">#152F38</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2"></div>
              <p className="color-label">#327085</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-3"></div>
              <p className="color-label">#469BB8</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4"></div>
              <p className="color-label">#73BAD1</p>
            </div>
          </div>
        </div>
        {/* Palett nr 3 */}
        <div className="palette-row palette-row-3">
          <h4>Primary: Miljøfarger 2</h4>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1"></div>
              <p className="color-label">#15382D</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2"></div>
              <p className="color-label">#328569</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-3"></div>
              <p className="color-label">#609E8A</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4"></div>
              <p className="color-label">#B8D1C9</p>
            </div>
          </div>
        </div>
         {/* Palett nr 4 */}
         <div className="palette-row palette-row-4">
          <h4>Primary: Miljøfarger 3</h4>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1"></div>
              <p className="color-label">#1F5221</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2"></div>
              <p className="color-label">#328535</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-3"></div>
              <p className="color-label">#599E5B</p>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4"></div>
              <p className="color-label">#9BD19D</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;
