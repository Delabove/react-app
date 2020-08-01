import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";

const element = <h1>Hello World</h1>
console.log(element)

ReactDOM.render(<Counter></Counter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





