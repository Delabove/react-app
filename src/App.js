import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
