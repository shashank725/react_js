import React, {Component, Fragment} from "react";

// let el = React.createElement("h1", null, "Hello World");

class App extends Component {
    render() {
        return (//<h1>Hello World</h1>;
        // React.createElement("h1", null, "Hello Shashank");
            
            // // 1. Way to render multiple elemets
            // <div>
            //     <h1>Hello World</h1>
            //     <h2>Hello Shashank</h2>
            // </div>

            // // 2. Another to render multiple elemets
            // <React.Fragment>
            //     <h1>Hello World</h1>
            //     <h2>Hello Shashank</h2>
            // </React.Fragment>

            // // 3. Another to render multiple elemets but it currently does not support all bworsers
            // To also have to mention Fragment at top beside Component
            <>
            <h1>Hello World</h1>
            <h2>Hello Shashank</h2>
            </>
        );
    }
}

export default App;