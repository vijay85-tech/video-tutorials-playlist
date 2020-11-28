import React, { useContext, useReducer } from "react";

const iNiMyState = {
  name: "GAUTAM JI",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        name: action.payload,
      };
    default:
      return state;
  }
};

const myNewContext = React.createContext();

const MyTestCoder3 = () => {
    const getContxtData3 = useContext(myNewContext)
  return (
    <div>
      <h5>Hello My test Coder 3</h5>
      <h3 style={{ backgroundColor: "pink" }}>My name is {getContxtData3.name}</h3>
      <button onClick={()=>getContxtData3.changeName({type:"CHANGE_NAME", payload:"Lucky"})} >Change Name</button>
    </div>
  );
};

const MyTestCoder2 = () => {
    const getContxtData2 = useContext(myNewContext)
  return (
    <div>
      <h5>Hello My test Coder 2</h5>
      <h3 style={{ backgroundColor: "gray" }}>My name is {getContxtData2.name}</h3>
      <MyTestCoder3 />
    </div>
  );
};

const MyTestCoder1 = () => {
    const getContxtData = useContext(myNewContext)
    console.log(getContxtData,"=======================")
  return (
    <div>
      <h5>Hello My test Coder 1</h5>
      <h3 style={{ backgroundColor: "lightgreen" }}>My name is {getContxtData.name}</h3>
      <button onClick={()=>getContxtData.changeName({type:"CHANGE_NAME", payload:"JAI MATA DI"})} >Change Name</button>
      <MyTestCoder2 />
    </div>
  );
};

const GlobalSateMgmt = () => {
  const [myData, dispatch] = useReducer(reducer, iNiMyState);
  return (
    <myNewContext.Provider value={{name:myData.name, changeName:dispatch }}>
      <h5>Hello Global</h5>
      <MyTestCoder1 />
    </myNewContext.Provider>
  );
};

export default GlobalSateMgmt;
