import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { otherName ,addWish} from "./actions.js/myAction";
const App = (props) => {
  console.log(props);
  const wishes =props.myWish.map(item=>{
    return <h3 key={Math.random()}>{item}</h3>
  })
  return (
    <div className="app" style={{ textAlign: "center" }}>
      <header className="header">
        <h1>This is App</h1>
        <h1>My name is {props.myName}</h1>
        <button onClick={() => props.changeName()}>
          Change It
        </button>
        <button onClick={() => props.addWishes()}>
          AddWIsh
        </button>
        {wishes}
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myName: state.name,
    myWish:state.wish
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(otherName());
    },
    addWishes: () => {
      dispatch(addWish());
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
