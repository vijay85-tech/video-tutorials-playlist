import React, { Component } from "react";
export default class Hello extends Component {
  constructor(props) {
    super(props);
    const user = { name: " VIjay", age: 30 };
  }
  render(){
      return(
          <div>
             <h1>Hello {this.user.name}</h1> 
          </div>>
      )
  }
}

// / Hello;
