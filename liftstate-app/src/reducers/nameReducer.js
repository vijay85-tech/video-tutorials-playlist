const nameReducer = (state = "", action) => {
  // if(action)
  console.log(action);
  if (action.type === "CHANGE_NAME") {
    console.log(action, "================");
    return action.payload;
  }

  return state;
};

export default nameReducer;
