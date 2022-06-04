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
//                 <h1>Hello {this.props.name} {this.props.children}</h1>
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


// State
class Student extends Component {
    // // 1. State without contructor
    // state = {
    //     name: "Shashank",
    //     roll: this.props.roll
    // };
    // // 2. State with constructor
    constructor(props) {
        super(props);
        this.state = {
            name: "Shashank",
            roll: this.props.roll
        };
    }
    render(){
        return (
            <h1>Hello {this.state.name}. Your Roll No. : {this.state.roll}</h1>
        )
    }
}
export default Student;