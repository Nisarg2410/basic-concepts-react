import React, { Component } from "react";
class JSX extends Component {
  constructor() {
    super();
    this.state = {
      element: "Carl",
      name: "Johnson",
    };
  }
  render() {
    return (
      <div>
        <h1>Hii{this.state.element}</h1>
        <h1>this is{this.state.name}</h1>
      </div>
    );
  }
}

export default JSX;
