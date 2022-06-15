import React, { Component } from 'react';

import User from './User'
import Guest from './Guest'

export default class App extends Component {
//   render() {
//     // const isRegistered = this.props.consumer;
//     // if (isRegistered) {
//     //   return <User/>;
//     // }
//     // return <Guest/>;

// // Logical && Operator
//     const primeMember = this.props.primeMember;
//     console.log(primeMember);
//     return (
//       <React.Fragment>
//         <h1>Welcome</h1>
//         {primeMember && <User/>}
//       </React.Fragment>
//     )
//   }



// If & Else
state = {
  isLoggedIn: false
};
clickLogin = () => {
  this.setState({isLoggedIn: true})
}
clickLogout = () => {
  this.setState({isLoggedIn: false})
}
render() {
  const isLoggedIn = this.state.isLoggedIn;

  // let consumer;
  // if (isLoggedIn) {
  //   consumer = <User clickData={this.clickLogout}/>
  // }
  // else {
  //   consumer = <Guest clickData={this.clickLogin}/>
  // }
  // return <div>{consumer}</div>

  
// // Inline if-else with Conditional Operator
//   return(
//     <div>
//       {/* If the condition is true it will return expression 1 else it will return expression 2 */}
//       {isLoggedIn ? (<User clickData={this.clickLogout} />) : (<Guest clickData={this.clickLogin} />)}
//     </div>
//   );

// IIFE
  return(
    <div>
      {
        (
          () => {
            if (isLoggedIn) {
              return <User clickData={this.clickLogout}/>
            } else {
              return <Guest clickData={this.clickLogin}/>
            }
          }
        ) ()       //Here "()" is calling the function automatically
      }    
    </div>
  )

}


}
