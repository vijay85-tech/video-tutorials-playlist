export const handleInputActions = (input) => {
  return {
    type: "UPDATE_INPUT",
    payload: input,
  };
};

export const fetchWishesAction = () => {
  return (dispatch) => {
    fetch("/api/wishes")
      .then((res) => res.json())
      .then((wishes) => {
        dispatch({ type: "GET_WISHES", payload: wishes });
      });
  };
};

export const handleSubmitAction = (e) => {
  return (dispatch) => {
    e.preventDefault();
    var data = new URLSearchParams();
    for (const pair of new FormData(e.target)) {
      data.append(pair[0], pair[1]);
    }

    fetch("/api/sent", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((res2) => {
        dispatch({ type: "ADD_WISHES", payload: res2 });
      });
  };
};

export const handleDelteAction = (id) => {
  return (dispatch) => {
    fetch("/api/remove/" + id, {
      method: "delete",
    })
      .then((result) => result.json())
      .then((result2) => {
        dispatch({ type: "REMOVE_WISHES", payload: result2 });
      });
  };
};
