import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    // jsx expression that gets compiled as React.createElement()
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  // determines class of element to change from yellow to blue when incremented
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;

    // to avoid repetition we use badge- in the classes variable then warning and primary to the return statement append
    // such that badge-primary or badge-warning
  }

  // method to call a function to return a value
  formatCount() {
    // check the value of the count propery:
    // return this.state.count === 0 ? "Zero" : this.state.count;

    // improvement on code with object restructuring:
    const { count } = this.state;
    return count === 0 ? "0" : count;
  }
}
export default Counter;
