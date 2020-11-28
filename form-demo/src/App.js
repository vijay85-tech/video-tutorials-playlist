import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Vijay kumar gautam",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <h1>Youtube Form</h1>
        <form>
          <label>
            Username:
            <input type="text" name="username" value ={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email: <input type="text" name="email" value ={this.state.email} onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Channel: <input type="text" name="channel" value ={this.state.channel} onChange={this.handleChange}/>
          </label>
          <br />
          <br />
          <input type="button" name="Submit" value="Submit" />
        </form>
      </div>
    );
  }
}
