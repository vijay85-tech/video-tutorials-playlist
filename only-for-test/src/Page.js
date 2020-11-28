import React, { Component, Fragment } from "react";
import WarningBanner from "./WarningBanner";
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warn: true,
    };
  }
  handleClick = () => {
    this.setState({
      warn: !this.state.warn,
    });
  };

  render() {
    return (
      <Fragment>
        <h1 className="App-header">
          <u>My Web App</u>
        </h1>

        <WarningBanner warn={this.state.warn} />
        <button onClick={() => this.handleClick()}>
          {this.state.warn ? "Hide Warning" : "Show Warning"}
        </button>
      </Fragment>
    );
  }
}
