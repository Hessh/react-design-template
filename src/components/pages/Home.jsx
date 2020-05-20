import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/pages/home.css";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-wrapper">
          <h3>Design categories</h3>
          <div className="cat-container">
            <Link className="cat-wrapper" to="/colors">
              <div className="cat-box box-1">C</div>
              <p className="cat-label">Colors</p>
            </Link>
            <Link className="cat-wrapper" to="/fonts">
              <div className="cat-box box-2">F</div>
              <p className="cat-label">Fonts</p>
            </Link>
            <Link className="cat-wrapper" to="/buttons">
              <div className="cat-box box-3">B</div>
              <p className="cat-label">Buttons</p>
            </Link>
            <Link className="cat-wrapper" to="/links">
              <div className="cat-box box-4">L</div>
              <p className="cat-label">Links</p>
            </Link>
            <Link className="cat-wrapper" to="/icons">
              <div className="cat-box box-1">I</div>
              <p className="cat-label">Icons</p>
            </Link>
            <Link className="cat-wrapper" to="/illustrations">
              <div className="cat-box box-2">I</div>
              <p className="cat-label">Illustrations</p>
            </Link>
            <Link className="cat-wrapper" to="/content">
              <div className="cat-box box-3">C</div>
              <p className="cat-label">Content</p>
            </Link>
          </div>
        </div>
        <div className="content-wrapper">
          <h3>Final decitions</h3>
          <h4>Colors</h4>
          <h5>Primary:</h5>
          <h5>CTA:</h5>
          <h5>CTA accent:</h5>
        </div>
        <div className="content-wrapper">
          <h4>Fonts</h4>
          <h5>Title:</h5>
          <h5>Paragraph:</h5>
        </div>
        <div className="content-wrapper">
          <h4>Buttons</h4>
          <h5>CTA:</h5>
          <h5>Read more:</h5>
          <h5>Categories:</h5>
        </div>
        <div className="content-wrapper">
          <h4>Icons</h4>
          <h5>Header:</h5>
          <h5>Profile:</h5>
          <h5>Other usables:</h5>
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
