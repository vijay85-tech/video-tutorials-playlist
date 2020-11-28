import React, { Component } from "react";
export default class YoutubeFrom extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Vijay", age: 35 },
        { name: "kumar", age: 12 },
        {
          name: "gautam",
          age: 30,
        },
      ],
    };
  }

  render() {
    const mydata = this.state.data.map((item,index,arr) => {
        console.log("index=============",index )
        console.log("check arra=============" , arr )
      return (
          <li key={Math.random()}>{item.name} and {item.age}</li>
      );
    });
    console.log(mydata);

    return (
      <h1>
        This is components
        <ul>{mydata}</ul>
      </h1>
    );
  }
}
