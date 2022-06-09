import React, { Component } from 'react'


// // Mounting (connected to Student.js)
// export default class Marks extends Component {
//   render() {
//     console.log("Marks Component called [Child of Student]")
//     return (
//       <div>
//           <h1>Marks Component</h1>
//       </div>
//     )
//   }
// }


// Updating (connected to App.js)
export default class Marks extends Component {
  state = {                                                //Without constructor
    mroll: this.props.roll
  };
  static getDerivedStateFromProps(props, state){           //For changing the value of state
    console.log("getDerivedStateFromProps Clicked")
    console.log(props, state);
    if (props.roll !== state.roll) {
      return {mroll: props.roll};
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 107) {
      console.log("shouldComponentUpdate called")
      console.log(nextProps, nextState);
      return true;  //render component will be rendered
    }
    console.log(nextProps, nextState);
    return false;  //render component will not be rendered
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called. It runs before update");
    console.log(prevProps, prevState);
    return 25      //Just returning any value
  }
  componentDidUpdate(prevProps, prevState, snapshot) {             //It will not be invoked if shouldComponentUpdate() returns false
    console.log("componentDidUpdate called. It runs after update");
    console.log(prevProps, prevState, snapshot);
  }
  render() {
    console.log("Marks Rendered")
    return (
      <div>{this.state.mroll}</div>
    )
  }
}
