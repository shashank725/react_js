import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// #Both does the same thing
// let el = <h1>Hello Shashank</h1> //JSX
// let el = React.createElement("h1", null, "Hello Shashank"); //


ReactDOM.render(<App />, document.getElementById("root"));