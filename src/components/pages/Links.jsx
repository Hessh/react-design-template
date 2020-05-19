import React, { Component } from "react";

import "../../css/pages/links.css";

export class Links extends Component {
  render() {
    return (
      <div className="container">
        <div className="link-container">
          <h4>Outbound links</h4>
          <h5>Example 1:</h5>
          <div className="link-wrapper example-1">
            <p>
              Lorem ipsum dolor sit,{" "}
              <a href="https://github.com/Leifhaa">amet consectetur</a>{" "}
              adipisicing elit. Aspernatur, ipsum.
            </p>
          </div>
          <h5>Example 2:</h5>
          <div className="link-wrapper example-2">
            <p>
              Lorem ipsum dolor sit,{" "}
              <a href="https://github.com/Hulliskoa">amet consectetur</a>{" "}
              adipisicing elit. Aspernatur, ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
