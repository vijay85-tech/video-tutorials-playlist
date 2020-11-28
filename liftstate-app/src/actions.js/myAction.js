// export const otherName = (name)=>{
//     return{
//         type:"CHANGE_NAME",
//         payload:name
//     }
// }
export const otherName = () => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res2 = await data.json();
    dispatch({ type: "CHANGE_NAME", payload: res2[0].name });
  };
};

export const addWish =()=> {
  return { type: "GET_WISH", payload: "SLEEP" };
};
