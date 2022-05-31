import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Student from "./Student";

// #Both does the same thing
// let el = <h1>Hello Shashank</h1> //JSX
// let el = React.createElement("h1", null, "Hello Shashank"); //


// ReactDOM.render(<App />, document.getElementById("root")); // To render class component in App.js
ReactDOM.render(<Student />, document.getElementById("root")); // To render component in Student.js