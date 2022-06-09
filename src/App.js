import React, {Component, Fragment} from "react";
import "./App.css"

// let el = React.createElement("h1", null, "Hello World");

// // React Fragment
// class App extends Component {
//     render() {
//         return (//<h1>Hello World</h1>;
//         // React.createElement("h1", null, "Hello Shashank");
            
//             // // 1. Way to render multiple elemets
//             // <div>
//             //     <h1>Hello World</h1>
//             //     <h2>Hello Shashank</h2>
//             // </div>

//             // // 2. Another to render multiple elemets
//             // <React.Fragment>
//             //     <h1>Hello World</h1>
//             //     <h2>Hello Shashank</h2>
//             // </React.Fragment>

//             // // 3. Another to render multiple elemets but it currently does not support all bworsers
//             // To also have to mention Fragment at top beside Component
//             <>
//             <h1>Hello World</h1>
//             <h2>Hello Shashank</h2>
//             </>
//         );
//     }
// }
// export default App;


// import Student from "./Student";
// const App = () => {
//     return (
//         <div>
//             <Student name="Shashank"/>
//             <Student name="Rajat"/>
//             <Student name="Ankush"/>
//         </div>
//     );
// };
// export default App;


// // Specifying Attributes with JSX
// const el = <h1 className="bg">Hello</h1>;
// export default el;



// // Mounting    (Can only use these phases in class component)
// import Student from "./Student";
// export default class App extends Component {    //No need to write "export default App;" cause it is already mention here
//     constructor(props) {
//         super(props);
//         console.log("Constructor called")
//         console.log(props)
//         this.state = {
//             roll: "100"
//         };
//     }
//     static getDerivedStateFromProps(props, state) {     //Rarely used cases where the state depends on changes in prop over time. This method doesn't have access to the component instance.
//         console.log("getDerivedStateFromProps called");
//         console.log(props, state);
//         return null;
//     }
//     componentDidMount() {
//         // Get data from server and set the data to state (Line 22 in Marks.js for more explanation)
//         console.log("componentDidMount - Mounted")
//     }
//     render() {
//         console.log("App render called");
//         return (
//         <div>
//             <Student name="Shashank"/>
//         </div>
//         )
//     }
// }



// // Updating
// import Marks from "./Marks";
// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {                        //With constructor
//             roll: 101
//         };
//     }
//     clickHandle = () => {
//         console.log("Button Clicked");
//         this.setState({roll: this.state.roll + 1})
//     };
//     render() {
//         return (
//         <div>
//             <Marks roll={this.state.roll} />
//             <button onClick={this.clickHandle}>Change</button>
//         </div>
//         )
//     }
// }



// Unmounting
export default class App extends Component {
    componentDidMount(){
        console.log("App mounted");
    }
    componentWillUnmount(){
        console.log("App Unmounted");
    }
  render() {
    console.log("App rendered");
    return (
      <h1>Hello App Component</h1>
    )
  }
}

