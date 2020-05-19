import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/pages/icons.css";

export class Icons extends Component {
  render() {
    return (
      <div className="container">
        <div className="icon-container">
          <h4>Header icons</h4>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon="bars" />
            <FontAwesomeIcon icon="times" />
          </div>
          <h4>Slik fungerer det</h4>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon="faLaptop" />
            <FontAwesomeIcon icon="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;
