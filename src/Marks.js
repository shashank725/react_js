import React, { Component } from 'react'


// Mounting (connected to Student.js)
export default class Marks extends Component {
  render() {
    console.log("Marks Component called [Child of Student]")
    return (
      <div>
          <h1>Marks Component</h1>
      </div>
    )
  }
}
