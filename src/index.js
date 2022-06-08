import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import el from "./App";

// #Both does the same thing
// let el = <h1>Hello Shashank</h1> //JSX
// let el = React.createElement("h1", null, "Hello Shashank"); //


// ReactDOM.render(<App />, document.getElementById("root")); // To render class component in App.js
// ReactDOM.render(<Student />, document.getElementById("root")); // To render component in Student.js
// ReactDOM.render(el, document.getElementById("root"));

// import Student from "./Student"; //Directly accessing Student from Students.js
// ReactDOM.render(<Student name="Shashank" roll={1012}> !! </Student>, document.getElementById("root"));  // For prop-types
// ReactDOM.render(<Student roll="102"/>, document.getElementById("root"));      // For State, Event Handling, Update State using setState Method, Passing Arguments to Event Handlers


ReactDOM.render(<App name="I m App Prop"/>, document.getElementById("root"));   //For Mounting in App.js
