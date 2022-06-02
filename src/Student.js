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
// Class Component (Should only use when we want useState() & lifecycle hooks)
class Student extends Component {
    render(){
        return (
            <div>
                <h1>Hello {this.props.name} {this.props.children}</h1>
                <h2>Roll : {this.props.roll}</h2>
            </div>
        );
    }
}

Student.propTypes = {                 // Typechecking 
    name: PropType.string.isRequired,
    roll: PropType.number,
};
Student.defaultProps = {
    roll: 101     // If you dont pass any value you will be 101
}

export default Student;
