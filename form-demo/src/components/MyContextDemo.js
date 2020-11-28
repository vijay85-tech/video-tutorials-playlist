import React from "react";
const myRootCOntext = React.createContext();
const myChildCOntext = React.createContext();

const MyContextDemo5 = () => {
  return (
    <h1>
      Hello Context API
      <myRootCOntext.Consumer>
        {(rootData) => {
          return (
            <myChildCOntext.Consumer>
              {(childData) => {
                return (
                  <p style={{ backgroundColor: "green" }}>
                    My Name is {rootData} and i'm {childData} years old.
                  </p>
                );
              }}
            </myChildCOntext.Consumer>
          );
        }}
      </myRootCOntext.Consumer>
    </h1>
  );
};

const MyContextDemo4 = () => {
  return (
    <h1>
      Hello Context API MyContextDemo4
      <MyContextDemo5 />
    </h1>
  );
};

const MyContextDemo3 = () => {
  return (
    <h1>
      Hello Context API MyContextDemo3
      <myChildCOntext.Provider value={35}>
        <MyContextDemo4 />
      </myChildCOntext.Provider>
    </h1>
  );
};

const MyContextDemo2 = () => {
  return (
    <p>
      <h5>Hello COntext APi - My context Demo2</h5>
      <MyContextDemo3 />
    </p>
  );
};

const MyContextDemo1 = () => {
  return (
    <h5>
      Hello Context API-MyContextDemo1
      <MyContextDemo2 />
    </h5>
  );
};

const MyContextDemo = () => {
  return (
    <myRootCOntext.Provider value={"Gautam"}>
      <h1>
        Hello Context API
        <MyContextDemo1 />
      </h1>
    </myRootCOntext.Provider>
  );
};

export default MyContextDemo;
