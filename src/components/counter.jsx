import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    // jsx expression that gets compiled as React.createElement()
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  // method to call a function to return a value
  formatCount() {
    // check the value of the count propery:
    // return this.state.count === 0 ? "Zero" : this.state.count;

    // improvement on code with object restructuring:
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
