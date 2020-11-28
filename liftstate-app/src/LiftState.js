import React, { Component } from "react";
import Home from "./Home";
import Profile from "./Profile";

export default class App extends Component {
  state = {
    name: "Naina"
  };

  handleHomeClick(name) {
    this.setState({ name: name });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Home myprp={(name)=>this.handleHomeClick(name)} />
        <Profile />
        <h1>============{this.state.name}============</h1>
      </div>
    );
  }
}
