import React, { Component } from "react";

export default class Home extends Component {
  state = {
    home_name: "Vijay",
  };

  render() {
    return (
      <div>
        Home
        <button onClick={()=>this.props.myprp(this.state.home_name)}>Change Name</button>
      </div>
    );
  }
}
