import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/pages/home.css";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-wrapper">
          <h3>Categorized examples</h3>
          <div className="cat-container">
            <Link className="cat-wrapper" to="/colors" onClick={this.test}>
              <div className="cat-box">C</div>
              <p className="cat-label">Colors</p>
            </Link>
            <Link className="cat-wrapper" to="/fonts">
              <div className="cat-box">F</div>
              <p className="cat-label">Fonts</p>
            </Link>
            <Link className="cat-wrapper" to="/buttons">
              <div className="cat-box">B</div>
              <p className="cat-label">Buttons</p>
            </Link>
            <Link className="cat-wrapper" to="/links">
              <div className="cat-box">L</div>
              <p className="cat-label">Links</p>
            </Link>
            <Link className="cat-wrapper" to="/icons">
              <div className="cat-box">I</div>
              <p className="cat-label">Icons</p>
            </Link>
            {/* <Link className="cat-wrapper" to="/illustrations">
              <div className="cat-box">I</div>
              <p className="cat-label">Illustrations</p>
            </Link>
            <Link className="cat-wrapper" to="/content">
              <div className="cat-box">C</div>
              <p className="cat-label">Content</p>
            </Link> */}
          </div>
        </div>
        <div className="content-wrapper">
          <h3>Final decisions</h3>
          <h4>Colors</h4>
          <h5>Primary:</h5>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-1">
                <p className="color-label">#2391D3</p>
              </div>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-2">
                <p className="color-label">#022C3F</p>
              </div>
            </div>
          </div>
          <h5>Secondary: (complimentary)</h5>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-3">
                <p className="color-label">#FA4A64</p>
              </div>
            </div>
            <div className="palette-wrapper">
              <div className="color-box box-4">
                <p className="color-label">#FF6F16</p>
              </div>
            </div>
          </div>
          <h5>CTA:</h5>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-5">
                <p className="color-label">#2BA358</p>
              </div>
            </div>
          </div>
          <h5>CTA accent:</h5>
          <div className="palette-container">
            <div className="palette-wrapper">
              <div className="color-box box-6">
                <p className="color-label">#40B36C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <h4>Fonts</h4>
          <h5>Title:</h5>
          <h2 className="noto-serif">Noto Serif, serif</h2>
          <h5>Paragraph:</h5>
          <p className="lato">Lato, sans serif</p>
        </div>
        <div className="content-wrapper">
          <h4>Buttons</h4>
          <div className="content">
            <div className="content-box">
              <h5>CTA:</h5>
              <button className="cta-button">CTA-button</button>
            </div>
            <div className="content-box">
              <h5>Read more:</h5>
              <button className="more-button">Read more</button>
            </div>
            <div className="content-box">
              <h5>Categories:</h5>
              <button className="cat-button">Category</button>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <h4>Icons</h4>
          <div className="content">
            <div className="content-box">
              <h5>Header:</h5>
              <div className="content-icons">
                <FontAwesomeIcon className="icon" icon="bars" />
                <FontAwesomeIcon className="icon" icon="times" />
              </div>
            </div>
            <div className="content-box">
              <h5>Profile:</h5>
              <div className="content-icons">
                <FontAwesomeIcon className="icon" icon="save" />
                <FontAwesomeIcon className="icon" icon="edit" />
                <FontAwesomeIcon className="icon" icon="user-circle" />
              </div>
            </div>
            <div className="content-box">
              <h5>Other usables:</h5>
              <div className="content-icons"></div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <h4>Illustrations</h4>
        </div>
        <div className="content-wrapper">
          <h4>Content</h4>
        </div>
      </div>
    );
  }
}

export default Home;
