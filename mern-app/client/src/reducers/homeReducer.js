const iState = {
  text: "",
  myWishes: [{ _id: 1, wish: "Loading..." }],
};

const homeReducer = (state = iState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        text: action.payload,
      };
    case "GET_WISHES":
      return {
        ...state,
        myWishes: action.payload,
      };
    case "ADD_WISHES": {
      return {
        ...state,
        text:'',
        myWishes: [...state.myWishes, action.payload],
      };
    }
    case "REMOVE_WISHES": {
      const myNewwishes = state.myWishes.filter((item) => {
        return item._id !== action.payload._id;
      });
      return {
        ...state,
        myWishes: myNewwishes,
      };
    }

    default:
      return state;
  }
};
export default homeReducer;
