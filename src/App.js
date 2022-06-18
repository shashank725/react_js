import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     console.log("Hi")
//     // const arr = [10, 20, 30, 40];
//     const arr = this.props.numbers;        //With props

//     // const newArr = arr.map((num) => {            //Call back function
//     //   console.log("num = ", num);
//     //   return <li>{num * 2}</li>
//     // });

//     // console.log("oldArr = ", arr);
//     // console.log("NewArr = ", newArr);
//     // return (
//     //   <ul>
//     //     {newArr}
//     //   </ul>
//     // )


//     return(
//       <ul>
//         {arr.map((num) => {              //Another way of writing Call back function
//           return <li>{num}</li>;
//         })}
//       </ul>
//     )
//   }
// }



// // With State component
// export default class App extends Component {
//   state = {
//     users: [
//       {id: 100, name: "Shashank", pass: "25112002"},
//       {id: 101, name: "Rajat", pass: "25102002"},
//       {id: 102, name: "Ankush", pass: "25122002"}
//     ]
//   }
//   // render() {                                               //Without Map
//   //   return (
//   //     <div>
//   //       <h1> ID : {this.state.users[0].id}</h1>
//   //       <h2>Name : {this.state.users[0].name}</h2>
//   //       <h3>Password : {this.state.users[0].pass}</h3>
//   //     </div>
//   //   )
//   // }

//   render() {                                                   //With Map
//     const newUsers = this.state.users.map((user) => {
//       console.log(user);
//       return <h1> ID : {user.id}, Name : {user.name}, Password : {user.pass}</h1>
//     })
//     return <div>{newUsers}</div>
//   }
// }



// Key
import User from './User';
export default class App extends Component {
  render() {
    const arr = this.props.numbers;
    const newArr = arr.map((num) => {
      return <User key={num} value={num}/>;        //key cannot be passed as a prop
    });
    return (
      <div>
        <ul>
          {newArr}
        </ul>
      </div>
    )
  }
}

