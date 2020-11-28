import React, {useState} from "react";
 function App(){
const [name, setName] = useState('Vijay');
const [roll, setRoll] = useState(1);
console.log(setName)
const handleClick=()=>{
  setName('Vijay kumar gautam');
  // console.log(roll+1)
  setRoll(roll+1);
}
return(
  <React.Fragment>
    <h1>hello {name}</h1>
    <h2>Roll: {roll}</h2>
    <button onClick={handleClick}>Change</button>
  </React.Fragment>
)

 }
  export default App;