import React, { Component} from "react";
import PropType from "prop-types";      // For Typechecking


// // Function Component
// const Student = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.name} {props.children}</h1>
//             <h2>Your Roll: {props.roll}</h2>
//         </div>
//     );
// };
// // Class Component (Should only use when we want useState() & lifecycle hooks)
// class Student extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>Hello {this.props.name} {this.props.children}</h1>     //prop-types
//                 <h2>Roll : {this.props.roll}</h2>
//             </div>
//         );
//     }
// }
// Student.propTypes = {                 // Typechecking 
//     name: PropType.string.isRequired,
//     roll: PropType.number,
// };
// Student.defaultProps = {
//     roll: 101     // If you dont pass any value it will be 101
// }

// export default Student;



// // State      (only used in class components)
// class Student extends Component {
//     // // 1. State without contructor
//     // state = {
//     //     name: "Shashank",
//     //     roll: this.props.roll
//     // };
//     // // 2. State with constructor
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "Shashank",
//             roll: this.props.roll
//         };
//     }
//     render(){
//         return (
//             <h1>Hello {this.state.name}. Your Roll No. : {this.state.roll}</h1>
//         )
//     }
// }
// export default Student;



// // Event Handling
// // Class Component 
// class Student extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "Shashank Shekhar",
//             roll: this.props.roll
//         };
//     }
//     handleClick = () => {         //No need to mention const, when writing function inside a class
//         console.log("Button Clicked", this);
//     };
//     render() {
//         return(
//             <div>
//                 <h1>Hello {this.state.name}</h1>
//                 <h2>Your Roll No. : {this.state.roll}</h2>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         );
//     }
// // Function Component
// const Student = (props) => {
//     const handleClick = (e) => {
//         e.preventDefault();    //To prevent being redirected to the link, when clicked 
//         console.log("Button Clicked",);
//     };
//     return (
//         <div>
//             <h1>Hello !</h1>
//             <h2>Your Roll No. : {props.roll}</h2>
//             <a href="https://reactjs.org/" onClick={handleClick}>Click Here</a>
//         </div>
//     );
// }
// export default Student;



// // Update State using setState Method
// class Student extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Shashank",
//             roll: this.props.roll
//         };
//     }
//     handleClick = () => {
//         this.setState({name: "Shashank Shekhar", roll: 100})
//         //Another form of setState, in this it takes function as argument
//         this.setState(function(state, props){            //In Normal function      
//             console.log("State :", state, "Props :", props);
//         });
//         this.setState((state, props) => {                //In Arrow function
//             console.log("State :", state, "Props :", props);
//         });
//         //Till here
//         console.log("Button Clicked");
//     };
//     render() {
//         return (
//             <div>
//                 <h1>Hello, {this.state.name}. Your roll No. : {this.state.roll}</h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         );
//     }
// }
// export default Student;



// // Passing Arguments to Event Handlers
// class Student extends Component {
//     state = {
//         id: 1,
//         name: "Shashank"
//     };
//     handleClick = (id, e) => {
//         console.log(id);
//         console.log(e);
//     };
//     // 1.Passing Arguments with Arrow function
//     // handleClickArg = (e) => {      //"e" is for to get event object
//     //     this.handleClick(this.state.id, e);
//     // };
//     render(){
//         return (
//             // <div>
//             //     <h1>Hello, {this.state.name}</h1>
//             //     {/* <button onClick={this.handleClickArg}>Delete</button> */}
//             //     {/*//Another way of Passing Arguments with Arrow function */}
//             //     <button onClick={(e) => {    
//             //         this.handleClick(this.state.id, e);
//             //         }}>Delete</button>
//             // </div>
//             // 2.Passing Arguments with Bind Method
//             <div>
//                 <h1>Hello. {this.state.name}</h1>
//                 <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button>
//             </div>
//         );
//     }
// }
// export default Student;



// // Mounting (connected to App.js)
// import Marks from "./Marks";
// export default class Student extends Component {
//   render() {
//     console.log("Student called [Child of App]")
//     return (
//       <div>
//           <h1>Hello {this.props.name}</h1>
//           <Marks/>
//       </div>
//     );
//   }
// }



// Unmounting
export default class Student extends Component {
    componentDidMount(){
        console.log("Student mounted")
    }
  render() {
    console.log("Student rendered");
    return (
      <h2>Hello Student Component</h2>
    )
  }
}
