import React, { useReducer } from "react";

const iState = "Vijay G";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.payload;
    default:
      return state;
  }
};

const MyUseReducer = () => {
  const [name, dispatch] = useReducer(reducer, iState);
  const [name2, dispatch2] = useReducer(reducer, iState);
  const getName = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        return dispatch({ type: "CHANGE_NAME", payload: user[0].name });
      });
  };

  return (
    <React.Fragment>
      <h1>UseReducer Hooks demo</h1>
      <h3>My Name is {name}</h3>
      <button
        onClick={() => {
          getName();
        }}
      >
        Change Name
      </button>
      <hr />
      <h5>My Name is {name2}</h5>
      <button onClick={()=>dispatch2({ type: "CHANGE_NAME", payload: "JAY" })} >ChangeName2</button>
    </React.Fragment>
  );
};

export default MyUseReducer;
