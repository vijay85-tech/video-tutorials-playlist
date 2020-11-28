const wishReducer = (state = [], action) => {
  if (action.type === "GET_WISH") {
    return  [...state, action.payload]
  }
  return state;
};

export default wishReducer;
