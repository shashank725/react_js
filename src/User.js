import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        <h2>Hello, Shashank</h2>
        {/* <button>Logout</button> */}

        <button onClick={this.props.clickData}>Logout</button>

        <h3>Prime Member</h3>
      </div>
    )
  }
}
