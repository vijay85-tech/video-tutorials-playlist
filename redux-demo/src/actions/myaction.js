import React, { Component } from 'react'
import React, { Component } from 'react'

export default class myaction extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}



// export const anotherAction = (name) => {
//   return {
//     type: "CHANGE_NAME",
//     payload: name,
//   };
// };

//Using only PROMISE
// export const anotherAction = (name) => {
//   return (dispatch) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((resp) => resp.json())
//       .then((res2) => {
//         dispatch({
//           type: "CHANGE_NAME",
//           payload: res2[0].name,
//         });
//       });
//   };
// };

//USING ASYNC and AAWIT fot fetch api
export const anotherAction = (name) => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res2 = await data.json();
    dispatch({
      type: "CHANGE_NAME",
      payload: res2[0].name,
    });
  };
};




