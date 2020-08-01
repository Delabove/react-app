import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    // jsx expression that gets compiled as React.createElement()
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button style={{ fontSize: 30 }} className="btn btn-secondary btn-sm">
          Increment
        </button>
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
