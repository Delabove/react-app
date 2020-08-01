import React, {Component} from "react";

class Counter extends Component{
    state = {}
    render() {
        // jsx expression that gets compiled as React.createElement()
        return <div><h1>Hello World</h1><button>Increment</button></div>;
    }

}
export default Counter;