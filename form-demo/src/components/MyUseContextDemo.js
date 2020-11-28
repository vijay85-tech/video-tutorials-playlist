import React, { useContext } from "react";
const myRootCOntext = React.createContext();
const myChildCOntext = React.createContext();

const MyContextDemo5 = () => {
  const name = useContext(myRootCOntext);
  const age = useContext(myChildCOntext);
  return (
    <h1>
      Result BY Using "useContex" Hooks====
      <br />
      <p style={{ backgroundColor: "green" }}>
        My Name is {name} and i'm {age} years old.
      </p>
    </h1>
  );
};

const MyContextDemo4 = () => {
  return (
    <h1>
      {/* Hello Context API MyContextDemo4 */}
      <MyContextDemo5 />
    </h1>
  );
};

const MyContextDemo3 = () => {
  return (
    <h1>
      {/* Hello Context API MyContextDemo3 */}
      <myChildCOntext.Provider value={35}>
        <MyContextDemo4 />
      </myChildCOntext.Provider>
    </h1>
  );
};

const MyContextDemo2 = () => {
  return (
    <p>
      {/* <h5>Hello COntext APi - My context Demo2</h5> */}
      <MyContextDemo3 />
    </p>
  );
};

const MyContextDemo1 = () => {
  return (
    <h5>
      {/* Hello Context API-MyContextDemo1 */}
      <MyContextDemo2 />
    </h5>
  );
};

const MyUseContextDemo = () => {
  return (
    <myRootCOntext.Provider value={"V. K. Gautam"}>
      <h5>
        useContext Hooks are used in optimaization syntax of Nested Context API
        CONSUMER to get Provider value
        <MyContextDemo1 />
      </h5>
    </myRootCOntext.Provider>
  );
};

export default MyUseContextDemo;
