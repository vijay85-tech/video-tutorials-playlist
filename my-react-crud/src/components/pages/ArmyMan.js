import React, { Component } from "react";

const HocArmyMne = (Men) => {
  class HocArmymen extends Component {
    state = {
      gunshots: 0,
    };
    handleMouseHover = () => {
      this.setState({ gunshots: this.state.gunshots + 1 });
    };
    render() {
      return <Men hocShotsGuname="Ak47" hocgunShots={this.state.gunshots} hocHandleGunShots={this.handleMouseHover}/>;
    }
  }

  return HocArmymen;
};

export default HocArmyMne;
