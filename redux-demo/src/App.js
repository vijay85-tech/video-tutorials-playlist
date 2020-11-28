import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { anotherAction } from "./actions/myaction";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h2> Hello, {props.myname}</h2>
      <button
        onClick={() => {
          props.changeName("Vijay");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(anotherAction(name));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
