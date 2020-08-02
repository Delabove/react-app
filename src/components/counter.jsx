import React, { Component } from "react";

class Counter extends Component {
  //  prop= data to component state=data given that is private to that component so other components cannot access
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  //NOTE:

  // binding event handler to "this" is one way to handle events
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Increment Clicked");
  // }

  //using an arrow function is another way to "inherit" "this" bc they don't rebind
  handleIncrement = () => {
    // this.state.count = this.state.count++;
    //explicitly tell react what it has changed
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <ul>
          {
            this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))
            //    mapping a string with jsx expression to be compiled into a react element = js object
          }
        </ul>
      </React.Fragment>
    );
  }

  // determines class of element to change from yellow to blue when incremented
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;

    // to avoid repetition use badge- in the classes variable then warning and primary to the return statement append
    // such that badge-primary or badge-warning
  }

  // method to call a function to return a value
  formatCount() {
    // check the value of the count property:
    // return this.state.count === 0 ? "Zero" : this.state.count;

    // improvement on code with object destructuring:
    const { value } = this.state;
    return value === 0 ? "ZERO" : value;
  }
}
export default Counter;

// Conditional Rendering -1. add separate helper method -or- 2.truesy falsey
// state = {
//   count: 0,
//   tags: ["tag1", "tag2", "tag3"],
// };
// Method 1
// renderTags() {
//   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
//   method 2
// return (
//   <ul>
//     {this.state.tags.map((tag) => (
//       <li key={tag}>{tag}</li>
//     ))}
//   </ul>
// );
// }

// render() {
// jsx expression that gets compiled as React.createElement()
// return (
// <div>
//   {/*only if tag array is empty*/}
//   {this.state.tags.length === 0 && " Please create a new tag!"}
//   {this.renderTags()}
// </div>
// );
