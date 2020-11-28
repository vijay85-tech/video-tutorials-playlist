import React, { Component } from "react";

const myComtext = React.createContext();
const About = () => {
  const details={
    name:"Vijay Kumar Gautam",
    email:"vijay@gmail.com",
    address:"c101/626 Paryavaran Complex, Saket New Delhi"
  }
  return (
    <myComtext.Provider value={details}>
      <AboutService />
    </myComtext.Provider>
  );
};

const AboutService = () => {
  return (
    <>
      <AboutTechnology />
    </>
  );
};

const AboutTechnology = () => {
  return (
    <>
      <AboutCareer />
    </>
  );
};

class AboutCareer extends Component{
 static contextType  =myComtext;
  render(){
    return <p>`My Name is {this.context.name}. I'm living in {this.context.address}.
     For more details contact me on {this.context.email}`. </p>
  }
}

// const AboutCareer = () => {
//   return (
//     <myComtext.Consumer>
//       {
//         (data)=>{
//           return <h1>`My Name is {data.name}. I'm living in {data.address}. For more details contact me on <a href="#">{data.email}</a>`. </h1>
//         }
//       }
//     </myComtext.Consumer>
//   )
// };

export default About;
