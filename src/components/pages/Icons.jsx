import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/pages/icons.css";

export class Icons extends Component {
  render() {
    return (
      <div className="container icon-main-container">
        <div className="icon-container1">
          <h3>Mørk grønn</h3>
          <h4>Header icons</h4>
          <div className="icon-wrapper1">
            <h5>Burgermeny - utvid + avbryt</h5>
            <FontAwesomeIcon icon="bars" />
            <br></br>
            <FontAwesomeIcon icon="times" />
          </div>

          <h4>Slik fungerer det</h4>
          <div className="icon-wrapper1">
            <h5>(Her kommer illustrasjoner)</h5>
          </div>

          <h4>Profil side</h4>
          <div className="icon-wrapper1">
            <h5>Lagre</h5>
            <FontAwesomeIcon icon="save" />
            <h5>Rediger</h5>
            <FontAwesomeIcon icon="edit" />
            <h5>Profil-knapp header</h5>
            <FontAwesomeIcon icon="user-circle" />
          </div>
        </div>

        <div className="icon-container2">
          <h3>Lys grønn</h3>
          <h4>Header icons</h4>
          <div className="icon-wrapper2">
            <h5>Burgermeny - utvid + avbryt</h5>
            <FontAwesomeIcon icon="bars" />
            <br></br>
            <FontAwesomeIcon icon="times" />
          </div>

          <h4>Slik fungerer det</h4>
          <div className="icon-wrapper2">
            <h5>(Her kommer illustrasjoner)</h5>
          </div>

          <h4>Profil side</h4>
          <div className="icon-wrapper2">
            <h5>Lagre</h5>
            <FontAwesomeIcon icon="save" />
            <h5>Rediger</h5>
            <FontAwesomeIcon icon="edit" />
            <h5>Profil-knapp header</h5>
            <FontAwesomeIcon icon="user-circle" />
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;
