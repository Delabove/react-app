import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: 0,
  //   tags: ["tag1", "tag2", "tag3"],
  // };
  //
  // render() {
  //   // jsx expression that gets compiled as React.createElement()
  //   return (
  //     <React.Fragment>
  //       {/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
  //       {/*<button className="btn btn-secondary btn-sm">Increment</button>*/}
  //       <ul>
  //         {/*render dynamically*/}
  //         {
  //           this.state.tags.map((tag) => (
  //             <li key={tag}>{tag}</li>
  //           ))
  //           //    mapping a string with jsx expression to be compiled into a react element = js object
  //         }
  //       </ul>
  //     </React.Fragment>
  //   );
  // }

  // determines class of element to change from yellow to blue when incremented
  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;

  // to avoid repetition we use badge- in the classes variable then warning and primary to the return statement append
  // such that badge-primary or badge-warning
  // }

  // method to call a function to return a value
  // formatCount() {
  // check the value of the count propery:
  // return this.state.count === 0 ? "Zero" : this.state.count;

  // improvement on code with object restructuring:
  // const { count } = this.state;
  // return count === 0 ? "ZERO" : count;
  // }

  // Conditional Rendering -1. add separate helper method -or- 2.truesy falsey
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  // Method 1
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //method 2
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    // jsx expression that gets compiled as React.createElement()
    return (
      <div>
        {/*only if tag array is empty*/}
        {this.state.tags.length === 0 && " Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}
export default Counter;
